import React from 'react'
import courtImg from "../static/images/tenniscourt.jpg"
import woman_pic1 from "../static/images/avatar_w1.jpg";
import woman_pic2 from "../static/images/avatar_w2.jpg";
import man_pic1 from "../static/images/avatar_m1.jpg";
import "../static/styles/courseInfo.css"
import UserReview from "../components/UserCardReview"


export const Courses3 = () => {
    return (
        <div>
            <h1 className='section-name'>Course Title</h1>
            <div id='court-img'>
                <img src={courtImg} alt=""/>
            </div>
            <div className = 'courseDescription'> 
                <p> 
                Welcome to your first steps on the tennis court! Our course is designed to introduce you to the fascinating world of tennis, covering all the essential skills and knowledge you need to get started. From mastering the grip to executing perfect forehand and backhand shots, you will learn the foundational techniques that form the backbone of this exhilarating sport. Whether you aim to play competitively or simply enjoy a new hobby, our course will equip you with the basics of tennis, setting you on the path to continuous improvement and enjoyment of the game. Embrace the challenge and discover the joy of tennis with us!
                </p>
            </div>
            <div class="buttondiv">
            <a href ="/courseRegisterForm" >
                <button class="button" type="button">Register</button>
            </a>
            </div>
            <div className='users-container'>
            <UserReview 
                imageUrl={woman_pic1}
                user='USER 001'
                review='It was an exceptional experience from start to finish. The structured program meticulously laid out the fundamentals of tennis, making it accessible and engaging for a complete novice like myself.'
            />
            <UserReview 
                imageUrl={man_pic1}
                user='USER 002'
                review='The instructors were truly passionate about the sport. They were patient, encouraging, and always available to provide personalized feedback, ensuring I understood every technique before moving on.'
            />
            <UserReview 
                imageUrl={man_pic1}
                user='USER 003'
                review='One of the standout aspects was the emphasis on practical play. From the very first lesson, I was on the court, racket in hand, applying what I had learned. Highly recommend this course'
            />
            <UserReview 
                imageUrl={woman_pic2}
                user='USER 004'
                review='By the end of the course, not only had my skills improved dramatically, but I had also developed a deep love for tennis. The supportive learning environment contributed greatly to this outcome.'
            />
          </div>

        </div>
    )
}

export default Courses3;