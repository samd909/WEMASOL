from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    heatingConsumption = serializers.IntegerField(required=False, allow_null=True)

    class Meta:
        model = Lead
        fields = "__all__"

    def to_internal_value(self, data):
        data = data.copy()

        # If it's a list (from getlist), join it with commas
        # If it's a single string, leave it alone
        # This fixes the "Not a valid string" error immediately
        if "extraOptions" in data:
            if hasattr(data, "getlist"):
                val = data.getlist("extraOptions")
                # If there are multiple items, join them. If one, take the first.
                data["extraOptions"] = ", ".join(val) if isinstance(val, list) else val

        return super().to_internal_value(data)