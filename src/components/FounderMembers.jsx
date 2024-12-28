import React from 'react';

function FounderCard({ name, title, imgSrc }) {
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
  );
}

function FounderMembers() {
  const members = [
    { name: 'Sharmin Shams', title: 'Executive Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313071/Sharmin-Shamscloud_z4555l.webp' },
    { name: 'Shumee Shahabuddin', title: 'Director (Operations)', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313239/Shumee-Shahabuddincloud_aukjp1.webp' },
    { name: 'Adv. Nahid Shams', title: 'Director (Legal Services)', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313364/Nahidshamscloud_x2uoyr.png' },
    { name: 'Kishowar Zabin', title: 'Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313767/Kishowar-Zabincloud_vhcbea.webp' },
    { name: 'Aparajita Gowswami', title: 'Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313881/aparajitagowsamicloud_ewbe7f.png' }
  ];

  return (
    <div className='bg-gray-200 w-full py-12'>
      <div className='max-w-[1440px] mx-auto px-4'>
        {/* Title */}
        <h2 className='text-3xl font-bold text-center mb-8 font-playfair'>Founder Members</h2>

        {/* Gallery Flexbox Container (Center-aligned for all screen sizes) */}
        <div className='flex flex-wrap justify-center gap-6'>
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
  );
}

export default FounderMembers;
