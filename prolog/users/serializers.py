from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from .services import register_user

Users = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=Users.objects.all())]
    )
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Users
        fields = ['id', 'username', 'password', 'email', 'description']

    def create(self, validated_data):
        return register_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            description=validated_data.get('description', '')
        )