import React from 'react';
import { Link } from 'react-router-dom';

const HealthCheckCompo = ({ name, price }) => {
  // Create a URL-friendly slug from the name
  const slug = name.toLowerCase().replace(/\s+/g, '-'); // e.g., "Cancer Screening" -> "cancer-screening"

  return (
    <Link to={`/healthcheck/${slug}`}>
      <div
        className="card"
        style={{
          width: '18rem',
          margin: '1rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div className="card-body" style={{ padding: '1rem' }}>
          <h5 className="card-title" style={{ marginBottom: '0.5rem' }}>{name}</h5>
          <p className="card-text" style={{ margin: 0 }}>₹{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default HealthCheckCompo;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const HealthCheckCompo = () => {
//   // Array of cards (you can add more!)
//   const healthChecks = [
//     { name: 'Diabetes Test', price: 499 },
//     { name: 'Full Body Checkup', price: 999 },
//     { name: 'Heart Health Package', price: 799 },
//     { name: 'Liver Function Test', price: 599 },
//   ];

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//       {healthChecks.map((item, index) => {
//         const first = item.name.charAt(0);
//         return (
//           <Link
//             key={index}
//             to={'/HealthCheck/' + first}
//             style={{ textDecoration: 'none', color: 'inherit' }}
//           >
//             <div
//               className="card"
//               style={{
//                 width: '18rem',
//                 margin: '1rem',
//                 border: '1px solid #ddd',
//                 borderRadius: '4px',
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//               }}
//             >
//               <div className="card-body" style={{ padding: '1rem' }}>
//                 <h5 className="card-title" style={{ marginBottom: '0.5rem' }}>{item.name}</h5>
//                 <p className="card-text" style={{ margin: 0 }}>₹{item.price}</p>
//               </div>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default HealthCheckCompo;
