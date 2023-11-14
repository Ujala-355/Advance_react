import React,{useState} from "react";

const data=[
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
]
const itemsPerPage=2;

const Pagination=()=>{
    const [current,setCurrent]=useState(true);
    const startIndex=(current-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;

    const currentData=data.slice(startIndex,endIndex);
    const totalPages=Math.ceil(data.length/itemsPerPage);
    
    const handleNextPage=()=>{
        if(current<totalPages){
            setCurrent(current+1);
        }
    }
    const handlePrevPage=()=>{
        if(current>1){
            setCurrent(current-1)
        }
    }
    return(
        <>
            <h1>Pagination</h1>
            <ul>
                {currentData.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p> Page {current} of {totalPages}</p>
            <button onClick={handlePrevPage} disabled={current===1}>Previous</button>
            <button onClick={handleNextPage} disable={current===totalPages}>next</button>
        </>
    )
}
export default Pagination;