import React from "react";
import { useParams } from "react-router-dom";

const serviceDetails = {
  "entrepreneurial-support-program": {
    title: "Entrepreneurial Support Program",
    heroImage: "https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg",
    sections: [
      {
        heading: "Entrepreneurial Support Program",
        content:
          "Shantibari, a visionary organization committed to fostering entrepreneurship, has established a highly definitive and inclusive Entrepreneurial Support Program that sets it apart. One remarkable aspect of this program is the provision of dedicated display corners exclusively for women entrepreneurs who operate their businesses online. These display corners serve as a powerful platform for showcasing their products and services, amplifying their reach, and connecting with potential customers. Furthermore, Shantibari goes the extra mile in promoting these women-led ventures by organizing regular fairs and exhibitions, drawing attention to their innovations and talents. These events not only create networking opportunities but also drive awareness and recognition for the remarkable contributions of women entrepreneurs. With this unwavering focus on empowering women and encouraging their entrepreneurial spirit, Shantibari is making a tangible and lasting impact on the entrepreneurial landscape, propelling gender equality and economic growth hand in hand.",
        image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735715489/shantibaricloud_ia56z2.jpg",
      },
      {
        heading: "Madam Walker Display Corner",
        content:
          "Welcome to our vibrant Madam Walker Display Corner, a celebration of women entrepreneur’s ingenuity and creativity. Nested within our boutique store, this exquisite showcase highlights a divers array of products meticulously crafted by talented women from all walks of life. As you step into this empowering space, you’ll be captivated by the artistry and passion that infuse each item on display. From handcrafted jewelry that narrates personal stories to elegant fashion pieces that redefine elegance, this corner is a testament to the entrepreneurial spirit and resilience of women. Supporting these enterprising individuals means more than just acquiring unique treasures; its symbolizes our commitment to fostering a more inclusive and equitable world where women’s voices and talents are celebrated and uplifted.",
        image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735715813/madamwalkerdisplaycornercloud_swxbol.jpg",
      },
      {
        heading: "Women Entrepreneur Fair",
        content:
          "The women Entrepreneur Fair, organized by Shantibari, was an inspiring and empowering event that showcased the immense talent and creativity of women entrepreneurs. Held in a vibrant and welcoming atmosphere, the fair provided a platform for women entrepreneurs to exhibit their innovative products and services. From innovative tech startups to handcrafted artisanal goods, the event was a testament to the determination and resilience of women in business. Besides offering a unique shopping experience, the fair also featured insightful panel discussions, workshops, and networking opportunities, enabling participants to learn from successful business leaders and forge valuable connections. The Women Entrepreneur Fair by Shantibari left a lasting impact, not only by promoting women-led business but also by fostering a supportive community that encourages and uplifts women entrepreneurs in their pursuit of success.",
        image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735716006/%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%A6%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%B2%E0%A6%BE_h3apwl.jpg",
      },
    ],
  },
};

function EntrepreneurialSupportProgram() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div className="text-center text-gray-500 text-xl py-10">Service not found!</div>;
  }

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-white text-5xl font-extrabold shadow-lg"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="bg-black bg-opacity-50 px-8 py-4 rounded-lg">
          {service.title}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        {service.sections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-blue-500 pl-4">
              {section.heading}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed tracking-wide">
              {section.content}
            </p>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={section.image}
                alt={section.heading}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntrepreneurialSupportProgram;
