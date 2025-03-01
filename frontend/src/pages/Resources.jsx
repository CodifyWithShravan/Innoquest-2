import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Resources = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/resources');
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching resources');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const containerStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const titleStyle = {
        color: '#333',
        textAlign: 'center'
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };

    const listItemStyle = {
        backgroundColor: '#f9f9f9',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const courseTitleStyle = {
        margin: '0 0 5px 0'
    };

    const courseDescriptionStyle = {
        margin: '0 0 10px 0'
    };

    const linkStyle = {
        color: '#007BFF',
        textDecoration: 'none'
    };

    if (loading) {
        return <div style={containerStyle}>Loading...</div>;
    }

    if (error) {
        return <div style={containerStyle}>{error}</div>;
    }

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Resources</h1>
            <ul style={listStyle}>
                {courses.map(course => (
                    <li key={course._id} style={listItemStyle}>
                        <h2 style={courseTitleStyle}>{course.title}</h2>
                        <p style={courseDescriptionStyle}>{course.description}</p>
                        <a href={course.link} style={linkStyle}>Review Course</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resources;