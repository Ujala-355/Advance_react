import React,{useReducer} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const initialState={count:0};
const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}
        default:
            throw new Error("error",action.type)
    }
}
const UseReducer=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    return(
        <>
            <Typography>Count:{state.count}</Typography>
            <Button variant="contained" onClick={()=>dispatch({type:"increment"})}>Increment</Button>
            <Button variant="contained" onClick={()=>dispatch({type:"decrement"})}>Decrement</Button>
            <Button variant="contained" onClick={()=>dispatch({type:"reset"})}>Reset</Button>
        </>
    )
}
export default UseReducer;