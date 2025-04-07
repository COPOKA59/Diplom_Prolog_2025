from django.db import models
# Create your models here.

class Works(models.Model):
    name = models.CharField('Название', max_length=100, default='Новое Произведение)')
    description = models.CharField('Описание', max_length=250, default='Описание-Описание')
    date_of_creation = models.DateTimeField('Дата создания', auto_now_add=True)
    date_of_editing = models.DateTimeField('Дата редактирования', auto_now=True)
    translation = models.BooleanField('Перевод?', default=False)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'works'
        verbose_name = 'Произведение'
        verbose_name_plural = 'Произведения'