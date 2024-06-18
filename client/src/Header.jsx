import {  Typography } from "@mui/material";

function Header(){
    return <div style={{
        padding:10,
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:'#102C57',
        color:'#eeeeee'
    }}>
    <div><Typography variant="h6">
        LEARN LUX
    </Typography>
    </div> 
   
    </div>
}
export default Header;