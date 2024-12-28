import React from 'react';

function FridaKahloGallery() {
  // Art image data (28 images), now dynamic and easy to update
  const artData = [
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735385351/U2Fqal9EaWxydWJhLVBhcGlhLTgzNXgxMDI0Y2xvdWRfcGp2MXd1/drilldown",
      title: "সাঁজ",
      artist: "Artist: Dilruba Papia",
      price: "Price: 75000 (BDT)",
      size: "Size:  3’/3’7”",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735385605/dHVtaWNsb3VkX2lzdG84aA==/drilldown",
      title: "তুমি",
      artist: "Artist: Dilruba Papia",
      price: "Price: 75000 (BDT)",
      size: "Size: 3’/3’7”",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735385773/QmV5b25kLXRoZS1Ta3lfT3V0LW9mLXRoZS1CbHVlLTFfTHVibmEtSGFiaWItNzY4eDc3NF96NWcxeTI=/drilldown",
      title: "Beyond the Sky, Out of the Blue:01",
      artist: "Artist: Lubna Habib",
      price: "Price: 25000 (BDT)",
      size: "Size: 2’/2’",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735385994/QmV5b25kLXRoZS1Ta3lfT3V0LW9mLXRoZS1CbHVlLTJfTHVibmEtSGFiaWItNzY4eDc2N2Nsb3VkX3Rmb2Q2eg==/drilldown",
      title: "Beyond the Sky, Out of the Blue:02",
      artist: "Artist: Lubna Habib",
      price: "Price: 25000 (BDT)",
      size: "Size: 2’/2’",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735386229/bHVibmFfa3VzanVx/drilldown",
      title: "Magnolias Around A Bomb",
      artist: "Artist: Lubna Habib",
      price: "Price: 30000 (BDT)",
      size: "Size: 20” × 24”",
      medium: "Medium: Acrylic on Canvas"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735386392/4Ka44KeC4Kaw4KeN4Kav4KeHLeCmrOCnh-CmgeCmmuCnhy3gpqXgpr7gppXgpr9fRnVsZXNod2FyeS1Qcml5YW5hbmRpbmktNzY4eDEyMTRfY256Mjdk/drilldown",
      title: "সূর্যে বেঁচে থাকি",
      artist: "Artist: Fuleshwary Priya nandini",
      price: "Price: 20000 (BDT)",
      size: "Size: 20” × 11”",
      medium: "Medium: Mixed Media"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735386513/4Ka44KeN4Kas4Kaq4KeN4Kao4KeH4KawLeCmp-CnjeCmrOCmqOCmv-CmsOCmvl9GdWxlc2h3YXJ5LVByaXlhbmFuZGluaV91c3dzbmI=/drilldown",
      title: "স্বপ্নের ধ্বনিরা",
      artist: "Artist: Fuleshwary Priya nandini",
      price: "Price: 18000 (BDT)",
      size: "Size: 19” × 15”",
      medium: "Medium: Mixed Media"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735386734/UG9ldHJ5LW9mLXRoZS1Gb3Jlc3QtMV9Nb25pZGlwYS1EYXNndXB0YS03NzF4MTAyNF9kaXFnZWg=/drilldown",
      title: "Poetry of the Forest 1",
      artist: "Artist: Monidipa Das gupta",
      price: "Price: 25000 (BDT)",
      size: "Size: 28 x 36cm",
      medium: "Medium: Acrylic and Pen on Paper"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735386873/UG9ldHJ5LW9mLXRoZS1Gb3Jlc3QtMl9Nb25pZGlwYS1EYXNndXB0YS03NzV4MTAyNF9ib3U1bjg=/drilldown",
      title: `Poetry of the Forest 2`,
      artist: "Artist: Monidipa Das gupta",
      price: "Price: 25000 (BDT)",
      size: "Size: 28 x 36 cm",
      medium: "Medium: Acrylic and Pen on Paper"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387060/Q29sb3Itb2YtTmF0dXJlX01haGphYmluLU1vaXRyeS03Njh4NjUwX2pncGRxcg==/drilldown",
      title: "Colour of Nature",
      artist: "Artist: Mahjabin Rahim Moitri",
      price: "Price: 20000 (BDT)",
      size: "Size: 36”/24”",
      medium: "Medium: Mixed Media"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387176/V2luZ3NfTWFoamFiaW4tTW9pdHJ5LTc2OHg2MDNfZHV4NmVt/drilldown",
      title: "Wings",
      artist: "Artist: Mahjabin Rahim Moitri",
      price: "Price: 15000 (BDT)",
      size: "Size: 24”/18”",
      medium: "Medium: Mixed Media"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387315/RHJlYW1zX1N1bWFuYS1CaXN3YXMtODYzeDEwMjRfeHhkenJh/drilldown",
      title: "Dreams",
      artist: "Artist: Sumana Biswas",
      price: "Not for Sale",
      size: "Size: 20”/24”",
      medium: "Medium: Acrylic on Canvas"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387454/Rm9say1Nb3RpZnMtb2YtQmFuZ2xhZGVzaF9Eci4tSmFodXJhLUtoYXR1bi03Njh4NzQ4X3ptN2pzbg==/drilldown",
      title: "Folk Motif of Bangladesh",
      artist: "Artist: Dr. Jahura Khatun",
      price: "Price: 15000 (BDT)",
      size: "Size: 24”/24”",
      medium: "Medium: Acrylic"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387568/V29tZW4td2l0aC1OYXR1cmVfRHIuLUphaHVyYS1LaGF0dW4tNzY4eDc1OV9lZHdiZGs=/drilldown",
      title: "Women with Nature",
      artist: "Artist: Dr. Jahura Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 24”/24”",
      medium: "Medium: Acrylic"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387698/4Kac4Kaf4Ka_4Kay4Kak4Ka-4KawLeCmp-CmvuCmgeCmp-CmvuCmr-CmvC3gpq7gpr_gprbgp43gprAt4Kaq4KeN4Kaw4Kak4Ka_4KaV4KeN4Kaw4Ka_4Kav4Ka84Ka-X05hem11bi1OYWhhci03Njh4MTAyNF95c2llZmc=/drilldown",
      title: "জটিলতার ধাঁধায় মিশ্র প্রতিক্রিয়া/ Mixed Reactions to the Puzzle of Complexity",
      artist: "Artist: Nazmun Nahar",
      price: "Price: 135000 (BDT)",
      size: "Size: 28”/35”",
      medium: "Medium: Acrylic on Canvas"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387848/UmVzaWxpZW5jZS1pbi1CbG9vbV9Jc2hyYXQtUm91Zl92bHRvZGU=/drilldown",
      title: "Resilience in Bloom",
      artist: "Artist: Ishrat Binte Rouf",
      price: "Price: 10000 (BDT)",
      size: "Size: 24”/20”",
      medium: "Medium: Acrylic on Canvas"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735387989/V2hhdC1XYXMtU2hlLVdlYXJpbmdfSXNocmF0LVJvdWYtODU1eDEwMjRfZW1raG5t/drilldown",
      title: "What Was She Wearing?",
      artist: "Artist: Ishrat Binte Rouf",
      price: "Price: 10000 (BDT)",
      size: "Size: 24”/20”",
      medium: "Medium: Mixed Media"
    },

    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388148/4KaF4Kas4Kaa4KeC4Kaw4KeN4Kaj4Ka_4KakX05pcGEtR29tZXMtMS03Njh4MTAzMl9rc3V1cG4=/drilldown",
      title: "অবচূর্ণিত",
      artist: "Artist: Nipa Gomes",
      price: "Price: 30000 (BDT)",
      size: "Size: 2’/3’",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388265/4Kas4Ka_4Kas4Kaw4KeN4KajX05pcGEtR29tZXMtMi03Njh4MTE3MF9heTZocXA=/drilldown",
      title: "বিবর্ণ",
      artist: "Artist: Nipa Gomes",
      price: "Price: 30000 (BDT)",
      size: "Size: 2’/3’",
      medium: "Medium: Acrylic on Wood Panel"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388397/4Kat4KeH4Kas4KeH4Kab4Ka_4Kay4KeH4KauLeCmq-Cmv-CmsOCmrC3gpqjgpr4t4Kaw4KeHX0FuamFuYS1TaG9tZS0xLTc3MXgxMDI0X3p2d3A1Zw==/drilldown",
      title: "ভেবেছিলেম ফিরব না রে",
      artist: "Artist: Anjana Shome",
      price: "Price: 15000 (BDT)",
      size: "Size: 15”/20”",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388507/4Kad4Kaw4Ka-LeCmquCmvuCmsuCmlS3gpq3gpr7gprjgpr4t4Kaq4Ka-4Kay4KaVX0FuamFuYS1TaG9tZS03NzF4MTAyNF9iNWdkbms=/drilldown",
      title: "ঝরা পালক – ভাসা পালক",
      artist: "Artist: Anjana Shome",
      price: "Price: 15000 (BDT)",
      size: "Size: 15”/20”",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388626/U3RpbGwtTGlmZS0xX0ZhaG1pZGEtSmFzbWluZS1DYW1lbGxpYS03Njh4Njc2X3hwY3Fueg==/drilldown",
      title: "Still Life – 1",
      artist: "Artist: Fahmida Jasmine Camellia",
      price: "Not for Sale",
      size: "Size: 12×10",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388724/U3RpbGwtTGlmZS0yX0ZhaG1pZGEtSmFzbWluZS1DYW1lbGxpYS03Njh4MTAyM19vMGZyaWY=/drilldown",
      title: "Still life – 2",
      artist: "Artist: Fahmida Jasmine Camellia",
      price: "Not for Sale",
      size: "Size: 12×15",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388820/U2VsZi1yZWFsaXphdGlvbl9TaGliYW5pLUthcm1ha2FyLVNoaWx1LTg1M3gxMDI0X21jaG44bg==/drilldown",
      title: "Self-realization 1",
      artist: "Artist: Shibani Karmakar Shilu",
      price: "Price: 30000 (BDT)",
      size: "Size: 24/20",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735388937/U2VsZi1yZWFsaXphdGlvbi5TaGliYW5pLUthcm1ha2FyLVNoaWx1LTg0NXgxMDI0X2prdG9ldA==/drilldown",
      title: "Self-realization 2",
      artist: "Artist: Shibani Karmakar Shilu",
      price: "Price: 30000 (BDT)",
      size: "Size: 24/20",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735389119/TWEtMDFfTXN0Li1NdWt0aS1LaGF0dW4tOTE3eDEwMjRfbmpiZWJv/drilldown",
      title: "Ma (মা) – 01",
      artist: "Artist: Mst. Mukti Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 22” x  24”",
      medium: "Medium: Acrylic on Canvas Paper"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735389234/TWEtMDJfTXN0Li1NdWt0aS1LaGF0dW4tNzY4eDEwNzNfeG01ZTlu/drilldown",
      title: "Ma (মা) – 02",
      artist: "Artist: Mst. Mukti Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 20” x  26”",
      medium: "Medium: Acrylic on Canvas Paper"
    },
    {
      image: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735389331/TWEtMDNfTXN0Li1NdWt0aS1LaGF0dW4tNzY4eDEwODZfYmh1dzVi/drilldown",
      title: "Ma (মা) – 03",
      artist: "Artist: Mst. Mukti Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 20” x  26”",
      medium: "Medium: Acrylic on Canvas Paper"
    },
    
    // Add more art objects as needed...
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div className="w-full h-96 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
        <h1 className="text-5xl font-extrabold text-center">Color of Her Soul – Art Expo by Shantibari</h1>
      </div>

      {/* Art Gallery Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Art Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artData.map((art, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image with aspect ratio maintained */}
              <div className="w-full aspect-w-1 aspect-h-1">
                <img
                  src={art.image}
                  alt={art.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{art.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{art.artist}</p>
                <p className="text-sm text-gray-600 mb-2">{art.price}</p>
                <p className="text-sm text-gray-600 mb-2">{art.size}</p>
                <p className="text-sm text-gray-600 mb-2">{art.medium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FridaKahloGallery;
