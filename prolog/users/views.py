from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .permissions import IsSelf
from .serializers import *
from .services import *

User = get_user_model()

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Пользователь зарегистрирован"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MeViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsSelf]
    http_method_names = ['get', 'put', 'patch', 'delete']

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

    def get_object(self):
        return current_user(self.request.user)

class UsersViewSet(ModelViewSet):
    serializer_class = UserSerializer
    http_method_names = ['get']
    permission_classes = [AllowAny]

    def get_queryset(self):
        return list_users()

    def get_object(self):
        user_id = self.kwargs["pk"]
        user = current_user(user_id)
        self.check_object_permissions(self.request, user)
        return user