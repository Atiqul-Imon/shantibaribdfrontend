import React from "react";

import HeroSection from "../components/HeroSection";
import FounderMembers from "../components/FounderMembers";
import OurAdvisors from "../components/OurAdvisors";
import OurLawyers from "../components/OurLawyers";
import PsychiatristPsychologist from "../components/Psychologist";
import OurServices from "../components/OurServices";
import OurTeam from "../components/OurTeam";
import CharityMorganCafe from "../components/CharityMorganCafe";
import PhotoGallery from "../components/PhotoGallery";
import WeAreHiring from "./WeAreHiring";

function HomePage() {
  return (
    <>
      {/* Render homepage components */}
      <HeroSection />
      <FounderMembers />
      <OurAdvisors />
      <OurLawyers />
      <PsychiatristPsychologist />
      <OurServices />
      <WeAreHiring/>
      <OurTeam />
      <CharityMorganCafe />
      <PhotoGallery />
      
    </>
  );
}

export default HomePage;
