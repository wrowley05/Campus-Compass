//Schedule.js
import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'

const Schedule = () => {
    const [jsonData, setjsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/index.php?q=OpenDayLectures');
                const data = await response.json();
                setjsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const DisplayData = jsonData.map(
        (item) => {
            return (
                <tr key={item.lecture_id}>
                    <td>{item.lecture_time}</td>
                    <td>{item.topic}</td>
                    <td>{item.teacher_id}</td>
                    <td>{item.course_id}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <Navbar />
            <table className="Table">
                <thead>
                    <tr>
                        <th>Lecture Time</th>
                        <th>Topic</th>
                        <th>Lecturer</th>
                        <th>Course ID</th>
                    </tr>
                </thead>

                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule