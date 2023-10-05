import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Cantact from "./Contact"
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cantact" element={<Cantact/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
