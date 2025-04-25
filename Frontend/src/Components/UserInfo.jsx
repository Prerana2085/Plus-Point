import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserInfo.css';

const UserInfo = () => {
    const { user } = useSelector(state => state.user);
    return (
        <div className='userInfo'>
            <span className="admin-label">Admin</span>
            <i className="fa-solid fa-user"></i>
            <Link to='/getUserData'>{user?.name}</Link>
        </div>
    );
}

export default UserInfo;
