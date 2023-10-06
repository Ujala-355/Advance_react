import React from "react";
import {useNavigate} from "react-router-dom";
const About=()=>{
    const navigate=useNavigate();
    const handle=()=>{
        navigate("/cantact")
    }
    return(
        <>
            <section>
                <h1>About Page</h1>
                <button onClick={handle}>Go to Cantact</button>
                <button onClick={()=>navigate(-1)}>Go back</button>
                
            </section>
    
        </>
    )
}
export default About;