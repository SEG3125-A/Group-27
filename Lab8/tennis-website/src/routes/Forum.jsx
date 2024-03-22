import React, { useState } from 'react';
import ForumCard from '../components/ForumCard';
import "../static/styles/forum.css";
import woman_pic1 from "../static/images/avatar_w1.jpg";
import woman_pic2 from "../static/images/avatar_w2.jpg";
import man_pic1 from "../static/images/avatar_m1.jpg";

export const Forum = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedMatches, setSelectedMatches] = useState([]);

  const forumCardsData = [
    {
      imageUrl: woman_pic1,
      userName: "USER 001",
      userDays: "Tuesday",
      userTimings: "Evenings",
      userMatchTypes: "Singles",
    },
    {
      imageUrl: man_pic1,
      userName: "USER 003",
      userDays: "Sunday",
      userTimings: "Mornings",
      userMatchTypes: "Doubles",
    },
    {
      imageUrl: man_pic1,
      userName:"USER 008", 
      userDays:"Wednesday",
      userTimings:"Nights",
      userMatchTypes:"Singles",
    },
    {
      imageUrl: woman_pic2,
      userName:"USER 005", 
      userDays:"Monday",
      userTimings:"Mornings",
      userMatchTypes:"Doubles",
    },
    {
      imageUrl: woman_pic2,
      userName:"USER 004", 
      userDays:"Friday",
      userTimings:"Nights",
      userMatchTypes:"Singles",
    },
    {
      imageUrl: man_pic1,
      userName:"USER 011", 
      userDays:"Tuesday",
      userTimings:"Mornings",
      userMatchTypes:"Doubles",
    },
    {
      imageUrl: woman_pic1,
      userName:"USER 009", 
      userDays:"Thursday",
      userTimings:"Nights",
      userMatchTypes:"Doubles",
    },
    {
      imageUrl: man_pic1,
      userName:"USER 010", 
      userDays:"Tuesday",
      userTimings:"Afternoons",
      userMatchTypes:"Singles",
    },
    {
      imageUrl: man_pic1,
      userName:"USER 006", 
      userDays:"Monday",
      userTimings:"Nights",
      userMatchTypes:"Singles",
    },
    {
      imageUrl: man_pic1,
      userName:"USER 012", 
      userDays:"Saturday",
      userTimings:"Afternoons",
      userMatchTypes:"Singles",
    },
  ];

  const handleCheckboxChange = (event, filterType) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      if (filterType === "day") {
        setSelectedDays([...selectedDays, value]);
      } else if (filterType === "time") {
        setSelectedTimes([...selectedTimes, value]);
      } else if (filterType === "match") {
        setSelectedMatches([...selectedMatches, value]);
      }
    } else {
      if (filterType === "day") {
        setSelectedDays(selectedDays.filter(day => day !== value));
      } else if (filterType === "time") {
        setSelectedTimes(selectedTimes.filter(time => time !== value));
      } else if (filterType === "match") {
        setSelectedMatches(selectedMatches.filter(match => match !== value));
      }
    }
  };

  const filteredForumCards = forumCardsData.filter(card =>
    (selectedDays.length === 0 || selectedDays.includes(card.userDays)) &&
    (selectedTimes.length === 0 || selectedTimes.includes(card.userTimings)) &&
    (selectedMatches.length === 0 || selectedMatches.includes(card.userMatchTypes))
  );

  return (
    <div id='forum'>
      <div>
        <h1 className='section-name'>1. Filter your Options</h1>
        <div className="filter-container">
          <div className="filter-section">
            <h2>Day(s)</h2>
            <label><input type="checkbox" name="day" value="Monday" onChange={(e) => handleCheckboxChange(e, "day")}/> Monday</label>
            <label><input type="checkbox" name="day" value="Tuuesday" onChange={(e) => handleCheckboxChange(e, "day")}/> Tuesday</label>
            <label><input type="checkbox" name="day" value="Wednesday" onChange={(e) => handleCheckboxChange(e, "day")}/> Wednesday</label>
            <label><input type="checkbox" name="day" value="Thursday" onChange={(e) => handleCheckboxChange(e, "day")}/> Thursday</label>
            <label><input type="checkbox" name="day" value="Friday" onChange={(e) => handleCheckboxChange(e, "day")}/> Friday</label>
            <label><input type="checkbox" name="day" value="Saturday" onChange={(e) => handleCheckboxChange(e, "day")}/> Saturday</label>
            <label><input type="checkbox" name="day" value="Sunday" onChange={(e) => handleCheckboxChange(e, "day")}/> Sunday</label>
          </div>
          <div className="filter-section">
            <h2>Time Period(s)</h2>
            <label><input type="checkbox" name="time" value="Mornings" onChange={(e) => handleCheckboxChange(e, "time")}/> Mornings</label>
            <label><input type="checkbox" name="time" value="Afternoons" onChange={(e) => handleCheckboxChange(e, "time")}/> Afternoons</label>
            <label><input type="checkbox" name="time" value="Nights" onChange={(e) => handleCheckboxChange(e, "time")}/> Nights</label>
          </div>
          <div className="filter-section">
            <h2>Type of Match:</h2>
            <label><input type="checkbox" name="match" value="Singles" onChange={(e) => handleCheckboxChange(e, "match")}/> Singles</label>
            <label><input type="checkbox" name="match" value="Doubles" onChange={(e) => handleCheckboxChange(e, "match")}/> Doubles</label>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      <div>
        <h1 className='section-name'>2. Browse through the Forum Posts</h1>
        <div className='users-container'>
          {filteredForumCards.map((card, index) => (
            <ForumCard 
              key={index}
              imageUrl={card.imageUrl}
              userName={card.userName}
              userDays={card.userDays}
              userTimings={card.userTimings}
              userMatchTypes={card.userMatchTypes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
