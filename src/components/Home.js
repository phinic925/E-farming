import React from "react";



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

        
        
        </>
    )
}
export default Home;