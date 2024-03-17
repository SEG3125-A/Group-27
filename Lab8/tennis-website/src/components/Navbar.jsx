import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import tennislogo from "../static/images/tennis-logo.png"
import loginicon from "../static//images/login-icon.png"
import '../static/styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <img id="tennislogo" src={tennislogo} alt="" />
            <Link to="/" className='navlink'>Home</Link>
            <Link to="/courses" className='navlink'>Courses</Link>
            <Link to="/CourtsViewing" className='navlink'>Courts</Link>
            <Link to="/" className='navlink'>Forums</Link>
            <Link to="/" className='navlink login'>Login/Signup</Link>
            <img id="loginicon" src={loginicon} alt="" />
        </nav>
    );
};

export default Navbar;