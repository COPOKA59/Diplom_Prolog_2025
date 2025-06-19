#!/bin/sh

echo "Ждём миграции и запуск..."
python manage.py migrate

python manage.py runserver 0.0.0.0:8000