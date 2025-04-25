import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Shop.css";
import NavbarStore from "./NavbarStore";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("Pain Relief");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const userId = "exampleUserId";

  const BASE_URL = "https://plus-point-backend-medicine.onrender.com"; 

  useEffect(() => {
    fetch(`${BASE_URL}/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`${BASE_URL}/api/products?category=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedCategory]);

  const addToCart = (productId) => {
    fetch(`${BASE_URL}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Product added to cart!");
        }
      })
      .catch((error) => console.error("Error adding product to cart:", error));
  };

  return (
<>
    <NavbarStore/>
    <div className="shop-container">
        
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-content">
        <h1>{selectedCategory} Products</h1>
        <div className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card1">
                <Link to={`/product/${product._id}`} className="product-card-link">
  <div>
    <img
      src={`https://plus-point-backend-medicine.onrender.com/images/${product.imageUrl}`} 
      alt={product.name}
      className="product-image1"
    />
    <h3 className="product-name1">{product.name}</h3>
    <p className="product-description">{product.description}</p>
    <p className="product-price1">Price: ₹{product.price}</p>
  </div>
</Link>

                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product._id)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Shop;
