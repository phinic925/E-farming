import React,{useState}from "react";

function FarmerForm(){
    const[name,setName] = useState("");
    const[image,setImage_url] = useState("");
    const[description,setDescription] = useState("");
    const[category,setCategory] = useState("");
  
    function handleSubmit(e){
      e.preventDefault();
      const itemData = {
        name: name,
        image_url: image_url,
        description: description,
        category: category,
  
      };
      fetch(url,{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(itemData),
      })
      .then(res=> res.json())
    .then(data=>{
      console.log(data)
    })
}
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