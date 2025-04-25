import React from 'react';
import { Navbars } from '../Components/Navbars';
import CardComponent from '../Components/CardComponent';

const packages = [
  { 
    title: "Comprehensive Heart Checkup", 
    price: 6000, 
    testsIncluded: 20, 
    tests: ["ECG", "2D ECHO", "LIPID PROFILE"], 
    moreTests: 17, 
    location: "Plus Point Chennai" 
  },
  { 
    title: "Basic Cardiac Screening", 
    price: 3200, 
    testsIncluded: 12, 
    tests: ["BLOOD PRESSURE", "ECG", "CHOLESTEROL TOTAL"], 
    moreTests: 9, 
    location: "Plus Point Delhi" 
  },
  { 
    title: "Advanced Cardiac Risk Panel", 
    price: 7500, 
    testsIncluded: 22, 
    tests: ["TREADMILL TEST", "LDL CHOLESTEROL", "CRP-HS"], 
    moreTests: 19, 
    location: "Plus Point Pune" 
  },
  { 
    title: "Executive Heart Check", 
    price: 6900, 
    testsIncluded: 18, 
    tests: ["2D ECHO", "APOLIPOPROTEIN A1/B", "HOMOCYSTEINE"], 
    moreTests: 15, 
    location: "Plus Point Hyderabad" 
  },
];

function Heart() {
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

export default Heart;