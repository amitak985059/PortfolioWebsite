// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ linkedInUrl, resumeUrl }) => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a></li>
                {/* <li><Link to="/newproject">New Project</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
