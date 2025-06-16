from works.models import *

class ChaptersRepository:
    @staticmethod
    def get_chapters_by_work(work_id):
        return Chapters.objects.filter(work_id=work_id)

    @staticmethod
    def get_previous_chapter(chapter):
        return Chapters.objects.filter(
            work=chapter.work,
            order__lt=chapter.order
        ).order_by('-order').first()

    @staticmethod
    def get_next_chapter(chapter):
        return Chapters.objects.filter(
            work=chapter.work,
            order__gt=chapter.order
        ).order_by('order').first()