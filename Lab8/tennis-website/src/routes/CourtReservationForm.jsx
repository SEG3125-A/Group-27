import React from 'react'
import courtImg from "../static/images/tenniscourt.jpg"
import "../static/styles/courtForm.css"

export const CourtReservationForm = () => {
  return (
    <div id="court-form-page">
      <div id='court-img'>
        <img src={courtImg} alt="" />
      </div>
      <hr />
      <div className='court-form'>
        <div className="dates-container">
            <h1>Time Slots</h1>
            <div className='date-input'>
              <label htmlFor="date">Date: </label>
              <input type="date" id='date' />
            </div>
        </div>
        <div className='time-slots'>
          <button className='timeButton'>7:30AM</button>
          <button className='timeButton'>8:30AM</button>
          <button className='timeButton'>9:30AM</button>
          <button className='timeButton'>10:30AM</button>
          <button className='timeButton'>11:30AM</button>
          <button className='timeButton'>12:30PM</button>
          <button className='timeButton'>1:30PM</button>
          <button className='timeButton'>2:30PM</button>
          <button className='timeButton'>3:30PM</button>
          <button className='timeButton'>4:30PM</button>
          <button className='timeButton'>5:30PM</button>
          <button className='timeButton'>6:30PM</button>
          <button className='timeButton'>7:30PM</button>
        </div>
      </div>
      <hr />
      <form action="">
          <h1>Reservation Details</h1>
          <div className='form-inputs'>
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id='full-name' required/>
            <label htmlFor="contact">Contact:</label>
            <input type="tel" id='contact'/>
            <label>Rentals Needed</label>
            <div id='rental-input'>
              <input type="radio" id='rentals-yes' name='rentals' value="yes"/><label htmlFor="rentals-yes">Yes</label>
              <input type="radio" id='rentals-no' name='rentals' value="no"/><label htmlFor="rentals-no">No</label>
            </div>
            <label htmlFor="special-req">Special Request:</label>
            <textarea name="special-req" id="" cols="30" rows="10"></textarea>
          </div>
          <hr />
          <h1>Payment Details</h1>
          <div className='form-inputs'>
            <label htmlFor="name-on-card">Name on Credit Card:</label>
            <input type="text" id='name-on-card' required/>
            <label htmlFor="card-number">Card Number:</label>
            <input type="text" id="card-number" />
            <label htmlFor="expiry-date">Expiry Date:</label>
            <input type="month" id="expiry-date" />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" />
          </div>
          <button type='submit'>Confirm Reservation</button>
          <button type='button'>Cancel</button>
      </form>
    </div>
  )
}

export default CourtReservationForm
