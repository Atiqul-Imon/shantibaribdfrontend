import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center h-[400px]"
  style={{ backgroundImage: `url('https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg')` }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex justify-center items-center h-full">
    <h1 className="text-4xl md:text-6xl text-white font-bold">About Us</h1>
  </div>
</section>


      {/* Logo and Text Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735327489/shantibarilogocloud_a8h82d.png"
              alt="Shantibari Logo"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 mb-4">
              Shantibari is a women’s organization, based in Dhaka, Bangladesh, which aims to empower women through its multifaceted activities. Founded in July 2022 as a sister concern of Feminist Factor (2020), Shantibari has been committed to helping women in diverse ways, i.e. mental health and legal support, reinforcing information services, and supporting women-led entrepreneurship, etc. We believe in creating an equitable world, and we work towards achieving this through our various programs and initiatives.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Company Culture</strong><br />
              At Shantibari, we value innovation, teamwork, and client satisfaction. We foster a safe, healthy, and collaborative work environment where employees are encouraged to share ideas and support each other in attaining our goals. We believe that our team members are assets to us, hence their well-being is our foremost priority which leads to ensuring the best service to our clients at the end of the day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Cards */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
            <p className="text-lg text-gray-700">
              To empower women through education, advocacy, and support to achieve their full potential and lead fulfilling lives.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
            <p className="text-lg text-gray-700">
              To create a world where women have equal opportunities and rights to succeed and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Impact</h3>
            <ul className="text-lg text-gray-700 space-y-4">
              <li>Supported 10,000+ women with mental health and legal services over the year</li>
              <li>Over 150,000 followers and adherents across the country through online platforms</li>
              <li>Supported a good number of women entrepreneurs and small-business owners</li>
              <li>Hosted numerous events, including sessions, conferences, workshops, exhibitions, webinars, etc.</li>
              <li>Collaborations with multiple companies to enhance our social offerings</li>
              <li>Strong financial performance and steady revenue growth</li>
              <li>The activities of Shantibari have been exclusively featured in both print and digital media including Prothom Alo, The Business Standard, Channel 24, etc.</li>
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735340583/aboutusimagecloud_mftqip.jpg"
              alt="Impact Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
