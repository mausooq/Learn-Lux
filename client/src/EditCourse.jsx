import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const EditCourse = () => {

    let { courseId } = useParams();
    const [course,setCourse] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
            method:'GET',
            headers:{
                'Authorization':'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data =>{
            console.log(data);
            setCourse(data)})
        
    },[])
  return (
    <div>
      
    </div>
  )
}

export default EditCourse
