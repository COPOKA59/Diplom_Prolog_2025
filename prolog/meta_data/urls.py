from django.urls import path, include
from rest_framework import routers

from meta_data.views import *

router = routers.SimpleRouter()
router.register(r'size', SizeViewSet)
router.register(r'orientation', OrientationViewSet)
router.register(r'genres', GenresViewSet)
router.register(r'questions', QuestionsViewSet)
router.register(r'rating', RatingViewSet)
router.register(r'fandom', FandomViewSet)
router.register(r'type', TypeViewSet)
router.register(r'status', StatusViewSet)

urlpatterns = [
    path('', include(router.urls)),
]