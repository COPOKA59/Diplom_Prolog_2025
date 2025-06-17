from rest_framework import serializers
from django.contrib.auth import get_user_model
from works.models import Authors, Readers

User = get_user_model()

class AuthorSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Authors
        fields = '__all__'
        read_only_fields = ('work',)

class ReaderSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Readers
        fields = '__all__'