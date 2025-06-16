from works.models import Authors, Readers, Works

class WorksUsersRepository:
    @staticmethod
    def get_authors_by_work(work_id):
        return Authors.objects.filter(work_id=work_id)

    @staticmethod
    def is_user_author_of_work(user, work_id):
        return Authors.objects.filter(user=user, work_id=work_id).exists()

    @staticmethod
    def post_author(user, work_id, role):
        work = Works.objects.get(pk=work_id)
        return Authors.objects.create(user=user, work=work, role=role)

    @staticmethod
    def post_first_author(user, work, role='author'):
        return Authors.objects.create(user=user, work=work, role=role)

#

    @staticmethod
    def get_works_by_author(user):
        return Works.objects.filter(works_authors__user=user)

    @staticmethod
    def get_works_by_reader(user):
        return Works.objects.filter(works_readers__user=user)

    @staticmethod
    def get_author_entry(user, work):
        return Authors.objects.filter(user=user, work=work).first()

    @staticmethod
    def get_reader_entry(user, work):
        return Readers.objects.filter(user=user, work=work).first()

    @staticmethod
    def post_reader(user, work, marks, readed):
        return Readers.objects.create(user=user, work=work, marks=marks, readed=readed)
