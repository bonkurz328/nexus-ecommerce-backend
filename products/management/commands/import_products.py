import json
import os
from django.core.management.base import BaseCommand
from django.core.files.base import ContentFile
from products.models import Product, Category

class Command(BaseCommand):
    help = 'Import products from JSON file'
    
    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str, help='Path to the JSON file')
    
    def handle(self, *args, **options):
        json_file_path = options['json_file']
        
        # Read the JSON file
        try:
            with open(json_file_path, 'r', encoding='utf-8') as file:
                products_data = json.load(file)
        except FileNotFoundError:
            self.stdout.write(self.style.ERROR(f"File {json_file_path} not found"))
            return
        except json.JSONDecodeError:
            self.stdout.write(self.style.ERROR("Invalid JSON file"))
            return
        
        self.stdout.write(f"Importing {len(products_data)} products...")
        
        for product_data in products_data:
            # Convert price from cents to dollars
            price = product_data['priceCents'] / 100
            
            # Create or update product
            product, created = Product.objects.update_or_create(
                id=product_data['id'],
                defaults={
                    'name': product_data['name'],
                    'price': price,
                    'rating_stars': product_data['rating']['stars'],
                    'rating_count': product_data['rating']['count'],
                    'keywords': product_data['keywords'],
                    'type': product_data.get('type'),
                    'size_chart_link': product_data.get('sizeChartLink'),
                    'in_stock': True,  # Default to in stock
                    'stock_quantity': 100,  # Default stock quantity
                }
            )
            
            # Handle categories from keywords
            for keyword in product_data['keywords']:
                category, cat_created = Category.objects.get_or_create(
                    name=keyword.title(),
                    defaults={'description': f'Products related to {keyword}'}
                )
                product.categories.add(category)
            
            status = "Created" if created else "Updated"
            self.stdout.write(f"{status}: {product.name}")
        
        self.stdout.write(self.style.SUCCESS(
            f"Successfully imported {len(products_data)} products"
        ))
        