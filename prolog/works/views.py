from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serializers import *

class WorksViewSet(ModelViewSet):
    serializer_class = WorksSerializer

    def get_queryset(self):
        return list_works()

    def retrieve(self, request, *args, **kwargs):
        work_id = self.kwargs.get('pk')
        work = retrieve_work(work_id)
        serializer = self.get_serializer(work)
        return Response(serializer.data)

class WorksQuestionsViewSet(ModelViewSet):
    serializer_class = WorksQuestionsSerializer

    def get_queryset(self):
        work_pk = self.kwargs.get('work_pk')
        return list_questions(work_pk)

class ChaptersViewSet(ModelViewSet):
    queryset = Chapters.objects.all()

    def get_queryset(self):
        return Chapters.objects.filter(work_id=self.kwargs['work_pk'])

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ChapterDetailSerializer
        return ChaptersSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        nav = get_chapter_navigation_context(instance)
        serializer = self.get_serializer(instance, context=nav)

        return Response(serializer.data)