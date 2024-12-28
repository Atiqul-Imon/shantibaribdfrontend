import React from 'react'

function AdvisorCard({ name, title, imgSrc }) {
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
      </div>
    </div>
  )
}

function OurAdvisors() {
  const advisors = [
    { name: 'Dr. Nazmun N. Ratna', title: 'Associate Professor, Lincoln University', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313976/Nazmunratnacloud_bzwbmn.png' },
    { name: 'Anirban Bhowmik', title: 'Development Expert', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314046/Anirbanbhowmikcloud_qvfqjx.png' }
  ]

  return (
    <div className='bg-gray-200 w-full flex justify-center items-center py-12'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-3xl font-bold text-center mb-8 font-playfair'>Our Advisors</h1>
        <div className='flex flex-wrap gap-6 justify-center'>
          {advisors.map((advisor, index) => (
            <AdvisorCard 
              key={index} 
              name={advisor.name} 
              title={advisor.title} 
              imgSrc={advisor.imgSrc} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurAdvisors
