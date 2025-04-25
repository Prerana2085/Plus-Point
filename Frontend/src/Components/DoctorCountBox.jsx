import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

function DoctorCountBox() {
    const [count,setCount] = useState(0);

    
    useEffect(()=>{
        const fetchDoctorCount = async()=>{
            try {
                const res = await axios.get('http://localhost:4000/api/count',{
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log(res.data.count);
                setCount(res.data.count);
    
            } catch (error) {
                console.log("error in frontend",error);
            }
        }
        fetchDoctorCount();
    },[])
  return (
    <div>{count}</div>
  )
}

export default DoctorCountBox