import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function AddCourse(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState('')

return <div style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
   }}>
    <div style={{
        paddingTop:150,
        marginBottom: "10px"
    }}>
    <Typography variant='h6'>
        Add Your Course
    </Typography>
    </div>
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
            setImage(e.target.value)
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
    fetch('http://localhost:3000/admin/addCourses',
        {method:'POST',
            headers:{
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify({
                title,description,imageLink:image,price,published:true
            }).then(response => response.json())
            .then(data => console.log(data))
        },
       
    )
   }
   }
>Add Course</Button>
    </div>
    <br />
   </Card>
</div>  

}

export default AddCourse;
