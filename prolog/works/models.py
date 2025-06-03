from django.db import models
# Create your models here.

class Size(models.Model):
    name = models.CharField('Название', max_length=100, default='Новый размер произведения')
    description = models.CharField('Описание', max_length=250, default='Кол-во страниц')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'size'
        verbose_name = 'Размер произведения'
        verbose_name_plural = 'Размеры произведения'

class Orientation(models.Model):
    name = models.CharField('Название', max_length=100, default='Новая направленность произведения')
    description = models.CharField('Описание', max_length=250, default='Основной акцент произведения заключается в ...')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'orientation'
        verbose_name = 'Направленность'
        verbose_name_plural = 'Направленности'

class Genres(models.Model):
    name = models.CharField('Название', max_length=100, default='Новый жанр')
    description = models.CharField('Описание', max_length=250, default='Описание жанра')
    mark = models.BooleanField('Жанр(0)/Тег(1)?', default=False)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'genres'
        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'

class Questions(models.Model):
    name = models.CharField('Вопрос', max_length=100, default='Формулировка вопроса')
    description = models.CharField('Описание', max_length=250, default='Пояснение (подробное раскрытие вопроса, возможно с примером)')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'questions'
        verbose_name = 'Вопрос о произведении'
        verbose_name_plural = 'Вопросы о произведении'

class Rating(models.Model):
    name = models.CharField('Название', max_length=100, default='Сокращённое обозначение рейтинга')
    description = models.CharField('Описание', max_length=250, default='Пояснение')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'rating'
        verbose_name = 'Рейтинг по возрасту'
        verbose_name_plural = 'Рейтинги по возрасту'

class Fandom(models.Model):
    name = models.CharField('Название', max_length=100, default='Название фандома')
    description = models.CharField('Описание', max_length=250, default='Описание')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'fandom'
        verbose_name = 'Фандом'
        verbose_name_plural = 'Фандомы'

class Type(models.Model):
    name = models.CharField('Название', max_length=100, default='Название типа')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'type'
        verbose_name = 'Тип работы'
        verbose_name_plural = 'Типы работ'


class Status(models.Model):
    name = models.CharField('Название', max_length=100, default='Название статуса')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'status'
        verbose_name = 'Статус работы'
        verbose_name_plural = 'Статусы работ'

class Works(models.Model):
    name = models.CharField('Название', max_length=100, default='Новое Произведение)')
    description = models.CharField('Описание', max_length=250, default='Описание-Описание')
    date_of_creation = models.DateTimeField('Дата создания', auto_now_add=True)
    date_of_editing = models.DateTimeField('Дата редактирования', auto_now=True)
    translation = models.BooleanField('Перевод?', default=False)

    size = models.ForeignKey(Size, on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    orientation = models.ForeignKey(Orientation, on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    rating = models.ForeignKey(Rating, on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    type = models.ForeignKey(Type, on_delete=models.SET_NULL, null=True, blank=False, related_name='works')
    status = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True, blank=False, related_name='works')

    genres = models.ManyToManyField(Genres, related_name='works')
    questions = models.ManyToManyField(Questions, through='WorksQuestions', related_name='works')
    fandom = models.ManyToManyField(Fandom, related_name='works')

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