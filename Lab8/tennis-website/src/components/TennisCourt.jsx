import React, { useState } from 'react';
import "../static/styles/tennisCourt.css"
import { Link } from 'react-router-dom';


const TennisCourt = ({ imageUrl, courtNumber, schedule }) => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="court-card">
      <div className="court-image-section">
        <img src={imageUrl} alt={`Tennis Court ${courtNumber}`} />
        <p className="court-number">Tennis Court {courtNumber}</p>
      </div>
      <div className="court-info-section">
        <div className="date-section">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="date-column">
              <div className="day-name">{day}</div>
              <button
                className={`day-button ${selectedDay === index + 1 ? 'selected' : ''}`}
                onClick={() => setSelectedDay(index + 1)}>
                {index + 1}
              </button>
            </div>
          ))}
        </div>
        <div className="time-slots">
          {schedule[selectedDay] && schedule[selectedDay].map((time, index) => (
            <Link key={index} to={'/courtReserveForm'} className="time-slot">{time}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TennisCourt;