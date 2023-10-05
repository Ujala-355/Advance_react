import React from "react";
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <>  
            <header>
                <a href="#" className="text">Logo</a>
                <nav>
                    <ul>
                        <li>
                            <Link className="text" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="text" to="/cantact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Home;