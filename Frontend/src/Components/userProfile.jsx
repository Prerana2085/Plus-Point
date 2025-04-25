import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode  from 'jwt-decode';
import './userProfile.css'; // Import CSS for styling

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    // phone: '',
    role: '',
  });

  // to edit Profile
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // phone: ''
    role: ''
  });

  // Fetch the user data
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    console.log('Token: ', token)
    if (token) {
      // Decode the JWT token to get the user data
      const decodedToken = jwt_decode(token);
      console.log('Decoded Token: ', decodedToken);
      
      // Fetch the user profile data using the decoded token
      axios
        .get('https://plus-point-backend.onrender.com/user', { 
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
          console.log(response);
            setUser(response.data);
            console.log(response.data);
            setFormData({
              name: response.data.name,
              email: response.data.email,
              // phone: response.data.phone,
              role: response.data.role,
            });
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
        });
    } else {
      console.log('No Token found! ');
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Save the updated profile data
  const handleSave = () => {
    const token = localStorage.getItem('token');

    axios
      .put('https://plus-point-backend.onrender.com/user', { ...formData }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser({ ...user, ...formData });
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error saving user profile:', error);
      });
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>

      <div className="profile-section">
        <h2>Personal Information</h2>
        <div className="profile-field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
{/* 
        <div className="profile-field">
          <label>Phone:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div> */}

        <div className="profile-field">
          <label>Role:</label>
          <p>{user.role}</p>
        </div>

        <button>
        {/* <button onClick={handleEditToggle}> */}
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>

        {isEditing && (
          // <button onClick={handleSave}>Save Changes</button>
          <button >Save Changes</button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode'; 
// import './userProfile.css'; // Import CSS for styling
// import { Navbars } from './Navbars';
// const UserProfile = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     role: '',
//   });

//   // to edit Profile
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
    
//   });

//   // Fetch the user data
//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage
//     console.log('Token: ', token)
//     if (token) {
//       // Decode the JWT token to get the user ID or other data
//       const decodedToken = jwt_decode(token);
//       const userId = decodedToken.id; // Assuming the user ID is in the 'id' field of the token
//       console.log('User ID:', userId);
//       // Fetch the user profile data using the userId
//       axios
//         .get(`https://plus-point-backend.onrender.com/users/Profile`, { 
//             params: { userId },
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//         })
//         .then((response) => {
//             console.log('User Data:', response.data);
//           setUser(response.data);
//           setFormData({
//             name: response.data.name,
//             email: response.data.email,
//           });
//         })
//         .catch((error) => {
//           console.error('Error fetching user profile:', error);
//         });
//     } else {
//       console.log('No Token found! ');
//     }
//   }, []); // Empty dependency array ensures this runs once when the component mounts

//   // Handle changes in the form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Toggle edit mode
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   // Save the updated profile data
//   const handleSave = () => {
//     const token = localStorage.getItem('token');
//     const decodedToken = jwt_decode(token);
//     const userId = decodedToken.id;

//     axios
//       .put(`/users/update-profile`, { ...formData, userId })
//       .then((response) => {
//         setUser({ ...user, ...formData });
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error('Error saving user profile:', error);
//       });
//   };

//     return (
//       <>      <Navbars/>
//         <div className="user-profile">
          
//           <h1>User Profile</h1>
    
//           <div className="profile-section">
//             <h2>Personal Information</h2>
//             <div className="profile-field">
//               <label>Name:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <p>{user.name}</p>
//               )}
//             </div>
    
//             <div className="profile-field">
//               <label>Email:</label>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <p>{user.email}</p>
//               )}
//             </div>
    
//             <div className="profile-field">
//               <label>Role:</label>
//               <p>{user.role}</p>
//             </div>
    
//             <button onClick={handleEditToggle}>
//               {isEditing ? 'Cancel' : 'Edit Profile'}
//             </button>
            
//             {isEditing && (
//               <button onClick={handleSave}>Save Changes</button>
//             )}
//           </div>
//         </div>
//         </>

//     );
// }
    
// export default UserProfile;
