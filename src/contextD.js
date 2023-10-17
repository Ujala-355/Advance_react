import React,{useContext} from "react"
import {Name} from "./contextA";
const D=()=>{
    const firstName=useContext(Name)
    return(
        <>
            <h1>D component</h1>
            {firstName}
        </>
    )
}
export default D;