import React from 'react'
import Navbar from './Navbar.jsx'
import { useState } from 'react';

let lastAttemptTime = 0;


const isValidPasswordInput = (input) => {
    const safePattern = /^[a-zA-Z0-9@._-]*$/;
    return safePattern.test(input);
}

const Verification = () => {
    const [password, setPassword] = useState('');


    const handleVerification = async (e) => {

        e.preventDefault();

        // Check if the last attempt was within the cooldown period
        const now = Date.now();
        const cooldown = 5000; // 5-second rate limit

        if (now - lastAttemptTime < cooldown) {
            alert("Please wait before inputting your next attempt.");
            return;
        }

        lastAttemptTime = now;

        const formData = new FormData();
        formData.append('password', password);

        // Sanitize input
        if (!isValidPasswordInput(password)) {
            alert("Invalid characters used in password. Only letters, numbers, and basic symbols (@ . _ -) are allowed.");
            return;
        }

        const res = await fetch('http://localhost/server/pass.php', {
            method: 'POST',
            body: formData
        })

        if (res.status === 200) {
            const data = await res.json();
            if (data.success) {
                alert("Access Granted");
                window.location.href = '/demo/#/admin';
            } else {
                alert("Access Denied");
            }
        } else {
            alert("Error: " + res.statusText);
        }
    }




    return (
        <div>
            <Navbar />
            <div style={styles.mainContainer}>
                <h1>Verification</h1>
                <p>To allow Access please enter the administrator password.</p>
                <form onSubmit={handleVerification}>
                    <label>
                        Enter Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        )
}

const styles = {
    mainContainer: {
        maxWidth: '600px',
        margin: '0px auto 30px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
}

export default Verification