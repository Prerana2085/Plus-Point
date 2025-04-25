import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { showLoading } from '../redux/features/alertSlice';
import axios from 'axios';
export default function PublicRoute({children}) {
  const dispatch=useDispatch();
  const {user} =useSelector(state=>state.user)
  const getUser=async()=>{
    try{
      dispatch(showLoading);
      const resp=await axios.post('https://plus-point-backend.onrender.com', 
        {token :localStorage.getItem('token')}
         )                                                                                                                                                                                                                                                                                                                                ```e{
    return children;
  }
}
