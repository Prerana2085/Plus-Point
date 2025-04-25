// SuccessPage.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get("session_id");

    // You can use sessionId to fetch more details or display a success message
  }, [location]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your order has been placed successfully. Thank you for your purchase!</p>
    </div>
  );
};

export default SuccessPage;
