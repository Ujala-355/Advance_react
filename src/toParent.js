import React,{useState} from "react";
import ChildData from "./passChildData"

const Parent=()=>{
    const [a,setA]=useState("parent")
    return(
        <>
            <p>I am a {a}</p>
            <ChildData x={a} setX={setA}/>
        </>
    )
}
export default Parent;