import React from 'react';
import { Link } from 'react-router-dom';
import FounderCard from './FounderCard';

function FounderMembers() {
  const members = [
    { id: 1, name: 'Sharmin Shams', title: 'Executive Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313071/Sharmin-Shamscloud_z4555l.webp', description: '' },
    { id: 2, name: 'Shumee Shahabuddin', title: 'Director (Operations)', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313239/Shumee-Shahabuddincloud_aukjp1.webp', description: '' },
    { id: 3, name: 'Adv. Nahid Shams', title: 'Director (Legal Services)', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg', description: '' },
    { id: 4, name: 'Kishowar Zabin', title: 'Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313767/Kishowar-Zabincloud_vhcbea.webp', description: '' },
    { id: 5, name: 'Aparajita Gowswami', title: 'Director', imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313881/aparajitagowsamicloud_ewbe7f.png', description: '' }
  ];

  return (
    <div className='bg-gray-200 w-full py-12'>
      <div className='max-w-[1440px] mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8 font-playfair'>Founder Members</h2>
        <div className='flex flex-wrap justify-center gap-6'>
          {members.map((member) => (
            <Link key={member.id} to={`/founder/${member.id}`}>
              <FounderCard
                name={member.name}
                title={member.title}
                imgSrc={member.imgSrc}
                description={member.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FounderMembers;
