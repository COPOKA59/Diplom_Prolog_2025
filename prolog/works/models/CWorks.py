from django.db import models
from meta_data.models import Size, Orientation, Genres, Questions, Rating, Fandom, Type, Status
from django.contrib.auth import get_user_model

User = get_user_model()

class Works(models.Model):
    name = models.CharField('Название', max_length=100, default='Новое Произведение)')
    description = models.CharField('Описание', max_length=250, default='Описание-Описание')
    date_of_creation = models.DateTimeField('Дата создания', auto_now_add=True)
    date_of_editing = models.DateTimeField('Дата редактирования', auto_now=True)
    translation = models.BooleanField('Перевод?', default=False)
    author_original = models.CharField('Автор оригинала', max_length=250, blank=True, default='')
    original = models.CharField('Оригинал', max_length=250, blank=True, default='')
    publish = models.BooleanField('Публикация', default=False)

    size = models.ForeignKey(Size, verbose_name='Размер', on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    orientation = models.ForeignKey(Orientation, verbose_name='Направление', on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    rating = models.ForeignKey(Rating, verbose_name='Рейтинг', on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    type = models.ForeignKey(Type, verbose_name='Тип', on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    status = models.ForeignKey(Status, verbose_name='Статус', on_delete=models.SET_NULL, null=True, blank=False, related_name='works')

    genres = models.ManyToManyField(Genres, verbose_name='Жанры', related_name='works')
    fandom = models.ManyToManyField(Fandom, verbose_name='Фандом', blank=True, related_name='works')
    questions = models.ManyToManyField(Questions, verbose_name='Вопросы', through='WorksQuestions', related_name='works')
    authors = models.ManyToManyField(User, verbose_name='Авторы', through='Authors', related_name='works_authors')
    readers = models.ManyToManyField(User, verbose_name='Читатели', through='Readers', related_name='works_readers')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'works'
        verbose_name = 'Произведение'
        verbose_name_plural = 'Произведения'

class WorksQuestions(models.Model):
    work = models.ForeignKey(Works, on_delete=models.CASCADE)
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answer = models.CharField('Ответ на вопрос', max_length=250, default='Ответ')

    class Meta:
        unique_together = ('work', 'question')
        db_table = 'works_questions'
        verbose_name = 'Вопрос произведения'
        verbose_name_plural = 'Вопросы произведения'