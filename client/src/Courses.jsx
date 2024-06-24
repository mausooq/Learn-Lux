import { Typography,Box } from "@mui/material";
import { Card,CardMedia,CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function Courses(){
    let [courses,setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/courses',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }).then(response => response.json())
        .then( data =>{
                // console.log(data);
                setCourses(data)
        } 
        )
    },[])
    return <div>
        <div>
<Typography variant="h6" style={{padding:"25px 0 0 20px "}}>Course</Typography>
        </div>
       <div style={{
      display:'flex'
    }}>
        {courses.map((course, index) => {
    return <Course key={index} course={course}/>
})}
    </div>
</div>
}
function Course(props){
    return <div >
          <Card sx={{ maxWidth: 345, maxHeight: 500, overflow: 'auto' }}
          style={{
            width:'30vw',
            height:'500px',
            margin:10,
            padding:4
          }}>
      <CardMedia
        sx={{ height: 120,
          width:'100%'
         }}
        image={props.course.imageLink}
      />
      <CardContent sx={{ flex: '1 1 auto' }}>
        <Typography gutterBottom variant="h5" component="div">
        {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.course.description}
        </Typography>
        <br />
      </CardContent>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
          <FaRupeeSign />
          <Typography variant="body1" style={{ fontWeight: 'bold', marginLeft: 4 }}>
            {props.course.price}
          </Typography>
        </div>
    </Card>   
    </div>
}

export default Courses;