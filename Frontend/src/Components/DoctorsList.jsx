import React from 'react';
import './DoctorsList.css'; // Make sure to import the CSS

// Importing images correctly
import image1 from '../assets/Team/image1.jpg';
import image2 from '../assets/Team/image2.jpg';
import image3 from '../assets/Team/image3.jpg';
import image4 from '../assets/Team/image4.jpg';
import image5 from '../assets/Team/image5.jpg';
import image6 from '../assets/Team/image6.jpg';
import image7 from '../assets/Team/image7.jpg';
import image8 from '../assets/Team/image8.jpg';
import image9 from '../assets/Team/image9.jpg';
import image10 from '../assets/Team/image10.jpg';
import image11 from '../assets/Team/image11.jpg';
import image12 from '../assets/Team/image12.jpg';

// Sample doctor data with rating
const AllDoctors = [
  {
    name: "singhthe",
    email: "princedoctor@gmail.com",
    age: 40,
    experience: 25,
    specialist: "Cardiologist",
    issues: ["Heart Attack", "Heart Failure"],
    timings: "MON - SUN, 24 * 7",
    image: image1,
    fee: 300,
    rating:5
  },
  {
    name: "Richa Jain",
    email: "sharma8035@gmail.com",
    age: 44,
    experience: 23,
    specialist: "Neurosurgeon",
    issues: ["Brain Tumor", "Hypertension", "Epilepsy", "Stroke"],
    timings: "MON - SUN, 24 * 7",
    image: image2,
    fee: 300,
    rating: 4
  },
  {
    name: "Dr. Dishant Jaryal",
    email: "sharma8035@gmail.com",
    age: 40,
    experience: 20,
    specialist: "Paediatrics and Gynecologist",
    issues: ["Heart Attack", "Arrhythmia", "Heart Failure", "Coronary Artery Disease"],
    timings: "MON - SUN, 24 * 7",
    image: image3,
    fee: 250,
    rating:4
  },
  {
    name: "Dr. Himanshu Anand",
    email: "sharma8035@gmail.com",
    age: 35,
    experience: 10,
    specialist: "Orthopaedic Surgeon",
    issues: ["Back Pain", "Fractures", "Arthritis", "Bone Tumors", "Spinal Cord Injury"],
    timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    image: image4,
    fee: 300,
    rating: 4
  },
  {
    name: "Dr. Japneet Arora",
    email: "sharma8035@gmail.com",
    age: 40,
    experience: 16,
    specialist: "General Surgeon",
    issues: ["Appendicitis", "Gallstones", "Hernia", "Breast Tumors", "Colon Cancer"],
    timings: "10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    image: image5,
    fee:200,
    rating: 4
  },
  {
    name: "Dr. Bowas Harwon",
    email: "sharma8035@gmail.com",
    age: 41,
    experience: 10,
    specialist: "Dermatologist",
    issues: ["Acne", "Eczema", "Psoriasis", "Skin Cancer", "Hair Loss"],
    timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    image: image6,
    fee: 500,
    rating:4
  },
  {
    name: "Dr. Lara Jamson",
    email: "sharma8035@gmail.com",
    age: 38,
    experience: 8,
    specialist: "Oncologist",
    issues: ["Fever", "Cold & Flu", "Diabetes", "Allergies"],
    timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    image: image7,
    fee:450,
    rating:4
  }
];

const DoctorsList = () => {
  console.log(AllDoctors);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars based on integer part
    const halfStar = rating % 1 >= 0.5 ? true : false; // Half star if the rating has a decimal part

    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star full">&#9733;</span>); // Full star
      } else if (i === fullStars && halfStar) {
        stars.push(<span key={i} className="star half">&#9733;</span>); // Half star
      } else {
        stars.push(<span key={i} className="star empty">&#9733;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div>
    <h1 className="Title">🏥 Meet Our Expert Medical Professionals 👩‍⚕️👨‍⚕️</h1>
      <div className="doctor-list">
        {AllDoctors.map((doctor, index) => (  
          <div className="doctor-item" key={index}>
            <img src={doctor.image} alt={doctor.name} />
            <div className="doctor-details">
              <h3>{doctor.name}</h3>
              <p><strong>Age:</strong> {doctor.age}</p>
              <p><strong>Specialist:</strong> {doctor.specialist}</p>
              <p><strong>Experience:</strong> {doctor.experience} years</p>
              <p><strong>Timings:</strong> {doctor.timings}</p>
              <p><strong>Fee:</strong> ₹{doctor.fee}</p>
              <div className="doctor-rating">
                <strong>Rating: </strong>
                {renderStars(doctor.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export const getIssuesList = () => {
  const issues = AllDoctors.flatMap((doctor) => doctor.issues);
  return [...new Set(issues)];
};

export { AllDoctors };
export default DoctorsList;