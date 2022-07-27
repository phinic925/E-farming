import React from "react";
import useFetch from "./useFetch";
const[data] = useFetch("http://localhost:3000/products")

const fetchedData = data.map(item=>{ 
    return 
    <div className="product" key={item.id}>
    <img src={item.image-url}/> 
            <h3 className="header1"> {item.name} </h3>
            <p className="header2">{item.description}</p>
            <h4 className="header3"> {item.category} </h4>
   
            </div>
})



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
    {fetchedData}
   

      

        
        
        </>
    )
}
export default Home;