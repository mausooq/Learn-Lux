import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signup(){
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
        Welcome To Learn Lux, SignUp Below
    </Typography>
    </div>
    <Card variant='outlined' style={{ width:400, padding:20, backgroundColor:"#FBF9F1",}}>
    <TextField fullWidth id="username" label="USERNAME" variant="outlined" />
    <br />
    <br />
    <TextField fullWidth id="password" label="PASSWORD" type="password"variant="outlined" />
    <br />
    <br />
    <div style={{
    display:"flex",
    justifyContent:"center",
   }}>
   <Button
    size="large"
    variant="outlined"
    onClick={() => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        fetch("http://localhost:3000/admin/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }}
>
    SignUp
</Button>
    </div>
    <br />
   </Card>
</div>  
}

export default Signup;