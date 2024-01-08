import React, {useState} from "react";
const LetterTiles=()=>{
    const [word, setWord]=useState('');
    const handleWordChange=(e)=>{
        setWord(e.target.value.toUpperCase());
    };
    return(
        <>
            <div style={{
                width:"600px",height:"200px",border:"2px solid blue",margin:"auto",
                borderRadius:"94px",
                background: "#e0e0e0",
                boxShadow:  "18px 18px 52px #848484,-18px -18px 52px #ffffff",
                }}
            >
                <h1 style={{textAlign:"center"}}>Letter Tiles</h1>
                <lable htmlFor="word" style={{textAlign:"center"}}>Enter a word:</lable>
                <input
                    type="text"
                    id="word"
                    value={word}
                    onChange={handleWordChange}
                    style={{ width: "80%", padding: "10px", marginTop: "10px" }}

                />
            </div>
            <div>
                {word.split("").map((letter,index)=>(
                    <div key={index} style={{display:"inline-block",margin:"5px",padding:"10px",border:"1px solid black"}}>
                        {letter}
                    </div>
                ))}
            </div>
        </>
    )
}
export default LetterTiles