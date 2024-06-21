import { Typography } from "@mui/material";
import { useEffect, useState } from "react";



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
                // console.log(data.courses);
                setCourses(data)
        } 
        )
    },[])
    return <div>
        <div>
<Typography variant="h6" style={{padding:"25px 0 0 20px "}}>Course</Typography>
        </div>
        {courses.map((course, index) => {
    return <Course key={index} course={course}/>
})}
    
</div>
}
function Course(props){
    return <div>
        {props.course.title}
        <br />
        {props.course.description}
    </div>
}

export default Courses;