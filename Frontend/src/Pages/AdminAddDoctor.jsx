// import React, { useState } from 'react'
// import axios from 'axios';
// function AdminAddDoctor() {
//     const [doctorData, setDoctorData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         specialization: '',
//         password: ''
//     });
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     const handleChange = (e)=>{
//         setDoctorData({...doctorData,[e.target.name]:e.target.value});
//     }
//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         try {
//             const res = await axios.post('https://plus-point-backend.onrender.com/api/addDoctor', doctorData,{
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             setDoctorData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 specialization: '',
//                 password: '',
//             });
//             console.log(res)
//             setSuccess(res.data.message);
//             setError(null);
//         } catch (error) {
//             setError(error.response.data.message);
//             setSuccess(null);
//             console.log("error in adding doctor");
//         }
//     }
//   return (
//     <div>
//         <h2>Add Doctor</h2>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={doctorData.name} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input type="email" name="email" value={doctorData.email} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input type="password" name="password" value={doctorData.password} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Specialization:</label>
//                 <input type="text" name="specialization" value={doctorData.specialization} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Phone:</label>
//                 <input type="text" name="phone" value={doctorData.phone} onChange={handleChange} required />
//             </div>
//             <button type="submit">Add Doctor</button>
//         </form>
//         {error && <p style={{color: 'red'}}>{error}</p>}
//         {success && <p style={{color: 'green'}}>{success}</p>}
//     </div>
//   )
// }

// export default AdminAddDoctor

// changed code into 4/28/2025



import React, { useState } from 'react';
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

    const handleChange = (e) => {
        setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://plus-point-backend.onrender.com/api/addDoctor', doctorData, {
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
            console.log(res);
            setSuccess(res.data.message);
            setError(null);
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong");
            setSuccess(null);
            console.log("error in adding doctor");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Add Doctor</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={doctorData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={doctorData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={doctorData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Specialization:</label>
                    <input
                        type="text"
                        name="specialization"
                        value={doctorData.specialization}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={doctorData.phone}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Add Doctor</button>
            </form>
            {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
            {success && <p style={{ ...styles.message, ...styles.success }}>{success}</p>}
        </div>
    );
}

const styles = {
    container: {
        width: '400px',
        margin: '50px auto',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px',
    },
    message: {
        marginTop: '15px',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    error: {
        backgroundColor: '#ffdddd',
        color: '#d8000c',
        border: '1px solid #d8000c',
    },
    success: {
        backgroundColor: '#ddffdd',
        color: '#270',
        border: '1px solid #270',
    },
};

export default AdminAddDoctor
