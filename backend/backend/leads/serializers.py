from rest_framework import serializers
from .models import Lead


class LeadSerializer(serializers.ModelSerializer):

    heatingConsumption = serializers.IntegerField(required=False, allow_null=True)

    class Meta:
        model = Lead
        fields = "__all__"

    def to_internal_value(self, data):
        data = data.copy()

        if hasattr(data, "getlist"):
            data["extraOptions"] = data.getlist("extraOptions")

        return super().to_internal_value(data)