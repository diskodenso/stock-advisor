import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavigationBar">
            <h3>LOGO</h3>
                <ul className="NavLinks">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                </li>
                 <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
    )
}
export default NavBar;
