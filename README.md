# E-Commerce Backend API

A robust Django REST Framework backend for an e-commerce platform, built for ALX Project Nexus.

## 🚀 Features

- **User Authentication**: JWT-based authentication system
- **Product Management**: Full CRUD operations with categories
- **Order Processing**: Complete order lifecycle management
- **RESTful API**: Clean, well-documented endpoints
- **Database Optimization**: PostgreSQL with proper indexing
- **API Documentation**: Interactive Swagger/OpenAPI docs
- **Containerized**: Docker-ready for production deployment

## 📦 API Endpoints

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/token/` - Obtain JWT tokens
- `POST /api/auth/token/refresh/` - Refresh access token
- `GET /api/auth/profile/` - User profile

### Products
- `GET /api/products/products/` - List all products
- `GET /api/products/products/{id}/` - Product details
- `GET /api/products/categories/` - List categories

### Orders
- `GET /api/orders/orders/` - User's orders
- `POST /api/orders/orders/` - Create new order
- `GET /api/orders/orders/{id}/` - Order details
- `POST /api/orders/orders/{id}/cancel/` - Cancel order

## 🛠️ Installation

### Local Development
```bash
# Clone repository
git clone <your-repo-url>
cd ecommerce-backend

# Create virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows Git Bash

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run development server
python manage.py runserver
