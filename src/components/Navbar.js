import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg  justify-content-between text-white  ">
            <div className="container-fluid">
        <Link to="/" exact className="navbar-brand"> All products </Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav nav-fill w-100 " >
        <li className="navbar-item">
        <Link exact to="/products" className="navbar-brand"> products </Link>
        </li>
        <li className="navbar-item">
        <Link exact to="/customer" className="navbar-brand"> Farmer </Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        
        
    )
}
export default Navbar;