import React,{useState} from "react";
import {Slider,Typography} from "@material-ui/core"
const RangeSlider=()=>{
    const [val,setVal]=useState([40,100])
    const updateVal=(e,item)=>{
        setVal(item)
    }
    return(
        <>
            <Typography variant="h4">Range Slider</Typography>
            <div style={{width:500,margin:30}}>
                <Slider
                    value={val}
                    max={200}
                    onChange={updateVal}
                    variant="secondary"
                />
            </div>
        </>
    )
}
export default RangeSlider;