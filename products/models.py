import uuid
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return self.name

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating_stars = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    rating_count = models.IntegerField(default=0)
    keywords = models.JSONField(default=list)
    type = models.CharField(max_length=50, null=True, blank=True)
    size_chart_link = models.CharField(max_length=255, null=True, blank=True)
    categories = models.ManyToManyField(Category, related_name='products')
    in_stock = models.BooleanField(default=True)
    stock_quantity = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['-created_at']
        indexes = [  # ADD THIS SECTION
            models.Index(fields=['price']),
            models.Index(fields=['rating_stars']),
            models.Index(fields=['created_at']),
            models.Index(fields=['in_stock']),
            models.Index(fields=['name']),  # For search optimization
        ]
        