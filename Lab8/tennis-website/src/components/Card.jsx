import React from "react";
import '../static/styles/card.css'

const Card = ({ title, imageUrl, description, link }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt="Card image" className="card-img" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <a href={link} className="card-link">Learn More</a>
            </div>
        </div>
    );
};

export default Card;