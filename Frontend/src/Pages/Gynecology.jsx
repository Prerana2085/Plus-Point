import React from 'react';
import GynecologyImage from '../assets/Front_Images/Gynecology.png';
import doctorImage from '../assets/doctors/Ruchimam.png'; // Replace with actual doctor image

import './Gynecology.css';
import Consultancy from '../Components/Consultancy';
import { useNavigate } from 'react-router-dom';


const Gynecology = () => {
    const navigate=useNavigate();
    const handleClick = ( )=>{
        navigate("/Consultancy");
    }
    return (
        <div className="specialization-page">
            <h1>Gynecology</h1>
            <img src={GynecologyImage} alt="Gynecology" />
            <p>Our gynecology department focuses on women's reproductive health, offering services such as routine exams, pregnancy care, and treatment for gynecological conditions like endometriosis and fibroids.</p>

            <h2>Our Expert Gynecologists</h2>
            <div className="doctor-list">
                <div className="doctor-card">
                    <img src={doctorImage} alt="Dr. Ruchi Jain" />
                    <p>Dr. Ruchi Jain - Gynecologist</p>
                    {/* <button onClick={handleClick}>Book Appointment</button> */}
                    <button >Book Appointment</button>
                </div>
            </div>

            <h2>Our Services</h2>
            <ul>
                <li>Annual exams and screenings</li>
                <li>Pregnancy and prenatal care</li>
                <li>Fertility treatment</li>
                <li>Endometriosis and fibroid management</li>
            </ul>
        </div>
    );
};

export default Gynecology;
