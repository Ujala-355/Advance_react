import React from "react";
import useCounterC from "./useCounterCustomC";
import {Button} from "@mui/material"

const CounterCustomP=()=>{
    const {count,increment,decrement,reset}=useCounterC(0);
    return(
        <>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={reset}>Reset</Button>
        </>
    )
}
export default CounterCustomP