import React from 'react';

import NeurologyImage from '../assets/Front_Images/Neurology.png';
import doctorImage from '../assets/doctors/Himanshujain.png'
import './Neurology.css';

const Neurology = () => {
    return (
        <div className="specialization-page">
            <h1>Neurology</h1>
            <img src={NeurologyImage} alt="Neurology" />
            <p>Neurology focuses on the diagnosis and treatment of disorders of the nervous system. We offer comprehensive care for neurological disorders including stroke, epilepsy, and multiple sclerosis.</p>

            <h2>Our Expert Neurologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Himanshu Jain" />
                    <p>Dr. Himanshu Jain - Neurologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Electroencephalogram (EEG)</li>
                <li>Magnetic Resonance Imaging (MRI)</li>
                <li>Neurological consultations</li>
                <li>Stroke rehabilitation</li>
            </ul>
        </div>
    );
};

export default Neurology;
