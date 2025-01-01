import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FounderMembers from "./components/FounderMembers";
import FounderDetail from "./components/FounderProfileSharminShams";
import OurAdvisors from "./components/OurAdvisors";
import AdvisorDetail from "./components/AdvisorDetail";
import OurLawyers from "./components/OurLawyers";
import PsychiatristPsychologist from "./components/Psychologist";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import CharityMorganCafe from "./components/CharityMorganCafe";
import PhotoGallery from "./components/PhotoGallery";
import AboutUs from "./components/AboutUs";
import Event from "./components/Event";
import EventDetails from "./components/Eventdetails";
import MediaCoverage from "./components/MediaCoverage";
import FridaKahloGallery from "./components/FridaKahloGallery";
import Footer from "./components/Footer";
import LawyerDetails from "./components/LawyerDetails";
import PsychologistAndPsychiatristDetail from "./components/PsychologistAndPsychiatristDetailPage";
import ServiceDetail from "./components/ServiceDetailPage";
import ContactUs from "./components/ContactUs";
import AudioVisual from "./components/AudioVisual";
import EntrepreneurialSupportProgram from "./components/EntrepreneurialSupportProgram";
import CulturalDevelopment from "./components/CulturalDevelopment";

// Define Home Page Layout
function HomePage() {
  return (
    <>
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

// Main App Component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Founder and Advisor Routes */}
        <Route path="/founder/:id" element={<FounderDetail />} />
        <Route path="/advisor/:id" element={<AdvisorDetail />} />

        {/* Event Routes */}
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetails />} />

        {/* Services Routes */}
        <Route path="/services" element={<OurServices />} />
        
        <Route path="/services/:serviceId" element={<EntrepreneurialSupportProgram/>} />
        <Route path="/services/cultural-development-program" element={<CulturalDevelopment />} />
       
        

        {/* Team and Contact */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />

        {/* Lawyers and Psychologists */}
        <Route path="/lawyer/:id" element={<LawyerDetails />} />
        <Route path="/details/:id" element={<PsychologistAndPsychiatristDetail />} />

        {/* Media and Galleries */}
        <Route path="/media-coverage" element={<MediaCoverage />} />
        <Route path="/gallery-frida-kahlo" element={<FridaKahloGallery />} />
        <Route path="/audiovisual" element={<AudioVisual />} />

        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
