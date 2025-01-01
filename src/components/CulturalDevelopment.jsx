import React from "react";
import { Link } from "react-router-dom";

function CulturalDevelopment() {
  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-32">
          <h1 className="text-4xl font-bold">Cultural Development Program</h1>
          <p className="mt-4 text-xl">
            Empowering Women Through Arts and Culture
          </p>
        </div>
      </div>

      {/* Program Details Section */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 text-center">
        <div className="text-xl font-roboto text-gray-800">
          
        </div>

        {/* Two Cards Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* First Card - About Program */}
          <div className="flex-1 min-w-[280px] max-w-[380px] p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                src="/path/to/first-image.jpg"
                alt="Cultural Event"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">About the Program</h3>
            <p className="text-gray-600">
              The Cultural Development Program promotes women’s empowerment by encouraging creativity and participation in arts. It organizes various cultural events, exhibitions, and film screenings, offering women opportunities to showcase their artistic talents and be a part of the cultural scene.
            </p>
          </div>

          {/* Second Card - Gallery */}
          <div className="flex-1 min-w-[280px] max-w-[380px] p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                src="/path/to/second-image.jpg"
                alt="Art Gallery"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Shantibari's Gallery</h3>
            <p className="text-gray-600">
              Welcome to Shantibari’s gallery, a space where art and photography enthusiasts can immerse themselves in a world of creativity. Our gallery provides a platform for both established and emerging artists, celebrating traditional art and contemporary photography.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Services Link */}
      <div className="text-center py-8">
        <Link to="/services" className="text-blue-600 hover:text-blue-500">
          Back to Our Services
        </Link>
      </div>
    </div>
  );
}

export default CulturalDevelopment;
