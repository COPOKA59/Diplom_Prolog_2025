from django.urls import path, include
from rest_framework import routers

from works.views import *

router = routers.SimpleRouter()
router.register(r'', WorksViewSet)
router.register(r'questions', WorksQuestionsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]