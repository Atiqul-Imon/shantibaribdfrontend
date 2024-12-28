import React from 'react'

function AdvisorCard({ name, title, imgSrc }) {
  return (
    <div className='w-48 p-3 bg-white rounded-xl flex flex-col items-center'>
      <img 
        className='h-28 w-28 object-cover rounded-lg border-gray-300' 
        src={imgSrc}
        alt={name}
      />
      <div className='p-2 text-center'>
        <h2 className='font-bold text-base font-roboto'>{name}</h2>
        <p className='text-xs text-gray-600 font-roboto'>{title}</p>
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
    <div className='bg-gray-200 w-full flex justify-center items-center py-6'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-2xl font-bold text-center mb-6 font-playfair'>Our Advisors</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
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
