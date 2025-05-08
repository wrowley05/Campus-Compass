//Navigation.js
import React, { useState, useRef } from 'react';
import Navbar from './Navbar.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

const urls = [
    "https://mi-linux.wlv.ac.uk/~2332813/demo/vgb22zx.png",
    "https://mi-linux.wlv.ac.uk/~2332813/demo/CortyardToLibrary.mp4",
    "https://mi-linux.wlv.ac.uk/~2332813/demo/20250210_151049.mp4",
    "https://mi-linux.wlv.ac.uk/~2332813/demo/MCrooms.mp4",
    "https://mi-linux.wlv.ac.uk/~2332813/demo/CourtyardToAlanTuring.mp4",
    "https://mi-linux.wlv.ac.uk/~2332813/demo/ATrooms.mp4",
    "https://mi-linux.wlv.ac.uk/~2332813/demo/CourtYardToWulfruna.mp4"
];

const Navigation = () => {
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState(urls[0]);
    const [showVideo, setShowVideo] = useState(false); // Hide video initially

    const changeVideoSource = (newSrc) => {
        setVideoSrc(newSrc);
        setShowVideo(true); // Show video when a selection is made

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = newSrc;
                videoRef.current.load();
                videoRef.current.play();
                videoRef.current.muted = true; // Enforce mute
                videoRef.current.setAttribute("controls", "true"); // Enable controls after selection
            }
        }, 50); // Small delay ensures re-render
    };

    const resetVideo = () => {
        if (videoRef.current) {
            videoRef.current.removeAttribute("controls"); // Remove controls
            videoRef.current.src = urls[0]; // Reset video source
            videoRef.current.load();
        }
        setShowVideo(false); // Hide video completely
    };

    return (
        <div>
            <Navbar />
            <div style={{ textAlign: 'center', marginTop: '20px', position: 'relative', zIndex: '1' }}>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Select a Building
                    </Dropdown.Toggle>

                    <Dropdown.Menu data-bs-theme="dark">
                        <Dropdown.Header>Buildings</Dropdown.Header>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[1])}>Ambuka Paul</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[2])}>Millennium City</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[3])}>Millennium City Rooms</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[4])}>Alan Turing</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[5])}>Alan Turing Rooms</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeVideoSource(urls[6])}>Wulfruna</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={resetVideo}>Reset</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Display message when no video is selected */}
            {!showVideo && (
                <div style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginTop: '20px'
                }}>
                    Select a building above to view the video.
                </div>
            )}

            {/* Video Section - Hidden until selection is made */}
            {showVideo && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '80vh',
                    overflow: 'hidden'
                }}>
                    <video
                        poster={urls[0]}
                        ref={videoRef}
                        muted // Always muted
                        controlsList="nodownload nofullscreen noremoteplayback noaudio" // Removes audio controls
                        style={{ 
                            maxWidth: '100%', 
                            maxHeight: '100%', 
                            objectFit: 'contain' 
                        }}
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
};

const responsiveNavStyles = `
    .responsive_nav {
        z-index: 1050 !important; /* Ensures it's above other elements */
    }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${responsiveNavStyles}</style>`);

// Remove volume control dynamically via CSS
const videoStyles = `
    video::-webkit-media-controls-volume-slider,
    video::-webkit-media-controls-mute-button {
        display: none !important;
    }
`;

// Apply styles to hide mute/unmute button
document.head.insertAdjacentHTML("beforeend", `<style>${videoStyles}</style>`);

export default Navigation;