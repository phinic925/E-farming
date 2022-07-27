import React from "react";
import useFetch from "./useFetch";
const[data] = useFetch("")



function Home(){
    return(
        <>
        <h1 className="heading"> Mkulima Halisi </h1>
        <p className="para"> Welcome to Mkulima Halisi! </p>
        <div className="input-group col-xs-4">
      <input
        type="search"
        placeholder="Search Product"
        className="form-control"
       
      />
     <button className ="btn btn-primary"> search </button>

     
      
    </div>
    <div className="product">
         <img src="https://i0.wp.com/www.farmworx.co.ke/wp-content/uploads/2021/07/green-cabbage.jpg?fit=1600%2C1200&ssl=1"/> 
         <h3 className="header1"> Potatoes </h3>
         <p className="header2">Description</p>
         <h4 className="header3"> Category </h4>
     </div>
      

        
        
        </>
    )
}
export default Home;