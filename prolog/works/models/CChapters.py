from django.db import models
from works.models import *
from ordered_model.models import OrderedModel

class Chapters(OrderedModel):
    name = models.CharField('Название', max_length=100, default='Новая глава')
    first_comment = models.CharField('Примечание автора', max_length=250, blank=True, default='')
    text = models.TextField('Текст', default='Текст главы')
    end_comment = models.CharField('Примечание автора', max_length=250, blank=True, default='')
    date_of_creation = models.DateTimeField('Дата создания', auto_now_add=True)
    date_of_editing = models.DateTimeField('Дата редактирования', auto_now=True)

    work = models.ForeignKey(Works, verbose_name='Произведение', on_delete=models.CASCADE, related_name='chapters')
    order_with_respect_to = 'work'

    class Meta(OrderedModel.Meta):
        ordering = ['order']
        db_table = 'chapters'
        verbose_name = 'Глава'
        verbose_name_plural = 'Главы'