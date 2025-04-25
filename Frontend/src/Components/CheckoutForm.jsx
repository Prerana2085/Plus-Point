import React from "react";
import { CardElement } from "@stripe/react-stripe-js"; // Use CardElement for Stripe's card input
import { useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ onPayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // Call the parent component's payment handler
    onPayment(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter your payment details</h3>
      <div>
        <label htmlFor="card">Card Information</label>
        <CardElement id="card" />
      </div>
      <button type="submit" disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;