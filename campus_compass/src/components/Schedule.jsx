//Schedule.js
import { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';

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

    return (
        <div>
            <Navbar />
            <div style={styles.mainContainer}>
                {/* Page Header */}
                <h1 style={styles.header}>Open Day Lecture Schedule</h1>
                <p style={styles.description}>
                    Below is the schedule of lectures for the Open Day, including their times, topics, lecturers, and associated courses.
                </p>

                {/* Scrollable Table Container */}
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead style={styles.thead}>
                            <tr>
                                <th style={styles.th}>Lecture Time</th>
                                <th style={styles.th}>Topic</th>
                                <th style={styles.th}>Lecturer</th>
                                <th style={styles.th}>Course ID</th>
                            </tr>
                        </thead>
                        <tbody style={styles.tbody}>
                            {jsonData.map((item) => (
                                <tr key={item.lecture_id}>
                                    <td style={styles.td}>{item.lecture_time}</td>
                                    <td style={styles.td}>{item.topic}</td>
                                    <td style={styles.td}>{item.teacher_id}</td>
                                    <td style={styles.td}>{item.course_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const styles = {
    mainContainer: {
        width: '90%',
        maxWidth: '800px',
        margin: '20px auto',
        padding: '0px',
        fontFamily: 'Arial, sans-serif',
    },

    header: {
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },

    description: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#555',
        marginBottom: '20px',
    },

    // Scrollable container for the table
    tableContainer: {
        overflowX: 'auto', // Enables horizontal scrolling
        width: '100%',
        maxWidth: '100vw', // Allows full viewport width
    },

    table: {
        minWidth: '800px', // Forces the table to be wider than the container
        border: '2px solid #ddd',
        borderCollapse: 'collapse',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },

    thead: {
        backgroundColor: '#f2f2f2',
        borderBottom: '2px solid #ddd',
    },

    tbody: {
        fontSize: '16px',
    },

    th: {
        padding: '10px',
        textAlign: 'left',
        fontSize: '18px',
    },

    td: {
        padding: '8px',
        fontSize: '16px',
        wordBreak: 'break-word',
    },
};

export default Schedule;