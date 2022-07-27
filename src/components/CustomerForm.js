import React from "react";

function FarmerForm(){
    return(
        <form className="form-horizontal">
           <div className="form-group">
            <input type="text" placeholder="Enter Name"/>
            </div> <br/>
            <div className="form-group">
            <input type="text" placeholder="Enter Image-url"/></div>
            <br/>
            <div className="form-group">
            <input type="text" placeholder="Enter description"/> </div>
            <br/>
            <div className="form-group">

            <input type="text" placeholder="Enter category"/> </div>
            <br/>
            <div className="form-group">
             
            <input type="submit" value="Add product" className="btn btn-primary" />
            </div>
        </form>
        

        
    )
}
export default FarmerForm;