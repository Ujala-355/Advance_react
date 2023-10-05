import React,{useState,useEffect} from "react";
const FetchData=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((result)=>{
            setData(result);
        })
        .catch((error)=>{
            console.log("Error Fetching data",error);
        })
    },[]) //The empty dependency array [] means this effect runs once, like componentDidMount

    return(
        <>
            <h1>Fetching data using useEffect hook</h1>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}
export default FetchData;