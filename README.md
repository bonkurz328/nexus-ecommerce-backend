# Nexus E-Commerce Backend - Project Nexus

A complete full-stack ecommerce platform built with Django and modern JavaScript, successfully deployed to production.

## 🚀 Live Demo - **PRODUCTION DEPLOYMENT**
- **🌐 Live Website**: https://nexus-ecommerce-backend.onrender.com/
- **📱 Products Page**: https://nexus-ecommerce-backend.onrender.com/products/
- **🛒 Shopping Cart**: https://nexus-ecommerce-backend.onrender.com/cart/
- **🔗 API Base URL**: https://nexus-ecommerce-backend.onrender.com/api/
- **📊 API Documentation**: https://nexus-ecommerce-backend.onrender.com/api/ (Django REST Framework)

## ✅ **Deployment Status: PRODUCTION READY**
- **✅ Full-stack deployment** on Render.com
- **✅ PostgreSQL database** with complete product catalog
- **✅ 24/7 availability** - No local server required
- **✅ Responsive design** - Mobile and desktop optimized
- **✅ REST API** - Fully functional endpoints

## ✨ Features

### Frontend (Live & Working)
- 🛍️ **Product catalog** with high-quality images
- 🔍 **Real-time product search** 
- 🛒 **Shopping cart** with persistent storage
- 📱 **Responsive Bootstrap 5** design
- ⚡ **Fast, vanilla JavaScript** frontend

### Backend (Production Ready)
- 🔐 **JWT Authentication** system
- 📦 **Product & category management**
- 💳 **Order processing** pipeline
- 🐳 **Docker containerization** ready
- 📊 **RESTful API** architecture

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


## 📚 API Endpoints (Live)

| Endpoint | Method | Live URL |
|----------|--------|----------|
| Products List | GET | https://nexus-ecommerce-backend.onrender.com/api/products/ |
| Categories | GET | https://nexus-ecommerce-backend.onrender.com/api/categories/ |
| User Registration | POST | https://nexus-ecommerce-backend.onrender.com/api/auth/register/ |
| Product Search | GET | https://nexus-ecommerce-backend.onrender.com/api/products/?search=query |

## 🚀 Quick Start

### 🌐 Production Access (No Setup Required)
The application is **already deployed and live**. You can access it immediately:
- **Main Website**: https://nexus-ecommerce-backend.onrender.com/
- **API Testing**: https://nexus-ecommerce-backend.onrender.com/api/products/

### 💻 Local Development
```bash
# 1. Clone repository
git clone https://github.com/bonkurz328/nexus-ecommerce-backend.git
cd nexus-ecommerce-backend

# 2. Set up virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Start development server
python manage.py runserver
# Visit: http://127.0.0.1:8000/
```

## ⚠️ Free Tier Limitations

This project is deployed on Render's free tier, which has some limitations:

- **Instance spins down** after 15 minutes of inactivity
- **First load after inactivity** may take 30-60 seconds (wake-up time)
- **"Bad Gateway" errors** may occur during the wake-up period
- **After waking up**, the site works perfectly until the next inactive period

**For consistent testing:**
- If you get a "Bad Gateway" error, **wait 60 seconds and refresh**
- The site will work perfectly once the instance is awake
- For demo purposes, you may want to **visit the site once to wake it up** before presenting

**Local development** doesn't have these limitations and provides instant response times.

## 💻 Local Demo (No Waiting)

For instant response times without the free-tier limitations:

```bash
git clone https://github.com/bonkurz328/nexus-ecommerce-backend.git
cd nexus-ecommerce-backend
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
# Visit: http://127.0.0.1:8000/ (instant response)

🛠️ Tech Stack  
Backend: Django 4.2.7, Django REST Framework  
Frontend: JavaScript, Bootstrap 5, HTML5/CSS3  
Database: PostgreSQL (Production), SQLite (Development)  
Authentication: JWT Tokens  
Deployment: Render.com  
Containerization: Docker-ready  

🎯 Key Features Implemented  
✅ Full-stack deployment to production  
✅ REST API with complete CRUD operations  
✅ Product catalog with image management  
✅ Shopping cart functionality  
✅ User authentication system  
✅ Responsive design  
✅ Search and filtering  
✅ Order management  
✅ Database migrations  
