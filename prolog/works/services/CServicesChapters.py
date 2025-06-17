from works.repositories import ChaptersRepository
from works.repositories import WorksRepository
from rest_framework.exceptions import ValidationError, PermissionDenied

class ChaptersService:
    @staticmethod
    def list_chapters_for_work(work_id, user):
        return ChaptersRepository.get_chapters_by_work(work_id, user)

    @staticmethod
    def create_chapter_for_work(work_id, serializer):
        work = WorksRepository.get_work_by_id(work_id)
        return serializer.save(work=work)

    @staticmethod
    def retrieve_chapter(chapter_id, user):
        chapter = ChaptersRepository.get_chapter_by_id(chapter_id)

        if not chapter:
            raise ValidationError("Глава не найдена")

        work = WorksRepository.get_work_by_id(chapter.work_id)

        if not chapter.publish and user not in work.authors.all():
            raise PermissionDenied("Вы не можете просматривать эту главу")

        return chapter

    @staticmethod
    def get_chapter_navigation_context(chapter):
        prev_ch = ChaptersRepository.get_previous_chapter(chapter)
        next_ch = ChaptersRepository.get_next_chapter(chapter)

        return {
            "previous_id": prev_ch.id if prev_ch else None,
            "next_id": next_ch.id if next_ch else None
        }