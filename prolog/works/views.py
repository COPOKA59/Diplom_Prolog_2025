from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .services import *
from .models import *
from .serializers import *


# Тестовый просмотр по маршруту.
def works(request):
    works = Works.objects.all()
    return HttpResponse("<h4>Проверка работы!!!</h4><br><h5>Всё работает! Перейдите по http://127.0.0.1:8000/api/v1/works/</h5>")

class WorksViewSet(ModelViewSet):
    queryset = Works.objects.all().select_related(
        'size', 'orientation', 'rating', 'type', 'status'
    ).prefetch_related(
        'genres', 'fandom', 'questions'
    )
    serializer_class = WorksSerializer

class WorksQuestionsViewSet(ModelViewSet):
    queryset = WorksQuestions.objects.all()
    serializer_class = WorksQuestionsSerializer

    def get_queryset(self):
        return WorksQuestions.objects.filter(work_id=self.kwargs['work_pk'])


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