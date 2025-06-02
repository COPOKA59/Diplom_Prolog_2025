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

class SizeViewSet(ModelViewSet):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class OrientationViewSet(ModelViewSet):
    queryset = Orientation.objects.all()
    serializer_class = OrientationSerializer

class GenresViewSet(ModelViewSet):
    queryset = Genres.objects.all()
    serializer_class = GenresSerializer

class QuestionsViewSet(ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer
