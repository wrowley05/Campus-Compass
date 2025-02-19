//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Navigation from "./components/navigation.jsx"
import Schedule from "./components/Schedule.jsx"
import FAQ from "./components/FAQ.jsx"
function App() {
    return (
        <div className="App"> 
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Navigation' element={<Navigation/>} />
                <Route path='/Schedule' element={<Schedule/>} />
                <Route path='/FAQ' element={<FAQ/>} />
            </Routes>
        </div>
    );
}

export default App;