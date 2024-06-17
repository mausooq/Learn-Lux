import { Button, Typography } from "@mui/material";


function Appbar(){
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
        window.location='./signup';
    }}
     style={{
        marginRight:10
    }}>SIGNUP</Button>
    <Button size="small" variant="contained"
    onClick={()=>{
        window.location='./signin';
    }}>SIGNIN</Button>
    </div>
   
    </div>
}
export default Appbar;