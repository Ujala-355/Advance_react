import React,{useRef} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const UncontrolledInput=()=>{
    const inputRef=useRef(null);
    const handleButton=(e)=>{
        alert(`input value: ${inputRef.current.value}`)

    };
    return(
        <>
            <TextField type="text" defaultValue="Initial Value" ref={inputRef}/>
            <Button variant="contained" onClick={handleButton}>Get Value</Button>
        </>
    )
}
export default UncontrolledInput;