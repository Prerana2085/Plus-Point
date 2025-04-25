import React from 'react';
import { Navbars } from '../Components/Navbars';
import CardComponent from '../Components/CardComponent';

const packages = [
  { 
    title: "Diabetes Management Check", 
    price: 3500, 
    testsIncluded: 10, 
    tests: ["HBA1C", "FASTING BLOOD SUGAR", "KIDNEY FUNCTION TEST"], 
    moreTests: 7, 
    location: "Plus Point Jaipur" 
  },
  { 
    title: "Comprehensive Diabetes Checkup", 
    price: 4500, 
    testsIncluded: 12, 
    tests: ["HBA1C", "FASTING BLOOD SUGAR", "LIPID PROFILE"], 
    moreTests: 9, 
    location: "Plus Point Delhi" 
  },
  { 
    title: "Advanced Diabetes Monitoring", 
    price: 5500, 
    testsIncluded: 14, 
    tests: ["HBA1C", "BLOOD PRESSURE", "CREATININE"], 
    moreTests: 11, 
    location: "Plus Point Pune" 
  },
  { 
    title: "Diabetes Early Detection Package", 
    price: 3200, 
    testsIncluded: 8, 
    tests: ["FASTING BLOOD SUGAR", "VITAMIN D", "CORTISOL LEVEL"], 
    moreTests: 5, 
    location: "Plus Point Mumbai" 
  }
];

function Diabetes() {
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

export default Diabetes;