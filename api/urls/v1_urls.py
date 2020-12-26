from django.urls import path
from api.views.v1 import TestCategoryListView, TestListView, TestDetailView

urlpatterns = [
    path('categories/', TestCategoryListView.as_view(), name='categories'),
    path('tests/', TestListView.as_view(), name='test'),
    path('tests/<uuid:uuid>/', TestDetailView.as_view(), name='test-detail'),
]
