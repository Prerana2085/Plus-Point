import React from 'react';
import { Navbars } from '../Components/Navbars';
import CardComponent from '../Components/CardComponent';

const packages = [
  { 
    title: "Special Executive Checkup", 
    price: 8900, 
    testsIncluded: 25, 
    tests: ["STRESS ECHO", "LUNG FUNCTION TEST", "MRI BRAIN"], 
    moreTests: 22, 
    location: "Plus Point Kolkata" 
  },
  { 
    title: "Advanced Neurology Package", 
    price: 10500, 
    testsIncluded: 30, 
    tests: ["EEG", "MRI SPINE", "VITAMIN B12"], 
    moreTests: 27, 
    location: "Plus Point Delhi" 
  },
  { 
    title: "Comprehensive Oncology Screening", 
    price: 9500, 
    testsIncluded: 28, 
    tests: ["CT SCAN CHEST", "CA 125", "AFP TEST"], 
    moreTests: 25, 
    location: "Plus Point Bangalore" 
  },
  { 
    title: "Elite Cardio Package", 
    price: 8800, 
    testsIncluded: 24, 
    tests: ["2D ECHO", "TREADMILL TEST", "LIPID PROFILE"], 
    moreTests: 21, 
    location: "Plus Point Pune" 
  }
];

function Special() {
  return (
    <>
      <Navbars />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem', gap: '20px' }}>
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

export default Special;