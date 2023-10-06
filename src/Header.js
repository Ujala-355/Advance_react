import {NavLink} from "react-router-dom";
const Header=()=>{
    return(
        <>
            <header>
                <a href="#">Logo</a>
                <nav>
                    <ul Style="list-style-type:none;">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cantact">Cantant</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;