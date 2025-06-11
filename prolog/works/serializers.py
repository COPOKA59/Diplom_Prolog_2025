from rest_framework import serializers
from meta_data.serializers import *
from .services import *

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
            'size_details', 'orientation_details', 'rating_details', 'type_details', 'status_details',
            'genres_details', 'questions_details', 'fandom_details',
        ]

    def validate(self, data):
        return validate_work_data(data)

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

class ChapterDetailSerializer(serializers.ModelSerializer):
    previous_id = serializers.SerializerMethodField()
    next_id = serializers.SerializerMethodField()

    class Meta:
        model = Chapters
        fields = [
            'id', 'order', 'name', 'first_comment', 'text', 'end_comment',
            'date_of_creation', 'date_of_editing', 'work',
            'previous_id', 'next_id',
        ]

    def get_previous_id(self, obj):
        return self.context.get('previous_id')

    def get_next_id(self, obj):
        return self.context.get('next_id')