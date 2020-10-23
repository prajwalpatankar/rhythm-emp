from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from emp_details import views

router = routers.DefaultRouter()
router.register('employees', views.EmployeeViewSet)

urlpatterns = [ 
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]






# urlpatterns = [
#     path('admin/', admin.site.urls),
    
#     path('employees/', include('emp_details.urls')),
#     # path('', include('emp_details.urls')),
# ]
