from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from works.permissions import *
from works.serializers import WorksSerializer, WorksQuestionsSerializer
from works.services import WorksServices, WorksUsersServices, WorksQuestionsServices

class WorksViewSet(ModelViewSet):
    serializer_class = WorksSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['get', 'put', 'patch', 'delete']

    def get_queryset(self):
        return WorksServices.list_works()

    def perform_create(self, serializer):
        work = serializer.save()
        WorksUsersServices.attach_author(user=self.request.user, work_id=work, role='author')

    def retrieve(self, request, *args, **kwargs):
        work_id = self.kwargs.get('pk')
        work = WorksServices.retrieve_work(work_id)
        serializer = self.get_serializer(work)
        return Response(serializer.data)

class WorksQuestionsViewSet(ModelViewSet):
    serializer_class = WorksQuestionsSerializer

    def get_queryset(self):
        work_pk = self.kwargs.get('work_pk')
        return WorksQuestionsServices.list_questions(work_pk)