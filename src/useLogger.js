import React,{useEffect} from "react";
const UseLogger=(value)=>{
    useEffect(()=>{
        console.log(value)
    },[value])
    return(
        <>
        </>
    )
}
export default UseLogger;