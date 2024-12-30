import React from "react";
import { useParams } from "react-router-dom";

// Define an array of founder members with their details
const members = [
  {
    id: 1,
    name: "Sharmin Shams",
    title: "Executive Director",
    imgSrc: "https://res.cloudinary.com/db5yniogx/image/upload/v1735313071/Sharmin-Shamscloud_z4555l.webp",
    description: "Sharmin Shams has been working for over a decade as a prominent journalist in the country’s print, electronic, and online media. Her main areas of writing and work focus on gender equality and feminism. In addition to regularly writing columns for a national daily, she also writes stories, novels, poems, and for children. She has published 9 books and made some documentaries also. Known as an online feminist activist, Sharmin is the publisher and editor of the feminist online magazine “Feminist Factor”. Feminist Factor works on women’s rights, feminism, and gender inequality. It is the source from which Shantibari was born. Sharmin Shams is a co-founder and executive director of Shantibari.",
  },
  {
    id: 2,
    name: "Shumee Shahabuddin",
    title: "Director (Operations)",
    imgSrc: "https://res.cloudinary.com/db5yniogx/image/upload/v1735313239/Shumee-Shahabuddincloud_aukjp1.webp",
    description: "Shumee Shahabuddin began her journalism career in the tumultuous decade of the 1990s with the popular weekly magazine ‘Bichitra’. Afterwards, she worked for 26 long years in various media outlets such as Weekly 2000, Bhorer Kagoj, BDNews24, NTV, and ATN News. She led the newsroom as a news editor of Samoy Television and served as the Shift In-Charge for a long time. Later, she took voluntary retirement. Throughout her journalism career, she focused on mainstream news as well as issues concerning women and children. She obtained her post-graduation degree from the Management Department of Dhaka University. However, in the journalism field, there was a risk of rising and advocating for accurate information and urging people to claim their rights. Shantibari reflects that consciousness and dream. Shumee Shahabuddin is a co-founder of Shantibari.",
  },
  {
    id: 3,
    name: "Adv. Nahid Shams",
    title: "Director (Legal Services)",
    imgSrc: "https://res-console.cloudinary.com/db5yniogx/thumbnails/v1/image/upload/v1735528452/bmFoaWRzaGFtczA4X3RncnBkaA==/drilldown",
    description: "Nahid Shams is a lawyer and human rights activist. She completed her LLB and LLM from Rajshahi University. She started working on legal rights for all classes of women in the country. For fifteen years, she worked at the human rights organization – Ain O Salish Kendra, later she joined the Manobadhikar Songskriti Foundation. She has extensive experience in working on women’s family problems and human rights violations. She has also traveled to various regions of the country outside Dhaka to assist and advocate for helpless and oppressed women. Nahid Shams is a co-founder of Shantibari.",
  },
  {
    id: 4,
    name: "Kishowar Zabin",
    title: "Director",
    imgSrc: "https://res.cloudinary.com/db5yniogx/image/upload/v1735313767/Kishowar-Zabincloud_vhcbea.webp",
    description: "Kishowar Zabin began her career in 1999 as a franchisee of the American card company “Hallmark Cards and Gifts”. Later in 2006, she ventured into the garment industry. With two decades of success, she manages her business alongside being part of one of the top five environmentally friendly businesses in the country. Alongside her business endeavors, she works with special needs children. In line with her commitment, she has obtained a diploma in Spectrum Disorder and Inclusive Education from Dhaka University. Kishowar Zabin is also an established interior designer and a writer. She is a co-founder of Shantibari.",
  },
  {
    id: 5,
    name: "Aparajita Gowswami",
    title: "Director",
    imgSrc: "https://res.cloudinary.com/db5yniogx/image/upload/v1735313881/aparajitagowsamicloud_ewbe7f.png",
    description: "Aparajita Goswami has worked in various important leadership positions in the country’s leading telecommunications institution for over a decade and a half as a telecommunications engineer. In 2022, she worked as the Head of Strategy and Technology Transformation at the Technology Division of Grameenphone. Aparajita, educated at the Institute of Business Administration (IBA) of Dhaka University and Bangladesh University of Engineering and Technology, is a founding member of the Women in Engineering and Viqarunnisa Alumni association Association. She is working to increase women’s participation in science and technology in the country. Aparajita Goswami is a co-entrepreneur from Shantibari.",
  },
];

// FounderDetail component to display selected founder's information
function FounderDetail() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Find the member with the given 'id'
  const member = members.find((member) => member.id === parseInt(id));

  // If no member is found, return a 'not found' message
  if (!member) {
    return <p>Founder member not found.</p>;
  }

  return (
    <div className="bg-gray-100 p-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Founder Image */}
        <img
          className="h-60 w-60 object-cover rounded-full mx-auto"
          src={member.imgSrc}
          alt={member.name}
        />
        {/* Founder Name */}
        <h2 className="text-3xl font-bold text-center mt-6">{member.name}</h2>
        {/* Founder Title */}
        <p className="text-center text-gray-600">{member.title}</p>
        {/* Founder Description */}
        <p className="mt-4 text-lg">{member.description}</p>
      </div>
    </div>
  );
}

export default FounderDetail;
