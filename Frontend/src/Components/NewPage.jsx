import React from 'react';
import './NewPage.css';
import Anuragsir from '../assets/doctors/Anuragsir.png'
import Anandsir from '../assets/doctors/AnandSir.png'
import Atulsir from '../assets/doctors/Atulsir.png'
import Himanshusir from '../assets/doctors/Himanshujain.png'
import Ruchimam from '../assets/doctors/Ruchimam.png'
import Bowas from '../assets/doctors/BowasHarwon.png'
import Lairesir from '../assets/doctors/LaireJamson.png'
const NewPage = () => {
  return (
    <>
    <div className="hero">
      <div className="hero-text" style={{ transform: 'translateY(50%)', width:700 }}>
        <h1>Trusted Care at Mahavir cancer Hospital: Best Hospital in PATLIPUTRA</h1>
        <p>
          Welcome to Shri mahavir cancer Hospital, where you will find that integrity and quality 
          are our pillars of strength. As the best hospital in PATLIPUTRA, we are really passionate 
          about our duty to offer superior health care services. Over a period of 25 years, the 
          reputation of our hospital grew due to the trust and compassion our community had in us 
          and our innovative treatments. At Shri Mahavir cancer  Hospital, you are our top priority 
          as we care for your health. Our team of health care professionals takes care of your needs 
          to offer you personalized attention and the medical care of the highest quality throughout 
          your healthcare journey. Witness the difference when you choose Shri mahavir cancer
          Hospital as your reliable partner for health and fitness concerns.
        </p>
      </div>
      <div className="hero-image" style={{ transform: 'translateY(50%)', width:600 }}>
        <img src={Anandsir} alt="Shri mahavir cancer hospital" style={{ borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
      </div>
    </div>

    <section className="doctors">
      <h2>Group of Doctors</h2>
      <ul>
        <li>
          <img src={Anandsir} alt="Doctor 1" style={{width: '90%', height: 300, objectFit: 'cover', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
          <p>Dr. John Doe</p>
        </li>
        <li>
          <img src={Atulsir} alt="Doctor 2" style={{width: '90%', height: 300, objectFit: 'cover', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
          <p>Dr. Jane Doe</p>
        </li>
        <li>
          <img src={Himanshusir} alt="Doctor 3" style={{width: '90%', height: 300, objectFit: 'cover', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
          <p>Dr. Bob Smith</p>
        </li>
        <li>
          <img src={Ruchimam} alt="Doctor 4" style={{ width: '90%', height: 300, objectFit: 'cover', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
          <p>Dr. Alice Johnson</p>
        </li>
      </ul>
    </section>

    <section className="services">
      <h2>Our Specialized Healthcare Services</h2>
      <div className="service-grid">
        <div className="service-card">
          <img src="service1.jpg" alt="General Medicine" style={{width: '90%', height: 255, objectFit: 'cover', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
          <h3>General Medicine</h3>
          <p>Read More</p>
        </div>
        <div className="service-card">
          <img src="service2.jpg" alt="ICU & Critical Care" style={{width: '90%', height: 255, objectFit: 'cover', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
          <h3>ICU & Critical Care</h3>
          <p>Read More</p>
        </div>
                <div class="service-card">
                    {/* <img src="service4.jpg" alt="Cardiology"> */}
                    <h3>Cardiology</h3>
                    <p>Read More</p>
                </div>
                <div class="service-card">
                    {/* <img src="service5.jpg" alt="Obstetrics and Gynecology"> */}
                    <h3>Obstetrics and Gynecology</h3>
                    <p>Read More</p>
                </div>
            </div>
            </section>
            </>
  )
}
export default NewPage;
{/* // import React from 'react';
// import './NewPage.css';
// import doctorsImage from '../assets/doctors/Anuragsir.png'; 

// const NewPage = () => {
//   return (
//     <div className="hospital-container">
//       <div className="intro-section">
//         <h1>Trusted Care at Shri Balaji Aarogyam Hospital: Best Hospital in Kurukshetra</h1>
//         <p>
//           Welcome to Shri Balaji Aarogyam Hospital, where you will find that integrity and quality 
//           are our pillars of strength. As the best hospital in Kurukshetra, we are really passionate 
//           about our duty to offer superior health care services. Over a period of 25 years, the 
//           reputation of our hospital grew due to the trust and compassion our community had in us 
//           and our innovative treatments. At Shri Balaji Aarogyam Hospital, you are our top priority 
//           as we care for your health. Our team of health care professionals takes care of your needs 
//           to offer you personalized attention and the medical care of the highest quality throughout 
//           your healthcare journey. Witness the difference when you choose Shri Balaji Aarogyam 
//           Hospital as your reliable partner for health and fitness concerns.
//         </p>
//       </div>
//       <div className="image-section">
//         <img src={doctorsImage} alt="Group of Doctors" />
//       </div>
//       <div className="services-section">
//         <h2>Our Specialized Healthcare Services</h2>
//         <div className="service-cards">
//           <div className="service-card">General Medicine <br/> <a href="#">Read More</a></div>
//           <div className="service-card">ICU & Critical Care <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Orthopedics <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Cardiology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Urology Care <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Neurology Care <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Radiology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Anesthesiology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Medical Oncology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Gastroenterology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Endocrinology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Obstetrics and Gynecology <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Laparoscopic, Bariatric & General Surgery <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Pediatrics <br/> <a href="#">Read More</a></div>
//           <div className="service-card">Mother & Child Care <br/> <a href="#">Read More</a></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewPage; */}
