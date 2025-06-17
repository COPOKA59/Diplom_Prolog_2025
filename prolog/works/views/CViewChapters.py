from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from works.serializers import *
from works.services import ChaptersService

class ChaptersViewSet(ModelViewSet):
    def get_queryset(self):
        return ChaptersService.list_chapters_for_work(
            work_id=self.kwargs['work_pk'],
            user=self.request.user
        )

    def perform_create(self, serializer):
        work_id = self.kwargs['work_pk']
        ChaptersService.create_chapter_for_work(work_id, serializer)

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ChapterDetailSerializer
        return ChaptersSerializer

    def retrieve(self, request, *args, **kwargs):
        chapter_id = kwargs['pk']
        instance = ChaptersService.retrieve_chapter(chapter_id, request.user)

        nav = ChaptersService.get_chapter_navigation_context(instance)
        serializer = self.get_serializer(instance, context=nav)

        return Response(serializer.data)