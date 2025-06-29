from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUsers(AbstractUser):
    email = models.EmailField(blank=True, null=True, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'