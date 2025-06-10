from django.contrib.auth import get_user_model
from rest_framework.viewsets import ModelViewSet
from .serializers import *

Users = get_user_model()

class UsersViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer