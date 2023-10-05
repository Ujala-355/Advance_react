import React,{useState} from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
            <p>Count:{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}
export default Counter;