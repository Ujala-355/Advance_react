import React ,{useReducer} from "react";
const initialState={number:0,isEven:false,};
const reducer=(state,action)=>{
    switch(action.type){
        case "Increment":
            return {...state,number:state.number+1,isEven:(state.number+1)%2===0,}
        case "Decrement":
            return {...state,number:state.number-1,isEven:(state.number-1)%2===0,}
        default:
            return state;
    };
}
const Checker=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <>
            <h1>Even/Odd Checker</h1>
            <p>Current Number:{state.number}</p>
            <p>{state.isEven ? "Even" : "Odd"}</p>
            <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        </>
    )
}
export default Checker;