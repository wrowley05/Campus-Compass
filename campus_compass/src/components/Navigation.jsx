//Navigation.js
import React, { useState, useRef } from 'react'
import Navbar from './Navbar.jsx'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

const urls = ["http://10.2.0.2:8080/vgb22zx.gif", "http://10.2.0.2:8080/20250210_151049.mp4", "http://10.2.0.2:8080/CortyardToLibrary.mp4", "http://10.2.0.2:8080/CourtyardToAlanTuring.mp4"];

const Navigation = () => {
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState("http://10.2.0.2:8080/vgb22zx.gif");

    const changeVideoSource = (newSrc) => {
        if (videoRef.current) {
            videoRef.current.src = newSrc;
            videoRef.current.load();
            videoRef.current.play();
        }
        setVideoSrc(newSrc);
    };

    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <div>
            <button className="nav-btn" onClick={handleClick}>temp</button>
            <Navbar />
                {isShown && (
                <menu>
                    <Dropdown.Menu show data-bs-theme="dark">
                        <Dropdown.Header>Buildings</Dropdown.Header>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[1])}>Millenium City</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[2])}>Ambuka Paul</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[3])}>Alan Turing</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => window.location.reload(false)}>Reset</Dropdown.Item>
                    </Dropdown.Menu>

                    <video poster={urls[0]} ref={videoRef} autoPlay muted loop >
                        <source src={videoSrc} />
                        </video>
                 </menu>
              )}
            </div>

    );
}

export default Navigation

