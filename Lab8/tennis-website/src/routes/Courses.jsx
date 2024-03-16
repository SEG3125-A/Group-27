import React from 'react'
import "../static/styles/course.css"
import kid from "../static/images/kid.jpg" // image from https://unsplash.com/photos/a-young-man-holding-a-tennis-racquet-on-a-tennis-court-r8EUf9oOtlQ
import adult from "../static/images/adult.jpg" // image from https://unsplash.com/photos/a-man-holding-a-tennis-racquet-on-a-tennis-court-JG3gTNM4q8A
import loc from "../static/images/googlemap.png"


export const Courses = () => {
    return (
    <div>
        <div>
            <h1 className='ourCourses'>Our Courses</h1>
            <p className='ourCoursesp'>Our courses are expertly crafted to elevate your game, providing personalized training from seasoned tennis coaches. We blend technical skills with strategic insights, ensuring that every player, regardless of level, achieves their full potential on the court. Embrace a comprehensive learning experience, tailored to foster growth and ignite a lasting passion for tennis. Join us and transform your play, one stroke at a time.</p>
        </div>
        <h1 className='ourCourses'>Explore Our Courses</h1>
        <div className="image-container">
            <div className="image-block">
                <a href="../Courses2Kids">
                    <img src={kid} alt="Kids" />
                </a>
                <p className="caption">Kids</p>
            </div>

            <div className="image-block">
                <a href="../Courses2Adults">  
                    <img src={adult} alt="Adults"/>
                </a>
                <p className="caption">Adults</p>
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
                <p>1. Take the train to 460 Angel</p>
                <p>2. Walk 100m to the location</p>
              </div>
            </div>
        </div>
    </div>

    )
}

export default Courses