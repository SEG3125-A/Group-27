import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home.jsx"
import CourtReservationForm from './routes/CourtReservationForm.jsx' 
import CourseRegistrationForm from './routes/CourseRegistrationForm.jsx'
import Forum from './routes/Forum.jsx'
import ForumPost from './routes/ForumPost.jsx'
import Timer from './routes/Timer.jsx'
import Navbar from './components/Navbar.jsx'
import Courses2Kids from './routes/Courses2Kids.jsx'
import Courses2Adults from './routes/Courses2Adults.jsx'
import Courses from './routes/Courses.jsx'
import Courses3 from './routes/Courses3.jsx'
import CourtsViewing from './routes/CourtsViewing.jsx'

const App = () => {
    // const { t } = useTranslation();

    return <div>
        <Router> {/* Router Tag from import */}
            <Navbar />
            <Routes>
                <Route exact path='/' Component={Home}></Route> {/* Navigate to '/' (From the server controller) and Load Component 'Home' from Home.jsx, Copy this Router Tag for each components*/}
                <Route exact path='/courtReserveForm' Component={CourtReservationForm}></Route>
                <Route exact path='/courseRegisterForm' Component={CourseRegistrationForm}></Route>
                <Route exact path='/Forum' Component={Forum}></Route>
                <Route exact path='/ForumPost' Component={ForumPost}></Route>
                <Route exact path='/Timer' Component={Timer}></Route>
                <Route exact path='/Courses' Component={Courses}></Route>
                <Route exact path='/Courses2Kids' Component={Courses2Kids}></Route>
                <Route exact path='/Courses2Adults' Component={Courses2Adults}></Route>
                <Route exact path='/Courses3' Component={Courses3}></Route>
                <Route exact path='/CourtsViewing' Component={CourtsViewing}></Route>

            </Routes>
        </Router>
    </div>
}

export default App