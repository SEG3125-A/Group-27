import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import tennislogo from "../static/images/tennis-logo.png"
import loginicon from "../static//images/login-icon.png"
import '../static/styles/navbar.css'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <nav>
            <img id="tennislogo" src={tennislogo} alt="Tennis Logo" />
            <Link to="/" className='navlink'>{t('home')}</Link>
            <Link to="/courses" className='navlink'>{t('courses')}</Link>
            <Link to="/CourtsViewing" className='navlink'>{t('courts')}</Link>
            <Link to="/Forum" className='navlink'>{t('forums')}</Link>
            <Link to="/login" className='navlink login'>{t('loginSignup')}</Link> {/* Updated link */}
            <img id="loginicon" src={loginicon} alt="Login Icon" />
            <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
                <option value="en">English</option>
                <option value="es">Español</option>
                {/* Add more languages as needed */}
            </select>
        </nav>
    );
};

export default Navbar;