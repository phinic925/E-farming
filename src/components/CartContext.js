import React,{createContext,usestate} from "react";

const CartContext = createContext();
 export  function CartProvider({children}){
    const[items,setItems]= usestate([]);
    const addToCart = (name,category) =>{
        setItems((prevState)=> [...prevState, {name,category}]);
    }




 return (
    <CartContext.Provider value={{items,addToCart}}>
        {children}
    </CartContext.Provider>
)
}
export default CartContext;


  