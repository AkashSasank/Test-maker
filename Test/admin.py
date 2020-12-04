from django.contrib import admin
from .models import QuestionCategory, Question, Test, TestCategory


# Register your models here.

class QuestionAdmin(admin.ModelAdmin):
    list_display = ['id', 'question_category', 'question_text', 'answer']


class TestAdmin(admin.ModelAdmin):
    filter_horizontal = ('questions',)


admin.site.register(Test, TestAdmin)
admin.site.register(TestCategory)
admin.site.register(Question, QuestionAdmin)
admin.site.register(QuestionCategory)
