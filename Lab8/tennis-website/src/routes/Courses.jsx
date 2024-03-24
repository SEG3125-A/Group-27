import React from 'react'
import "../static/styles/course.css"
import kid from "../static/images/kid.jpg" // image from https://unsplash.com/photos/a-young-man-holding-a-tennis-racquet-on-a-tennis-court-r8EUf9oOtlQ
import adult from "../static/images/adult.jpg" // image from https://unsplash.com/photos/a-man-holding-a-tennis-racquet-on-a-tennis-court-JG3gTNM4q8A
import loc from "../static/images/googlemap.png"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation



export const Courses = () => {
    const { t, i18n } = useTranslation();

    return (
    <div>
        <div>
            <h1 className='ourCourses'>{t('Our Courses')}</h1>
            <p className='ourCoursesp'>{t('Course Intro')}</p>
        </div>
        <h1 className='ourCourses'>{t('Explore Our Courses')}</h1>
        <div className="image-container">
            <div className="image-block">
                <Link to="/Courses2Adults" >
                    <img src={kid} alt="Kids" />
                </Link>
                <p className="caption">{t('Kids')}</p>
            </div>

            <div className="image-block">
                <Link to="/Courses2Adults" >
                    <img src={adult} alt="Adults"/>
                </Link>
                <p className="caption">{t('Adults')}</p>
            </div>
        </div>


        <h1 className='section-name'>{t('Where to Find Us')}</h1>
        <div id='contact-us'>
          <div className='grid-container'>
              <div className='grid-item contact'>
                <h4>{t('Rally Range')}</h4>
                <p>460 Angel Turnpike</p>
                <p>South Brian, Manitoba T8Q 9V1, Canada</p>
                <h4>{t('Contact Us')}</h4>
                <p>abc@rallyrange.com</p>
                <p>+1 343 996 2052</p>
              </div>
              <div className='grid-item opening-hours'>
                <h4>{t('Opening Hours')}</h4>
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
                <h4>{t('Getting There')}</h4>
                <p>{t('Getting1')}</p>
                <p>{t('Getting2')}</p>
              </div>
            </div>
        </div>
    </div>

    )
}

export default Courses