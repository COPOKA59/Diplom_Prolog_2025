from django.urls import path, include
from rest_framework import routers

from works.views import *

router = routers.SimpleRouter()
router.register(r'works', WorksViewSet)
router.register(r'size', SizeViewSet)
router.register(r'orientation', OrientationViewSet)
router.register(r'genres', GenresViewSet)
router.register(r'questions', QuestionsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]