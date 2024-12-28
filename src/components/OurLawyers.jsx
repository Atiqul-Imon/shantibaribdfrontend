import React from 'react'

function LawyerCard({ name, description, imgSrc }) {
  return (
    <div className='w-60 p-4 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300'>
      <img 
        className='h-36 w-36 object-cover rounded-lg border-gray-300' 
        src={imgSrc}
        alt={name}
      />
      <div className='p-2 text-center'>
        <h2 className='font-bold text-lg font-roboto'>{name}</h2>
        <p className='text-sm text-gray-600 font-roboto'>{description}</p>
      </div>
    </div>
  )
}

function OurLawyers() {
  const lawyers = [
    { 
      name: 'Adv. Nahid Shams', 
      description: 'Nahid Shams is a lawyer and human rights activist. She completed her LLB and LLM from Rajshahi University. She started working on legal rights for all classes of women in the country. For fifteen years, she worked at the human rights organization – Ain O Salish Kendra, later she joined the Manobadhikar Songskriti Foundation.',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313364/Nahidshamscloud_x2uoyr.png'
    },
    { 
      name: 'Adv. Fahriya Ferdous', 
      description: 'On completion of her LL.B. (Hons.) in 2009 she joined the most prestigious law firm in the country “Ruhul Quddus & Jurist”, headed by Mr. Md. Ruhul Quddus, Barrister-at-Law, Advocate, Supreme Court of Bangladesh. Ms. Ferdous devoted herself to legal practice after being enrolled as an Advocate in 2010.',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314212/Adv-Fahriya-Ferdousecloud_sk71zm.jpg'
    },
    { 
      name: 'Adv. Farhana Afroze', 
      description: 'Farhana Afroze holds both an LLB and an LLM from Rajshahi University. She commenced her legal career at Ain O Salish Kendra (ASK), where she served as a lawyer in the Legal Unit for 12 years. Subsequently, she held the position of Assistant Attorney General for Bangladesh. Currently, she specializes in criminal, civil, and family law matters.',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314289/advfarhanaafrozecloud_esawnx.jpg'
    }
  ]

  return (
    <div className='bg-gray-200 w-full flex justify-center items-center py-8'>
      <div className='w-full max-w-7xl px-4'>
        <h1 className='text-2xl font-bold text-center mb-8 font-playfair'>Our Lawyers</h1>
        <div className='flex flex-wrap gap-6 justify-center'>
          {lawyers.map((lawyer, index) => (
            <LawyerCard 
              key={index} 
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
