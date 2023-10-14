import React,{useState} from "react";
import UseLogger from "./useLogger";
import useLocalStorage from "./useLocalStorage";
const Custom=()=>{
    const [name,setName]=useLocalStorage('name',"")
    UseLogger(name)
    return(
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}
export default Custom;