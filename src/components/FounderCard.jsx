import React from 'react';

function FounderCard({ name, title, imgSrc, description }) {
  return (
    <div className='w-60 p-4 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300'>
      <img 
        className='h-40 w-40 object-cover rounded-full border-gray-300' 
        src={imgSrc}
        alt={name}
      />
      <div className='p-3 text-center'>
        <h2 className='font-bold text-lg font-roboto'>{name}</h2>
        <p className='text-sm text-gray-600 font-roboto'>{title}</p>
        {/* Add description here */}
        <p className='text-sm text-gray-600 font-roboto'>{description}</p>
      </div>
    </div>
  );
}

export default FounderCard;
