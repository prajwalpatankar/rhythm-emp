from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import EmployeeSerializer
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpRequest
from .models import Employee
from rest_framework.response import Response

# Create your views here.
# def list_employee_details(request):
#     context = {"employee_details" : Employee.objects.all()}
#     return render(request,'emp_details/employee_details.html', context)

# def insert_employee_details(request):   #(request:HttpRequest):
#     # emp = Employee(content = request.POST["emp_id"]) #[content] is the name in form(html)
#     # Employee.save()
#     f1 = request.POST['emp-id']
#     f2 = request.POST['emp-name']
#     f3 = request.POST['dob']
#     f4 = request.POST['date']
#     f5 = request.POST['mobile']
#     f6 = request.POST['email']
#     f7 = request.POST['dept']
#     f8 = request.POST['desig']
#     f9 = request.POST['location']
#     temp = Employee.objects.create(employee_id=f1, employee_name=f2, dob=f3, date_of_joining=f4, mobile=f5, email_id=f6, department=f7, designation=f8, location=f9)
#     temp.save()
#     return redirect('/employees/list/')

# def delete_employee_details(request,emp_id):
#     emp_to_delete = Employee.objects.get(id=emp_id)
#     emp_to_delete.delete()
#     return redirect('/employees/list/')



class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all().order_by('employee_id')
    serializer_class = EmployeeSerializer
