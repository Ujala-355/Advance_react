import React,{useState} from "react";
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
const ShowHideToggle=()=>{
    const [show,setShow]=useState(false)
    return(
        <>
            <Button variant="contained" onClick={()=>setShow(true)}>Show</Button>
            <Button variant="contained" onClick={()=>setShow(false)}>Hide</Button>
            <Button variant="contained" onClick={()=>setShow(!show)}>Toggle</Button>
            <Typography>{show ? "Content is visible" : "Content is hidden"}</Typography>

        </>
    )
}
export default ShowHideToggle;