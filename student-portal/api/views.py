from django.contrib.auth.models import User
from rest_framework import generics, viewsets, permissions, status, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import action
from .models import StudentApplication
from .serializers import StudentApplicationSerializer, AdminApplicationSerializer


# ==============================
# 🧱 AUTHENTICATION VIEWS
# ==============================

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"error": "Invalid username or password."}, status=400)

        if not user.check_password(password):
            return Response({"error": "Invalid username or password."}, status=400)

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "username": user.username,
            "email": user.email,
        })


# ==============================
# 🧾 STUDENT APPLICATION VIEWS
# ==============================

class StudentApplicationViewSet(viewsets.ModelViewSet):
    """
    Students can create and view their own applications.
    Each student can only have one application.
    """
    serializer_class = StudentApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Show only logged-in student's applications
        return StudentApplication.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        user = self.request.user
        if StudentApplication.objects.filter(user=user).exists():
            raise serializers.ValidationError("You have already submitted an application.")
        serializer.save(user=user)

    def perform_update(self, serializer):
        instance = self.get_object()
        if instance.status != 'Pending':
            raise serializers.ValidationError("You cannot update your application after it’s reviewed.")
        serializer.save()

    def destroy(self, request, *args, **kwargs):
        return Response({"detail": "Deletion not allowed."}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


# ==============================
# 🧾 ADMIN APPLICATION VIEWS
# ==============================

class AdminApplicationViewSet(viewsets.ModelViewSet):
    """
    Admin can view all student applications and update their status.
    """
    queryset = StudentApplication.objects.all()
    serializer_class = AdminApplicationSerializer
    permission_classes = [permissions.IsAdminUser]

    @action(detail=True, methods=['patch'])
    def review(self, request, pk=None):
        """
        PATCH /api/admin/applications/<id>/review/
        {
            "status": "Approved" or "Rejected"
        }
        """
        application = self.get_object()
        status_choice = request.data.get("status")

        if status_choice not in ['Approved', 'Rejected']:
            return Response(
                {"detail": "Invalid status. Must be 'Approved' or 'Rejected'."},
                status=status.HTTP_400_BAD_REQUEST
            )

        application.status = status_choice
        application.save()
        serializer = self.get_serializer(application)
        return Response(serializer.data)
