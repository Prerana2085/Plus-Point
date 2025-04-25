// import React, { useState } from 'react';
// import './userProfile.css'; // Importing the CSS for styling

// const userProfile = () => {
//   // Simulated user data
//   const [userDetails] = useState({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     profession: 'Software Engineer',
//     role: 'Investor', // Can be 'Investor' or 'Innovator'
//     fundingStatus: 'Active', // Or 'Inactive'
//     imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
//   });

//   // State to manage the active tab
//   const [activeTab, setActiveTab] = useState('role');

//   // Handle the tab change when clicked
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="profile-container">
//       <div className="user-info">
//         <img src={userDetails.imageUrl} alt="User" className="user-pic" />
//         <div className="user-details">
//           <h2>{userDetails.name}</h2>
//           <p>{userDetails.profession}</p>
//           <p>{userDetails.email}</p>
//         </div>
//       </div>

//       <div className="tabs-container">
//         <div
//           className={`tab ${activeTab === 'role' ? 'active' : ''}`}
//           onClick={() => handleTabClick('role')}
//         >
//           Role
//         </div>
//         <div
//           className={`tab ${activeTab === 'funding' ? 'active' : ''}`}
//           onClick={() => handleTabClick('funding')}
//         >
//           Funding
//         </div>
//         <div
//           className={`tab ${activeTab === 'info' ? 'active' : ''}`}
//           onClick={() => handleTabClick('info')}
//         >
//           Info
//         </div>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'role' && (
//           <div>
//             <h3>Role: {userDetails.role}</h3>
//           </div>
//         )}
//         {activeTab === 'funding' && (
//           <div>
//             <h3>Funding Status: {userDetails.fundingStatus}</h3>
//           </div>
//         )}
//         {activeTab === 'info' && (
//           <div>
//             <h3>Additional Information</h3>
//             <p>No additional information available.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default userProfile;
