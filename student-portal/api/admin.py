from django.contrib import admin
from .models import StudentApplication

@admin.register(StudentApplication)
class StudentApplicationAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'course', 'status', 'created_at')
    list_filter = ('status', 'course')
    search_fields = ('first_name', 'last_name', 'email')
