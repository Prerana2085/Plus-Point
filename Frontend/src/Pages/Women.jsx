import React from "react";
import { Navbars } from "../Components/Navbars";
import CardComponent from "../Components/CardComponent";

const packages = [
  {
    title: "Women’s Health Check Advanced",
    price: 5800,
    testsIncluded: 16,
    tests: ["PAP SMEAR", "MAMMOGRAPHY", "VITAMIN D TEST"],
    moreTests: 13,
    location: "Plus Point Hyderabad",
  },
  {
    title: "Essential Women's Wellness",
    price: 4200,
    testsIncluded: 14,
    tests: ["THYROID PROFILE", "BLOOD SUGAR", "URINE ROUTINE"],
    moreTests: 11,
    location: "Plus Point Mumbai",
  },
  {
    title: "PCOS Panel",
    price: 3600,
    testsIncluded: 12,
    tests: ["LH", "FSH", "INSULIN FASTING"],
    moreTests: 9,
    location: "Plus Point Pune",
  },
  {
    title: "Fertility Assessment",
    price: 6100,
    testsIncluded: 18,
    tests: ["AMH", "TVS ULTRASOUND", "TSH"],
    moreTests: 15,
    location: "Plus Point Delhi",
  },
  {
    title: "Pregnancy Health Panel",
    price: 7800,
    testsIncluded: 20,
    tests: ["CBC", "BLOOD GROUPING", "GLUCOSE CHALLENGE TEST"],
    moreTests: 17,
    location: "Plus Point Bangalore",
  },
];

function Women() {
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

export default Women;