import React from 'react';

const QuickButton = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="w-full py-2 px-4 rounded-md bg-gray-100 text-left">
      {icon} {label}
    </button>
  );
};

export default QuickButton;