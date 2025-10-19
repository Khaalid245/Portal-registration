from django.contrib import admin

# Register your models here.
from .models import StudentApplication

@admin.register(StudentApplication)
class StudentApplicationAdmin(admin.ModelAdmin):
    list_display =('full_name', 'email', 'course', 'status','created_at')
    list_filter= ('status', 'course')
    search_fields = ('full_name', 'email')
