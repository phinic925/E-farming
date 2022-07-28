// import React,{useState,useEffect} from "react";
// function usePost(){
   
//     const[name,setName] = useState("");
//     const[image,setImage_url] = useState("");
//     const[description,setDescription] = useState("");
//     const[category,setCategory] = useState("");
  
//     function handleSubmit(e){
//       e.preventDefault();
//       const itemData = {
//         name: name,
//         image_url: image_url,
//         description: description,
//         category: category,
  
//       };
//       fetch(url,{
//         method: "POST",
//         headers:{"Content-Type": "application/json"},
//         body:JSON.stringify(itemData),
//       })
//       .then(res=> res.json())
//     .then(data=>{
//       console.log(data)
//     })
  
    
// }
// export default usePost;