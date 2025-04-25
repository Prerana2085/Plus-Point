import React, { useState } from "react";
import "./Aboutus.css";
import { Navbars } from "./Navbars";
import image1 from "../assets/aboutImages/image1.jpg"; // Adjust the path to your images
import image2 from "../assets/aboutImages/image2.jpg";
import image3 from "../assets/aboutImages/image3.jpg";
import image4 from "../assets/aboutImages/image4.jpg";
import faqImage from "../assets/aboutImages/faqImage.jpg"; // Add a relevant image for FAQ

// Icons for services (use Font Awesome or any icon library)
import {
  FaHeartbeat,
  FaStethoscope,
  FaCapsules,
  FaSyringe,
  FaShieldAlt,
} from "react-icons/fa";
import { Footer } from "./Footer.jsx";

export const Aboutus = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Navbars />
      <div className="aboutus-container">
        <div className="text-container">
          <h1 className="catchy-heading">Plus Point</h1>
          <h2 className="where-healing">Where Healing Begins</h2>
          <h3 className="subheading">
            Providing Trusted Healthcare with{" "}
            <span className="text-secondary">Compassion</span> and{" "}
            <span className="text-secondary">Excellence</span>
          </h3>
        </div>
        <div className="image-container">
          <div className="images-grid">
            <img src={image1} alt="Image 1" className="header-image" />
            <img src={image3} alt="Image 2" className="header-image" />
            <img src={image4} alt="Image 3" className="header-image" />
            <img src={image2} alt="Image 4" className="header-image" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-heading">
        <h2>Our Services</h2>
      </div>
      <div className="services-container">
        <div className="service-box">
          <div className="service-icon">
            <FaHeartbeat />
          </div>
          <h3 className="service-heading">Cardiology</h3>
          <p className="service-description">
            Comprehensive heart care with advanced diagnostic tools and
            treatments.
          </p>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FaStethoscope />
          </div>
          <h3 className="service-heading">General Medicine</h3>
          <p className="service-description">
            Trusted medical professionals for a wide range of health concerns.
          </p>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FaCapsules />
          </div>
          <h3 className="service-heading">Pharmacy</h3>
          <p className="service-description">
            Affordable and accessible pharmacy services with expert guidance.
          </p>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FaSyringe />
          </div>
          <h3 className="service-heading">Vaccinations</h3>
          <p className="service-description">
            Stay safe with our range of essential vaccines and immunizations.
          </p>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FaShieldAlt />
          </div>
          <h3 className="service-heading">Preventive Care</h3>
          <p className="service-description">
            Expert advice and strategies to help you live a healthier life.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="why-choose-us-heading">
        <h2>
          Why Choose{" "}
          <span style={{ color: "rgb(59, 157, 135)" }}>Plus Point</span>{" "}?
        </h2>
      </div>
      <div className="faq-container">
        <img src={faqImage} alt="FAQ" className="faq-image" />
        <div className="faq-content">
          <div
            className={`faq-question-box ${
              activeQuestion === 1 ? "active" : ""
            }`}
            onClick={() => toggleAnswer(1)}
          >
            <div className="faq-question">What is Plus Point's mission?</div>
            <div className="faq-answer">
              Plus Point aims to provide trusted healthcare services with
              compassion and excellence, ensuring the well-being of every
              individual we serve.
            </div>
          </div>

          <div
            className={`faq-question-box ${
              activeQuestion === 2 ? "active" : ""
            }`}
            onClick={() => toggleAnswer(2)}
          >
            <div className="faq-question">
              Do you offer telemedicine services?
            </div>
            <div className="faq-answer">
              Yes, we offer telemedicine services for consultations, allowing
              you to connect with our healthcare providers remotely.
            </div>
          </div>

          <div
            className={`faq-question-box ${
              activeQuestion === 3 ? "active" : ""
            }`}
            onClick={() => toggleAnswer(3)}
          >
            <div className="faq-question">How can I book an appointment?</div>
            <div className="faq-answer">
              You can book an appointment via our website or by calling our
              customer service team.
            </div>
          </div>

          <div
            className={`faq-question-box ${
              activeQuestion === 4 ? "active" : ""
            }`}
            onClick={() => toggleAnswer(4)}
          >
            <div className="faq-question">What makes Plus Point unique?</div>
            <div className="faq-answer">
              Plus Point combines innovative technology with personalized care,
              ensuring every patient receives top-notch healthcare tailored to
              their needs.
            </div>
          </div>

          <div
            className={`faq-question-box ${
              activeQuestion === 5 ? "active" : ""
            }`}
            onClick={() => toggleAnswer(5)}
          >
            <div className="faq-question">
              Do you offer video calls and chatbot services?
            </div>
            <div className="faq-answer">
              Yes, Plus Point provides video call consultations and a 24/7
              chatbot to assist you with your healthcare needs remotely and
              efficiently.
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};
