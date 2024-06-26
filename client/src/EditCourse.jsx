import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Card, Paper } from '@mui/material'
import { FaRupeeSign } from 'react-icons/fa'

const EditCourse = () => {
    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    let course = null;

    useEffect(() => {
        fetch('http://localhost:3000/admin/courses', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCourses(data);
            setLoading(false);
        });
    }, []);

    if (!loading) {
        course = courses.find(c => c._id === courseId);
    }

    return (
        <div>
            <Typography variant="h6" style={{ padding: "25px 0 0 20px" }}>EDIT COURSE</Typography>
            <div>
                {course ? (
                    <Paper style={{ padding: 16, height: '100%', backgroundColor: 'white', margin: 10, width: 300 }}>
                        <div style={{ height: 140, width: '100%', backgroundImage: `url(${course.imageLink})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div style={{ padding: '16px 0' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {course.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {course.description}
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaRupeeSign />
                            <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: 4 }}>
                                {course.price}
                            </Typography>
                        </div>
                    </Paper>
                ) : (
                    <Typography variant="h6" style={{ padding: "25px 0 0 20px" }}>Course not found</Typography>
                )}
            </div>
        </div>
    )
}

export default EditCourse
