import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" exact className="navbar-brand"> Home </Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav" >
        <li className="navbar-item">
        <Link exact to="/products" className="navbar-brand"> products </Link>
        </li>
        <li className="navbar-item">
        <Link exact to="/customer" className="navbar-brand"> customer </Link>
        </li>
        </ul>
        </div>
        </nav>
        
    )
}
export default Navbar;