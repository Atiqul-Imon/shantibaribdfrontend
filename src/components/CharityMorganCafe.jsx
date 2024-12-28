import React from "react";

function CharityMorganCafe() {
  return (
    <div className="w-full bg-white py-12 flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Charity Morgan Cafe
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[350px]">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735324070/charitymorgancafecloud1_dorcjx.jpg"
              alt="Charity Morgan Cafe"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-roboto">
              Charity Morgan Cafe, a delight vegetarian eatery, is a proud initiative of Shantibari, an organization
              dedicated to women's wellbeing. This cafe not only serves delectable plant-based dishes but also empowers 
              women by providing them with employment opportunities and vocational training. By promoting
              healthy, ethical, and sustainable dining choices, Charity Morgan Cafe plays a crucial role in 
              fostering a sense of community and compassion. The cafe hosts regular workshops 
              and events focused on women's health and empowerment, creating a nurturing 
              space for all who visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharityMorganCafe;