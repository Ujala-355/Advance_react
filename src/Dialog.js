import React,{useState} from "react";
import {Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";
const Dialog1=()=>{
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true)
    }
    return(
        <>
            <Button onClick={handleOpen} variant="contained">opne Dialog</Button>
            <Dialog 
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="dialog-title" 
                aria-describedby="dialog-description">
                <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dilog-description">
                        Are you sure you want to submit the test
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Dialog1;