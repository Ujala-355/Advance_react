import React,{useState} from "react"
import {Typography} from "@mui/material"
const CurrentTime=()=>{
    const time=new Date().toLocaleTimeString()
    const [currentTime,setCurrentTime]=useState(time);
    const updateTime=()=>{
        const Newtime=new Date().toLocaleTimeString();
        setCurrentTime(Newtime)
    }
    setInterval(updateTime,1000)
    return(
        <>  
            
            <Typography style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>Current Time {currentTime}</Typography>
        </>
    )
}
export default CurrentTime;