import React,{forwardRef,useImperativeHandle,useState} from "react";
import Button from "@mui/material/Button";
const Child=forwardRef((props,ref)=>{
    const [count,setCount]=useState(0)
    useImperativeHandle(ref,()=>({
        increment
    }))
    const increment=()=>{
        setCount(count+1)
    }
    
    return(
        <>
            <p>{count}</p>
            <Button onClick={increment} variant="contained">Child Click</Button>
        </>
    )
})
export default Child;