import React from 'react';
import OrthopedicsImage from '../assets/Front_Images/Orthopedics.png';
import doctorImage from '../assets/doctors/AnandSir.png'; // Replace with actual doctor image

import './Orthopedics.css';

const Orthopedics = () => {
    return (
        <div className="specialization-page">
            <h1>Orthopedics</h1>
            <img src={OrthopedicsImage} alt="Orthopedics" />
            <p>Our orthopedics department specializes in treating musculoskeletal issues, including bone fractures, joint problems, arthritis, and sports injuries. We offer both surgical and non-surgical treatments.</p>

            <h2>Our Expert Orthopedic Surgeons</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Himanshu Anand" />
                    <p>Dr. Himanshu Anand - Orthopedic Surgeon</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Joint replacement surgery</li>
                <li>Arthritis management</li>
                <li>Sports injury treatments</li>
                <li>Bone fracture care</li>
            </ul>
        </div>
    );
};

export default Orthopedics;
