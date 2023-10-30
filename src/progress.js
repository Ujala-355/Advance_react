import React,{useState} from "react";
import {Stack,CircularProgress,LinearProgress} from "@mui/material"
const Progress1=()=>{
    const [progress,setProgrress]=useState(90);
    return(
        <>
            <Stack spacing={2}>
                <CircularProgress/>
                <CircularProgress color="success"/>
                <CircularProgress variant="determinate" value={70}/>
                <CircularProgress variant="determinate" value={progress}/>

                <LinearProgress/>
                <LinearProgress color="success"/>
                <LinearProgress varint="determinate" value={50}/>
                <LinearProgress color="secondary" />
                <LinearProgress color="inherit"/>
            </Stack>
        </>
    )
}
export default Progress1;