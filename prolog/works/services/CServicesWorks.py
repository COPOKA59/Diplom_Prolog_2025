from works.repositories import WorksRepository, WorksQuestionsRepository
from rest_framework.exceptions import ValidationError, PermissionDenied

class WorksServices:
    @staticmethod
    def list_works_publish():
        return WorksRepository.get_all_works_publish()

    @staticmethod
    def retrieve_work(work_id, user):
        work = WorksRepository.get_work_by_id(work_id)
        if not work:
            raise ValidationError('Произведение не найдено')

        if not work.publish and user not in work.authors.all():
            raise PermissionDenied('Вы не можете просматривать неопубликованное произведение.')

        return work

    @staticmethod
    def get_works_by_user(request_user, target_user_id):
        if request_user.id == int(target_user_id):
            return WorksRepository.get_user_works(target_user_id)
        return WorksRepository.get_user_works_published(target_user_id)

    @staticmethod
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

class WorksQuestionsServices:
    @staticmethod
    def list_questions(work_pk):
        return WorksQuestionsRepository.get_questions_by_work(work_pk)
