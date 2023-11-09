import React from "react";
import {BrowserRouter as Router,Routes,Route,useHistory} from "react-router-dom";

const Home=()=>{
    const history=useHistory();
    const navigateToAbout=()=>{
        history.push("/about")
    }
    return(
        <>
            <h2>Home</h2>
            <button onClick={navigateToAbout}>Go to About</button>
        </>
    )
}
const About=()=>{
    const history=useHistory();
    const goBack=()=>{
        history.goBack();
    }
    return(
        <>
            <h1>About</h1>
            <button onClick={goBack}>GO Back</button>
        </>
    )
}
const UseHistory=()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Router>
        </>
    )
}
export default UseHistory;