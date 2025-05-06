//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Navigation from "./components/navigation.jsx"
import Schedule from "./components/Schedule.jsx"
import Lecturers from "./components/Lecturers.jsx"
import Rooms from "./components/Rooms.jsx"
import ScavHunt from "./components/ScavHunt.jsx"
import FAQ from "./components/FAQ.jsx"
import Admin from "./components/Admin.jsx"

function App() {
    return (
        <div className="App"> 
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Navigation' element={<Navigation />} />
                <Route path='/Schedule' element={<Schedule />} />
                <Route path='/Lecturers' element={<Lecturers />} />
                <Route path='/Rooms' element={<Rooms />} />
                <Route path='/ScavHunt' element={<ScavHunt />} />
                <Route path='/FAQ' element={<FAQ />} />
                <Route path='/Admin' element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;