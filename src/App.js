import React,{useState} from "react"
import {Snackbar,Button,Alert} from "@mui/material"
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
            autoHideDuration={1000}
            open={open}
            onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message
                </Alert>
            </Snackbar>
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information meassage!</Alert>
            <Alert severity="success">This is a success message!</Alert>
    
    </>
  )
}
export default MuiSnackbar;