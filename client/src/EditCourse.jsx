import React, { useEffect, useState } from 'react'

const EditCourse = () => {
    const [course,setCourse] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
            method:'GET',
            headers:{
                'Authorization':'Bearer' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => res.json)
        .then(data => setCourse(data))
    },[])
  return (
    <div>EditCourse</div>
  )
}

export default EditCourse
