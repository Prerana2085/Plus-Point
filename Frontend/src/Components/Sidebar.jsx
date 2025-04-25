import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const baseSidebarStyle = {
    width: '250px',
    height: '100vh',
    background: '#038635',
    color: '#ecf0f1',
    padding: '20px',
    position: 'fixed',
    top: '0',
    transition: 'left 0.3s ease',
};

const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    display: 'block',
    margin: '10px 0',
};

export const Sidebar = () => {
    const [chalu, setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!chalu);
    };
    const toggle = {
        position: 'fixed',
        top: '20px',
        left: chalu ? '260px' : '10px',
        transition: 'left 0.3s ease',
        zIndex: 1000,
        padding: '10px',
        background: '#2c3e50',
        color: '#ecf0f1',
        border: 'none',
        cursor: 'pointer',
    };

    // update sidebar style dynamically
    const sidebarStyle = {
        ...baseSidebarStyle,
        left: chalu ? '0' : '-250px',
    };

    return (
        <>
            <button style={toggle} onClick={toggleSidebar}>
                {chalu ? 'Close' : 'Open'} Sidebar
            </button>
            <div style={sidebarStyle}>
                <nav>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
                    <Link to="/HomeMedical" style={linkStyle}>Medicines</Link>
                    <Link to="/Consultancy" style={linkStyle}>Consultancy</Link>
                    <Link to="/Facilities" style={linkStyle}>Our Team</Link>
                    <Link to="/Healthcheck" style={linkStyle}>Health CheckUp</Link>
                    <Link to="/AboutUs" style={linkStyle}>About Us</Link>
                    <Link to="/addDoctor" style={linkStyle}>Add Doctor</Link>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;