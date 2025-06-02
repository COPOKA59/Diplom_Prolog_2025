from rest_framework import serializers
from works.models import *


class WorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Works
        fields = '__all__'

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class OrientationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orientation
        fields = '__all__'