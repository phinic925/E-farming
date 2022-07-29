import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
       <div className="cont container-fluid">
        <nav className="navbar  navbar-expand-lg ">
            
        <Link to="/" exact className="navbar-brand link"> All products </Link>
        <div className="collapse navbar-collapse">
        <ul className=" nav navbar-nav " >
        <li className="navbar-item active">
        <Link exact to="/products" className="navbar-brand link"> products </Link>
        </li>
        <li className="navbar-item">
        <Link exact to="/customer" className="navbar-brand link"> Farmer </Link>
        </li>
        </ul>
        </div>
       
        </nav>
        </div> 
        
        
    )
}
export default Navbar;