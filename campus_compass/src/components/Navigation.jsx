//Navigation.js
import React, { useState, useRef } from 'react'
import Navbar from './Navbar.jsx'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

const urls = ["https://mi-linux.wlv.ac.uk/~2332813/demo/vgb22zx.png", "https://mi-linux.wlv.ac.uk/~2332813/demo/20250210_151049.mp4", "https://mi-linux.wlv.ac.uk/~2332813/demo/CortyardToLibrary.mp4", "https://mi-linux.wlv.ac.uk/~2332813/demo/CourtyardToAlanTuring.mp4"];

const Navigation = () => {
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState("https://mi-linux.wlv.ac.uk/~2332813/demo/vgb22zx.png");

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

                    <video poster={urls[0]} ref={videoRef} autoPlay muted loop width="760px" onContextMenu={e => e.preventDefault()}>
                        <source src={videoSrc} />
                        </video>
                 </menu>
              )}
            </div>

    );
}

export default Navigation

