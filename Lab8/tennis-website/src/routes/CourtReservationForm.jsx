import React, {useState} from 'react'
import courtImg from "../static/images/tenniscourt.jpg"
import "../static/styles/courtForm.css"

export const CourtReservationForm = () => {

  // Calculate today's date and the max date (7 days from today)
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0];

  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState(today);

  // Handler for date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const schedule = {
    0: ['7:30am', '8:30am', '9:30am', '10:30am', '11:30am', '12:30pm', '1:30pm'],
    1: ['8:30am', '10:30am'],
    2: ['7:30am', '11:30am'],
    3: ['8:30am', '12:30pm'],
    4: ['9:30am', '1:30pm'],
    5: ['10:30am', '2:30pm'],
    6: ['7:30am', '1:30pm'],
  }

  const timeSlotsForToday = schedule[new Date(selectedDate).getDay()]

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here...
    alert('Form submitted successfully!');
    window.location.reload();
  };

  return (
    <div id="court-form-page">
      <div id='court-img'>
        <img src={courtImg} alt="" />
      </div>
      <hr />
      <div className='court-form'>
        <div className="dates-container">
            <h3>Available Time Slots for {selectedDate}</h3>
            <div className='date-input'>
              <label htmlFor="date">Date: </label>
              <input
                id='date'
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                min={today}
                max={maxDate}
                required
              />
            </div>
        </div>
        <div className='time-slots'>
          {timeSlotsForToday.map((timeSlot, index) => (
              <input type='button' className='timeButton' name='time' key={index} value={timeSlot}/>
          ))}
        </div>
      </div>
      <hr />
      <form action="" onSubmit={handleSubmit}>
          <h1>Reservation Details</h1>
          <div className='form-inputs'>
            <label htmlFor="full-name">Full Name:</label>
            <input 
              type="text" 
              id='full-name' 
              onInvalid={(e) => e.target.classList.add('invalid')}
              onInput={(e) => e.target.classList.remove('invalid')}
              required
            />
            <label htmlFor="contact">Contact:</label>
            <input type="tel" id='contact'/>
            <label>Rentals Needed</label>
            <div id='rental-input'>
              <input type="radio" id='rentals-yes' name='rentals' value="yes"/><label htmlFor="rentals-yes">Yes</label>
              <input type="radio" id='rentals-no' name='rentals' value="no"/><label htmlFor="rentals-no">No</label>
            </div>
            <label htmlFor="special-req">Special Request:</label>
            <textarea name="special-req" id="" cols="30" rows="5"></textarea>
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
            <button id="submit" type='submit'>Confirm Reservation</button>
            <button id="cancel" type='button'>Cancel</button>
          </div>
      </form>
    </div>
  )
}

export default CourtReservationForm
