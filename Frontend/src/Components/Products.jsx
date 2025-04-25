import React, { useState, useEffect } from 'react';
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]); 
  const [visibleProducts, setVisibleProducts] = useState(4); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const BASE_URL = "http://localhost:5000"; 

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${BASE_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const handleShowLess = () => {
    setVisibleProducts((prev) => Math.max(prev - 4, 4));
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-display1">
      <h2>OUR PRODUCTS</h2>
      <div className="product-grid1">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div className="product-card1" key={product._id || index}>
           <img
  src={
    product.imageUrl
      ? `http://localhost:5000/images/${product.imageUrl}`
      : 'path/to/placeholder.jpg'
  }
  alt={product.name}
  className="product-image1"
/>


            <h3 className="product-name1">{product.name}</h3>
            <p className="product-price1">₹{product.price}</p>
          </div>
        ))}
      </div>

      {visibleProducts < products.length && (
        <button className="product-button" onClick={handleLoadMore}>
          Load more...
        </button>
      )}

      {visibleProducts > 4 && (
        <button className="product-button" onClick={handleShowLess}>
          Show less
        </button>
      )}
    </div>
  );
};

export default Products;
