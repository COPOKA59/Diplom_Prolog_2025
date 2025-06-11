from .repositories import *
from rest_framework.exceptions import ValidationError

def list_works():
    return get_all_works()

def retrieve_work(work_id):
    work = get_work_by_id(work_id)
    if not work:
        raise ValidationError('Произведение не найдено')
    return work

def validate_work_data(data):
    work_type = data.get('type')
    work_fandom = data.get('fandom')
    work_translation = data.get('translation')
    work_author_original = data.get('author_original')

    if work_type and work_type.name == 'Фандом' and (not work_fandom or len(work_fandom) == 0):
        raise ValidationError({
            'fandom': 'Работа должна быть связана хотя бы с одним фандомом.'
        })
    elif work_type and work_type.name == 'Оригинальная работа':
        data['fandom'] = []

    if work_translation is True and (not work_author_original or len(work_author_original) == 0):
        raise ValidationError({
            'translation': 'В работе должен указываться автор оригинала.'
        })
    elif work_translation is False:
        data['author_original'] = ''
        data['original'] = ''
    return data

def list_questions(work_pk):
    return get_questions_by_work(work_pk)

def get_chapter_navigation_context(chapter):
    prev_ch = get_previous_chapter(chapter)
    next_ch = get_next_chapter(chapter)

    return {
        "previous_id": prev_ch.id if prev_ch else None,
        "next_id": next_ch.id if next_ch else None
    }