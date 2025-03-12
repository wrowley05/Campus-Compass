//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Navigation from "./components/navigation.jsx"
import Lecturers from "./components/Lecturers.jsx"
import Rooms from "./components/Rooms.jsx"
import FAQ from "./components/FAQ.jsx"

function App() {
    return (
        <div className="App"> 
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Navigation' element={<Navigation/>} />
                <Route path='/Lecturers' element={<Lecturers />} />
                <Route path='/Rooms' element={<Rooms />} />
                <Route path='/FAQ' element={<FAQ/>} />
            </Routes>
        </div>
    );
}

export default App;