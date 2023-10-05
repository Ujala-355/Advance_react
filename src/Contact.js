import React from "react";
import {NavLink} from "react-router-dom";
const Cantact=()=>{
    return(
        <>
            <header>
                <a href="#">Logo</a>
                <nav>
                    <ul>
                        <li>
                            <NavLink className="text" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="text" to="/cantact">Cantact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1>Cantact Page</h1>
            </section>
        </>
    )
}
export default Cantact;