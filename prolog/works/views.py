from django.shortcuts import render
from django.http import HttpResponse
from .models import Works

# Create your views here.
def works(request):
    works = Works.objects.all()
    return HttpResponse("<h4>Проверка работы!!!</h4>")

