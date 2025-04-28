//Lecturers.js
import {useState, useEffect} from 'react'
import Navbar from './Navbar.jsx'

const Lecturers = () => {
    const [jsonData, setjsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/index.php?q=Teachers');
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
                    <tr key={item.teacher_id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.course_id}</td>
                    </tr>
                )
        }
    )

    return (
        <>
        <Navbar />
            <div>
                <table style={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course_ID</th>
                </tr>
            </thead>

            <tbody>
                {DisplayData}
            </tbody>
            </table>
            </div>
        </>
    )
}

const styles = {
    table: {
        width: '100%',
        textAlign: 'center',
        borderCollapse: 'collapse',
        border: '5px solid #ddd',
        fontSize: '18px',
        fontFamily: 'Arial, sans-serif',
           
    },
    th: {
        backgroundColor: '#f2f2f2',
        padding: '8px',
        textAlign: 'left',
    },
    td: {
        padding: '8px',
        borderBottom: '1px solid #ddd',
    },
}

export default Lecturers