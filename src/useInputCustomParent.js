import React from "react";
import useInput from "./useInputCustomChild"
const InputCustom=()=>{
    const nameInput=useInput("");
    return(
        <>
            <input
                type="text"
                value={nameInput.value}
                onChange={nameInput.onChange}
                style={{color:"blue"}}
            />
            <p>You entered: {nameInput.value}</p>
            
        </>
    )
}
export default InputCustom;