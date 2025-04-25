import React from 'react';
import { useEffect } from 'react';
import { Navbars } from './Navbars';
import DoctorsList from './DoctorsList';
import './Home.css'
import axios from 'axios';
import UserInfo from './UserInfo';
import FrontPage from './FrontPage';
export const Home = () => {
  // login user data
  const getUserData = async()=>{
    try{
      const res=await axios.post('https://plus-point-backend.onrender.com/getUserData',{},{
        headers:{
          Authorization:'Bearer ' + localStorage.getItem("token"),
        },
      })
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getUserData();
  },[]);
  return (
    <>
    <div><Navbars/></div>
    </>
  );
}
