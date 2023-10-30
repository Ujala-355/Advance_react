// import React,{useState} from "react";
// import {Snackbar,Button,IconButton,CloseI} from "@mui/material"
// const MuiSnackbar=()=>{
//     const [open,setOPen]=useState(false)
//     const handleClose=(event?:React.SyntheticEvent | Event,reson?: string)=>{

//     }
//     return(
//         <>
//             <Button>Submit</Button>
//             <Snackbar
//                 message="form submitted successfully"
//                 autoHideDuration={4000}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </>
//     )
// }
// export default MuiSnackbar;

import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <>
            <Button onClick={handleClick}>Submit</Button>
            <Snackbar
                message="Form submitted successfully"
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
            />
        </>
    );
};

export default MuiSnackbar;
