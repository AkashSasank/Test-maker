from django.contrib import admin
from .models import QuestionCategory, Question, Test, TestCategory


# Register your models here.

class QuestionAdmin(admin.ModelAdmin):
    list_display = ['id', 'question_category', 'question_text', 'answer']


class TestAdmin(admin.ModelAdmin):
    filter_horizontal = ('questions',)
    list_display = ['id', 'category_name', 'is_active']


class QuestionCategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'category_name', 'description']


class TestCategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'category_name', 'description']


admin.site.register(Test, TestAdmin)
admin.site.register(TestCategory, TestCategoryAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(QuestionCategory, QuestionCategoryAdmin)
