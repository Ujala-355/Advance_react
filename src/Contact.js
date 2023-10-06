import React from "react";
import {useNavigate} from "react-router-dom";
const Cantact=()=>{
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/")
    }
    return(
        <>
            <section>
                <h1>Cantact Page</h1>
                <button onClick={handle}>Go to the Home page</button>
                <button onClick={()=>navigate(-1)}>Go Back</button>
            </section>
        </>
    )
}
export default Cantact;