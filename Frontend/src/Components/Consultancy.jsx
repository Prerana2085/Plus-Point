import React, { useState } from 'react';
import './Consultancy.css';
import { useNavigate } from 'react-router-dom';
import { getIssuesList, AllDoctors } from './DoctorsList'; // Adjust import path as needed
import { Navbars } from './Navbars';
import { Footer } from './Footer.jsx';
// import ConsultancyData from '../../../Backend/models/ConultancyModel.js';
import AppointmentImg from '../assets/AppointmentImg/svg.png';
import image1 from "../assets/aboutImages/image1.jpg"; // Adjust the path to your images
import image2 from "../assets/aboutImages/image2.jpg";
import image3 from "../assets/aboutImages/image3.jpg";
import image4 from "../assets/aboutImages/image4.jpg";
import faqImage from "../assets/aboutImages/faqImage.jpg"; // Add a relevant image for FAQ
import axios from 'axios';
// Icons for services (use Font Awesome or any icon library)
import {
  FaHeartbeat,
  FaStethoscope,
  FaCapsules,
  FaSyringe,
  FaShieldAlt,
} from "react-icons/fa";

const Consultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    gender: '',
    doctor: '',    
    disease: '',
    dateOfAppointment: '',
    timing: '',
    mobile: '',
    email: '',
    fee: '',
    token: '',
  });
  const [error, setError] = useState('');
  const [appointment, setAppointment] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [token, setToken] = useState('');
  const navigate=useNavigate();
  const [availableDoctors, setAvailableDoctors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDiseaseChange = (e) => {
    const selectedDisease = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      disease: selectedDisease,
      doctor: '', // Reset doctor selection when disease changes
      fee: ''     // Reset Fee when disease changes
    }));

    // Filter doctors based on the selected disease
    const doctorsForDisease = AllDoctors.filter(doctor => doctor.issues.includes(selectedDisease));
    setAvailableDoctors(doctorsForDisease);
  };

  // Handle doctor selection
  const handleDoctorChange = (e) => {
    const selectedDoctor = availableDoctors.find(doctor => doctor.name === e.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      doctor: selectedDoctor ? selectedDoctor.name : '',
      fee: selectedDoctor ? selectedDoctor.Fee : ''
    }));
    setDoctor(selectedDoctor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // console.log("docs,", availableDoctors);
    const doctor = availableDoctors.filter((doc)=> doc.name == formData.doctor);
    // console.log("doctor", doctor[0].fee);
    
    // setFormData( (prev)=> {
    //   console.log("prev", prev);
      
    //   return {...prev, fee: doctor[0].fee} 
    // });

    const newToken = Math.floor(1000 + Math.random() * 9000);
    console.log("token",newToken)
  
    setToken(newToken);
    console.log(token)
    
    const payload = { 
      ...formData, 
      fee: doctor[0].fee, 
      token: newToken 
    };
    console.log("payload", payload);
    
    try {
      const response = await axios.post('https://plus-point-backend.onrender.com/Consultancy', payload);
      if (response) {
        
        console.log('Response Data:', response); // Only logs the data part of the response
      } else {
        console.error('No response received');
      }
      // console.log('Response Data:', response.data);
      setAppointment(true);
      // setToken(newToken);
      setError('');
    } catch (err) {
      console.log("err",err);
      
      setError('Error booking consultation');
    }




    if (!Array.isArray(AllDoctors)) {
      setError('Doctors data is not loaded correctly.');
      return;
    }

    const selectedDoctor = AllDoctors.find((doctor) =>
      doctor.issues.includes(formData.disease) && doctor.name === formData.doctor
    );

    if (selectedDoctor) {
      setDoctor(selectedDoctor);
      setAppointment(true);
      setError('');
      // const newToken = Math.floor(1000 + Math.random() * 9000);
      // setToken(newToken);
    } else {
      setError('No doctor available for this medical issue');
      setAppointment(false);
    }
  };

  const getUniqueIssues = () => {
    return getIssuesList();
  };
  const videoCallingHandler = () => {
    navigate("/videoCall");
  };
  return (
    <>
      <Navbars />
      <div className="intro-section">
        <div className="intro-content">
          <h2>Welcome to Our<br/><marquee><span>Consultancy Services</span> </marquee></h2>
          <p>
            We are dedicated to providing expert medical advice and care tailored to
            your needs.Book an appointment with highly experienced doctors for a range of specialties, all at your convenience.
          </p>
        </div>
        <div className="intro-image">
          {/* Add your SVG image */}
          <img
            src={AppointmentImg}
            alt="Consultancy illustration"
            className="svg-image"
          />
        </div>
      </div>
      <button className='videocalling' onClick={videoCallingHandler}>Start Video Call</button>
        <br></br>
      <div className="main-form">
      <div className="consultancy">
        <h2 className="pageheading">Consultancy Portal</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Left Section */}
            <div className="form-half">
              <h2>Personal Details</h2>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Right Section */}
            <div className="form-half">
              <h2>Appointment Details</h2>
              <div className="form-group">
                <label>Select Disease:</label>
                <select name="disease" value={formData.disease} onChange={handleDiseaseChange}>
                  <option value="">Select a disease</option>
                  {getUniqueIssues().map((disease, index) => (
                    <option key={index} value={disease}>{disease}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select Doctor:</label>
                <select name="doctor" value={formData.doctor} onChange={handleDoctorChange} disabled={!formData.disease}>
                  <option value="">Select a doctor</option>
                  {availableDoctors.map(doctor => (
                    <option key={doctor.name} value={doctor.name}>
                      {doctor.name} - ₹{doctor.fee}  {/* Displaying Fee with doctor's name */}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="form-group">
                <label>Doctor's Fee:</label>
                <input type="text" name="fee" value={formData.fee || ''} readOnly />
              </div> */}

              <div className="form-group">
                <label>Date of Appointment:</label>
                <input
                  type="date"
                  name="dateOfAppointment"
                  value={formData.dateOfAppointment}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Timing:</label>
                <input
                  type="time"
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Mobile:</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" id="book" className="submit-btn">
            Book Appointment
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {appointment && (
          <p>
          Appointment confirmed with Dr. {doctor.name} on{' '}
          {formData.dateOfAppointment} at {formData.timing}!{' '}
          <h3>Your token number is {token}</h3>
        </p>
        )}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Consultancy;