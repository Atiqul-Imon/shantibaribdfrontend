import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroSection from "../components/HeroSection";
import FounderMembers from "../components/FounderMembers";
import OurAdvisors from "../components/OurAdvisors";
import OurLawyers from "../components/OurLawyers";
import PsychiatristPsychologist from "../components/Psychologist";
import OurServices from "../components/OurServices";
import OurTeam from "../components/OurTeam";
import CharityMorganCafe from "../components/CharityMorganCafe";
import PhotoGallery from "../components/PhotoGallery";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Shantibari</title>
        <meta property="og:title" content="Shantibari" />
        <meta property="og:description" content="নারীর জন্য, নারীর পাশে" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/db5yniogx/image/upload/v1737380767/ogimagehome_n97kav.jpg"
        />
        <meta property="og:url" content="https://www.shantibaribd.org/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Render homepage components */}
      <HeroSection />
      <FounderMembers />
      <OurAdvisors />
      <OurLawyers />
      <PsychiatristPsychologist />
      <OurServices />
      <OurTeam />
      <CharityMorganCafe />
      <PhotoGallery />
    </>
  );
}

export default HomePage;
