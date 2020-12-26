from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from Test.models import Test, TestCategory, Question


class TestCategorySerializer(ModelSerializer):
    class Meta:
        model = TestCategory
        fields = ['uuid', 'category_name', 'description']


class TestDetailSerializer(ModelSerializer):
    category = serializers.SerializerMethodField()
    question_list = serializers.SerializerMethodField()

    class Meta:
        model = Test
        fields = ['uuid', 'category', 'question_list']

    def get_category(self, obj):
        return obj.category_name.category_name

    def get_question_list(self, obj):
        question_list = obj.questions.all()
        data = QuestionSerializer(question_list, many=True).data
        return data


class TestListSerializer(ModelSerializer):
    category = serializers.SerializerMethodField()
    test_url = serializers.HyperlinkedIdentityField(
            view_name='test-detail',
            lookup_field='uuid',
            read_only=True
    )

    class Meta:
        model = Test
        fields = ['category', 'test_url']

    def get_category(self, obj):
        return obj.category_name.category_name


class QuestionSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()
    choice_list = serializers.SerializerMethodField()

    class Meta:
        model = Question
        fields = ['uuid', 'question_text', 'choice_list', 'category']

    def get_category(self, obj):
        return obj.question_category.category_name

    def get_choice_list(self, obj):
        choices = obj.choices.split(',')
        return choices
