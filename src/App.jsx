import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import FounderMembers from "./components/FounderMembers";
import OurAdvisors from "./components/OurAdvisors";
import OurLawyers from "./components/OurLawyers";
import HeroSection from "./components/HeroSection";
import PsychiatristPsychologist from "./components/Psychologist";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import CharityMorganCafe from "./components/CharityMorganCafe";
import PhotoGallery from "./components/PhotoGallery";
import AboutUs from "./components/AboutUs";
import Event from "./components/Event";
import Footer from "./components/Footer";
import MediaCoverage from "./components/MediaCoverage"; // Import MediaCoverage
import FridaKahloGallery from "./components/FridaKahloGallery"; // Import the new Gallery component
import EventDetails from "./components/Eventdetails";

// Define HomePage Layout
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

// App Component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Other page routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<OurTeam />} />
        <Route path="/audio-visual" element={<OurLawyers />} />
        <Route path="/brochure" element={<PsychiatristPsychologist />} />
        <Route path="/media-coverage" element={<MediaCoverage />} /> {/* Added MediaCoverage Route */}
        
        {/* Frida Kahlo Gallery Route */}
        <Route path="/gallery-frida-kahlo" element={<FridaKahloGallery />} /> {/* Added FridaKahloGallery Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
