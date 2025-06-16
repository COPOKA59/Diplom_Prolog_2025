from rest_framework.viewsets import ModelViewSet
from works.serializers import AuthorSerializer, ReaderSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from works.permissions import *
from works.services import WorksUsersServices
from works.models import *

class AuthorViewSet(ModelViewSet):
    serializer_class = AuthorSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAuthenticated(), IsAuthorOfWorkOrReadOnly()]
        return [AllowAny()]

    def get_queryset(self):
        work_id = self.kwargs.get("work_pk")
        return WorksUsersServices.list_work_authors(work_id)

    def perform_create(self, serializer):
        work_id = self.kwargs.get("work_pk")
        user_to_add = serializer.validated_data.get('user')
        role = serializer.validated_data.get('role', 'coauthor')

        new_author = WorksUsersServices.attach_author(self.request.user, user_to_add, work_id, role)

        serializer.instance = new_author
        return serializer.save()

# 
class ReaderViewSet(ModelViewSet):
    serializer_class = ReaderSerializer
    permission_classes = [IsAuthenticated(), IsAuthorOfWorkOrReadOnly()]

    def get_queryset(self):
        return Readers.objects.filter(user=self.request.user)