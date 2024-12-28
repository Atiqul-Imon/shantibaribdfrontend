import React from 'react';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Sumaia Tabassum',
      designation: 'Program Coordinator',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735319891/Sumaiatabassumcloud_gobsn0.png'
    },
    {
      name: 'Sabreena Sarmeen Badhan',
      designation: 'Program Executive',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735319924/sabreenabadhancloud_ht38pf.png'
    },
    {
      name: 'Halima Akther Bristy',
      designation: 'Office Executive',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735319973/halimaakhtercloud_m0ypu2.png'
    }
  ];

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img 
                src={member.imgSrc} 
                alt={member.name} 
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 font-roboto">{member.name}</h3>
              <p className="text-gray-600 font-roboto">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;