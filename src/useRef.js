import React from "react"
import {useRef} from "react"
import Button from "@mui/material/Button"
const UseRef=()=>{
    const inputRef=useRef()
    const handleRef=()=>{
        console.log(inputRef ,"handleRef")
        inputRef.current.focus()
        // inputRef.current.focus()
        console.log(inputRef.current.value)
        // inputRef.current.style.color="red"
        inputRef.current.style.display="none"
    }
    return(
        <>
            <input ref={inputRef} type="text"/>
            <Button   variant="contained" color="secondary" onClick={handleRef}>Click</Button>
        </>
    )
}
export default UseRef;