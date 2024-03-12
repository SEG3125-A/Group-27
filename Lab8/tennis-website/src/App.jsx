import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home.jsx"
import CourtReservationForm from './routes/CourtReservationForm.jsx' 
import CourseRegistrationForm from './routes/CourseRegistrationForm.jsx'

const App = () => {
    return <div>
        <Router> {/* Router Tag from import */}
            <Routes>
                <Route exact path='/' Component={Home}></Route> {/* Navigate to '/' (From the server controller) and Load Component 'Home' from Home.jsx, Copy this Router Tag for each components*/}
                <Route exact path='/courtReserveForm' Component={CourtReservationForm}></Route> {/* Navigate to '/' (From the server controller) and Load Component 'Home' from Home.jsx, Copy this Router Tag for each components*/}
                <Route exact path='/courseRegisterForm' Component={CourseRegistrationForm}></Route> {/* Navigate to '/' (From the server controller) and Load Component 'Home' from Home.jsx, Copy this Router Tag for each components*/}
            </Routes>
        </Router>
    </div>
}

export default App