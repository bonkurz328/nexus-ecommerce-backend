# Nexus E-Commerce Backend - Project Nexus

A complete full-stack ecommerce platform built with Django and modern JavaScript.

## 🚀 Live Demo
- **Frontend**: http://127.0.0.1:8000/ (when running locally)
- **API Documentation**: http://127.0.0.1:8000/api/ (Django REST Framework browsable API)

## ✨ Features

### Frontend
- 🛍️ Product catalog with high-quality images
- 🔍 Real-time product search
- 🛒 Shopping cart with persistent storage
- 📱 Responsive Bootstrap 5 design
- ⚡ Fast, vanilla JavaScript frontend

### Backend
- 🔐 JWT Authentication system
- 📦 Product & category management
- 💳 Order processing pipeline
- 🐳 Docker containerization
- 📊 RESTful API architecture

## 🏗️ Project Structure
nexus-ecommerce-backend/  
├── ecommerce/ # Django project configuration  
├── products/ # Products app (models, API, views)  
├── orders/ # Order management  
├── users/ # Authentication & profiles  
├── templates/ # HTML templates  
│ ├── base.html # Base template  
│ ├── index.html # Homepage  
│ ├── products.html # Product catalog  
│ └── cart.html # Shopping cart  
├── static/ # Frontend assets  
│ ├── css/products.css  
│ ├── js/main.js  
│ └── images/products/ (100+ product images)  
└── api/ # REST API endpoints  

## 🚀 Quick Start

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/bonkurz328/nexus-ecommerce-backend.git
cd nexus-ecommerce-backend

# 2. Set up virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Start development server
python manage.py runserver
