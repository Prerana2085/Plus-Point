// import React {useEffect } from 'react'
import React, { useEffect } from 'react'
// useEffect
// import { Home } from '../Components/Home'
import { Home } from './Components/Home'

// import { Login } from '../Components/Login'
// import  {Consultancy} from '../Components/Consultancy'
// import { Facilities } from '../Components/Facilities'
// import { Aboutus } from '../Components/Aboutus'
// import { Blogs } from '../Components/Blogs'
// import { NotFound } from '../Components/NotFound'
// import DoctorsList from '../Components/DoctorsList'
import './MainPage.css'
// import { get } from 'mongoose'
import axios from"axios"
export const MainPage = () => {
  // Login user data
  const getUserData=async()=>{
    try{
const res = await axios.post(
  "https://plus-point-backend.onrender.com/getUserData",
  {},
  {
    headers: {
      // object
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }
);
}catch(err){
      console.error(err);
    }
  };

  useEffect(()=>{
  getUserData();
},[]);
  return (
    <>
    <div className='mainpage'>
        <div className="home"><Home/></div>
    </div>
    </>
  )
}
