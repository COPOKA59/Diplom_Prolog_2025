from django.db import models
from django.contrib.auth import get_user_model
from works.models import *

User = get_user_model()

class Authors(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    work = models.ForeignKey(Works, on_delete=models.CASCADE, related_name='works_authors')
    role = models.CharField('Роль', max_length=100, default='soauthor')

    class Meta:
        unique_together = ('user', 'work')
        db_table = 'works_authors'
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'

class Readers(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    work = models.ForeignKey(Works, on_delete=models.CASCADE, related_name='works_readers')
    marks = models.FloatField('Оценка произведения', null=True, blank=True)
    readed = models.BooleanField('Отметка Прочитано', default=False)
    data_of_readed = models.DateTimeField('Дата прочтения', null=True, blank=True)

    class Meta:
        unique_together = ('user', 'work')
        db_table = 'works_readers'
        verbose_name = 'Читатель'
        verbose_name_plural = 'Читатели'