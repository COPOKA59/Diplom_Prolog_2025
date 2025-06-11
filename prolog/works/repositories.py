from .models import *

def get_all_works():
    return Works.objects.all().select_related(
        'size', 'orientation', 'rating', 'type', 'status'
    ).prefetch_related(
        'genres', 'fandom', 'questions'
    )

def get_work_by_id(work_id):
    return Works.objects.select_related(
        'size', 'orientation', 'rating', 'type', 'status'
    ).prefetch_related(
        'genres', 'fandom', 'questions'
    ).filter(id=work_id).first()

def get_questions_by_work(work_pk):
    return WorksQuestions.objects.filter(work_id=work_pk)

def get_previous_chapter(chapter):
    return Chapters.objects.filter(
        work=chapter.work,
        order__lt=chapter.order
    ).order_by('-order').first()

def get_next_chapter(chapter):
    return Chapters.objects.filter(
        work=chapter.work,
        order__gt=chapter.order
    ).order_by('order').first()