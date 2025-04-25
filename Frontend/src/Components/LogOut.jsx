import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate('/Login'); // Redirect to the Login page after logout
    window.location.reload(); 
  };

  return (
    <div className="logout-container">
      <div className="permission">
        <h2>Do you really want to LogOut?</h2>
        <div className="button-container">
          <button className='cancel' onClick={() => navigate('/')}>Cancel</button>
          <button className='logout' onClick={handleLogout}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
