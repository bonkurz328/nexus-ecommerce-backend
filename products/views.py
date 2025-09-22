from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    
    filterset_fields = {
        'price': ['gte', 'lte', 'exact'],
        'rating_stars': ['gte', 'lte', 'exact'],
        'created_at': ['gte', 'lte', 'exact'],
        'categories__name': ['exact', 'in'],
        'in_stock': ['exact'],
    }
    
    search_fields = ['name', 'description', 'keywords']
    ordering_fields = ['price', 'rating_stars', 'created_at', 'name']
    ordering = ['-created_at']
    
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

