//Navbar.js
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css"


function Navbar() {
    const navRef = useRef();
    const toggleNavbbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    }

    return (
        <header>
            <h1>Campus Compass 🧭</h1>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/Navigation">Navigation</Link>
                <Link to="/ScavHunt">Scavenger Hunt</Link>
                <Link to="/Schedule">Schedule</Link>
                <Link to="/Lecturers">Lecturers</Link>
                <Link to="/Rooms">Rooms</Link>
                <Link to="https://www.wolvesunion.org/getinvolved/societies/list/">Societies</Link>
                <Link to="/FAQ">FAQ / Feedback</Link>
                <Link to="/Verification">Admin</Link>
                <button className="nav-btn nav-close-btn" onClick={toggleNavbbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={toggleNavbbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;