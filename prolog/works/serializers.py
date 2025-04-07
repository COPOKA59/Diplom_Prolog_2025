from rest_framework import serializers
from works.models import Works


class WorksSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=250)
    date_of_creation = serializers.DateTimeField(read_only=True)
    date_of_editing = serializers.DateTimeField(read_only=True)
    translation = serializers.BooleanField(default=False)

    def create(self, validated_data):
        return Works.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.date_of_editing = validated_data.get('date_of_editing', instance.date_of_editing)
        instance.translation = validated_data.get('translation', instance.translation)
        instance.save()
        return instance

    # class Meta:
    #     model = Works
    #     fields = '__all__'