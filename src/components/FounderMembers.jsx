import React from 'react'

function FounderCard({ name, title, imgSrc }) {
  return (
    <div className='w-40 p-3 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300'>
      <img 
        className='h-32 w-32 object-cover rounded-full border-gray-300' 
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

function FounderMembers() {
  const members = [
    { name: 'Sharmin Shams', title: 'Executive Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313071/Sharmin-Shamscloud_z4555l.webp' },
    { name: 'Shumee Shahabuddin', title: 'Director (Operations)', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313239/Shumee-Shahabuddincloud_aukjp1.webp' },
    { name: 'Adv. Nahid Shams', title: 'Director (Legal Services)', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313364/Nahidshamscloud_x2uoyr.png' },
    { name: 'Kishowar Zabin', title: 'Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313767/Kishowar-Zabincloud_vhcbea.webp' },
    { name: 'Aparajita Gowswami', title: 'Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313881/aparajitagowsamicloud_ewbe7f.png' }
  ]

  return (
    <div className='bg-gray-200 w-full flex justify-center items-center py-6'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-2xl font-bold text-center mb-6 font-playfair'>
          Founder Members
        </h1>
        <div className='flex flex-wrap gap-3 justify-center'>
          {members.map((member, index) => (
            <FounderCard 
              key={index} 
              name={member.name} 
              title={member.title} 
              imgSrc={member.imgSrc} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FounderMembers
