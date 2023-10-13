import React,{useRef} from "react";
import Child from "./useimperC";
import Button from "@mui/material/Button";

const Parent=()=>{
    const ref=useRef()
    const style={
        marginLeft:"10px",
    }
    return(
        <>
            <Child ref={ref}/>
            <Button variant="contained" onClick={()=>ref.current.increment()} style={style}>Parent Click</Button>
        </>
    )
}
export default Parent;