import React, {useState } from "react";
import useFetch from "./useFetch";
//import CartContext from "./CartContext";



    function Home({name,category}){
        const[data] = useFetch("http://localhost:3000/products")
        const[search,setSearch] = useState("");
        const[order,setOrder] = useState(true)
        //const {addToCart} = useContext(CartContext);

        const handleClick = (id) => () =>{
            setOrder((order) => ({
                ...order,[id]: !order[id],
            }));
        }
      
    
         return(
      
         <>
            <h1 className="heading"> E-Ukulima Wetu </h1>
            <p className="para"> Welcome to E-Mkulima! </p>
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
                        if (search === ""){
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
                        <button className="btn btn-primary button" onClick={handleClick(item.id)}> 
                        {order[item.id] ? ' Remove Order': 'Order'}
                        
                        </button>
   
                 </div>
               
             
             ))}
         
         
         
         </div>
    
        }
    
   

      

        
        
        </>
    )
}
export default Home;