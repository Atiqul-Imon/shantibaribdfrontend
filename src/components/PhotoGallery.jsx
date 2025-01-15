import React, { useState, useRef } from 'react';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const sliderRef = useRef(null); // Ref for the thumbnail slider
  const [startIndex, setStartIndex] = useState(0); // Index of the first image in the visible range

  const photos = [
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939701/valothakacloud15_nsmhgi.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939567/valothakacloud14_o2cvwo.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939508/valothakacloud13_idtbud.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939456/valothakacloud12_dd1kd8.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939400/valothakacloud11_ixup0l.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939341/valothakacloud10_ybdvog.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939273/valothakacloud9_ftpitn.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939201/valothakacloud8_z4wyqi.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938959/valothakacloud6.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938884/valothakacloud4_isebzh.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939120/valothakacloud7_nwlzys.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938762/valothakacloud2_kar9l8.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938691/valothakacloud1_btekow.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883846/valothaka2_gzv8ln.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883835/valothaka1_pyeiua.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883728/valothakarutsob5_oaswl4.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883675/valothakarutsob4_w84lgi.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883567/valothakarutsob3_nuehl2.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883485/valothakarutsob2_o7cojb.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883347/valothakarutsob1_kewuqh.jpg',
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

  const changeMainImage = (photo) => {
    setSelectedImage(photo);
  };

  // Set the initial selected image to the first one if no image is selected
  if (!selectedImage) {
    setSelectedImage(photos[0]);
  }

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">Photo Gallery</h2>

        {/* Main Image Display */}
        <div className="mb-8">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full max-h-[1200px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Thumbnail Image Slider */}
        <div className="grid gap-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => changeMainImage(photo)} // Change main display image when thumbnail is clicked
            >
              <img
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
