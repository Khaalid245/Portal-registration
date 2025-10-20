from rest_framework import serializers
from django.contrib.auth.models import User
from .models import StudentApplication

# ----------------------------
# User Serializer
# ----------------------------
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# ----------------------------
# Student Application Serializer
# ----------------------------
class StudentApplicationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # matches model field name

    class Meta:
        model = StudentApplication
        fields = '__all__'
        read_only_fields = ['user', 'status', 'created_at', 'updated_at']

    def create(self, validated_data):
        user = self.context['request'].user
        if StudentApplication.objects.filter(user=user).exists():
            raise serializers.ValidationError("You have already submitted an application.")
        validated_data['user'] = user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if instance.status != 'Pending':
            raise serializers.ValidationError("You cannot update your application after it’s reviewed.")
        return super().update(instance, validated_data)

# ----------------------------
# Admin Application Serializer
# ----------------------------
class AdminApplicationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = StudentApplication
        fields = ['id', 'user', 'first_name', 'last_name', 'course', 'gpa', 'status', 'created_at']
        read_only_fields = ['user', 'first_name', 'last_name', 'course', 'gpa', 'created_at']
