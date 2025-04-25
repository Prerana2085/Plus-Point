import React from "react";
import HealthCheckCompo from "../Components/HealthCheckCompo";
import { Navbars } from "../Components/Navbars";

const packages = [
  { title: "Recommended", price: 2499 },
  { title: "Pre-Conception", price: 3800 },
  { title: "Cancer Screening", price: 7500 },
  { title: "Diabetes", price: 3500 },
  { title: "General Health", price: 5000 },
  { title: "Heart", price: 6000 },
  { title: "Senior Citizen", price: 4800 },
  { title: "Special", price: 8900 },
  { title: "Women", price: 5800 },

];

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", { style: "decimal" }).format(price);
};


const HealthCheck = () => {
  return (
    <>
      <Navbars />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "1rem",
          cursor: "pointer",
          gap: "20px", // Added gap for spacing between items
        }}
      >
      <h2 style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
          Health Check Packages (Prices in INR)
        </h2>    
        {packages.map((pkg) => (
          <HealthCheckCompo
            key={pkg.title} // Using title as the key
            name={pkg.title}
            price={formatPrice(pkg.price)} // Formatting price with currency
          />
        ))}
      </div>
    </>
  );
};

export default HealthCheck;