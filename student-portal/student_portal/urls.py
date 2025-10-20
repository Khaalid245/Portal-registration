"""
URL configuration for student_portal project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RegisterView,
    LoginView,
    StudentApplicationViewSet,
    AdminApplicationViewSet
)

# ------------------------------------------------------
# Router for ViewSets (Student & Admin Applications)
# ------------------------------------------------------
router = DefaultRouter()
router.register(r'applications', StudentApplicationViewSet, basename='student-applications')
router.register(r'admin/applications', AdminApplicationViewSet, basename='admin-applications')

# ------------------------------------------------------
# URL Patterns
# ------------------------------------------------------
urlpatterns = [
    # -------------------------
    # Authentication URLs
    # -------------------------
    path('api/auth/register/', RegisterView.as_view(), name='register'),
    path('api/auth/login/', LoginView.as_view(), name='login'),

    # -------------------------
    # Application URLs (Student + Admin)
    # -------------------------
    path('api/', include(router.urls)),
]
