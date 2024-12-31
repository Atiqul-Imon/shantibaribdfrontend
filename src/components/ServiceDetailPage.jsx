import React from "react";
import { useParams } from "react-router-dom";

const serviceDetails = {
  "mental-health-support": {
    title: "Mental Health Support",
    heroImage: "mental-health-hero.jpg",
    sections: [
      {
        heading: "Comprehensive Counseling",
        content:
          "We provide professional psycho-social counseling and therapy sessions to address mental health challenges.",
        image: "counseling.jpg",
      },
      {
        heading: "Yoga Sessions",
        content:
          "Our yoga sessions are designed to promote mental and physical well-being.",
        image: "yoga.jpg",
      },
    ],
  },
  "legal-advice-and-services": {
    title: "Legal Advice and Services",
    heroImage: "legal-advice-hero.jpg",
    sections: [
      {
        heading: "Expert Legal Advice",
        content:
          "We offer legal support for family and personal issues, ensuring a safe environment.",
        image: "legal-support.jpg",
      },
      {
        heading: "Document Preparation",
        content:
          "We help prepare legal documents and forms required for various cases.",
        image: "documents.jpg",
      },
    ],
  },
  // Add more service details here...
};

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        {service.title}
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        {service.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <p className="text-gray-600 mb-4">{section.content}</p>
            <img
              src={section.image}
              alt={section.heading}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;
