// API base URL - CORRECTED
const API_BASE = '/api';

// Use a data URL as placeholder
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';

// Function to map API product names to image file names
function getProductImagePath(productName) {
    if (!productName) return placeholderImage;
    
    const nameMappings = {
        "Men's Full-Zip Hooded Fleece Sweatshirt": "men-cozy-fleece-zip-up-hoodie-red.jpg",
        "2-Ply Kitchen Paper Towels - 30 Pack": "kitchen-paper-towels-30-pack.jpg",
        "10-Piece Mixing Bowl Set with Lids - Floral": "floral-mixing-bowl-set.jpg",
        "Countertop Blender - 64oz, 1400 Watts": "countertop-blender-64-oz.jpg",
        "Waterproof Knit Athletic Sneakers - Pink": "knit-athletic-sneakers-pink.webp",
        "100% Cotton Bath Towels - 2 Pack, Light Teal": "cotton-bath-towels-teal.webp",
        "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels": "blackout-curtains-black.jpg",
        "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black": "coffeemaker-with-glass-carafe-black.jpg",
        "Round Airtight Food Storage Containers - 5 Piece": "round-airtight-food-storage-containers.jpg",
        "Double Oval Twist French Wire Earrings - Gold": "double-elongated-twist-french-wire-earrings.webp",
        "Women's Fleece Jogger Sweatpant": "women-french-terry-fleece-jogger-camo.jpg",
        "Vanity Mirror with Heavy Base - Chrome": "vanity-mirror-silver.jpg",
        "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces": "non-stick-cooking-set-15-pieces.webp",
        "Men's Navigator Sunglasses Pilot": "men-navigator-sunglasses-brown.jpg",
        "Men's Athletic Sneaker": "men-athletic-shoes-green.jpg",
        "Men's Classic-fit Pleated Chino Pants": "men-chino-pants-beige.jpg",
        "Women's Chunky Cable Beanie - Gray": "women-chunky-beanie-gray.webp",
        "Duvet Cover Set with Zipper Closure": "duvet-cover-set-blue-twin.jpg",
        "Trash Can with Foot Pedal - Brushed Stainless Steel": "trash-can-with-foot-pedal-50-liter.jpg",
        "Men's Regular-Fit Quick-Dry Golf Polo Shirt": "men-golf-polo-t-shirt-blue.jpg",
    };
    
    if (nameMappings[productName]) {
        return `/static/images/products/${nameMappings[productName]}`;
    }
    
    return placeholderImage;
}

// Fetch and display products - CORRECT ENDPOINT
async function loadProducts(containerId = 'products-container') {
    try {
        console.log('Loading products from API...');
        
        // CORRECT ENDPOINT: /api/products/
        const response = await fetch(`${API_BASE}/products/`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API response received:', data);
        
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }
        
        container.innerHTML = '';
        
        // Check if we got an array of products or an object with results
        const products = Array.isArray(data) ? data : (data.results || data);
        console.log('Products to display:', products.length);
        
        if (products && products.length > 0) {
            products.forEach(product => {
                const imagePath = getProductImagePath(product.name);
                console.log(`Product: ${product.name} -> Image: ${imagePath}`);
                
                const productCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card product-card h-100">
                            <img src="${imagePath}" 
                                 class="product-image" alt="${product.name}"
                                 onerror="this.src='${placeholderImage}'">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${product.name || 'Unnamed Product'}</h5>
                                <p class="card-text flex-grow-1">${product.description || 'No description available'}</p>
                                <p class="card-price">$${product.price || '0.00'}</p>
                                <button class="btn btn-primary btn-add-to-cart mt-auto" 
                                        onclick="addToCart('${product.id}', '${product.name.replace(/'/g, "\\'")}', '${product.price}')">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += productCard;
            });
        } else {
            container.innerHTML = '<p class="text-center">No products found.</p>';
        }
    } catch (error) {
        console.error('Error loading products:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-danger">
                        <h4>Error Loading Products</h4>
                        <p>${error.message}</p>
                        <p><small>Check the browser console for details.</small></p>
                        <button class="btn btn-primary" onclick="loadProducts('${containerId}')">Try Again</button>
                    </div>
                </div>
            `;
        }
    }
}

// Simple add to cart function
function addToCart(productId, productName, productPrice) {
    console.log('Adding to cart:', productId, productName, productPrice);
    alert(`Added ${productName} to cart!`);
}

// Load featured products on homepage
function loadFeaturedProducts() {
    loadProducts('featured-products');
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing product loading...');
    
    // Check if we're on the products page or homepage
    if (document.getElementById('products-container')) {
        console.log('Loading products page...');
        loadProducts();
    }
    if (document.getElementById('featured-products')) {
        console.log('Loading featured products...');
        loadFeaturedProducts();
    }
});

// Add search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                const productName = card.querySelector('.card-title').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    }
});