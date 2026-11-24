import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelSection } from './components/ShowreelSection';
import { ServicesMatrix } from './components/ServicesMatrix';
import { Methodology } from './components/Methodology';
import { TechArsenal } from './components/TechArsenal';
import { CaseStudies } from './components/CaseStudies';
import { BookingTerminal } from './components/BookingTerminal';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { Project, ServiceTier } from './types';
import { SHOWREEL_MAIN_VIDEO, PROJECTS } from './data/agencyData';
import { sound } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedVideoProject, setSelectedVideoProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingBrief, setBookingBrief] = useState('');
  const [bookingBudget, setBookingBudget] = useState('$25,000 – $35,000');

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.isEnabled = next;
  };

  const handleOpenMainReel = () => {
    const mainReelProject: Project = {
      id: "main-2026-showreel",
      title: SHOWREEL_MAIN_VIDEO.title,
      client: "Intrepid Media Giant Studios",
      category: "all",
      tag: "6K HDR Director's Master",
      duration: SHOWREEL_MAIN_VIDEO.duration,
      aspectRatio: SHOWREEL_MAIN_VIDEO.aspectRatio,
      resolution: SHOWREEL_MAIN_VIDEO.resolution,
      year: "2026",
      metrics: "350M+",
      metricLabel: "Total Global Impressions",
      thumbnailUrl: SHOWREEL_MAIN_VIDEO.posterUrl,
      videoUrl: SHOWREEL_MAIN_VIDEO.videoUrl,
      description: "The 2026 Flagship Director's Sizzle Reel compiling our most ambitious commercial campaigns, brand manifestos, robotic motion control shots, and direct-response performance films.",
      deliverables: ["Commercials", "Brand Manifestos", "Growth Ad Engines", "Dolby Atmos Mastering"],
      gear: "RED Cinema 6K + ARRI Alexa Mini LF + Cooke Anamorphic",
      director: "Intrepid Directorial Guild",
      colorGrade: "ACES Theatrical 33-Point Master"
    };

    setSelectedVideoProject(mainReelProject);
    setIsModalOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedVideoProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookThisStyle = (project: Project) => {
    setIsModalOpen(false);
    setBookingBrief(`Interested in commissioning a film in the visual style of: ${project.title} (${project.client}) | Gear: ${project.gear}`);
    handleScrollToBooking();
  };

  const handleSelectService = (service: ServiceTier) => {
    setBookingBrief(`Interested in commissioning ${service.title} (${service.code}) - ${service.subtitle}. Deliverables: ${service.deliverables.join(', ')}.`);
    setBookingBudget(`Starting at ${service.startingBudget}`);
    handleScrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#030705] text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation */}
      <Navbar
        onOpenBooking={handleScrollToBooking}
        onOpenReel={handleOpenMainReel}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Futuristic Hero */}
        <Hero
          onOpenReel={handleOpenMainReel}
          onOpenBooking={handleScrollToBooking}
          onExploreWork={handleScrollToProjects}
        />

        {/* Showreel & Portfolio Archive */}
        <ShowreelSection
          onSelectProject={handleSelectProject}
          onOpenMainReel={handleOpenMainReel}
          onBookStyle={handleBookThisStyle}
        />

        {/* Services We Offer Matrix */}
        <ServicesMatrix
          onSelectService={handleSelectService}
          onOpenBooking={handleScrollToBooking}
        />

        {/* Hollywood Hardware Arsenal */}
        <TechArsenal />

        {/* Methodology: The Intrepid Protocol */}
        <Methodology />

        {/* Client Testimonials & ROAS Metrics */}
        <CaseStudies onOpenBooking={handleScrollToBooking} />

        {/* Directorial Discovery Terminal */}
        <BookingTerminal
          initialBrief={bookingBrief}
          initialBudget={bookingBudget}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Cinema Player Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedVideoProject}
        onBookThisStyle={handleBookThisStyle}
      />

    </div>
  );
}
