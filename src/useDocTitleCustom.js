import React,{useState,useEffect} from "react";
import {Button} from "@mui/material"
const DocTitleCustom=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])
    return(
        <>
            <Button variant="contained" onClick={()=>setCount(count+1)}> count {count}</Button>
        </>
    )
}
export default DocTitleCustom