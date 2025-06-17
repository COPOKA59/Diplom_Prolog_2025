from django.urls import path, include
from rest_framework_nested import routers
from works.views import *

router = routers.SimpleRouter()
router.register(r'', WorksViewSet, basename='works')

nested_router = routers.NestedSimpleRouter(router, r'', lookup='work')
nested_router.register(r'chapters', ChaptersViewSet, basename='chapters')
nested_router.register(r'questions', WorksQuestionsViewSet, basename='questions')
nested_router.register(r'authors', AuthorViewSet, basename='authors_works')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(nested_router.urls)),
]