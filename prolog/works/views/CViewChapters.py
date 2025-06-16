from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from works.serializers import *
from works.services import *

class ChaptersViewSet(ModelViewSet):
    def get_queryset(self):
        return list_chapters_for_work(self.kwargs['work_pk'])

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ChapterDetailSerializer
        return ChaptersSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()

        nav = get_chapter_navigation_context(instance)
        serializer = self.get_serializer(instance, context=nav)

        return Response(serializer.data)