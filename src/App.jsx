import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FounderMembers from "./components/FounderMembers";
import FounderDetail from "./components/FounderProfileSharminShams"; // Founder Detail Page
import OurAdvisors from "./components/OurAdvisors";
import AdvisorDetail from "./components/AdvisorDetail"; // Advisor Detail Page
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
      <EventDetails/>
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

        {/* Dynamic Routes */}
        <Route path="/founder/:id" element={<FounderDetail />} /> {/* Founder Detail */}
        <Route path="/advisor/:id" element={<AdvisorDetail />} /> {/* Advisor Detail */}

        {/* Static Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetails />} /> {/* Event Details */}
        <Route path="/contact" element={<OurTeam />} />
        <Route path="/audio-visual" element={<OurLawyers />} />
        <Route path="/brochure" element={<PsychiatristPsychologist />} />
        <Route path="/media-coverage" element={<MediaCoverage />} />
        <Route path="/gallery-frida-kahlo" element={<FridaKahloGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
