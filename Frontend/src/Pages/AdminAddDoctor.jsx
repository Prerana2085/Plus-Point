import React, { useState } from 'react'
import axios from 'axios';
function AdminAddDoctor() {
    const [doctorData, setDoctorData] = useState({
        name: '',
        email: '',
        phone: '',
        specialization: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e)=>{
        setDoctorData({...doctorData,[e.target.name]:e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/addDoctor', doctorData,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setDoctorData({
                name: '',
                email: '',
                phone: '',
                specialization: '',
                password: '',
            });
            console.log(res)
            setSuccess(res.data.message);
            setError(null);
        } catch (error) {
            setError(error.response.data.message);
            setSuccess(null);
            console.log("error in adding doctor");
        }
    }
  return (
    <div>
        <h2>Add Doctor</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={doctorData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={doctorData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={doctorData.password} onChange={handleChange} required />
            </div>
            <div>
                <label>Specialization:</label>
                <input type="text" name="specialization" value={doctorData.specialization} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" name="phone" value={doctorData.phone} onChange={handleChange} required />
            </div>
            <button type="submit">Add Doctor</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {success && <p style={{color: 'green'}}>{success}</p>}
    </div>
  )
}

export default AdminAddDoctor