from django.urls import path
from .views import ServiceListAPI, ServiceDetailAPI

urlpatterns = [
    path('', ServiceListAPI.as_view(), name='service-list'),
    path('<slug:slug>/', ServiceDetailAPI.as_view(), name='service-detail'),
]