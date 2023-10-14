import React,{useState} from "react";
import UseLogger from "./useLogger"
const Custom=(props)=>{
    const [name,setName]=useState("")
    UseLogger(name)
    return(
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}
export default Custom;