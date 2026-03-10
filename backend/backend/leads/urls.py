from django.urls import path
from .views import LeadCreateView

urlpatterns = [
    path("create/", LeadCreateView.as_view(), name="create-lead"),
]