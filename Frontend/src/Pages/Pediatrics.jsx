import React from 'react';
import PediatricsImage from '../assets/Front_Images/Pediatrics.png';

import doctorImage from '../assets/doctors/Ruchimam.png'; // Replace with actual doctor image

import './Pediatrics.css';

const Pediatrics = () => {
    return (
        <div className="specialization-page">
            <h1>Paediatrics</h1>
            <img src={PediatricsImage} alt="Pediatrics" />
            <p>Our paediatrics department specializes in the health and well-being of children, from infants to adolescents. We provide comprehensive care, including routine check-ups, vaccinations, and treatment for childhood illnesses.</p>

            <h2>Our Expert Pediatricians</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Jennifer Morgan" />
                    <p>Dr. Ruchi Jain - Pediatrician</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Routine check-ups and physical exams</li>
                <li>Vaccinations</li>
                <li>Asthma and allergy management</li>
                <li>Childhood illness treatments</li>
            </ul>
        </div>
    );
};

export default Pediatrics;
