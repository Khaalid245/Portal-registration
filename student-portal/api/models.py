from django.db import models
from django.contrib.auth.models import User

class StudentApplication(models.Model):
    GENDER_CHOICES = [('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')]
    STATUS_CHOICES = [('Pending', 'Pending'), ('Approved', 'Approved'), ('Rejected', 'Rejected')]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='application')

    # 🧍 Personal Info
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    national_id_or_passport = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.TextField()

    # 🎓 Academic Info
    previous_school = models.CharField(max_length=255)
    previous_grade = models.CharField(max_length=50)
    average_marks_or_gpa = models.FloatField()

    # 📘 Program Info
    course = models.CharField(max_length=255)  # program/course to apply for
    reason = models.TextField(blank=True)

    # 📂 Documents Upload
    certificate = models.FileField(upload_to='documents/certificates/')
    transcript = models.FileField(upload_to='documents/transcripts/')
    passport_or_id_file = models.FileField(upload_to='documents/passports/')
    recommendation_letter = models.FileField(upload_to='documents/recommendations/')
    passport_photo = models.ImageField(upload_to='documents/passport_photos/')

    # Application status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.course} ({self.status})"
