from rest_framework import serializers
from .models import *


class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContaModel
        fields = list(ContaModel.__dict__)[5:-2]
