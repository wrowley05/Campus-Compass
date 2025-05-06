//Home.js
import React from 'react';
import Navbar from './Navbar.jsx';

const Home = () => {
    return (
        <>
            <Navbar /> {/* Separate container for the navbar */}
            <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
                <div style={{
                    color: 'black',
                    padding: '15px',
                    borderRadius: '10px',
                    maxWidth: '600px',
                    margin: '20px auto',
                    fontSize: '18px'
                }}>
                    <strong>Welcome to Campus Compass!</strong> <br />
                    Your guide to exploring the university. Use the navigation bar above to find everything you need (or the three bars on the right corner).
                </div>
                <img
                    draggable="false"
                    src="https://mi-linux.wlv.ac.uk/~2332813/demo/vgb22zx.gif"
                    alt="Campus Map"
                    style={{
                        marginTop: '20px',
                        width: '80%',
                        maxWidth: '600px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                    }}
                />
            </div>
        </>
    );
};

export default Home;