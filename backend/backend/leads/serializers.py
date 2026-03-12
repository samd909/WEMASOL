from rest_framework import serializers
from .models import Lead
import json


class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = "__all__"

    def to_internal_value(self, data):
        data = data.copy()

        extra = data.get("extraOptions")

        if extra:
            try:
                # case 1: valid JSON string
                parsed = json.loads(extra)
                if isinstance(parsed, list):
                    data["extraOptions"] = parsed
                else:
                    data["extraOptions"] = [parsed]

            except Exception:
                # case 2: comma separated string
                data["extraOptions"] = [x.strip() for x in extra.split(",") if x.strip()]

        else:
            data["extraOptions"] = []

        return super().to_internal_value(data)