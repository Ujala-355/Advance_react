import React from "react";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
const Cantact=()=>{
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/deshboard")
    }
    const buttonStyle={
        marginRight:"10px",
    }
    return(
        <>
            <section>
                <h1>Cantact Page</h1>
                <Button onClick={handle} variant="contained" style={buttonStyle} >Go to the Home page</Button>
                <Button onClick={()=>navigate(-1)} variant="contained">Go Back</Button>
            </section>
        </>
    )
}
export default Cantact;