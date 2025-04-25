import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NavbarStore.css';
import { GoArrowLeft } from 'react-icons/go';

function NavbarStore() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="back-button" onClick={handleBackClick}>
          <GoArrowLeft size={20} /> Back
        </button>
      </div>
      <div className="navbar-right">
        <Link to="/Cart" className="cart-link">
          <img
            className="cart-icon"
            src="https://i.pinimg.com/736x/d3/44/8e/d3448ef3e081d59992c31fefab5135d6.jpg"
            alt="Cart"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavbarStore;
