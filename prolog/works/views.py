from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


# Тестовый просмотр по маршруту.
def works(request):
    works = Works.objects.all()
    return HttpResponse("<h4>Проверка работы!!!</h4><br><h5>Всё работает! Перейдите по http://127.0.0.1:8000/api/v1/works/</h5>")

class WorksViewSet(ModelViewSet):
    queryset = Works.objects.all()
    serializer_class = WorksSerializer

class WorksQuestionsViewSet(ModelViewSet):
    queryset = WorksQuestions.objects.all()
    serializer_class = WorksQuestionsSerializer

    def get_queryset(self):
        return WorksQuestions.objects.filter(work_id=self.kwargs['work_pk'])

class ChaptersViewSet(ModelViewSet):
    queryset = Chapters.objects.all()
    serializer_class = ChaptersSerializer

    def get_queryset(self):
        return Chapters.objects.filter(work_id=self.kwargs['work_pk'])