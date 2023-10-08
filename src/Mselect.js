import React,{useState} from "react";
import {Select,MenuItem,Typography} from "@material-ui/core";
const Select_Opstion=()=>{
    const [course,setCourse]=useState("");
    const updateValue=(e)=>{
        console.log(e.target.value);
        setCourse(e.target.value);
    }
    return(
        <>
            <Typography variant="h4">React Material UI | Select Box or Select</Typography>
            <Typography variant="h5">Food Menu</Typography>
            <Select
                value={course}
                displayEmpty
                onChange={updateValue}
            >
                <MenuItem value="">Select items</MenuItem>
                <MenuItem value={1}>Samosa</MenuItem>
                <MenuItem value={2}>Jalebi</MenuItem>
                <MenuItem value={3}>Aloo Paratha</MenuItem>
                <MenuItem value={4}>Alu Dam</MenuItem>
            </Select>
        </>
    )
}
export default Select_Opstion;