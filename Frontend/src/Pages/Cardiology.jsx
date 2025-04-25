import React from 'react';
import CardiologyImage from '../assets/Front_Images/Cardiology.png';
import doctorImage from '../assets/doctors/Anuragsir.png'

import './Cardiology.css';

const Cardiology = () => {
    return (
        <div className="specialization-page">
            <h1>Cardiology</h1>
            <img src={CardiologyImage} alt="Cardiology" />
            <p>Cardiology focuses on the diagnosis, treatment, and prevention of heart diseases. We offer a comprehensive range of services to ensure your heart health.</p>

            <h2>Our Expert Cardiologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Anurag Kaushal" />
                    <p>Dr. Anurag Kaushal - Cardiologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Electrocardiogram (ECG)</li>
                <li>Stress tests</li>
                <li>Cardiac surgery</li>
                <li>Heart disease prevention and management</li>
            </ul>
        </div>
    );
};

export default Cardiology;
