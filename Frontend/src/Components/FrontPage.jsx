import React, { useState } from 'react';
import './FrontPage.css'; // Ensure to import your CSS file
import HospitalImage from '../assets/Front_Images/Hospital.png';
import NeurologyImage from '../assets/Front_Images/Neurology.png';
import OrthopedicsImage from '../assets/Front_Images/Orthopedics.png';
import PediatricsImage from '../assets/Front_Images/Pediatrics.png';
import CardiologyImage from '../assets/Front_Images/Cardiology.png';
import DermatologyImage from '../assets/Front_Images/Dermatology.png';
import GynecologyImage from '../assets/Front_Images/Gynecology.png';
import OncologyImage from '../assets/Front_Images/Oncology.png';
import GastroenterologyImage from '../assets/Front_Images/Gastroenterology.png';
import EndocrionolgyImage from '../assets/Front_Images/Endocrionolgy.png';
import OphthalmologyImage from '../assets/Front_Images/Ophthalmology.png';
import { Navbars } from './Navbars';
import UserInfo from './UserInfo';
import { Link, redirect, useNavigate } from 'react-router-dom';
import HospitalLogo from "../assets/HospitalFrontPage/HospitalLogo.jpg"
import { Footer } from './Footer.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import Consultancy from './Consultancy';
import TelephoneImage from '../assets/HospitalFrontPage/telephoneImg.webp';




const FrontPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        
        navigate('/Consultancy')  ; // Show Consultancy component when button is clicked
    };
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const testimonials = [
        { quote: "The doctors and staff are incredibly supportive. They helped me through every step of my treatment.", name: "Nothing" },
        { quote: "I am so grateful for the care I received. The hospital facilities are top-notch.", name: "Jane Smith" },
        { quote: "Their personalized attention and modern equipment gave me confidence during my recovery.", name: "Alex Johnson" },
        { quote: "Exceptional service and care from the entire staff. Highly recommend this hospital.", name: "Emily Davis" },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };
    const BookAppointment = () => {
        const navigate = useNavigate();
        const onClickConsultancy = () => {
            navigate("/Consultancy");
        }
    }

    const handleContact= async(e)=>{
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:4000/admin/adminemail", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email,name,message})
            })
            const data = await res.json();
    
            if(data){
                alert("Email sent successfully");
                setEmail("");
                setName("");
                setMessage("");
            }else{
                alert("Email not sent");
            }
        } catch (error) {
            console.log(error);
            alert("Email not sent, something went wrong");
        }
    }
    return (
        <div>
            <Navbars />
            {/* Header */}
            <div className="hero-section">
                <div className="hero-text">
                    <h1>We help patients<br></br>live a healthy,<br></br><span className="one">longer life.</span></h1>
                    <p>Your health is our priority. Explore our treatments and services.</p>
                    <button className="appointment-button" onClick={handleButtonClick}>
                        Request an Appointment
                    </button>

                </div>
                <img src={HospitalLogo} alt="Hospital Logo" className="hospital-logo" />
            </div>
            {/* Fmedical services*/}
            <div className="medical-services">
                <h2>Providing the Best Medical Services</h2>
                <div className="icons-container">
                <Link className='' to={"/Facilities"}>
                    <div className="icon-card" id="find-doctor">
                        <i className="fa fa-user-md" ></i>
                        <span>Find a Doctor</span>
                        <p>Search for certified medical professionals in your area.</p> {/* Paragraph added */}
                    </div>
                    </Link>
                    <Link to={"/HomeMedical"}>
                    <div className="icon-card" id="find-location">
                        <i className="fas fa-map-marker"></i>
                        <span>Medicines</span>
                        <p>Checkout the Medicines and general biotics.</p> {/* Paragraph added */}
                    </div>
                    </Link>
                    <Link to={"/Consultancy"}>
                    <div className="icon-card" id="book-appointment">
                        <i className="fa fa-calendar-check"></i>
                        <span>Book Appointment</span>
                        <p>Schedule your appointments quickly and hassle-free.</p> {/* Paragraph added */}
                    </div>
                    </Link>
                    <Link to={"/nearby-hospitals"}>
                    <div className="icon-card" id="book-appointment">
                        <i className="fa fa-hospital"></i>
                        <span>Nearest Hospital </span>
                        <p>Visit nearest Hospital.</p> {/* Paragraph added */}
                    </div>
                    </Link>
                </div>
            </div>

            {/* Treatments */}
            <div className="treatments">
                <h2>Our Treatments</h2>
                {/* <div className="card-container">
                    {[
                        { name: 'Neurology', img: NeurologyImage },
                        { name: 'Orthopedics', img: OrthopedicsImage },
                        { name: 'Pediatrics', img: PediatricsImage },
                        { name: 'Cardiology', img: CardiologyImage },
                        { name: 'Dermatology', img: DermatologyImage },
                        { name: 'Gynecology', img: GynecologyImage },
                        { name: 'Oncology', img: OncologyImage },
                        { name: 'Gastroenterology', img: GastroenterologyImage },
                        { name: 'Endocrinology', img: EndocrionolgyImage },
                        { name: 'Ophthalmology', img: OphthalmologyImage }
                    ].map((treatment, index) => (
                        <div className="card" key={index}>
                            <img src={treatment.img} alt={treatment.name} />
                            <h3>{treatment.name}</h3>
                        </div>
                    ))}
                </div> */}
                <div className="card-container">
                    <Link to="/neurology" className="card">
                        <img src={NeurologyImage} alt="Neurology" />
                        <h3>Neurology</h3>
                    </Link>
                    <Link to="/dermatology" className="card">
                        <img src={DermatologyImage} alt="Dermatology" />
                        <h3>Dermatology</h3>
                    </Link>
                    <Link to="/cardiology" className="card">
                        <img src={CardiologyImage} alt="Cardiology" />
                        <h3>Cardiology</h3>
                    </Link>
                    <Link to="/orthopedics" className="card">
                        <img src={OrthopedicsImage} alt="Orthopedics" />
                        <h3>Oardiology</h3>
                    </Link>
                    <Link to="/endocrionology" className="card">
                        <img src={EndocrionolgyImage} alt="Endocrionology" />
                        <h3>Endocrinology</h3>
                    </Link>
                    <Link to="/gastroenterology" className="card">
                        <img src={GastroenterologyImage} alt="Gastroenterology" />
                        <h3>Gastroenterology</h3>
                    </Link>
                    <Link to="/oncology" className="card">
                        <img src={OncologyImage} alt="Oncology" />
                        <h3>Oncology</h3>
                    </Link>
                    <Link to="/gynecology" className="card">
                        <img src={GynecologyImage} alt="Gynecology" />
                        <h3>Gynecology</h3>
                    </Link>
                    <Link to="/pediatrics" className="card">
                        <img src={PediatricsImage} alt="Pediatrics" />
                        <h3>Pediatrics</h3>
                    </Link>
                    <Link to="/ophthalmology" className="card">
                        <img src={OphthalmologyImage} alt="Ophthalmology" />
                        <h3>Ophthalmology</h3>
                    </Link>
                </div>




                {/* {[
                        { name: 'Neurology', img: NeurologyImage },
                        { name: 'Orthopedics', img: OrthopedicsImage },
                        { name: 'Pediatrics', img: PediatricsImage },
                        { name: 'Cardiology', img: CardiologyImage },
                        { name: 'Dermatology', img: DermatologyImage },
                        { name: 'Gynecology', img: GynecologyImage },
                        { name: 'Oncology', img: OncologyImage },
                        { name: 'Gastroenterology', img: GastroenterologyImage },
                        { name: 'Endocrinology', img: EndocrionolgyImage },
                        { name: 'Ophthalmology', img: OphthalmologyImage }
                    ].map((treatment, index) => (
                        <div className="card" key={index}>
                            <img src={treatment.img} alt={treatment.name} />
                            <h3>{treatment.name}</h3>
                        </div> */}
                {/* ))} */}




                {/* What our patient says */}
                <div className="patient-testimonials">
                    <h2>What Our Patients Say</h2>
                    <Slider
                        {...settings}
                        className="testimonials-slider"
                        autoplay={true} // This enables autoplay
                        autoplaySpeed={3000} // This sets the interval between slides (in milliseconds)
                    >
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial-card" key={index}>
                                <p>"{testimonial.quote}"</p>
                                <h4>- {testimonial.name}</h4>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* news and update */}
                <div className="news-updates">
                    <h2>Latest News & Updates</h2>
                    <div className="news-item">
                        <h3>New Cardiology Department Opening</h3>
                        <p>We are excited to announce the opening of our new Cardiology Department. Our team of experts is ready to serve you.</p>
                        <a href="/news-details" className="read-more">Read More</a>
                    </div>
                    <div className="news-item">
                        <h3>Health Screening Services Now Available</h3>
                        <p>Our new health screening services will help detect early signs of health issues. Book an appointment today.</p>
                        <a href="/news-details" className="read-more">Read More</a>
                    </div>
                </div>

                {/* contact */}
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <div className="contact-content">
                        <div className="telephone-image">
                            <img src={TelephoneImage} alt="Telephone" />
                        </div>
                        {/* <div className='cls'> */}
                        <form className="contact-form">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" onChange={handleNameChange}/>

                            <label>Email</label>
                            <input type="email" placeholder="Your Email" onChange={handleEmailChange}/>

                            <label>Message</label>
                            <textarea placeholder="Your Message" onChange={handleMessageChange}></textarea>

                            <button className="contact-button" onClick={handleContact}>Send Message</button>
                        </form>
                        {/* </div> */}
                    </div>
                </div>



            </div>
            <Footer />
        </div>

    );
};

export default FrontPage;
