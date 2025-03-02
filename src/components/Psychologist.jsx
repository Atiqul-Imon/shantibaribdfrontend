import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function PsychiatristPsychologist() {
  const navigate = useNavigate();

  // Function to format names for URLs
  const formatNameForUrl = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };

  // List of psychiatrists
  const psychiatrists = [
    {
      id: 1,
      name: "Dr. Helal Uddin Ahmed",
      title: "Senior Psychiatrist and Consultant",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740936031/drhelalcloud_fvdddg234-removebg-preview_1_dvcph6.png",
    },
    {
      id: 2,
      name: "Dr. Nasim Jahan",
      title: "Senior Psychiatrist and Consultant",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740936189/Nasimjahancloud-removebg-preview_ppm0qa.png",
    },
  ];

  // List of psychologists
  const psychologists = [
    {
      id: 3,
      name: "Razia Sultana Rima",
      title: "Psycho-social Counselor and Therapist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740929357/raziasultanarima23_fs0ulv.jpg",
    },
    {
      id: 4,
      name: "M S Mahmuda",
      title: "Mental Health Specialist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740935356/msmahmuda21_zjtg1o.jpg",
    },
    {
      id: 5,
      name: "Tanzina Chowdhury",
      title: "Educational and Counselling Psychologist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740935709/tanzina234_dz2ggx.jpg",
    },
    {
      id: 6,
      name: "Arpita Das",
      title: "Psycho-social Counselor and Therapist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png",
    },
  ];

  // Navigation function (optimized with useCallback)
  const handleCardClick = useCallback(
    (name) => {
      navigate(`/details/${formatNameForUrl(name)}`);
    },
    [navigate]
  );

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1446px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair">
          Our Psychiatrist and Psychologist
        </h2>

        <ProfileSection
          title="Psychiatrists"
          professionals={psychiatrists}
          handleClick={handleCardClick}
        />

        <ProfileSection
          title="Psychologists"
          professionals={psychologists}
          handleClick={handleCardClick}
        />
      </div>
    </div>
  );
}

// Reusable section component
const ProfileSection = ({ title, professionals, handleClick }) => (
  <div className="w-full">
    <h3 className="text-xl font-semibold mb-4 font-playfair">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {professionals.map((person) => (
        <ProfileCard key={person.id} person={person} handleClick={handleClick} />
      ))}
    </div>
  </div>
);

// Reusable profile card component
const ProfileCard = ({ person, handleClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => handleClick(person.name)}
    onKeyPress={(e) => e.key === "Enter" && handleClick(person.name)}
    className="mb-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow"
  >
    <img
      src={person.imgSrc}
      alt={person.name}
      className="w-36 h-36 object-cover rounded-full mb-4"
    />
    <h4 className="font-semibold text-lg font-roboto">{person.name}</h4>
    <p className="text-gray-600 font-roboto">{person.title}</p>
  </div>
);

export default PsychiatristPsychologist;
