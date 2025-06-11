from .models import Chapters

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