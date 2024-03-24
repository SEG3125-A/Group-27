import React from 'react'
import Card from '../components/Card'
import "../static/styles/home.css"
import loc from "../static/images/googlemap.png"
import ToggleButton from '../components/ToggleButton'


export const Courses2Adults = () => {
  return (
    <div id='home'> 
        <div>
        <ToggleButton currentPage="Adults" />
          <h1 className='section-name'>Beginner</h1>
          <div id='events-container'>
          <Card 
                title="Beginner Course 1"
                imageUrl="https://example.com/image.jpg"
                description="Began your tennis journey with us!"
                link="../Courses3"
            />
            <Card 
                title="Beginner Course 2"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="../Courses3"
            />
            <Card 
                title="Beginner Course 3"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="../Courses3"
            />
          </div>
        </div>

        <div>
          <h1 className='section-name'>Intermediate</h1>
          <div id='events-container'>
            <Card 
                title="Intermediate Course 1"
                imageUrl="https://example.com/image.jpg"
                description="Level up your tennis game with us!"
                link="../Courses3"
            />
            <Card 
                title="Intermediate Course 2"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="../Courses3"
            />
            <Card 
                title="Intermediate Course 3"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="../Courses3"
            />
          </div>
        </div>
        <div>
          <h1 className='section-name'>Advanced</h1>
          <div id='events-container'>
            <Card 
                title="Advanced Course 1"
                imageUrl="https://example.com/image.jpg"
                description="This course is for advanced learners of tennis."
                link="../Courses3"
            />
            <Card 
                title="Advanced Course 2"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="../Courses3"
            />
            <Card 
                title="Advanced Course 3"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="../Courses3"
            />
          </div>
        </div>

        <h1 className='section-name'>Where to Find Us</h1>
        <div id='contact-us'>
          <div className='grid-container'>
              <div className='grid-item contact'>
                <h4>Rally Range</h4>
                <p>460 Angel Turnpike</p>
                <p>South Brian, Manitoba T8Q 9V1, Canada</p>
                <h4>Contact Us</h4>
                <p>abc@rallyrange.com</p>
                <p>+1 343 996 2052</p>
              </div>
              <div className='grid-item opening-hours'>
                <h4>Opening Hours</h4>
                <p>Monday         9AM - 6PM</p>
                <p>Tuesday        9AM - 6PM</p>
                <p>Wednesday      9AM - 6PM</p>
                <p>Thursday       9AM - 6PM</p>
                <p>Friday         9AM - 6PM</p>
                <p>Saturday       9AM - 6PM</p>
                <p>Sunday         Closed</p>
              </div>
              <div className='grid-item map'>
                <img src={loc} alt="" className='locimg'/>
                <h4>Getting There</h4>
                <p>Getting1</p>
                <p>Getting2</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Courses2Adults;
