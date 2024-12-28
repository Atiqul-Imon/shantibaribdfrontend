import React from "react";
import { Link } from "react-router-dom";

function AdvisorCard({ id, name, title, imgSrc }) {
  return (
    <Link to={`/advisor/${id}`}>
      <div className="w-60 h-80 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Image Section */}
        <img
          className="h-40 w-40 object-cover rounded-full border-gray-300 mt-4"
          src={imgSrc}
          alt={name}
        />
        
        {/* Text Content Section */}
        <div className="flex flex-col justify-center items-center px-4 py-3 flex-grow">
          {/* Name */}
          <h2 className="font-bold text-lg text-center w-full truncate">{name}</h2>

          {/* Title with Multi-line Clamp */}
          <p className="text-sm text-gray-600 text-center w-full mt-1 line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AdvisorCard;
