from works.models import *

class WorksRepository:
    @staticmethod
    def get_all_works():
        return Works.objects.all().select_related(
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
        ).filter(id=work_id).first()

class WorksQuestionsRepository:
    @staticmethod
    def get_questions_by_work(work_pk):
        return WorksQuestions.objects.filter(work_id=work_pk)
