import React from 'react';
import GastroenterologyImage from '../assets/Front_Images/Gastroenterology.png';
import doctorImage from '../assets/doctors/Angel_Sadhegi.jpg'; // Replace with actual doctor image

import './Gastroenterology.css';

const Gastroenterology = () => {
    return (
        <div className="specialization-page">
            <h1>Gastroenterology</h1>
            <img src={GastroenterologyImage} alt="Gastroenterology" />
            <p>Our gastroenterology department provides expert care for digestive system issues, including conditions such as irritable bowel syndrome (IBS), acid reflux, Crohn's disease, and liver disorders.</p>

            <h2>Our Expert Gastroenterologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Michael Jones" />
                    <p>Dr. Michael Jones - Gastroenterologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Colonoscopy and endoscopy</li>
                <li>IBS and Crohn’s disease management</li>
                <li>Acid reflux treatment</li>
                <li>Liver disease treatment</li>
            </ul>
        </div>
    );
};

export default Gastroenterology;
