import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import { Button } from 'bootstrap';

const FAQ = () => {
    // useState hook to track which FAQ's answer is currently expanded
    const [activeIndex, setActiveIndex] = useState(null);

    // useState hook to manage the message input by the user
    const [message, setMessage] = useState('');

    // Define FAQs with answers as JSX elements, allowing you to embed links neatly
    const faqs = [
        {
            question: "What is Campus Compass?",
            answer: (
                <p>
                    Campus Compass is a navigation and information tool designed to help users
                    explore City campus with ease.
                </p>
            ),
        },
        {
            question: "How do I use Campus Compass?",
            answer: (
                <p>
                    Simply search for your destination, and follow the interactive campus map
                    to navigate.
                </p>
            ),
        },
        {
            question: "Is Campus Compass free to use?",
            answer: (
                <p>
                    Yes, Campus Compass is completely free to use for all users.
                </p>
            ),
        },
        {
            question: "What modules do we study?",
            answer: (
                <p>
                    You may study:{' '}
                    <a
                        href="https://www.wlv.ac.uk/courses/bsc-hons-computing-and-information-technology/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        computing and information technology
                    </a>, {' '}
                    <a
                        href="https://www.wlv.ac.uk/courses/bsc-hons-cybersecurity/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        cybersecurity
                    </a> or {' '}
                    <a
                        href="https://www.wlv.ac.uk/courses/bsc-hons-computer-science/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        computer science
                    </a>.
                </p>
            ),
        },
        {
            question: "What programming languages are being learnt?",
            answer: (
                <p>
                    It depends on the course you take but more in general: Phyton, C#, JavaScript, Java, C++ and C.
                </p>
            ),
        },
        {
            question: "When will my classes be?",
            answer: (
                <p>
                    You may find the schedule of your lectures on the timetable.
                    The timetable is usually released in september before the start of the first lecture.
                    You may also find it useful to check out the full{' '}
                    <a
                        href="https://www.wlv.ac.uk/current-students/academic-calendar/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        academic year calendar
                    </a>.
                </p>
            ),
        },
        {
            question: "How do I access my timetable?",
            answer: (
                <p>
                    To access your timetable, you can download myWLV app on{' '}
                    <a
                        href="https://play.google.com/store/apps/details?id=uk.ac.wlv.mywlv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        android
                    </a> or on{' '}
                    <a
                        href="https://apps.apple.com/gb/app/mywlv/id1061111214"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        IOS
                    </a> and check your personalised timetable. You can also search on the University's{' '}
                    <a
                        href="https://www3.wlv.ac.uk/timetable/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        page
                    </a>.
                </p>
            ),
        },
        {
            question: "How to access module content?",
            answer: (
                <p>
                    To access the module content, you can: open the myWLV app/ tap on the three lines on the top left/
                    tap on Courses. Or directly from{' '}
                    <a
                        href="https://canvas.wlv.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        canvas
                    </a>.
                </p>
            ),
        },
        {
            question: "What are industrial placements?",
            answer: (
                <p>
                    Placements are periods of professional experience. For more information click{' '}
                    <a
                        href="https://www.wlv.ac.uk/current-students/careers-enterprise-and-the-workplace/jobs-and-placements/student-support/placements/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a> and{' '}
                    <a
                        href="https://www.wlv.ac.uk/schools-and-institutes/faculty-of-arts-business-and-social-sciences/university-of-wolverhampton-business-school/employability-and-placement/work-placements-and-internships/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>.
                </p>
            ),
        },
    ];

    // Function to toggle the answer display for a clicked FAQ
    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // Function to handle the message submission
    const handleSubmit = (message) => {
        const newMessage = {
            message: message,
        }
        console.log('Message submitted:', message);
        console.log(JSON.stringify(message)); // Log the length of the message
        // Check if the message is empty
        if (message.trim() === '') {
            alert('Please enter a message before submitting.');
        }

        fetch('http://localhost/server/post.php?q=Feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Message sent successfully!'); // Notify the user of success
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (
        <>
            {/* Render Navbar across the full width at the top */}
            <Navbar />

            {/* Main container for the FAQ content that centers its children */}
            <div style={styles.mainContainer}>
                <h1 style={styles.heading}>Frequently Asked Questions</h1>
                <div style={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={styles.faqItem}>
                            <div style={styles.question} onClick={() => toggleAnswer(index)}>
                                {faq.question}
                            </div>
                            {activeIndex === index && <div style={styles.answer}>{faq.answer}</div>}
                        </div>
                    ))}
                </div>
                <h1 style={styles.heading}>Contact Us</h1>

                <div style={styles.contactInfo}>

                    If you have any further questions, feel free to reach out to us anonamously using the field below or at [INSERT SUPPORT EMAIL HERE].
                    <br />
                    <textarea style={styles.messageBox}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter text here..."
                    />
                    <button onClick={() => handleSubmit(message)} >Submit</button>
                </div>
                </div>
        </>
    );
};

const styles = {
    // Centers the FAQ content and adds some padding
    mainContainer: {
        maxWidth: '600px',
        margin: '0px auto 20px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    // Styling for the FAQ page heading
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '20px',
        fontSize: '24px',
        color: '#333',
    },
    // Container for the FAQ list with a border and subtle shadow
    faqList: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    // Styling for each individual FAQ item
    faqItem: {
        borderBottom: '1px solid #ddd',
        padding: '15px',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
    },
    // Styling for the question text
    question: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    // Styling for the answer text
    answer: {
        marginTop: '10px',
        paddingLeft: '15px',
        color: '#555',
        fontSize: '16px',
    },
    // Styling for the contact information
    contactInfo: {
        marginTop: '20px',
        fontSize: '16px',
        color: '#333',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    // Styling for the message input box
    messageBox: {
        width: '100%',
        height: '100px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        marginTop: '10px',
        fontSize: '16px',
    },
};

export default FAQ;