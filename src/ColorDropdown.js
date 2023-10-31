import React,{useState} from "react";
import  {Box,InputLabel,MenuItem,FormControl,Select,Typography} from "@mui/material"; 
const ColorDropdown=()=>{
    const [color,setColor]=useState("")
    const handleColor=(e)=>{
        setColor(e.target.value)
    }
    return(
        <>
            <Box sx={{width:160,height:20, margin:"auto" ,marginTop:5}}>
                <FormControl fullWidth>
                    <InputLabel>Color</InputLabel>
                    <Select onChange={handleColor} value={color}>
                        <MenuItem value="red">Red</MenuItem>
                        <MenuItem value="green">Green</MenuItem>
                        <MenuItem value="Black">Black</MenuItem>
                    </Select>
                </FormControl>
                <Typography>This is a color {color}</Typography>
            </Box>
            
        </>
    )
}
export default  ColorDropdown;