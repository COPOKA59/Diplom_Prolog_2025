from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from works.permissions import IsAuthorOrReadOnlyPublished
from works.serializers import WorksSerializer, WorksQuestionsSerializer
from works.services import WorksServices, WorksUsersServices, WorksQuestionsServices

class WorksViewSet(ModelViewSet):
    serializer_class = WorksSerializer
    permission_classes = [IsAuthorOrReadOnlyPublished]
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']

    def get_queryset(self):
        return WorksServices.list_works_publish()

    def get_object(self):
        work_id = self.kwargs.get('pk')
        return WorksServices.retrieve_work(work_id, self.request.user)

    def perform_create(self, serializer):
        work = serializer.save()
        WorksUsersServices.first_author(user=self.request.user, work=work)

    def retrieve(self, request, *args, **kwargs):
        work_id = self.kwargs.get('pk')
        work = WorksServices.retrieve_work(work_id, request.user)
        serializer = self.get_serializer(work)
        return Response(serializer.data)

class UserWorksViewSet(ModelViewSet):
    serializer_class = WorksSerializer
    http_method_names = ['get']

    def get_queryset(self):
        user_id = self.kwargs.get('users_pk')
        return WorksServices.get_works_by_user(self.request.user, user_id)

class WorksQuestionsViewSet(ModelViewSet):
    serializer_class = WorksQuestionsSerializer

    def get_queryset(self):
        work_pk = self.kwargs.get('work_pk')
        return WorksQuestionsServices.list_questions(work_pk)