import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
  return (
    
    <div className="flex flex-col items-center h-screen w-full bg-gradient-to-b from-cyan-200 via-sky-300 to-blue-500">
    <p>Home</p>
    <div className="flex flex-col space-y-6 items-center mt-6">
        <button  onClick={()=> navigate('/urlone')}  className="w-[150px] h-[50px] bg-blue-500 p-2 rounded-xl text-white hover:scale-[1.1] transition transform-[1s]">url1</button>
        <button   onClick={()=> navigate('/urltwo')} className="w-[150px] h-[50px] bg-blue-500 p-2 rounded-xl text-white  hover:scale-[1.1] transition transform-[1s]">url2</button>

    </div>
    </div>
 
   
  )
}

export default Home