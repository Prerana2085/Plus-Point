// import React, { useState } from 'react';
// import MapView from './MapView';

// const GoToMapButton = () => {
//   const [viewMap, setViewMap] = useState(false);

//   const handleClick = () => {
//     setViewMap(true);
//   };

//   return (
//     <div style={styles.container}>
//       {!viewMap ? (
//         <button onClick={handleClick} style={styles.button}>
//           🏥 View Nearest Hospital
//         </button>
//       ) : (
//         <MapView />
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: '100vh',
//     width: '100vw',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: '#f9f9f9',
//     fontFamily: 'Arial, sans-serif',
//   },
//   button: {
//     padding: '1rem 2rem',
//     fontSize: '1.2rem',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   },
// };

// export default GoToMapButton;




import React from 'react';
import MapView from './MapView';

const GoToMap = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapView />
    </div>
  );
};

export default GoToMap;

