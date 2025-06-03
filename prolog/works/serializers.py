from tkinter.font import names

from rest_framework import serializers
from works.models import *


class WorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Works
        fields = '__all__'

    def validate(self, data):
        work_type = data.get('type')
        work_fandoms = data.get('fandom')

        if work_type == 'Фандом' and (not work_fandom or len(work_fandom) == 0):
            raise serializers.ValidationError({
                'fandom': 'Работа должена быть связана хотя бы с одним фандомом.'
            })
        return data

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

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

class FandomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fandom
        fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'