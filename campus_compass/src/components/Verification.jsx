//Verification.js
import React from 'react'
import Navbar from './Navbar.jsx'

const Verification = () => {

    const handleVerification = () => {
        const pass = document.getElementById('pass').value;
        if (pass === "admin") {
            window.location.href = '/demo/#/Admin';
        } else {
            alert("Incorrect password");
        }
    }

    return (
        <div>
            <Navbar />
            <div style={styles.mainContainer}>
                <h1>Verification</h1>
                <p>To allow Access please enter the administrator password.</p>
                    <input id="pass" type="text" placeholder="Enter password" />
                    <button onClick={() => handleVerification()}>Verify</button>
            </div>
        </div>
    )
}

const styles = {
    // Centers the page content and adds some padding
    mainContainer: {
        maxWidth: '600px',
        margin: '0px auto 30px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
}

export default Verification