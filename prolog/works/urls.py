from django.urls import path, include
# from rest_framework import routers
from rest_framework_nested import routers
from works.views import *

router = routers.SimpleRouter()
router.register(r'', WorksViewSet)

nested_router = routers.NestedSimpleRouter(router, r'', lookup='work')
nested_router.register(r'chapters', ChaptersViewSet)
nested_router.register(r'questions', WorksQuestionsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include(nested_router.urls)),
]