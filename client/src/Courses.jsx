import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { FaRupeeSign } from 'react-icons/fa';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/admin/courses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    }).then(response => response.json())
      .then(data => {
        setCourses(data);
      });
  }, []);

  return (
    <div >
      <div>
        <Typography variant="h6" style={{ padding: "25px 0 0 20px" }}>Courses</Typography>
      </div>
      <Grid container spacing={3} style={{ padding: 20  }}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} style={{marginTop:15}}>
            <Course course={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function Course(props) {
  return (
    <Paper style={{ padding: 16, height: '100%',backgroundColor:'white'}}>
      <div style={{ height: 140, width: '100%', backgroundImage: `url(${props.course.imageLink})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ padding: '16px 0' }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description}
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaRupeeSign />
        <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: 4 }}>
          {props.course.price}
        </Typography>
      </div>
    </Paper>
  );
}

export default Courses;
