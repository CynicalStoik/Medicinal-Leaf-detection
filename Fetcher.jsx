import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { value } from '../App';

const Fetcher=()=>
{   console.log("Hi")
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/result1")
            .then((res) => res.json())
            .then((data) => {
                setData(data.members);
                console.log(data);
            })})
      value=data
if (!value) {
    return <p>Loading...</p>;
}

if (!value) {
    return <p>Opps. Something`s wrong</p>;
}

return (
    <div>
        {value.members.map((member, i) => (
            <h3 key={i}>{member}</h3>
        ))}
    </div>
);
}
export default Fetcher