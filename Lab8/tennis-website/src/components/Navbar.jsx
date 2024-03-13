import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='link'>Home</Link>
            <Link to="/courseRegisterForm" className='link'>Courses</Link>
            <Link to="/courtReserveForm" className='link'>Courts</Link>
            <Link to="/" className='link'>Forums</Link>
        </nav>
    );
};

export default Navbar;