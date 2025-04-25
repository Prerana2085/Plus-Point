import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { showLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { setUser } from '../redux/features/userSlice';
// If user already in our list
export default function ProtectedRoutes({children}) {
    // const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user)

    const getUser =async()=>{
        try{
            dispatch(showLoading);
            const resp=await axios.post('https://plus-point-backend.onrender.com/getUserData', {
                token:localStorage.getItem('token')},
                {
                headers:{
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
                }
            )
            dispatch(hideLoading());
            if(resp.data.success){
                dispatch(setUser(resp.data.data))
            }
            else{
                <Navigate to='/Login'/>
            }
        }catch(err){
            dispatch(hideLoading());
        console.log(err);
        }
        useEffect(()=>{
            if(!user){
                getUser();
            }
        },[user,getUser])
    }
    if(localStorage.getItem("token")){
        return children;
    }
    else{
        // return navigate('/Login');
        return <Navigate to='/Login' />
    }
}

