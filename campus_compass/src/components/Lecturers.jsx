//Lecturers.js
import { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';

const Lecturers = () => {
    const [jsonData, setjsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/index.php?q=Teachers');
                const data = await response.json();
                setjsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div style={styles.mainContainer}>
                {/* Page Header */}
                <h1 style={styles.header}>Open Day Lecturers</h1>
                <p style={styles.description}>
                    Below is a list of lecturers participating in the Open Day, including their names, emails, and associated courses.
                </p>

                {/* Scrollable Table Container */}
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead style={styles.thead}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Course ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jsonData.map((item) => (
                                <tr key={item.teacher_id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.course_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
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

export default Lecturers;