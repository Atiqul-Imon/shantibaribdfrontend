import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage"; // Import HomePage from HomePage.jsx
import FounderDetail from "./components/FounderProfileSharminShams";
import AdvisorDetail from "./components/AdvisorDetail";
import Event from "./components/Event";
import EventDetails from "./components/Eventdetails";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import LawyerDetails from "./components/LawyerDetails";
import PsychologistAndPsychiatristDetail from "./components/PsychologistAndPsychiatristDetailPage";
import MediaCoverage from "./components/MediaCoverage";
import FridaKahloGallery from "./components/FridaKahloGallery";
import AudioVisual from "./components/AudioVisual";
import EntrepreneurialSupportProgram from "./components/EntrepreneurialSupportProgram";
import CulturalDevelopment from "./components/CulturalDevelopment";
import MentalHealthSupport from "./components/MentalHealthSupport";
import OurTeam from "./components/OurTeam";
import LegalAdviceDetails from "./components/LegalAdvicedetails";
import ParentingSupportDetails from "./components/ParentingSupportDetails";

// Main App Component
function App() {
  return (
    <HelmetProvider>
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
          <Route
            path="/services/:serviceId"
            element={<EntrepreneurialSupportProgram />}
          />
          <Route
            path="/services/cultural-development-program"
            element={<CulturalDevelopment />}
          />
          <Route
            path="/services/mental-health-support"
            element={<MentalHealthSupport />}
          />
          <Route
            path="/services/legal-advice-and-services"
            element={<LegalAdviceDetails />}
          />
          <Route
            path="/services/parenting-support"
            element={<ParentingSupportDetails />}
          />

          {/* Team and Contact */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/team" element={<OurTeam />} />

          {/* Lawyers and Psychologists */}
          <Route path="/lawyer/:id" element={<LawyerDetails />} />
          <Route
            path="/details/:name"
            element={<PsychologistAndPsychiatristDetail />}
          />

          {/* Media and Galleries */}
          <Route path="/media-coverage" element={<MediaCoverage />} />
          <Route path="/gallery-frida-kahlo" element={<FridaKahloGallery />} />
          <Route path="/audiovisual" element={<AudioVisual />} />

          {/* About Us */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      
      <Footer />
    </Router>
    </HelmetProvider>
  );
}

export default App;
