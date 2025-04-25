import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate } from "react-router-dom";

// Your Stripe public key
export const stripePromise = loadStripe("pk_test_51QWdpTKLAfzO7YlBYelgqcvM48PbsAk8HYLD65aJFUJeveducntAnwzAHGuM1d9bznqb73onLvrkugNGpv3CvCKC00nIXW5Tz4");

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || {}; // Get cart items from navigation state

  // Ensure cartItems and totalPrice exist
  useEffect(() => {
    if (!cartItems) {
      setError("No items in your cart.");
    }
  }, [cartItems]);

  const createCheckoutSession = async () => {
    console.log("hello hi from stripe")
    setIsProcessing(true);
    setError(null); // Clear any previous errors

    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        body: JSON.stringify({ items: cartItems }),  // Send cart items dynamically
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check for valid response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Ensure sessionId exists in the response
      if (!data.sessionId) {
        throw new Error("Session ID is missing in the response.");
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        setIsProcessing(false);
        setError(error.message); // Display error message from Stripe
      }
    } catch (error) {
      setIsProcessing(false);
      setError(`There was an error: ${error.message}`);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!cartItems || cartItems.length === 0) {
    return <p>No items in your cart.</p>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      {isProcessing && <p>Processing payment...</p>}
      <div>
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId._id}>
              {item.productId.name} - ₹{item.productId.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ₹{totalPrice.toFixed(2)}</p>
      </div>
      <button onClick={createCheckoutSession()} disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Pay with Stripe"}
      </button>
    </div>
  );
};

export default Checkout;
