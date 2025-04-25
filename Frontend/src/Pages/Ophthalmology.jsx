import React from 'react';
import OpthalmologyImage from '../assets/Front_Images/Ophthalmology.png';
import doctorImage from '../assets/doctors/Tavel.jpg'; // Replace with actual doctor image

import './Ophthalmology.css';

const Ophthalmology = () => {
    return (
        <div className="specialization-page">
            <h1>Opthalmology</h1>
            <img src={OpthalmologyImage} alt="Ophthalmology" />
            <p>Our opthalmology department offers expert care in diagnosing and treating a variety of eye conditions, including cataracts, glaucoma, and age-related macular degeneration. We provide both medical and surgical eye care.</p>

            <h2>Our Expert Ophthalmologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. James Adams" />
                    <p>Dr. James Adams - Ophthalmologist</p>
                    <button>Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Cataract surgery</li>
                <li>Glaucoma treatment</li>
                <li>Lasik eye surgery</li>
                <li>Retina and macular disease management</li>
            </ul>
        </div>
    );
};

export default Ophthalmology;
