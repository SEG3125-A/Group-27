import React from 'react'
import "../static/styles/courseForm.css"
import courseImg from "../static/images/courseImg.jpg" // Photo by https://unsplash.com/@johnfo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">John Fornander</a> on <a href="https://unsplash.com/photos/person-wearing-pair-of-white-low-top-sneakers-while-holding-wilson-tennis-racket-4R9CcBdQTEg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  

export const CourseRegistrationForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here...
    alert('Form submitted successfully!');
    window.location.reload();
  };

  return (
    <div id='course-form-page'>
      <div id='course-img'>
        <img src={courseImg} alt="" />
      </div>
      <hr />
      <div className='course-form'>
        <form action="" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <div className='form-inputs'>
            <label htmlFor="full-name">Full Name:</label>
            <input 
              type="text" 
              id='full-name' 
              onInvalid={(e) => e.target.classList.add('invalid')}
              onInput={(e) => e.target.classList.remove('invalid')}
              required/>
            <label>Gender:</label>
            <div className='group-input'>
              <input type="radio" id='male' name='gender' value="male" required/><label htmlFor="male">Male</label>
              <input type="radio" id='female' name='gender' value="female" required/><label htmlFor="female">Female</label>
            </div>
            <label htmlFor="contact">Contact:</label>
            <input type="tel" id='contact' required/>
            <label htmlFor="course-input">Course:</label>
            <div className='group-input'>
              <select name="course-name" className="course-input">
                <option value="Intro Adults">Intro to Tennis: Adults</option>
                <option value="Intro Juniors">Intro to Tennis: Juniors</option>
                <option value="Singles">Singles Fun</option>
                <option value="Doubles">Double or Nothing</option>
              </select>
            </div>
            <label>Skill Level:</label>
            <div className='group-input'>
              <input type="radio" id='beginner' name='skill' value="beginner" required/><label htmlFor="beginner">Beginner</label>
              <input type="radio" id='intermediate' name='skill' value="intermediate" required/><label htmlFor="intermediate">Intermediate</label>
              <input type="radio" id='advcanced' name='skill' value="advanced" required/><label htmlFor="advanced">Advanced</label>
            </div>
            <label>Session Time:</label>
            <div className='group-input'>
              <select name="session-time" className="session-input">
                  <option value="9.30am - 11.30am">9.30am - 11.30am</option>
                  <option value="1.30am - 3.30am">1.30pm - 3.30pm</option>
                  <option value="3.30am - 5.30am">3.30pm - 5.30pm</option>
              </select>
            </div>
            <label htmlFor="special-req">Special Request:</label>
            <textarea name="special-req" id="" cols="30" rows="5"></textarea>
            <button id="submit" type='submit'>Register</button>
            <button id="cancel" type='button'>Cancel</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default CourseRegistrationForm
