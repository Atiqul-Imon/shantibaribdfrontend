import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Us - Shantibari</title>
        <meta name="description" content="Learn more about Shantibari, a women's organization dedicated to empowering women through education, advocacy, and support." />
        <meta property="og:title" content="About Us - Shantibari" />
        <meta property="og:description" content="Discover Shantibari's mission, vision, and impact in empowering women across Bangladesh." />
        <meta property="og:image" content="https://res.cloudinary.com/db5yniogx/image/upload/v1735324366/ShantibariHeroimagecloud3_osmsd6.jpg" />
        <meta property="og:url" content="https://www.shantibaribd.org/about-us" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Shantibari, About Us, Women's Empowerment, Mission, Vision, Impact, Bangladesh" />
      </Helmet>


      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: `url('https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tight uppercase shadow-md">About Us</h1>
        </div>
      </section>

      {/* Logo and Text Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735327489/shantibarilogocloud_a8h82d.png"
              alt="Shantibari Logo"
              className="w-36 h-36 object-contain shadow-lg transition-transform transform hover:scale-110"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              Shantibari is a women’s organization, based in Dhaka, Bangladesh, which aims to empower women through its multifaceted activities. Founded in July 2022 as a sister concern of Feminist Factor (2020), Shantibari has been committed to helping women in diverse ways, i.e. mental health and legal support, reinforcing information services, and supporting women-led entrepreneurship, etc. We believe in creating an equitable world, and we work towards achieving this through our various programs and initiatives.
            </p>
            <p className="text-lg text-gray-800">
              <strong className="text-primary">Company Culture</strong><br />
              At Shantibari, we value innovation, teamwork, and client satisfaction. We foster a safe, healthy, and collaborative work environment where employees are encouraged to share ideas and support each other in attaining our goals. We believe that our team members are assets to us, hence their well-being is our foremost priority, which leads to ensuring the best service to our clients at the end of the day.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Cards */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
            <p className="text-lg text-gray-700">
              To empower women through education, advocacy, and support to achieve their full potential and lead fulfilling lives.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
            <p className="text-lg text-gray-700">
              To create a world where women have equal opportunities and rights to succeed and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Impact</h3>
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
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
