import React from "react";
import "../static/styles/toggleButton.css";


const ToggleButton = ({ currentPage }) => {
    const isKids = currentPage === "Kids";

    return (
        <div className="toggle-button">
            <span className={isKids ? "current" : "clickable"}>
                {isKids ? "Kids" : <a href="/Courses2Kids">Kids</a>}
            </span>
            /
            <span className={!isKids ? "current" : "clickable"}>
                {!isKids ? "Adults" : <a href="/Courses2Adults">Adults</a>}
            </span>
        </div>
    );
};

export default ToggleButton;