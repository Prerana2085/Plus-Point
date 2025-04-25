import React from 'react';
import { Navbars } from '../Components/Navbars';
import CardComponent from '../Components/CardComponent';

const packages = [
  { 
    title: "Full Body Checkup - Basic", 
    price: 2499,
    testsIncluded: 32,
    tests: [
      "Complete Blood Count (CBC)",
      "Lipid Profile",
      "Liver Function Test (LFT)"
    ],
    moreTests: 29,
    location: "Plus Point Mulund"
  },
  { 
    title: "Essential Health Screening", 
    price: 1999,
    testsIncluded: 28,
    tests: [
      "Blood Sugar Fasting",
      "Urine Routine",
      "Thyroid Profile"
    ],
    moreTests: 25,
    location: "Plus Point Mumbai"
  },
  { 
    title: "Executive Package", 
    price: 3599,
    testsIncluded: 40,
    tests: [
      "Kidney Function Test",
      "Vitamin D",
      "ECG"
    ],
    moreTests: 37,
    location: "Plus Point Thane"
  },
  { 
    title: "Wellness Package", 
    price: 2899,
    testsIncluded: 35,
    tests: [
      "Iron Studies",
      "HbA1c",
      "Chest X-Ray"
    ],
    moreTests: 32,
    location: "Plus Point Pune"
  },
  { 
    title: "Advanced Health Check", 
    price: 4299,
    testsIncluded: 45,
    tests: [
      "Cardiac Risk Markers",
      "Liver Function Test",
      "Vitamin B12"
    ],
    moreTests: 42,
    location: "Plus Point Bangalore"
  },
  { 
    title: "Basic Fit Package", 
    price: 1499,
    testsIncluded: 20,
    tests: [
      "Fasting Blood Sugar",
      "Urine Microscopy",
      "BMI Check"
    ],
    moreTests: 17,
    location: "Plus Point Delhi"
  }
];

function Recommended() {
  return (
    <>
      <Navbars />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem', gap: '20px' }}>
        {packages.map((pkg, index) => (
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

export default Recommended;