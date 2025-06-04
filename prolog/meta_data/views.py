from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *

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

class RatingViewSet(ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

class FandomViewSet(ModelViewSet):
    queryset = Fandom.objects.all()
    serializer_class = FandomSerializer

class TypeViewSet(ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class StatusViewSet(ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer