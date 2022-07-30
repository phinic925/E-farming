import React from "react";
//import {CartProvider} from "./CartContext"


function Products(){
    const {items} = useContext(CartContext);

    return(
      
        <>
        <h1> No products currently ordered </h1>
          </>
    )
}
export default Products;