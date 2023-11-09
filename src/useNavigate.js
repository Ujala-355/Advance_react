import React from "react";
import {BrowserRouter as Router, Routes,Route,useNavigate} from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();

    const navigateToAbout=()=>{
        navigate("/about")
        
    }
    return(
        <>
            <h2>Home</h2>
            <button onClick={navigateToAbout}>Go to About</button>
        </>
    )
}
const About=()=>{
    const navigate=useNavigate();
    const goBack=()=>{
        navigate(-1)
    }
    return(
        <>
            <h1>About</h1>
            <button onClick={goBack}>Go Back</button>
        </>
    )
}
const UseNavigate=()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                </Routes>
            </Router>
        </>
    )
}
export default UseNavigate;