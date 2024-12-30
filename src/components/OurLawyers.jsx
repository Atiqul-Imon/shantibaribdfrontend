import React from 'react'
import { useNavigate } from 'react-router-dom'

function LawyerCard({ name, description, imgSrc, id }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/lawyer/${id}`)
  }

  return (
    <div 
      onClick={handleClick} 
      className='w-60 p-4 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'
    >
      <img 
        className='h-40 w-40 object-cover rounded-full border-gray-300' 
        src={imgSrc}
        alt={name}
      />
      <div className='p-3 text-center'>
        <h2 className='font-bold text-lg font-roboto'>{name}</h2>
        <p className='text-sm text-gray-600 font-roboto'>{description}</p>
      </div>
    </div>
  )
}

function OurLawyers() {
  const lawyers = [
    { 
      id: 1,
      name: 'Adv. Nahid Shams', 
      description: '',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg'
    },
    { 
      id: 2,
      name: 'Adv. Fahriya Ferdous', 
      description: '',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314212/Adv-Fahriya-Ferdousecloud_sk71zm.jpg'
    },
    { 
      id: 3,
      name: 'Adv. Farhana Afroze', 
      description: '',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314289/advfarhanaafrozecloud_esawnx.jpg'
    }
  ]

  return (
    <div className='bg-gray-200 w-full flex justify-center items-center py-12'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-3xl font-bold text-center mb-8 font-playfair'>Our Lawyers</h1>
        <div className='flex flex-wrap gap-6 justify-center'>
          {lawyers.map((lawyer) => (
            <LawyerCard 
              key={lawyer.id} 
              id={lawyer.id}
              name={lawyer.name} 
              description={lawyer.description} 
              imgSrc={lawyer.imgSrc} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurLawyers
