import React from 'react';
import CardComponent from '../Components/CardComponent';
import { Navbars } from '../Components/Navbars';

const packages = [
  { 
    title: "Pre Employment Check", 
    price: 3800,
    testsIncluded: 14,
    tests: [
      "BLOOD UREA NITROGEN, SERUM (1079H-SRL)",
      "X-RAY CHEST- PA",
      "CONSULTATION"
    ],
    moreTests: 11,
    location: "Plus Point Mulund"
  },
  { 
    title: "Pre Employment Health Screening", 
    price: 3200,
    testsIncluded: 12,
    tests: [
      "BLOOD PRESSURE CHECK", 
      "EYE TEST", 
      "HEARING TEST"
    ],
    moreTests: 9,
    location: "Plus Point Pune"
  },
  { 
    title: "Pre Employment Executive Package", 
    price: 4500,
    testsIncluded: 16,
    tests: [
      "LUNG FUNCTION TEST", 
      "BLOOD SUGAR", 
      "THYROID PROFILE"
    ],
    moreTests: 13,
    location: "Plus Point Bangalore"
  },
  { 
    title: "Comprehensive Pre Employment Checkup", 
    price: 5500,
    testsIncluded: 18,
    tests: [
      "LIVER FUNCTION TEST", 
      "ECG", 
      "VITAMIN D LEVEL"
    ],
    moreTests: 15,
    location: "Plus Point Mumbai"
  }
];

const PreConception = () => {
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
};

export default PreConception;
