import React,{useEffect,useLayoutEffect,useState} from "react";
const UseLayOut=()=>{
    useEffect(()=>{
        console.log("useEffect")
    })
    useLayoutEffect(()=>{
        console.log("useLayoutEffect")
    })
    return(
        <>
            <div>useLayout is a synchronous</div>
        </>
    )
}
export default UseLayOut;
// useLayout Hook synchronous 