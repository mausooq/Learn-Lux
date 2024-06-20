import { useEffect, useState } from "react";



function Courses(){
    const [course,setCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/courses',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        }).then(response => response.json())
        .then( data =>{
             if(data){
                setCourse(data)
            }
        } 
        )
    },[])
    return <div>
 
</div>
}

export default Courses;