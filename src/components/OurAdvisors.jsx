import React from "react";
import AdvisorCard from "./AdvisorCard"; // Import the AdvisorCard component

function OurAdvisors() {
  const advisors = [
    {
      id: 1,
      name: "Dr. Nazmun N. Ratna",
      title: "Associate Professor, Lincoln University",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735313976/Nazmunratnacloud_bzwbmn.png",
    },
    {
      id: 2,
      name: "Anirban Bhowmik",
      title: "Development Expert",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735314046/Anirbanbhowmikcloud_qvfqjx.png",
    },
  ];

  return (
    <div className="bg-gray-100 w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Advisors</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {advisors.map((advisor) => (
            <AdvisorCard
              key={advisor.id}
              id={advisor.id}
              name={advisor.name}
              title={advisor.title}
              imgSrc={advisor.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurAdvisors;
