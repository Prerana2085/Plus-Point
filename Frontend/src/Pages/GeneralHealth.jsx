import React from "react";
import { Navbars } from "../Components/Navbars";
import CardComponent from "../Components/CardComponent";

const packages = [
  {
    title: "Recommended Full Body Checkup",
    price: 5000,
    testsIncluded: 18,
    tests: ["CBC, BLOOD", "LIVER FUNCTION TEST", "KIDNEY FUNCTION TEST"],
    moreTests: 15,
    location: "Plus Point Mumbai",
  },
  {
    title: "Basic Health Checkup",
    price: 2500,
    testsIncluded: 12,
    tests: ["CBC", "THYROID FUNCTION TEST", "VITAMIN D"],
    moreTests: 9,
    location: "Plus Point Pune",
  },
  {
    title: "Comprehensive Health Checkup",
    price: 8000,
    testsIncluded: 25,
    tests: ["ECG", "X-RAY CHEST", "LIVER FUNCTION TEST"],
    moreTests: 22,
    location: "Plus Point Delhi",
  },
  {
    title: "Senior Citizen Health Checkup",
    price: 6000,
    testsIncluded: 20,
    tests: ["BLOOD SUGAR", "BONE DENSITY TEST", "HEART FUNCTION TEST"],
    moreTests: 17,
    location: "Plus Point Bangalore",
  },
];

function GeneralHealth() {
  return (
    <>
      <Navbars />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "1rem",
          gap: "20px",
        }}
      >
        {packages.map((pkg) => (
          <CardComponent
            key={pkg.title}
            name={pkg.title}
            price={pkg.price}
            testsIncluded={pkg.testsIncluded}
            tests={pkg.tests.slice(0, 3)}
            moreTests={pkg.moreTests}
            location={pkg.location}
          />
        ))}
      </div>
    </>
  );
}

export default GeneralHealth;