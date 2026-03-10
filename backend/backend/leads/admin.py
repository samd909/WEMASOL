from django.contrib import admin
from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "firstName",
        "lastName",
        "email",
        "phone",
        "created_at",
    )

    search_fields = (
        "firstName",
        "lastName",
        "email",
    )

    list_filter = ("created_at",)

    ordering = ("-created_at",)