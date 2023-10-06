import React from "react";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
const Dashboard=()=>{
    const navigate=useNavigate();
    const handle=()=>{
        navigate("/")
    }
    const buttonStyle = {
        marginRight: '10px',
    };

    return(
        <>
            <h1>Dashboard Page</h1>
            <Button onClick={handle} variant="contained" style={buttonStyle}>Go to Dashboard</Button>
            <Button onClick={()=>navigate(-1)} variant="contained">Go back</Button>
        </>
    )
}
export default Dashboard;