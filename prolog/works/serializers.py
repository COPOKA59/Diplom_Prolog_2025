from rest_framework import serializers
from meta_data.serializers import *
from works.models import *


class WorksSerializer(serializers.ModelSerializer):
    size_details = SizeSerializer(source='size', read_only=True)
    orientation_details = OrientationSerializer(source='orientation', read_only=True)
    rating_details = RatingSerializer(source='rating', read_only=True)
    type_details = TypeSerializer(source='type', read_only=True)
    status_details = StatusSerializer(source='status', read_only=True)

    genres_details = GenresSerializer(source='genres', many=True, read_only=True)
    questions_details = QuestionsSerializer(source='questions', many=True, read_only=True)
    fandom_details = FandomSerializer(source='fandom', many=True, read_only=True)

    class Meta:
        model = Works
        fields = [
            'id', 'name', 'description', 'date_of_creation', 'date_of_editing',
            'translation', 'author_original', 'original',
            'size', 'orientation', 'rating', 'type', 'status',
            'genres', 'questions', 'fandom',
            # только для чтения
            'size_details', 'orientation_details', 'rating_details', 'type_details', 'status_details',
            'genres_details', 'questions_details', 'fandom_details',
        ]

    def validate(self, data):
        work_type = data.get('type')
        work_fandom = data.get('fandom')
        work_translation = data.get('translation')
        work_author_original = data.get('author_original')

        if work_type.name == 'Фандом' and (not work_fandom or len(work_fandom) == 0):
            raise serializers.ValidationError({
                'fandom': 'Работа должна быть связана хотя бы с одним фандомом.'
            })
        elif work_type.name == 'Оригинальная работа':
            data['fandom'] = []

        if work_translation is True and (not work_author_original or len(work_author_original) == 0):
            raise serializers.ValidationError({
                'translation': 'В работе должен указываться автор оригинала.'
            })
        elif work_translation is False:
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