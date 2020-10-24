from django.db import models

# Create your models here.
class Employee(models.Model):
    employee_id = models.IntegerField(primary_key=True)    
    employee_name = models.CharField(max_length=50) #name changed, change elsewhere too
    dob = models.DateField()
    date_of_joining = models.DateField()
    mobile = models.CharField(max_length=10)
    email_id = models.EmailField(max_length=100)
    department = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
