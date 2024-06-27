import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Card, Paper,TextField,Button } from '@mui/material'
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
            // console.log(data);
            setCourses(data);
            setLoading(false);
        });
    }, []);

    if (!loading) {
        course = courses.find(c => c._id === courseId);
    }

    return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column'
    }}>
          <CourseCard course={course} />
          <UpdateCard courses={courses} course={course} setCourses={setCourses}/>  
        </div>
        
        
    )
}

function CourseCard(props){
   
   return <div>
            <Typography variant="h6" style={{ padding: "25px 0 0 20px" }}>EDIT COURSE</Typography>
            <div>
                {props.course ? (
                    <Paper style={{ padding: 16, height: '100%', backgroundColor: 'white', margin: 10, width: 300 }}>
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
                ) : (
                    <Typography variant="h6" style={{ padding: "25px 0 0 20px" }}>Course not found</Typography>
                )}
            </div>
        </div>
}
function UpdateCard(props){
    let { courseId } = useParams();
    let course = props.course
  

    const [title,setTitle] =useState('')
    const [description,setDescription] =useState('')
    const [imageLink,setImageLink] =useState('')
    const [price,setPrice] = useState('')

    
return <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:50
   }}>
    <Card variant='outlined' style={{ width:400, padding:20, backgroundColor:"#FFF5E1",}}>
    <TextField 
        fullWidth onChange={(e) => {
        setTitle(e.target.value)
    }}  label="Title" variant="outlined" />
    <br />
    <br />
    <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          placeholder='write about your course'
          onChange={(e)=>{
            setDescription(e.target.value)
          }}
        />
    <br />
    <br />
    <TextField
          label="Price"
          multiline
          maxRows={4}
          onChange={(e) =>{
            setPrice(e.target.value)
          }}
        />
    <TextField
          label="Image Link"
          placeholder="image link"
          multiline
          onChange={(e) =>{
            setImageLink(e.target.value)
          }}
          style={{marginLeft:24}}
        />
    <br />
    <br />
    <div style={{
    display:"flex",
    justifyContent:"center",
   }}><Button size='large' variant="outlined"
   onClick={ ()=> {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/admin/courses/'+ courseId,
        {method:'PUT',
            headers:{
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify({
                title,description,imageLink,price,published:true
            })
        },
    ).then(response => response.json())
    .then(data => {
        let updatedCourses = [...props.courses];
        for (let i = 0; i < updatedCourses.length; i++) {
            if (updatedCourses[i]._id === course._id) {
                updatedCourses[i] = { ...updatedCourses[i], title, description, imageLink, price };
                break; 
            }
        }
        props.setCourses(updatedCourses);
    })
   }
   }
>Update Course</Button>
    </div>
    <br />
   </Card>
</div>  
}

export default EditCourse
