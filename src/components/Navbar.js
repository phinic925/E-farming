import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <header className='header4'>
        
        <nav>
            <ul>
               <li><Link to='/'>All Products </Link></li> 
               <li> <Link to='/products'>Products</Link></li>
               <li> <Link to='/farmer'> Farmer </Link></li>
            </ul>
        </nav>
    </header>
    
        
    )
}
export default Navbar;