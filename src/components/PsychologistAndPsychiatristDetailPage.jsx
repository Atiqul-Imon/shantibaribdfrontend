import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  1: {
    name: 'Dr. Helal Uddin Ahmed',
    title: 'Senior Psychiatrist and Consultant',
    description: 'Dr. Helal Uddin Ahmed has extensive experience in psychiatry and is a renowned consultant in the field. He has treated thousands of patients with mental health issues.',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317397/drhelalcloud_fvdddg.jpg'
  },
  2: {
    name: 'Dr. Nasim Jahan',
    title: 'Senior Psychiatrist and Consultant',
    description: 'Dr. Nasim Jahan is a specialist in mental health treatments and therapies, focusing on evidence-based practices to ensure patient well-being.',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317673/Nasimjahancloud_jl62lq.png'
  },
  3: {
    name: 'Razia Sultana Rima',
    title: 'Psycho-social Counselor and Therapist',
    description: 'Razia Sultana Rima is a skilled counselor with years of experience in providing therapy for individuals dealing with psychological issues.',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317558/Raziasultanarimacloud_vqmaug.png'
  },
  4: {
    name: 'Arpita Das',
    title: 'Psycho-social Counselor and Therapist',
    description: 'Arpita Das has a passion for helping people through counseling and therapy, focusing on improving mental health and resilience.',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png'
  }
};

function PsychologistAndPsychiatristDetail() {
  const { id } = useParams(); // Get ID from URL
  const person = data[id];

  if (!person) {
    return <h2 className="text-center text-red-500 mt-10">Person not found!</h2>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4">
      <div className="max-w-2xl bg-white rounded-lg shadow-xl p-8 text-center">
        <img 
          src={person.imgSrc} 
          alt={person.name} 
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold font-playfair">{person.name}</h1>
        <h2 className="text-lg text-gray-600 font-roboto">{person.title}</h2>
        <p className="text-gray-700 mt-4 text-sm font-roboto">{person.description}</p>
      </div>
    </div>
  );
}

export default PsychologistAndPsychiatristDetail;
