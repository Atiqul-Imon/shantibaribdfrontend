import React from 'react';

const Event = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Events</h1>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Upcoming Events</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Event 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Event Title 1</h3>
            <p className="text-gray-600">Date: January 10, 2025</p>
            <a href="#!" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
          </div>

          {/* Event Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Event 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Event Title 2</h3>
            <p className="text-gray-600">Date: January 15, 2025</p>
            <a href="#!" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
          </div>

          {/* Event Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Event 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Event Title 3</h3>
            <p className="text-gray-600">Date: January 20, 2025</p>
            <a href="#!" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">All Events</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Event 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Event Title 1</h3>
            <p className="text-gray-600">Date: January 10, 2025</p>
            <a href="#!" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Event 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Event Title 2</h3>
            <p className="text-gray-600">Date: January 15, 2025</p>
            <a href="#!" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/400"
              alt="Event 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Event Title 3</h3>
            <p className="text-gray-600">Date: January 20, 2025</p>
            <a href="#!" className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
