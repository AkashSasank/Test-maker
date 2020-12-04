import uuid
from django.db import models


# Create your models here.


class QuestionCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category_name = models.CharField(max_length=50, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.category_name


class Question(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    question_category = models.ForeignKey(QuestionCategory, on_delete=models.SET_NULL,
                                          null=True, blank=True)
    question_text = models.TextField(max_length=500)
    answer = models.CharField(max_length=100, null=True)
    choices = models.CharField(max_length=500, null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return str(self.question_text)


class TestCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category_name = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.category_name


class Test(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category_name = models.ForeignKey(TestCategory, on_delete=models.CASCADE, null=True)
    questions = models.ManyToManyField(Question, related_name='question')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return str(self.id)
