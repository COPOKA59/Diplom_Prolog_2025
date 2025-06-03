from tkinter.font import names

from rest_framework import serializers
from works.models import *


class WorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Works
        fields = '__all__'

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class OrientationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orientation
        fields = '__all__'

class GenresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genres
        fields = '__all__'

class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'

class WorksQuestionsSerializer(serializers.ModelSerializer):
    question_text = serializers.CharField(source='question.name', read_only=True)
    question_description = serializers.CharField(source='question.description', read_only=True)

    class Meta:
        model = WorksQuestions
        fields = ['question', 'question_text', 'question_description', 'answer']
