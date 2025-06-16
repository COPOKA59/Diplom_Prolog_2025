from works.repositories import WorksUsersRepository
from rest_framework.exceptions import PermissionDenied, ValidationError

class WorksUsersServices:
    @staticmethod
    def list_work_authors(work_id):
        return WorksUsersRepository.get_authors_by_work(work_id)

    @staticmethod
    def check_author_permission(user, work_id):
        if not WorksUsersRepository.is_user_author_of_work(user, work_id):
            raise PermissionDenied("Вы не являетесь автором этого произведения и не можете добавлять соавторов.")

    @staticmethod
    def attach_author(request_user, user_to_add, work_id, role):
        WorksUsersServices.check_author_permission(request_user, work_id)

        if not user_to_add:
            raise ValidationError("Не указан пользователь для добавления.")

        if WorksUsersRepository.is_user_author_of_work(user_to_add, work_id):
            raise ValidationError("Этот пользователь уже является автором этого произведения.")

        return WorksUsersRepository.post_author(user_to_add, work_id, role)

#
    @staticmethod
    def list_authors_works(user):
        return WorksUsersRepository.get_works_by_author(user)

    @staticmethod
    def list_readed_works(user):
        return WorksUsersRepository.get_works_by_reader(user)

    # @staticmethod
    # def attach_author(user, work, role='soauthor'):
    #     existing = WorksUsersRepository.get_author_entry(user, work)
    #     if not existing:
    #         return WorksUsersRepository.post_author(user, work, role)
    #     return existing

    @staticmethod
    def attach_reader(user, work, marks=None, readed=False):
        existing = WorksUsersRepository.get_reader_entry(user, work)
        if not existing:
            return WorksUsersRepository.post_reader(user, work, marks, readed)
        return existing