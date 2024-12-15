import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
const Contentone = () => {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [state, setState] = useState("false");
    const [state1, setState1] = useState("");
    const abc=async()=>{
      let formData = new FormData();
formData.append("image",document.getElementById("image").files[0]);
const path=URL.createObjectURL(document.getElementById("image").files[0])
setState1(path)
      console.log("Hello")
      const res=await fetch("http://localhost:3000/result1",{ body: formData,
      method: "post"})
      .then((res) => res.json())
      .then((data) => {
          setData(data.members);
          console.log(data);
        if(typeof data!=undefined)
        setState("true")
    })}
  return (
    <>
    {/* <div className="flex flex-col items-center">
    <div>
  <label for="image">Select a file:</label>
  <input type="file" id="image" name="image"/><br/><br/>
  <input type="submit" onClick={abc} className="w-[150px] h-[50px] bg-sky-500 bg-gradient-to-bl p-2 rounded-xl text-white hover:scale-[1.1] transition transform-[1s] mt-6"/>
  </div>
    <button  onClick={()=> navigate(-1)}  className="w-[150px] h-[50px] bg-sky-500 bg-gradient-to-bl p-2 rounded-xl text-white hover:scale-[1.1] transition transform-[1s] mt-6">back</button>

    </div> */}
   {state=="true"?<><h1>{data[0]}</h1><img src={state1} width="100px" height="100px"/></>
   :<div className="flex flex-col items-center">
   <div>
 <label for="image">Select a file:</label>
 <input type="file" id="image" name="image"/><br/><br/>
 <input type="submit" onClick={abc} className="w-[150px] h-[50px] bg-sky-500 bg-gradient-to-bl p-2 rounded-xl text-white hover:scale-[1.1] transition transform-[1s] mt-6"/>
 </div>
   <button  onClick={()=> navigate(-1)}  className="w-[150px] h-[50px] bg-sky-500 bg-gradient-to-bl p-2 rounded-xl text-white hover:scale-[1.1] transition transform-[1s] mt-6">back</button>

   </div>}
    </>
  )
}

export default Contentone
