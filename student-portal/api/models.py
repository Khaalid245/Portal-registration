from django.db import models
from django.contrib.auth.models import User

class StudentApplication(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='application')

    # Personal info
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=20)
    national_id = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.CharField(max_length=255)

    # Academic info
    previous_school = models.CharField(max_length=255)
    previous_grade = models.CharField(max_length=100)
    gpa = models.DecimalField(max_digits=4, decimal_places=2)
    course = models.CharField(max_length=255)

    # Document uploads
    certificate = models.FileField(upload_to='documents/certificates/')
    transcript = models.FileField(upload_to='documents/transcripts/', null=True, blank=True)
    passport_photo = models.FileField(upload_to='documents/passports/')
    recommendation_letter = models.FileField(upload_to='documents/recommendations/')

    # Admin review
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.course} ({self.status})"
