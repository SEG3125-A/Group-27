import React from 'react'
import "../static/styles/course.css"
import kid from "../static/images/kid.jpg" // image from https://unsplash.com/photos/a-young-man-holding-a-tennis-racquet-on-a-tennis-court-r8EUf9oOtlQ
import adult from "../static/images/adult.jpg" // image from https://unsplash.com/photos/a-man-holding-a-tennis-racquet-on-a-tennis-court-JG3gTNM4q8A
import loc from "../static/images/googlemap.png"
import { Link } from 'react-router-dom';



export const Courses = () => {
    return (
    <div>
        <div>
            <h1 className='ourCourses'>Our Courses</h1>
            <p className='ourCoursesp'>Course Intro</p>
        </div>
        <h1 className='ourCourses'>Explore Our Courses</h1>
        <div className="image-container">
            <div className="image-block">
                <Link to="/Courses2Adults" >
                    <img src={kid} alt="Kids" />
                </Link>
                <p className="caption">Kids</p>
            </div>

            <div className="image-block">
                <Link to="/Courses2Adults" >
                    <img src={adult} alt="Adults"/>
                </Link>
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
                <p>Getting1</p>
                <p>Getting2</p>
              </div>
            </div>
        </div>
    </div>

    )
}

export default Courses