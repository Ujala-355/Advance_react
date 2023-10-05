import { BrowserRouter,Route,Routes } from "react-router-dom";
const Router=()=>{
    return(
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>}/>
                    <Route path="/about" element={<div>About Page</div>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;