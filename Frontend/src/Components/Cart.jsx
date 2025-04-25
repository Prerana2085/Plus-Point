import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import NavbarStore from "./NavbarStore";
import "./Cart.css";

const stripePromise = loadStripe("pk_test_51QWdpTKLAfzO7YlBYelgqcvM48PbsAk8HYLD65aJFUJeveducntAnwzAHGuM1d9bznqb73onLvrkugNGpv3CvCKC00nIXW5Tz4");

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const userId =    "exampleUserId"; // Replace with actual user ID logic
  const BASE_URL = "http://localhost:5000";
  const navigate = useNavigate();

  const fetchCartData = () => {
    setLoading(true);
    fetch(`${BASE_URL}/api/cart/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched card data",data);
        
console.log("First item sample:", data.items[0]);
        setCartItems(data.items || []);
        setLoading(false);
        calculateTotalPrice(data.items || []);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching cart:", error);
      });
  };

  useEffect(() => {
    fetchCartData();
  }, [userId]);

  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const updateCartItem = (productId, action, quantity) => {
    fetch(`${BASE_URL}/api/cart/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId, action, quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          fetchCartData(); // Refresh cart data
          setNotification("Cart updated successfully!");
        } else {
          setNotification("Error updating cart");
        }
      })
      .catch((error) => {
        console.error("Error updating cart:", error);
        setNotification("Failed to update cart");
      });
  };

  const handleCheckout = async () => {
    if (totalPrice < 50) {
      setNotification("Your cart total is too low for checkout. It must be ₹50 or more.");
      return;
    }

    const response = await fetch(`${BASE_URL}/api/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems, userId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      setNotification("Error creating checkout session: " + errorData.error);
      return;
    }

    const { id } = await response.json();

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: id });

    if (error) {
      setNotification("Error during checkout: " + error.message);
    } else {
      navigate("/success");
    }
  };

  return (
    <>
    <NavbarStore/>
    <div className="cart-container">
      <h1>Your Cart</h1>
      {notification && <p className="notification">{notification}</p>}
      {loading ? (
        <p>Loading your cart...</p>
      ) : cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.productId._id} className="cart-item">
              <img
                src={`${BASE_URL}/images/${item.productId.imageUrl}`}
                alt={item.productId.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.productId.name}</h3>
                <p>{item.productId.description}</p>
                <p>Price: ₹{item.productId.price}</p>
                <div className="quantity-control">
                  <button
                    onClick={() => updateCartItem(item.productId._id, "decrease", item.quantity - 1)}
                  >
                    -
                  </button>
                  <input type="number" value={item.quantity} readOnly />
                  <button
                    onClick={() => updateCartItem(item.productId._id, "increase", item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <p>Subtotal</p>
          <p>₹{totalPrice.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <p>Estimated Delivery</p>
          <p>₹0.00</p>
        </div>
        <div className="summary-item">
          <p>Total</p>
          <p>₹{totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout with Stripe
        </button>
      </div>
    </div>
    </>
  );
}

export default Cart;
