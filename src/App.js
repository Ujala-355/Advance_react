import React,{useState} from "react"
import {Snackbar,Button} from "@mui/material"
const MuiSnackbar=()=>{
  const  [open,setOpen]=useState(false);
  const handleClose=(event,reason)=>{
    if (reason==="Clickaway"){
      return;
    }
    setOpen(false);
  };
  const handleClick=()=>{
      setOpen(true)
  };
  return(
    <>
        <Button onClick={handleClick} variant="contained" >Snackbar Button</Button>
        <Snackbar
            message="Form Snackbar successfully"
            autoHideDuration={1000}
            open={open}
            onClose={handleClose}
        />
    </>
  )
}
export default MuiSnackbar;