import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signin(){
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
    <TextField fullWidth id="outlined-basic" label="USERNAME" variant="outlined" />
    <br />
    <br />
    <TextField fullWidth id="outlined-basic" label="PASSWORD" type="password"variant="outlined" />
    <br />
    <br />
    <div style={{
    display:"flex",
    justifyContent:"center",
   }}><Button size='large' variant="outlined">SignIn</Button>
    </div>
    <br />
   </Card>
</div>  
}

export default Signin;