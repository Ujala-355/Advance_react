import React from "react";
import { NavLink } from "react-router-dom";
const About=()=>{
    return(
        <>
            <header>
                <a href="#" className="text">Logo</a>
                <nav>
                    <ul>
                        <li>
                            <NavLink className="text" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="text" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1>About Page</h1>
            </section>
        </>
    )
}
export default About;