import React from 'react'
import ForumCard from '../components/ForumCard'
import Card from '../components/Card'
import "../static/styles/forum.css"

export const Forum = () => {
  return (
    <div id='forum'>

        <div>
          <h1 className='section-name'>1. Filter your Options</h1>
          <div class="filter-container">
            <div class="filter-section">
              <h2>Day(s)</h2>
              <label><input type="checkbox" name="day" value="Monday"/> Monday</label>
              <label><input type="checkbox" name="day" value="Tuesday"/> Tuesday</label>
              <label><input type="checkbox" name="day" value="Wednesday"/> Wednesday</label>
              <label><input type="checkbox" name="day" value="Thursday"/> Thursday</label>
              <label><input type="checkbox" name="day" value="Friday"/> Friday</label>
              <label><input type="checkbox" name="day" value="Saturday"/> Saturday</label>
              <label><input type="checkbox" name="day" value="Sunday"/> Sunday</label>
            </div>
            <div class="filter-section">
              <h2>Time Period(s)</h2>
              <label><input type="checkbox" name="time" value="Mornings"/> Mornings</label>
              <label><input type="checkbox" name="time" value="Afternoons"/> Afternoons</label>
              <label><input type="checkbox" name="time" value="Nights"/> Nights</label>
            </div>
            <div class="filter-section">
              <h2>Type of Match:</h2>
              <label><input type="checkbox" name="match" value="Singles"/> Singles</label>
              <label><input type="checkbox" name="match" value="Doubles"/> Doubles</label>
            </div>
          </div>
        </div>

        <hr className="section-divider" /> {/* Horizontal line to separate sections */}

        <div>
          <h1 className='section-name'>2. Browse through the Forum Posts</h1>
          <div className='users-container'>
            <ForumCard 
                title="Example Card"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="https://example.com"
            />
            <ForumCard 
                title="Example Card"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="https://example.com"
            />
          </div>

          <div className='users-container'>
            <ForumCard 
                title="Example Card"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="https://example.com"
            />
            <ForumCard 
                title="Example Card"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="https://example.com"
            />
          </div>

          <div className='users-container'>
            <ForumCard 
                title="Example Card"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="https://example.com"
            />
            <ForumCard 
                title="Example Card"
                imageUrl="https://example.com/image.jpg"
                description="This is a description of the card content."
                link="https://example.com"
            />
          </div>

        </div>
    </div>
  )
}

export default Forum