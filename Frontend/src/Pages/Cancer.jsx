import React from "react";
import { Navbars } from "../Components/Navbars";
import CardComponent from "../Components/CardComponent";

const packages = [
  {
    title: "Cancer Screening Advanced",
    price: 7500,
    testsIncluded: 22,
    tests: [
      "CEA (Carcinoembryonic Antigen)",
      "PSA (Prostate-Specific Antigen)",
      "Mammography",
    ],
    moreTests: 19,
    location: "Plus Point Bangalore",
  },
  {
    title: "Basic Cancer Screening",
    price: 4800,
    testsIncluded: 15,
    tests: [
      "CEA",
      "BLOOD SUGAR",
      "LIVER FUNCTION TEST",
    ],
    moreTests: 12,
    location: "Plus Point Mumbai",
  },
  {
    title: "Comprehensive Cancer Panel",
    price: 9500,
    testsIncluded: 28,
    tests: [
      "MAMMOGRAPHY",
      "MRI SCAN",
      "CT SCAN",
    ],
    moreTests: 25,
    location: "Plus Point Pune",
  },
  {
    title: "Targeted Cancer Screening",
    price: 6000,
    testsIncluded: 18,
    tests: [
      "PSA",
      "CERVICAL CANCER TEST",
      "THYROID FUNCTION TEST",
    ],
    moreTests: 15,
    location: "Plus Point Delhi",
  },
];

function Cancer() {
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

export default Cancer;