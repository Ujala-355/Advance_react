import React from "react";
import {TextField, Typography,Switch} from "@material-ui/core";
const Textfield=()=>{
    const get_Data=(e)=>{
        console.log(e.target.value)
    }
    const get_val=(e,val)=>{
        console.warn(val)
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
            <Typography variant="h3">Switch</Typography>
            <Switch
                color="secondary"
                size="small"
                onChange={get_val}
            />
            <Switch
                color="primary"
                size="medium"
            />
        </>
    )
}
export default Textfield;