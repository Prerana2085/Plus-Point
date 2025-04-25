import React from 'react';

// import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported
import './StarRating.css';
const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="fa fa-star checked"></span>
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <span key={i} className="fa fa-star"></span>
      ))}
    </div>
  );
};

export default StarRating;
