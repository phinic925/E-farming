import React, { useState } from "react";
import useFetch from "./useFetch";



function Home({addToCart}){
    const[data] = useFetch("http://localhost:3000/products")
    const[search,setSearch] = useState("");
    

    // const handleClick = (item) => {
    //     if (cart.indexOf(item) !== -1) return;
    //     setCart([...cart, item]);
    //   };
    
    //   const handleChange = (item, d) => {
    //     const ind = cart.indexOf(item);
    //     const arr = cart;
    //     arr[ind].amount += d;
    
    //     if (arr[ind].amount === 0) arr[ind].amount = 1;
    //     setCart([...arr]);
    //   };
       
    
    return(
        <>
        <h1 className="heading"> E-Ukulima Wetu </h1>
        <p className="para"> Welcome to Mkulima! </p>
        <div className="input-group col-xs-4">
      <input
        type="text"
        placeholder="Search Product"
        className="form-control"
        onChange={(e)=>setSearch(e.target.value) }
       
      />
     <button className ="btn btn-primary" > search </button>

     
      
     </div>
     
         {data 

         
         
         && <div>
            
             {data
             
             .filter((item) =>{
                if (search == ""){
                    return item;
                }
                else if(item.name.toLowerCase().includes(search.toLowerCase())){
                    return item;
                }
            })
             
             .map(item=>(

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