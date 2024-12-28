import React from 'react';

function PsychiatristPsychologist() {
  const psychiatrists = [
    {
      name: 'Dr. Helal Uddin Ahmed',
      title: 'Senior Psychiatrist and Consultant',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317397/drhelalcloud_fvdddg.jpg'
    },
    {
      name: 'Dr. Nasim Jahan',
      title: 'Senior Psychiatrist and Consultant',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317673/Nasimjahancloud_jl62lq.png'
    }
  ];

  const psychologists = [
    {
      name: 'Razia Sultana Rima',
      title: 'Psycho-social Counselor and Therapist',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317558/Raziasultanarimacloud_vqmaug.png'
    },
    {
      name: 'Arpita Das',
      title: 'Psycho-social Counselor and Therapist',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png'
    }
  ];

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1446px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair">Our Psychiatrist and Psychologist</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-12"> {/* Stack on mobile and row on larger screens */}
          {/* Psychiatrist Column */}
          <div className="w-full sm:w-[250px]"> {/* Full width on mobile, fixed width on larger screens */}
            <h3 className="text-xl font-semibold mb-4 font-playfair">Psychiatrist</h3>
            {psychiatrists.map((psychiatrist, index) => (
              <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
                <img 
                  src={psychiatrist.imgSrc} 
                  alt={psychiatrist.name} 
                  className="w-32 h-32 object-cover rounded-full mb-4" 
                />
                <h4 className="font-semibold text-lg font-roboto">{psychiatrist.name}</h4>
                <p className="text-gray-600 font-roboto">{psychiatrist.title}</p>
              </div>
            ))}
          </div>

          {/* Psychologist Column */}
          <div className="w-full sm:w-[250px]"> {/* Full width on mobile, fixed width on larger screens */}
            <h3 className="text-xl font-semibold mb-4 font-playfair">Psychologist</h3>
            {psychologists.map((psychologist, index) => (
              <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
                <img 
                  src={psychologist.imgSrc} 
                  alt={psychologist.name} 
                  className="w-32 h-32 object-cover rounded-full mb-4" 
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
