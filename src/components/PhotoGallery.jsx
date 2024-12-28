import React from 'react';

function PhotoGallery() {
  const photos = [
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322517/shantibarigallerycloud1_xmazhq.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322515/shantibarigallerycloud2_s2gybw.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322514/shantibarigallerycloud3_bbszh0.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322510/shantibarigallerycloud6_qhb7ua.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322511/shantibarigallerycloud5_mnyjji.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322509/shantibarigallerycloud7_e7kqmg.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322508/shantibarigallerycloud8_kh6cyn.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322451/shantibarigallerycloud10_kyn9us.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322451/shantibarigallerycloud9_okga06.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322532/shantibarigallerycloud12_kjfmgc.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322533/shantibarigallerycloud11_qkf1is.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322512/shantibarigallerycloud4_b50nre.jpg',
  ];

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">Photo Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={photo} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
