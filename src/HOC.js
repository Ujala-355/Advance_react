import React ,{useState} from "react";
const HOC=()=>{
    return(
        <>
            <h1>Hight order component</h1>
            <HocRed cmp={MyHoc}/>
            <HocPink cmp={MyHoc}/>
        </>
    )
}
const HocRed=(props)=>{
    return(
        <>
            <h3 style={{backgroundColor:"red", width:100}}><props.cmp/></h3>
        </>
    )
}
const HocPink=(props)=>{
    return(
        <>
            <h3 style={{backgroundColor:"pink", width:100}}><props.cmp/></h3>
        </>
    )
}
const MyHoc=()=>{
    const [count,setCount]=useState(0);
    return(
        <>
            <h1>Count :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </>
    )
}

export default HOC;