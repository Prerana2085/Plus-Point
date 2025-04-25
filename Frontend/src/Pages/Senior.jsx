import React from 'react';
import { Navbars } from '../Components/Navbars';
import CardComponent from '../Components/CardComponent';

const packages = [
  { 
    title: "Senior Citizen Health Package", 
    price: 4800, 
    testsIncluded: 14, 
    tests: ["BONE DENSITY TEST", "VITAMIN B12", "KIDNEY FUNCTION TEST"], 
    moreTests: 11, 
    location: "Plus Point Pune" 
  },
  { 
    title: "Geriatric Wellness Panel", 
    price: 3999, 
    testsIncluded: 18, 
    tests: ["ECG", "THYROID PROFILE", "LIVER FUNCTION TEST"], 
    moreTests: 15, 
    location: "Plus Point Delhi" 
  },
  { 
    title: "Comprehensive Senior Care", 
    price: 5200, 
    testsIncluded: 20, 
    tests: ["COMPLETE BLOOD COUNT", "BLOOD SUGAR", "X-RAY CHEST"], 
    moreTests: 17, 
    location: "Plus Point Mumbai" 
  },
  { 
    title: "Heart & Bone Checkup for Seniors", 
    price: 4400, 
    testsIncluded: 16, 
    tests: ["ECHOCARDIOGRAPHY", "BONE MINERAL DENSITY", "CALCIUM TEST"], 
    moreTests: 13, 
    location: "Plus Point Bangalore" 
  }
];

function Senior() {
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

export default Senior;