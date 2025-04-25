import React from 'react';
import EndocrionologyImage from '../assets/Front_Images/Endocrionolgy.png';
import doctorImage from '../assets/doctors/Erick_Medoza.jpg'; // Replace with actual doctor image

import './Endocrinology.css';

const Endocrionology = () => {
    return (
        <div className="specialization-page">
            <h1>Endocrinology</h1>
            <img src={EndocrionologyImage} alt="Endocrionology" />
            <p>Our endocrinology department specializes in the diagnosis and treatment of hormone-related conditions, including diabetes, thyroid disorders, and adrenal problems. We offer comprehensive care to manage these conditions effectively.</p>

            <h2>Our Expert Endocrinologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Sarah Smith" />
                    <p>Dr. Sarah Smith - Endocrinologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Diabetes management</li>
                <li>Thyroid treatment</li>
                <li>Hormonal imbalance treatment</li>
                <li>Adrenal disorder treatment</li>
            </ul>
        </div>
    );
};

export default Endocrionology;
