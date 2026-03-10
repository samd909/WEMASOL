from rest_framework import serializers
from .models import Lead
import json


class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = "__all__"

    def to_internal_value(self, data):

        extra = data.get("extraOptions")

        if isinstance(extra, str):
            try:
                data["extraOptions"] = json.loads(extra)
            except Exception:
                data["extraOptions"] = []

        return super().to_internal_value(data)