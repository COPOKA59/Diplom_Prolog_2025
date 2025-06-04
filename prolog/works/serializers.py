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
        elif work_type == 'Оригинальная работа':
            data['fandom'] = []
        return data

class WorksQuestionsSerializer(serializers.ModelSerializer):
    question_text = serializers.CharField(source='question.name', read_only=True)
    question_description = serializers.CharField(source='question.description', read_only=True)

    class Meta:
        model = WorksQuestions
        fields = ['question', 'question_text', 'question_description', 'answer']