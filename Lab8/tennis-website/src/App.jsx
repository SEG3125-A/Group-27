import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home.jsx"
import CourtReservationForm from './routes/CourtReservationForm.jsx' 
import CourseRegistrationForm from './routes/CourseRegistrationForm.jsx'
import Timer from './routes/Timer.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
    return <div>
        <Router> {/* Router Tag from import */}
            <Navbar />
            <Routes>
                <Route exact path='/' Component={Home}></Route> {/* Navigate to '/' (From the server controller) and Load Component 'Home' from Home.jsx, Copy this Router Tag for each components*/}
                <Route exact path='/courtReserveForm' Component={CourtReservationForm}></Route>
                <Route exact path='/courseRegisterForm' Component={CourseRegistrationForm}></Route>
                <Route exact path='/Timer' Component={Timer}></Route>
            </Routes>
        </Router>
    </div>
}

export default App