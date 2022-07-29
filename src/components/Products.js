import React from "react";
//import {CartProvider} from "./CartContext"
import {useContext} from "react"
import CartContext, { CartProvider } from "./CartContext";
 

function Products(){
    const {items} = useContext(CartContext);

    return(
      <CartProvider>
        <>
        <h1>Checkout </h1>
        <div >
            {items.map(item=>(
                <div key={item.name}>
                    <h2> {item.name}</h2>
                    <h3> {item.category}</h3>
                </div>
            )

            )}
        </div>
        
        </>
        </CartProvider>
    
    )
}
export default Products;