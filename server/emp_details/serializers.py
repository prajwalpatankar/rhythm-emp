from rest_framework import serializers 
from .models import Employee
 
 
class EmployeeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Employee
        fields = ('employee_id',
                  'employee_name',
                  'dob',
                  'date_of_joining',
                  'mobile',
                  'email_id',
                  'department',
                  'designation',
                  'location')


