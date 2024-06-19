import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Appbar(){
    const navigate = useNavigate()
    const [userEmail,setUserEmail] = useState('')
    useEffect (() =>{
        fetch('http://localhost:3000/admin/me',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                 'Authorization': "Bearer" + localStorage.getItem('token')
            }
        }).then( response => response.json)
        .then( data =>{
            if(data.username){
                setUserEmail = data.username
            }
        })
    },[])


    if(userEmail){
            return <div style={{
                padding:10,
                display:"flex",
                justifyContent:"space-between",
            }}>
            <div><Typography variant="h6">
                LEARN LUX
            </Typography>
            </div> 
            <div> <Button size="small" variant="contained" onClick={()=>{
                navigate('/admin/signup')
            }}
            style={{
                marginRight:10
            }}>SIGNUP</Button>
            <Button size="small" variant="contained"
            onClick={()=>{
                navigate('/admin/signin')
            }}>SIGNIN</Button>
            </div>
        
            </div>
        }

else{
    return <div style={{
        padding:10,
        display:"flex",
        justifyContent:"space-between",
    }}>
    <div><Typography variant="h6">
        LEARN LUX
    </Typography>
    </div> 

    </div>
}
}
export default Appbar;