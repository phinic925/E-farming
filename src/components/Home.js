import React, { useState } from "react";
import useFetch from "./useFetch";



function Home(){
    const[data] = useFetch("http://localhost:3000/products")
    const[search,setSearch] = useState("");
    function handleSearch(e){
        setSearch(e.target.value)
    }

    return(
        <>
        <h1 className="heading"> E-Ukulima Wetu </h1>
        <p className="para"> Welcome to Mkulima! </p>
        <div className="input-group col-xs-4">
      <input
        type="search"
        placeholder="Search Product"
        className="form-control"
       
      />
     <button className ="btn btn-primary"> search </button>

     
      
     </div>
     
         {data && <div>
             {data.map(item=>(

                 <div className="product" key={item.id}>
                 <img src={item.image_url}/> 
                 
                 <h3 className="header1"> {item.name} </h3>
                 <p className="header2">{item.description}</p>
                <h4 className="header3"> {item.category} </h4>
                <button className="btn btn-primary button"> Order </button>
   
                 </div>
               
             ))}
         
         





     </div>
     }
    
   

      

        
        
        </>
    )
}
export default Home;