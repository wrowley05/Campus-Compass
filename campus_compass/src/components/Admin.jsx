//Admin.js
import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'

const Admin = () => {


    const [jsonScheduleData, setjsonScheduleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/index.php?q=OpenDayLectures');
                const data = await response.json();
                setjsonScheduleData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const DisplayScheduleData = jsonScheduleData.map(
        (item) => {
            return (
                <tr key={item.lecture_id}>
                    <td>{item.lecture_time}</td>
                    <td>{item.topic}</td>
                    <td>{item.teacher_id}</td>
                    <td>{item.course_id}</td>
                    <td>
                        <button onClick={() => handleDeleteSchedule(item.lecture_id)}>Delete</button>
                    </td>
                </tr>
            )
        }
    )


    const [jsonClassroomData, setjsonClassroomData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/index.php?q=Classrooms');
                const data = await response.json();
                setjsonClassroomData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const DisplayClassroomData = jsonClassroomData.map(
        (item) => {
                return (
                    <tr key={item.classroom_id}>
                        <td>{item.room_number}</td>
                        <td>{item.building_id}</td>
                        <td>{item.capacity}</td>
                        <td>{item.course_id}</td>
                        <td>
                            <button onClick={() => handleDeleteClassroom(item.classroom_id)}> Delete</button>
                        </td>
                    </tr>
                )
            }
    )

    const [jsonLecturerData, setjsonLecturerData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/index.php?q=Teachers');
                const data = await response.json();
                setjsonLecturerData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const DisplayLecturerData = jsonLecturerData.map(
        (item) => {
            return (
                <tr key={item.teacher_id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.course_id}</td>
                    <td>
                        <button onClick={() => handleDeleteLecturer(item.teacher_id)}>Delete</button>
                    </td>
                </tr>
            )
        }
    )

    const handleAddSchedule = () => {
        // Logic to add a new schedule
        // You can use a form to collect the data and then send it to the server
         const newSchedule = {
             lecture_time: document.getElementById('time').value,
             topic: document.getElementById('topic').value,
             teacher_id: document.getElementById('lecturer_id').value,
             course_id: document.getElementById('course_id').value,
        };

        // Clear the input fields after adding the schedule
        document.getElementById('time').value = '';
        document.getElementById('topic').value = '';
        document.getElementById('lecturer_id').value = '';
        document.getElementById('course_id').value = '';
        // Send the new schedule to the server

         fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/post.php?q=Schedule', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(newSchedule)
         })
             .then(response => response.json())
             .then(data => {
                 console.log('Success:', data);
                 setjsonScheduleData([...jsonScheduleData, data]);
             })
             .catch((error) => {
                 console.error('Error:', error);
            });

    }
    const handleAddClassroom = () => {
        // Logic to add a new classroom
        const newClassroom = {
            room_number: document.getElementById('room_number').value,
            building_id: document.getElementById('building_id').value,
            capacity: document.getElementById('capacity').value,
            course_id: document.getElementById('course_id').value,
        };
        // Clear the input fields after adding the classroom
        document.getElementById('room_number').value = '';
        document.getElementById('building_id').value = '';
        document.getElementById('capacity').value = '';
        document.getElementById('course_c_id').value = '';
        // Send the new classroom to the server
        fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/post.php?q=Classrooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newClassroom)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonClassroomData([...jsonClassroomData, data]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleAddLecturer = () => {
        // Logic to add a new lecturer
        const newLecturer = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            course_id: document.getElementById('course_id').value,
        };
        // Clear the input fields after adding the lecturer
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('course_l_id').value = '';
        // Send the new lecturer to the server
        fetch('https://mi-linux.wlv.ac.uk/~2332813/demo/server/post.php?q=Teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLecturer)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonLecturerData([...jsonLecturerData, data]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleDeleteSchedule = (id) => {
        // Logic to delete a schedule
        console.log(id);
        fetch(`https://mi-linux.wlv.ac.uk/~2332813/demo/server/delete.php?q=OpenDayLectures&id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonScheduleData(jsonScheduleData.filter(item => item.lecture_id !== id));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const handleDeleteClassroom = (id) => {
        // Logic to delete a classroom
        console.log(id);
        fetch(`http://localhost/server/delete.php?q=Classrooms&id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonClassroomData(jsonClassroomData.filter(item => item.classroom_id !== id));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const handleDeleteLecturer = (id) => {
        // Logic to delete a lecturer
        console.log(id);
        fetch(`https://mi-linux.wlv.ac.uk/~2332813/demo/server/delete.php?q=Teachers&id=${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonLecturerData(jsonLecturerData.filter(item => item.teacher_id !== id));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <Navbar />
            <div style={styles.mainContainer}>

                <h1>Admin Panel</h1>

                <h2>Manage Schedule</h2>

                <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.thead}>
                        <tr>
                            <th>Lecture Time</th>
                            <th>Topic</th>
                            <th>Lecturer</th>
                            <th>Course ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody style={styles.tbody}>
                        {DisplayScheduleData}
                        <tr>
                            <td><input id='time' type="text" placeholder="Lecture Time" /></td>
                            <td><input id='topic' type="text" placeholder="Topic" /></td>
                            <td><input id='lecturer_id' type="text" placeholder="Lecturer ID" /></td>
                            <td><input id='course_id' type="text" placeholder="Course ID" /></td>
                            <td><button onClick={() => handleAddSchedule()}>Add</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                <h2>Manage Rooms</h2>

                <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.thead}>
                    <tr>
                        <th>Room Number</th>
                        <th>Building</th>
                        <th>Capacity</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                        {DisplayClassroomData}
                        <tr>
                            <td><input id='room_number' type="text" placeholder="Room Number" /></td>
                            <td><input id='building_id' type="text" placeholder="Building ID" /></td>
                            <td><input id='capacity' type="text" placeholder="Capacity" /></td>
                            <td><input id='course_c_id' type="text" placeholder="Course ID" /></td>
                            <td><button onClick={() => handleAddClassroom()}>Add</button></td>
                        </tr>
                </tbody>
                    </table>
                </div>

                <h2>Manage Lecturers</h2>

                <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead style={styles.thead}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course_ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {DisplayLecturerData}
                        <tr>
                            <td><input id='name' type="text" placeholder="Name" /></td>
                            <td><input id='email' type="text" placeholder="Email" /></td>
                            <td><input id='course_l_id' type="text" placeholder="Course ID" /></td>
                            <td><button onClick={() => handleAddLecturer()}>Add</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

const styles = {
    // Centers the table content and adds some padding
    mainContainer: {
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

    // Scrollable container for the table
    tableContainer: {
        overflowX: 'auto', // Enables horizontal scrolling
        width: '100%',
        maxWidth: '100vw', // Allows full viewport width
    },

    thead: {
        backgroundColor: '#f2f2f2',
        borderBottom: '2px solid #ddd',
    },
}
export default Admin