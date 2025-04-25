import React from 'react';
import OncologyImage from '../assets/Front_Images/Oncology.png';
import doctorImage from '../assets/doctors/LaireJamson.png'; // Replace with actual doctor image

import './Oncology.css';

const Oncology = () => {
    return (
        <div className="specialization-page">
            <h1>Oncology</h1>
            <img src={OncologyImage} alt="Oncology" />
            <p>Our oncology department provides expert care for cancer treatment, offering services like chemotherapy, radiation therapy, and surgical options to help treat various types of cancer.</p>

            <h2>Our Expert Oncologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Laire Jamson" />
                    <p>Dr. Laire Jamson - Oncologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Chemotherapy and radiation therapy</li>
                <li>Breast cancer treatment</li>
                <li>Prostate cancer treatment</li>
                <li>Surgical cancer treatment</li>
            </ul>
        </div>
    );
};

export default Oncology;
