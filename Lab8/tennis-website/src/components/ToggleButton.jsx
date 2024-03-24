import React from "react";
import "../static/styles/toggleButton.css";
import { Link } from 'react-router-dom';


const ToggleButton = ({ currentPage }) => {
    const isKids = currentPage === "Kids";

    return (
        <div className="toggle-button">
            <span className={isKids ? "current" : "clickable"}>
                {isKids ? "Kids" : <Link to="/Courses2Kids">Kids </Link>}
            </span>
            /
            <span className={!isKids ? "current" : "clickable"}>
                {!isKids ? "Adults" : <Link to="/Courses2Adults">Adults</Link>}
            </span>
        </div>
    );
};

export default ToggleButton;