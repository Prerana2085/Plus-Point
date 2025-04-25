import React from 'react';
import DermatologyImage from '../assets/Front_Images/Dermatology.png';
import doctorImage from '../assets/doctors/BowasHarwon.png'

import './Dermatology.css';

const Dermatology = () => {
    return (
        <div className="specialization-page">
            <h1>Dermatology</h1>
            <img src={DermatologyImage} alt="Dermatology" />
            <p>Our dermatology department specializes in diagnosing and treating a variety of skin conditions, including acne, psoriasis, and skin cancer. We offer medical and cosmetic dermatology services.</p>

            <h2>Our Expert Dermatologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Bowas Harmon" />
                    <p>Dr. Bowas Harmon - Dermatologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Skin cancer screening</li>
                <li>Laser treatments</li>
                <li>Acne and eczema management</li>
                <li>Botox and fillers</li>
            </ul>
        </div>
    );
};

export default Dermatology;
