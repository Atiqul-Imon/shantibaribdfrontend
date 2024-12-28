import React from 'react';

function MediaCoverage() {
  // Media coverage data
  const mediaCoverageData = [
    {
      image: 'https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735379739/c2hhbnRpYmFyaW1lZGlhY2xvdWRfbDE1bTBj/template_primary/Y19maWxsLHdfMzAwLGhfMzAw',
      title: `শাড়ি ও গয়নার সম্ভারে শান্তিবাড়ির 'ডিক্লাটার মেলা'`,
      media: 'haal.fashion',
      link: 'https://www.haal.fashion/arrangement/fair/8a83xf1583'
    },
    {
      image: 'https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735381507/TWVkaWFjb3ZlcmFnZWNsb3VkX3loZmRkZQ==/drilldown',
      title: `শান্তিবাড়িতে অনুষ্ঠিত হতে যাচ্ছে ডিক্লাটার মেলা`,
      media: 'haal.fashion',
      link: 'https://www.haal.fashion/arrangement/haal-khobor/vrcxxg4mkc'
    },
    {
      image: 'https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735381653/bWVkaWFjb3ZlcmFnZWNsb3VkNF9jZHZmZm0=/drilldown',
      title: `শান্তিবাড়িতে তিনদিনব্যাপী চিত্রকর্ম প্রদর্শনী`,
      media: 'bbarta24',
      link: 'https://www.bbarta24.net/others/262478'
    }, 
    {
    image: 'https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735381818/bWVkaWFjb3ZlcmFnZWNsb3VkNV9maHRrb3k=/drilldown', 
    title: `নারীর জন্য শান্তিবাড়িতে প্রদর্শনী`, 
    media: 'Shokalshondha',
    link: 'https://www.shokalshondha.com/painting-exhibition-for-women-by-women/'
},
{
    image: 'https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735382168/bWVkaWFjb3ZlcmFnZWNsb3VkNl9pdWNwcnM=/drilldown', 
    title: `শেষ হলো ভালো থাকার বর্ণাঢ্য উৎসব`, 
    media: 'Prothom-alo',
    link: 'https://www.prothomalo.com/bangladesh/capital/jrpp6xr7n8'
}, 
{
    image: 'https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735382300/bWVkaWFjb3ZlcmFnZWNsb3VkN192aWd5MWE=/drilldown', 
    title: `শান্তিবাড়ির ‘ভালো থাকার উৎসব’`, 
    media: 'haal.fashion',
    link: 'https://www.haal.fashion/fashion/wb4icmgy9v'
},
{
    image: 'https://cdn.banglatribune.net/contents/cache/images/1100x617x1/uploads/media/2023/04/08/339980381_953936169115387_7708544749349387056_n-0fedd806760a2635fb0a3a8fc5b54942.jpg?jadewits_media_id=850665', 
    title: `শান্তিবাড়িতে চলছে ঈদ ও বৈশাখ মেলা`, 
    media: 'Banglatribune',
    link: 'https://www.banglatribune.com/lifestyle/793453/%E0%A6%B6%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%BF%E0%A6%A4%E0%A7%87-%E0%A6%9A%E0%A6%B2%E0%A6%9B%E0%A7%87-%E0%A6%88%E0%A6%A6-%E0%A6%93-%E0%A6%AC%E0%A7%88%E0%A6%B6%E0%A6%BE%E0%A6%96-%E0%A6%AE%E0%A7%87%E0%A6%B2%E0%A6%BE'
}, 
{
    image: 'https://images.prothomalo.com/prothomalo-bangla%2F2024-01%2Fffbe8141-16ea-40d1-aab1-dc3448722bbe%2Fshantibari22221.jpg?rect=0%2C0%2C780%2C1040&auto=format%2Ccompress&fmt=webp&format=webp&w=1000&dpr=1.0', 
    title: `শান্তিবাড়িতে নারী উদ্যোক্তাদের নিয়ে হবে বসন্তের মেলা`, 
    media: 'haal.fashion',
    link: 'https://www.haal.fashion/arrangement/event/npfa1ztbyt'
}, 
{
    image: 'https://images.ajkerpatrika.com/original_images/ff883fbc027421fb781bd6b065807dad-643f5dc786d65.jpg', 
    title: `নারীর জন্য শান্তির বাড়ি`, 
    media: 'Ajkerpatrika',
    link: 'https://www.ajkerpatrika.com/lifestyle/ajpmwvjckwocq'
},
{
    image: 'https://sarabangla.net/wp-content/uploads/2024/03/shanti-bari-okl-dck.jpg', 
    title: `নারী দিবস উপলক্ষে ১৫ নারীর চিত্রকর্ম প্রদর্শনী করছে শান্তিবাড়ি`, 
    media: 'Sarabangla',
    link: 'https://sarabangla.net/news/post-857283/'
},
{
    image: 'https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F0a71e6b3-3f21-4482-8ba4-40e2bb4ac7f4%2Fboshontomelashantibari1.jpg?rect=0%2C0%2C780%2C1040&auto=format%2Ccompress&fmt=webp&format=webp&w=1000&dpr=1.0', 
    title: `শান্তিবাড়িতে কাল থেকে ‘দেখা পেলেম ফাল্গুনে’`, 
    media: 'haal.fashion',
    link: 'https://www.haal.fashion/arrangement/event/zoo6koizjr'
},
{
    image: 'https://www.bbarta24.net/assets/news_photos/2024/02/01/image-257843.jpg', 
    title: `বসন্ত উদযাপনে শান্তিবাড়ির ‘দেখা পেলেম ফাল্গুনে’`, 
    media: 'bbarta24',
    link: 'https://www.bbarta24.net/life-style/257843'
},

  ];

  // YouTube videos data
  const youtubeVideos = [
    'https://www.youtube.com/embed/1SzrIGhqGCg?si=mz8APRaLnSZ6QWHQ',
    'https://www.youtube.com/embed/uZWU7V-ogz0?si=EViiQPn-Wyn3VAAh'

  ];
  

  return (
    <div className="w-full bg-gray-100">
      {/* Hero Image */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735381653/bWVkaWFjb3ZlcmFnZWNsb3VkNF9jZHZmZm0=/drilldown)' }}>
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Media Coverage</h1>
        </div>
      </div>

      {/* Media Coverage Cards */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Media Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaCoverageData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-full h-72 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="w-72 h-72 object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.media}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Videos Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Video Coverage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="w-full h-64">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={video}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaCoverage;
