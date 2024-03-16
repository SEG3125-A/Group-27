import React from 'react'
import courtImg from "../static/images/tenniscourt.jpg"
import "../static/styles/courseInfo.css"


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
            <div class="button">
                <button type="button">Register</button>
            </div>
        </div>
    )
}

export default Courses3;