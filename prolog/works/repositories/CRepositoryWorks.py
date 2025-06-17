from works.models import *

class WorksRepository:
    @staticmethod
    def get_all_works_publish():
        return Works.objects.filter(publish=True).select_related(
            'size', 'orientation', 'rating', 'type', 'status'
        ).prefetch_related(
            'genres', 'fandom', 'questions'
        )

    @staticmethod
    def get_work_by_id(work_id):
        return Works.objects.select_related(
            'size', 'orientation', 'rating', 'type', 'status'
        ).prefetch_related(
            'genres', 'fandom', 'questions'
        ).get(id=work_id)

    @staticmethod
    def get_user_works(user_id):
        return Works.objects.filter(authors__id=user_id).select_related(
            'size', 'orientation', 'rating', 'type', 'status'
        ).prefetch_related('genres', 'fandom', 'questions')

    @staticmethod
    def get_user_works_published(user_id):
        return Works.objects.filter(authors__id=user_id, publish=True).select_related(
            'size', 'orientation', 'rating', 'type', 'status'
        ).prefetch_related('genres', 'fandom', 'questions')

class WorksQuestionsRepository:
    @staticmethod
    def get_questions_by_work(work_pk):
        return WorksQuestions.objects.filter(work_id=work_pk)
