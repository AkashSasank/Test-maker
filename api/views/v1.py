from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from api.serializers import TestListSerializer, TestCategorySerializer, QuestionSerializer, TestDetailSerializer
from Test.models import Test, TestCategory, Question


class TestCategoryListView(ListAPIView):
    queryset = TestCategory.objects.all()
    serializer_class = TestCategorySerializer


class TestDetailView(ListAPIView):
    """
    APi to list all Questions set in a Test
    """
    serializer_class = TestDetailSerializer

    def get_queryset(self):
        uuid = self.kwargs.get('uuid')
        queryset = Test.objects.all().filter(is_active=True, uuid=uuid).order_by('category_name')
        return queryset


class TestListView(ListAPIView):
    """
    APi to list all tests with corresponding UUID and Category
    """
    serializer_class = TestListSerializer

    def get_queryset(self):
        queryset = Test.objects.all().filter(is_active=True).order_by('category_name')
        category = self.request.GET.get('category')
        if category:
            filtered_queryset = queryset.filter(category_name__category_name=category)
            return filtered_queryset
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class
        serialized_data = serializer(queryset, many=True, context={'request': request}).data
        categories = [item.get('category') for item in serialized_data]
        category_names = list()
        for i in categories:
            if i not in category_names:
                category_names.append(i)
        data = dict()
        for category in category_names:
            urls = []
            for item in serialized_data:
                if item.get('category') == category:
                    test_url = item.get('test_url', 1)
                    urls.append(test_url)
            data[category] = urls

        return Response([data])
