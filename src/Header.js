import {NavLink} from "react-router-dom";
const Header=()=>{
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
                            <NavLink className="text" to="/cantact">Cantant</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;