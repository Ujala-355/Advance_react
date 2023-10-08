import React from "react";
import {TextField, Typography} from "@material-ui/core";
const Textfield=()=>{
    const get_Data=(e)=>{
        console.log(e.target.value)
    }
    return(
        <>
            <Typography variant="h4">Text Field</Typography>
            <TextField
            label="enter your name"
            color="primery"
            variant="outlined"
            onChange={get_Data}
        
            ></TextField>
        </>
    )
}
export default Textfield;