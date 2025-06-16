from rest_framework import serializers
from works.models import Chapters

class ChaptersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapters
        fields = '__all__'
        read_only_fields = ['date_of_creation', 'date_of_editing', 'work']

class ChapterDetailSerializer(serializers.ModelSerializer):
    previous_id = serializers.SerializerMethodField()
    next_id = serializers.SerializerMethodField()

    class Meta:
        model = Chapters
        fields = [
            'id', 'order', 'name', 'first_comment', 'text', 'end_comment',
            'date_of_creation', 'date_of_editing', 'work',
            'previous_id', 'next_id', 'publish',
        ]
        read_only_fields = ['date_of_creation', 'date_of_editing', 'work']

    def get_previous_id(self, obj):
        return self.context.get('previous_id')

    def get_next_id(self, obj):
        return self.context.get('next_id')