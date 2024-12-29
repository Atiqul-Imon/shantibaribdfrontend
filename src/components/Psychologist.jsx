import React from 'react';
import { useNavigate } from 'react-router-dom';

function PsychiatristPsychologist() {
  const navigate = useNavigate(); // React Router hook for navigation

  const psychiatrists = [
    {
      id: 1,
      name: 'Dr. Helal Uddin Ahmed',
      title: 'Senior Psychiatrist and Consultant',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317397/drhelalcloud_fvdddg.jpg'
    },
    {
      id: 2,
      name: 'Dr. Nasim Jahan',
      title: 'Senior Psychiatrist and Consultant',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317673/Nasimjahancloud_jl62lq.png'
    }
  ];

  const psychologists = [
    {
      id: 3,
      name: 'Razia Sultana Rima',
      title: 'Psycho-social Counselor and Therapist',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317558/Raziasultanarimacloud_vqmaug.png'
    },
    {
      id: 4,
      name: 'Arpita Das',
      title: 'Psycho-social Counselor and Therapist',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png'
    }
  ];

  // Function to handle navigation
  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1446px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair">Our Psychiatrist and Psychologist</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-12">
          {/* Psychiatrist Column */}
          <div className="w-full sm:w-[350px]">
            <h3 className="text-xl font-semibold mb-4 font-playfair">Psychiatrist</h3>
            {psychiatrists.map((psychiatrist) => (
              <div 
                key={psychiatrist.id} 
                onClick={() => handleCardClick(psychiatrist.id)} 
                className="mb-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow"
              >
                <img 
                  src={psychiatrist.imgSrc} 
                  alt={psychiatrist.name} 
                  className="w-36 h-36 object-cover rounded-full mb-4"  
                />
                <h4 className="font-semibold text-lg font-roboto">{psychiatrist.name}</h4>
                <p className="text-gray-600 font-roboto">{psychiatrist.title}</p>
              </div>
            ))}
          </div>

          {/* Psychologist Column */}
          <div className="w-full sm:w-[350px]">
            <h3 className="text-xl font-semibold mb-4 font-playfair">Psychologist</h3>
            {psychologists.map((psychologist) => (
              <div 
                key={psychologist.id} 
                onClick={() => handleCardClick(psychologist.id)} 
                className="mb-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow"
              >
                <img 
                  src={psychologist.imgSrc} 
                  alt={psychologist.name} 
                  className="w-36 h-36 object-cover rounded-full mb-4"  
                />
                <h4 className="font-semibold text-lg font-roboto">{psychologist.name}</h4>
                <p className="text-gray-600 font-roboto">{psychologist.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsychiatristPsychologist;
