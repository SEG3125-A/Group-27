import React from "react";
import "../static/styles/toggleButton.css";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const ToggleButton = ({ currentPage }) => {
    const { t, i18n } = useTranslation();
    const isKids = currentPage === "Kids";

    return (
        <div className="toggle-button">
            <span className={isKids ? "current" : "clickable"}>
                {isKids ? "Kids" : <Link to="/Courses2Kids">{t('Kids')} </Link>}
            </span>
            /
            <span className={!isKids ? "current" : "clickable"}>
                {!isKids ? "Adults" : <Link to="/Courses2Adults">{t('Adults')}</Link>}
            </span>
        </div>
    );
};

export default ToggleButton;