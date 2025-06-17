from works.models import *

class ChaptersRepository:
    @staticmethod
    def get_chapters_by_work(work_id, user):
        work = Works.objects.prefetch_related('authors').filter(id=work_id).first()
        if not work:
            return Chapters.objects.none()

        if work.publish or user in work.authors.all():
            return Chapters.objects.filter(work=work).order_by('order')
        else:
            return Chapters.objects.filter(work=work, publish=True).order_by('order')

    @staticmethod
    def get_chapter_by_id(chapter_id):
        return (Chapters.objects
            .select_related('work')  # work — ForeignKey
            .prefetch_related('work__authors')  # authors — ManyToMany
            .filter(id=chapter_id)
            .first()
        )

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