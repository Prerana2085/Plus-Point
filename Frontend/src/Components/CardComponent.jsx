import React from "react";
import { useNavigate } from "react-router-dom";


const CardComponent = ({ name, price, testsIncluded, tests, moreTests, location }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    localStorage.setItem("amount", price);
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Dummy test key provided by Razorpay
      amount: price * 100, // Convert to paise
      currency: "INR",
      name: "Health Checkup",
      description: `${name} Package`,
      image: "https://your-logo-url.com/logo.png", // Optional logo URL
      handler: function (response) {
        alert("✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
        localStorage.setItem("paymentId", response.razorpay_payment_id);
        navigate('/pdfgenerate');
      },
      prefill: {
        name: "Test User",
        email: "testuser@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Dummy address for testing",
      },
      theme: {
        color: "#d9534f",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    // Navigate('/pdfgenerate')
  };

  return (
    <div className="card" style={{
      width: '300px',
      margin: '1rem',
      padding: '1.5rem',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{name}</h5>
      <p style={{ fontSize: '14px', fontWeight: '600', color: '#666' }}>{testsIncluded} tests included</p>
      <ul style={{ padding: '0', listStyle: 'none', marginBottom: '10px' }}>
        {tests.map((test, index) => (
          <li key={index} style={{ fontSize: '14px', color: '#333' }}>➤ {test}</li>
        ))}
      </ul>
      <p style={{ color: '#d9534f', fontWeight: '600', cursor: 'pointer' }}>+{moreTests} More</p>
      <hr style={{ border: '0.5px solid #ddd' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <p style={{ fontWeight: 'bold', color: '#333' }}>📍 {location}</p>
        <p style={{ fontWeight: 'bold', color: '#d9534f', fontSize: '1.1rem' }}>₹ {price}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button style={{
          padding: '10px 15px',
          border: '1px solid #d9534f',
          borderRadius: '5px',
          background: 'white',
          cursor: 'pointer',
          color: '#d9534f',
          fontWeight: 'bold'
        }}>View Details</button>
        <button
          onClick={handleBookNow}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            background: '#d9534f',
            cursor: 'pointer',
            border: 'none',
            color: 'white',
            fontWeight: 'bold'
          }}>Book Now</button>
      </div>
    </div>
  );
};

export default CardComponent;
