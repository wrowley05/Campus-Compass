//Schedule.js
import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'

const Schedule = () => {
    const [jsonData, setjsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/index.php?q=OpenDayLectures');
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
            <div style={styles.mainContainer}>
                <table style={styles.table}>
                    <thead style={styles.thead}>
                        <tr>
                        <th>Lecture Time</th>
                        <th>Topic</th>
                        <th>Lecturer</th>
                        <th>Course ID</th>
                    </tr>
                </thead>

                    <tbody style={styles.tbody}>
                    {DisplayData}
                </tbody>
            </table>
        </div>
        </div>
    )
}

const styles = {
    // Centers the table content and adds some padding
    mainContainer: {
        maxWidth: '600px',
        margin: '0px auto 30px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    table: {
        width: '100%',
        border: '5px solid #ddd',
        borderCollapse: 'collapse',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',

    }, 
    thead: {
        backgroundColor: '#f2f2f2',
        borderBottom: '2px solid #ddd',
    },
}
export default Schedule