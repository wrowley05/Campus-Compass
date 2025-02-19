//Navigation.js
import React, {useState, useRef} from 'react'
import Navbar from './Navbar.jsx'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

const urls = ['https://dwdxlv7fotptp.cloudfront.net/nl9dcokkzs1oxfoe0qg6ga0lievh?response-content-disposition=inline%3B%20filename%3D%2220250210_151049.mp4%22%3B%20filename%2A%3DUTF-8%27%2720250210_151049.mp4&response-content-type=video%2Fmp4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS5PME4CTY5HJXGX6%2F20250219%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T112334Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4d2b3f85c4a23d1f17ec6bb62387268b47c1ed2f1e3f180713d4c81530369127&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kd2R4bHY3Zm90cHRwLmNsb3VkZnJvbnQubmV0L25sOWRjb2trenMxb3hmb2UwcWc2Z2EwbGlldmg~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmUlM0IlMjBmaWxlbmFtZSUzRCUyMjIwMjUwMjEwXzE1MTA0OS5tcDQlMjIlM0IlMjBmaWxlbmFtZSUyQSUzRFVURi04JTI3JTI3MjAyNTAyMTBfMTUxMDQ5Lm1wNFx1MDAyNnJlc3BvbnNlLWNvbnRlbnQtdHlwZT12aWRlbyUyRm1wNFx1MDAyNlgtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2XHUwMDI2WC1BbXotQ3JlZGVudGlhbD1BS0lBUzVQTUU0Q1RZNUhKWEdYNiUyRjIwMjUwMjE5JTJGdXMtZWFzdC0yJTJGczMlMkZhd3M0X3JlcXVlc3RcdTAwMjZYLUFtei1EYXRlPTIwMjUwMjE5VDExMjMzNFpcdTAwMjZYLUFtei1FeHBpcmVzPTg2NDAwXHUwMDI2WC1BbXotU2lnbmVkSGVhZGVycz1ob3N0XHUwMDI2WC1BbXotU2lnbmF0dXJlPTRkMmIzZjg1YzRhMjNkMWYxN2VjNmJiNjIzODcyNjhiNDdjMWVkMmYxZTNmMTgwNzEzZDRjODE1MzAzNjkxMjciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NDAwNTA2MTR9fX1dfQ__&Signature=quvUlKe6Z6bZ1SLlDK~j7OH1saJgDIz5wr-jil1wRh6WDMK8G2ryEiApNG7HWmM9-J9bqvApn1wTC0sQFOydUQtp-A805SJksjfz7dQiA-kQXCNQUuGjOPKm~qeEuFbg5PqewZvOxmucBFeLbBo8VbssFnTuAfdY2ZAhWA2yAm4osGiHJ0FAaBMKvpLs~Ye-szyg9zc2AOcQfhkvYXn832C0NeePHBpF3vs-y7gmAdVOo0KD9KUjrUmiofgPhzFEn~4BsZBfvpPeYLlSqKWsfVVXWQ0VPI7jDM5dV-9bxje2yvYqRPctg05UC8vVJI4L1BDjXUXx4Ufwx~qHuDR3FA__&Key-Pair-Id=K2BMZZDBFKKL41', 'https://cdn.discordapp.com/attachments/814495896540020806/1341731580237844510/ZFJy4IN.mp4?ex=67b71068&is=67b5bee8&hm=2ca3e8b768d1abe242c4e37f837b2010a995d56dcc5f7dced7c92b1a12c13a2b&']
const Navigation = () => {
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState("https://cdn.discordapp.com/attachments/814495896540020806/1341739386626379888/cnG5Ejr.mp4?ex=67b717ae&is=67b5c62e&hm=4458684f745092033759ad25e09344afc44dba5dc55c5b99ce495b5822558bd9&");

    const changeVideoSource = (newSrc) => {
        if (videoRef.current) {
            videoRef.current.src = newSrc;
            videoRef.current.load();
            videoRef.current.play();
        }
        setVideoSrc(newSrc);
    };

    return (
        <div>
            <Navbar />
            <Dropdown>
                <Dropdown.Toggle>
                    Room Finder
                </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeVideoSource(urls[0])}>Room 1</Dropdown.Item>
                <Dropdown.Item onClick={() => changeVideoSource(urls[1])}>Room 2</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <video ref={videoRef} autoPlay muted loop >
                <source src={videoSrc} />
            </video>

        </div>

    );
}

export default Navigation

