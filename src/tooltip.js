import React, {useState} from "react";

const Tooltip1=({text,children})=>{
    const [isTooltipVisible,setTooltipVisible]=useState(false);

    const handleMouseEnter=()=>{
        setTooltipVisible(true);
    }
    const handleMouseLeave=()=>{
        setTooltipVisible(false)
    }
    return(
        <>
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{position:'relative',display:'inline-block'}}
            >
                {children}
                {isTooltipVisible &&(
                    <div style={{position:'absolute', top:'100%', left:0, background:'#333', color:"#fff", padding:"5px"}}>
                        {text}
                    </div>
                )}
            </div>

        </>
    )
}
const MyTooltip=()=>{
    return(
        <Tooltip1 text="this is a tooltip">
            <button>Hover me</button>
        </Tooltip1>
    )
}
export default MyTooltip;