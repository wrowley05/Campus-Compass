//Admin.js
import { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'

const Admin = () => {


    const [jsonScheduleData, setjsonScheduleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/server/index.php?q=Lectures');
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
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.lecture_time}</td>
                    <td>{item.topic}</td>
                    <td>{item.teacher_id}</td>
                    <td>{item.course_id}</td>
                    <td>
                        <button onClick={() => handleDeleteSchedule(item.id)}>Delete</button>
                    </td>
                </tr>
            )
        }
    )


    const [jsonClassroomData, setjsonClassroomData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/server/index.php?q=Classrooms');
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
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.room_number}</td>
                        <td>{item.building_id}</td>
                        <td>{item.capacity}</td>
                        <td>{item.course_id}</td>
                        <td>
                            <button onClick={() => handleDeleteClassroom(item.id)}> Delete</button>
                        </td>
                    </tr>
                )
            }
    )

    const [jsonLecturerData, setjsonLecturerData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/server/index.php?q=Teachers');
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
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.course_id}</td>
                    <td>
                        <button onClick={() => handleDeleteLecturer(item.id)}>Delete</button>
                    </td>
                </tr>
            )
        }
    )

    const [jsonCourseData, setjsonCourseData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/server/index.php?q=Courses');
                const data = await response.json();
                setjsonCourseData(data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const DisplayCourseData = jsonCourseData.map(
        (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.course_name}</td>
                    <td>{item.department}</td>
                    <td>
                        <button onClick={() => handleDeleteCourse(item.id)}>Delete</button>
                    </td>
                </tr>
            )
        }
    )

    const [jsonBuildingData, setjsonBuildingData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/server/index.php?q=Buildings');
                const data = await response.json();
                setjsonBuildingData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const displayBuildingData = jsonBuildingData.map(
        (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.building_name}</td>
                    <td>
                        <button onClick={() => handleDeleteBuilding(item.id)}>Delete</button>
                    </td>
                </tr>

            )
        }
    )



    const handleAddSchedule = () => {
        const newSchedule = {
            lecture_time: document.getElementById('time').value,
            topic: document.getElementById('topic').value,
            teacher_id: document.getElementById('lecturer_id').value,
            course_id: document.getElementById('course_id').value
        };
        // Send the new schedule to the server
        fetch('http://localhost/server/post.php?q=Lectures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSchedule)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonScheduleData([...jsonScheduleData, newSchedule]);
            })
        // Clear the input fields after adding the schedule
        document.getElementById('time').value = '';
        document.getElementById('topic').value = '';
        document.getElementById('lecturer_id').value = '';
        document.getElementById('course_id').value = '';
    }



    const handleAddClassroom = () => {
        const newRoom = {
            room_number: document.getElementById('room_number').value,
            building_id: document.getElementById('building_id').value,
            capacity: document.getElementById('capacity').value,
            course_id: document.getElementById('course_c_id').value
        };
        // Send the new room to the server
        fetch('http://localhost/server/post.php?q=Classrooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRoom)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonClassroomData([...jsonClassroomData, newRoom]);
            })
        // Clear the input fields after adding the lecturer
        document.getElementById('room_number').value = '';
        document.getElementById('building_id').value = '';
        document.getElementById('capacity').value = '';
        document.getElementById('course_c_id').value = '';
    }


    const handleAddLecturer = () => {
        const newLecturer = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            course_id: document.getElementById('course_l_id').value
        };

        // Send the new lecturer to the server
        fetch('http://localhost/server/post.php?q=Teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLecturer)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonLecturerData([...jsonLecturerData, newLecturer]);
            })
        // Clear the input fields after adding the lecturer
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('course_l_id').value = '';
    }

    const handleAddCourse = () => {
        const newCourse = {
            course_name: document.getElementById('course_name').value,
            department: document.getElementById('department').value
        };
        // Send the new course to the server
        fetch('http://localhost/server/post.php?q=Courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonCourseData([...jsonCourseData, newCourse]);
            })
        // Clear the input fields after adding the course
        document.getElementById('course_name').value = '';
        document.getElementById('department').value = '';
    }

    const handleAddBuilding = () => {
        const newBuilding = {
            building_name: document.getElementById('building_name').value
        };
        // Send the new building to the server
        fetch('http://localhost/server/post.php?q=Buildings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBuilding)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setjsonBuildingData([...jsonBuildingData, newBuilding]);
            })
        // Clear the input fields after adding the building
        document.getElementById('building_name').value = '';
    }





    const handleDeleteSchedule = (id) => {
        // Logic to delete a schedule
        fetch('http://localhost/server/deleteRecord.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'lectures',
                id: id
            })
        })
            .then(res => res.json())
            .then(data => {
                setjsonScheduleData(jsonScheduleData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }



    const handleDeleteClassroom = (id) => {
        fetch('http://localhost/server/deleteRecord.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'classrooms',
                id: id

            })
        })
            .then(res => res.json())
            .then(data => {
                setjsonClassroomData(jsonClassroomData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleDeleteLecturer = (id) => {
        fetch('http://localhost/server/deleteRecord.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'teachers',
                id: id
            })
        })
            .then(res => res.json())
            .then(data => {
                setjsonLecturerData(jsonLecturerData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleDeleteCourse = (id) => {
        fetch('http://localhost/server/deleteRecord.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'courses',
                id: id
            })
        })
            .then(res => res.json())
            .then(data => {
                setjsonCourseData(jsonCourseData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleDeleteBuilding = (id) => {
        fetch('http://localhost/server/deleteRecord.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                table: 'buildings',
                id: id
            })
        })
            .then(res => res.json())
            .then(data => {
                setjsonBuildingData(jsonBuildingData.filter(item => item.id !== id));
            })
            .catch(error => {
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
                                <th>Lecture ID</th>
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
                                <td></td>
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
                                <th>Room ID</th>
                        <th>Room Number</th>
                        <th>Building</th>
                        <th>Capacity</th>
                        <th>Course ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                        {DisplayClassroomData}
                            <tr>
                            <td></td>
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
                                <th>Lecturer ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {DisplayLecturerData}
                            <tr>
                                <td></td>
                            <td><input id='name' type="text" placeholder="Name" /></td>
                            <td><input id='email' type="text" placeholder="Email" /></td>
                            <td><input id='course_l_id' type="text" placeholder="Course ID" /></td>
                            <td><button onClick={() => handleAddLecturer()}>Add</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <h2>Manage Courses</h2>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead style={styles.thead}>
                            <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayCourseData}
                            <tr>
                                <td></td>
                                <td><input id='course_name' type="text" placeholder="Course Name" /></td>
                                <td><input id='department' type="text" placeholder="Department" /></td>
                                <td><button onClick={() => handleAddCourse()}>Add</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Manage Buildings</h2>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead style={styles.thead}>
                            <tr>
                                <th>Building ID</th>
                                <th>Building Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayBuildingData}
                            <tr>
                                <td></td>
                                <td><input id='building_name' type="text" placeholder="Building Name" /></td>
                                <td><button onClick={() => handleAddBuilding()}>Add</button></td>
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