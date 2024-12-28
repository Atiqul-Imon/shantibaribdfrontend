import React from "react";

function OurServices() {
  const services = [
    {
      title: "Mental Health Support",
      description:
        "Provides psycho-social counseling and therapy, psychiatric treatment, yoga sessions, etc. by specialized professionals, both offline and online.",
      link: "#",
    },
    {
      title: "Legal Advice and Services",
      description:
        "Serves legal support to women, especially in family issues in the compfortable environment of Shantibari.",
      link: "#",
    },
    {
      title: "Entrepreneurial Support Program",
      description:
        "Provides suitable platform, mentorship, and resources to women entrepreneurs to start and grow their business.",
      link: "#",
    },
    {
      title: "Cultural Development Program",
      description:
        "Encourage and nurture creativity and innovation among women by organizing events on different forms of artistic expression.",
      link: "#",
    },
    {
      title: "Parenting Support",
      description:
        "For women, one of the additional services at the Shantibari is Child Development and Parenting Consultation.",
      link: "#",
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1024px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-lg shadow-lg ${
                index === services.length - 1 ? "col-span-2 mx-auto" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4 font-roboto">{service.title}</h3>
              <p className="text-gray-600 mb-4 font-roboto">{service.description}</p>
              <a
                href={service.link}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
              >
                Visit Here
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
