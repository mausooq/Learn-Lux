import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signin(){
    const navigate =useNavigate()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
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
        Welcome Back, SignIn Below
    </Typography>
    </div>
    <Card variant='outlined' style={{ width:400, padding:20, backgroundColor:"#FBF9F1",}}>
    <TextField fullWidth onChange={(e) => {
        setUsername(e.target.value)
    }}  label="USERNAME" variant="outlined" />
    <br />
    <br />
    <TextField fullWidth onChange={(e) => {
        setPassword(e.target.value)
    }} label="PASSWORD" type="password"variant="outlined" />
    <br />
    <br />
    <div style={{
    display:"flex",
    justifyContent:"center",
   }}><Button size='large' variant="outlined"
   onClick={() => {
    fetch("http://localhost:3000/admin/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username:username,
            password:password
         })
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("token",data.token)
        console.log('Success:', data);
        window.location='/admin/addcourse'
    })
    .catch(error => {
        console.error('Error:', error);
    });
}}
>SignIn</Button>
    </div>
    <br />
   </Card>
</div>  
}

export default Signin;