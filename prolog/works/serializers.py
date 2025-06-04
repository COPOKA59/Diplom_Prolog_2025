from rest_framework import serializers
from works.models import *


class WorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Works
        fields = '__all__'

    def validate(self, data):
        work_type = data.get('type')
        work_fandom = data.get('fandom')
        work_translation = data.get('translation')
        work_author_original = data.get('author_original')

        if work_type == 'Фандом' and (not work_fandom or len(work_fandom) == 0):
            raise serializers.ValidationError({
                'fandom': 'Работа должена быть связана хотя бы с одним фандомом.'
            })
        elif work_type == 'Оригинальная работа':
            data['fandom'] = []

        if work_translation == True and (not work_author_original or len(work_author_original) == 0):
            raise serializers.ValidationError({
                'translation': 'В работе должен указываться автор оригинала.'
            })
        elif work_translation == False:
            data['author_original'] = ''
            data['original'] = ''
        return data

class WorksQuestionsSerializer(serializers.ModelSerializer):
    question_text = serializers.CharField(source='question.name', read_only=True)
    question_description = serializers.CharField(source='question.description', read_only=True)

    class Meta:
        model = WorksQuestions
        fields = '__all__'

class ChaptersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapters
        fields = '__all__'