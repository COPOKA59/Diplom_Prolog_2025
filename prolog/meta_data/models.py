from django.db import models

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
