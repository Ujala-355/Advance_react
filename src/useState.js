// import React,{useState} from "react";
// const Page=()=>{
//     const [isOn,setIsOn]=useState(false)
//     const handle=()=>{
//         setIsOn(!isOn)
//     }
//     return(
//         <button onClick={handle}>
//         {isOn? "on":"off"}
//         </button>
        
//     )
// }
// export default Page;

import React,{useState} from "react";
import Button from '@mui/material/Button';
const Toggle=()=>{
    const [isOn,setIsOn]=useState(false)
    const handle=()=>{
        setIsOn(!isOn)
    }
    return(
        <>
            <Button onClick={handle} variant="contained">{isOn?"On":"Off"}</Button>
        </>
    )
}
export default Toggle;