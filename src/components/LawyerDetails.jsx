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
    description: `Fahriya Ferdous is a distinguished Advocate at the Supreme Court of Bangladesh. Following the completion of her academic studies in 2009, she commenced her legal career at one of the most esteemed law firms in the country, Ruhul Quddus & Jurist. Under the mentorship of Mr. Md. Ruhul Quddus, Barrister-at-Law and Senior Advocate of the Supreme Court of Bangladesh, Ms. Ferdous honed her expertise and officially enrolled as an Advocate in 2010.

Throughout her career, Ms. Ferdous has demonstrated unwavering dedication to the legal profession, contributing to numerous nationally significant cases that have garnered media coverage across the country. Her areas of practice encompass a broad spectrum of legal fields, including criminal law, VAT and customs, company law, family law, and constitutional matters. She also possesses extensive experience in legal documentation, drafting, and litigation.

In addition to her legal practice, Ms. Ferdous has collaborated with non-governmental organizations (NGOs), international non-governmental organizations (INGOs), and both national and international organizations, further enriching her professional portfolio and showcasing her versatile legal expertise.`,
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
    <div className="flex flex-col items-center py-12 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full p-6">
        <div className="flex flex-col items-center">
          <img
            className="h-60 w-60 object-cover rounded-full border-4 border-red-500 shadow-lg"
            src={lawyer.imgSrc}
            alt={lawyer.name}
          />
          <h1 className="text-4xl font-bold mt-6 font-playfair text-gray-800">
            {lawyer.name}
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-center leading-relaxed">
            {lawyer.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LawyerDetails;
