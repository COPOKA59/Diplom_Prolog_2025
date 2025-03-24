from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse
from .models import Works
from .serializers import WorksSerializer


# Тестовый просмотр по маршруту.
def works(request):
    works = Works.objects.all()
    return HttpResponse("<h4>Проверка работы!!!</h4>")

# Представление произведений
class WorksAPIView(generics.ListAPIView):
    queryset = Works.objects.all()
    serializer_class = WorksSerializer

