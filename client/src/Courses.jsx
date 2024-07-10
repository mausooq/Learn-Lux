import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { FaRupeeSign } from 'react-icons/fa';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate()
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
        <div style={{margin:"20px 0 0 20px"}}>
          <Button variant="contained" onClick={ () =>{
            navigate('/admin/addcourse')
          }}>Add Course</Button>
        </div>
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
  const navigate = useNavigate()
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
      <div style={{
        marginTop:20
      }}><Button size='large' variant="contained"
   onClick={ ()=> {
    navigate('/admin/editcourse/'+ props.course._id)
   }
   }
>Edit</Button>
    </div>
    </Paper>
  
  );
}

export default Courses;
