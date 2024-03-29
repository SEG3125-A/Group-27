import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import tennislogo from "../static/images/tennis-logo.png"
import loginicon from "../static//images/login-icon.png"
import '../static/styles/navbar.css'    

const Navbar = () => {
    return (
        <nav>
            <img id="tennislogo" src={tennislogo} alt="Tennis Logo" />
            <Link to="/" className='navlink'>Home</Link>
            <Link to="/courses" className='navlink'>Courses</Link>
            <Link to="/CourtsViewing" className='navlink'>Courts</Link>
            <Link to="/Forum" className='navlink'>Forums</Link>
            <Link to="/login" className='navlink login'>Login/Signup</Link>
            <img id="loginicon" src={loginicon} alt="Login Icon" />
        </nav>
    );
};

export default Navbar;