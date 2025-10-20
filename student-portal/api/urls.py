from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, LoginView, StudentApplicationViewSet, AdminApplicationViewSet

router = DefaultRouter()
router.register(r'student/applications', StudentApplicationViewSet, basename='student-applications')
router.register(r'admin/applications', AdminApplicationViewSet, basename='admin-applications')

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('', include(router.urls)),
]
