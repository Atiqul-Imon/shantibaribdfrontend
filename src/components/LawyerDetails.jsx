import React from "react";
import { useParams } from "react-router-dom";

const lawyerData = {
  1: {
    name: "Adv. Nahid Shams",
    description:
      "Nahid Shams is a lawyer and human rights activist. She completed her LLB and LLM from Rajshahi University. She started working on legal rights for all classes of women in the country. For fifteen years, she worked at the human rights organization – Ain O Salish Kendra, later she joined the Manobadhikar Songskriti Foundation. She has extensive experience in working on women’s family problems and human rights violations. She has also traveled to various regions of the country outside Dhaka to assist and advocate for helpless and oppressed women. Nahid Shams is a co-founder of Shantibari.",
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg",
  },
  2: {
    name: "Adv. Fahriya Ferdous",
    description: "",
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1735314212/Adv-Fahriya-Ferdousecloud_sk71zm.jpg",
  },
  3: {
    name: "Adv. Farhana Afroze",
    description: `Farhana Afroze completed her LLB and LLM from Rajshahi University. She began her career at the Legal Aid and Mediation Centre. For 12 years, she worked as a lawyer in the Legal Unit of the organization. Subsequently, she served as an Assistant Attorney General for Bangladesh. Currently, she is practicing in the areas of criminal, civil, and family matters.
She has received training in mediation under the Bangladesh International Mediation Society (BIMS) and in ADR through a program organized by SAILS. Additionally, she is a panel lawyer for Biman Bangladesh Airlines.
`,
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1735314289/advfarhanaafrozecloud_esawnx.jpg",
  },
};

function LawyerDetails() {
  const { id } = useParams();
  const lawyer = lawyerData[id];

  if (!lawyer) {
    return <div className="text-center text-red-500">Lawyer not found!</div>;
  }

  return (
    <div className="flex flex-col items-center py-12 bg-gray-200">
      <img
        className="h-60 w-60 object-cover rounded-full border-gray-300"
        src={lawyer.imgSrc}
        alt={lawyer.name}
      />
      <h1 className="text-3xl font-bold mt-6 font-playfair">{lawyer.name}</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
        {lawyer.description}
      </p>
    </div>
  );
}

export default LawyerDetails;
