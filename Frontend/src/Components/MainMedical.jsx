import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMedical.css';
import { Navbars } from './Navbars';
// import { NavbarStore } from './NavbarStore';


function MainMedical() {
  const navigate = useNavigate(); 

  const handleExplore = () => {
    navigate('/Shop'); 
  };

  return (
    <>
    <Navbars/>
    <div className="main">
      <div className="content">
        <h1 className="heading-main">WELLNESS STARTS <br />HERE</h1>
        <p className="text-main">Providing medicines at your doorstep</p>
        <button className="button-main" onClick={handleExplore}>
          Explore
        </button>
      </div>
    </div>
    </>
  );
}

export default MainMedical;
