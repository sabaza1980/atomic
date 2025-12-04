"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SalesImportance from "./components/SalesImportance";
import SalesProblems from "./components/SalesProblems";
import SalesPrograms from "./components/SalesPrograms";
import HowWeWork from "./components/HowWeWork";
import MetricsSection from "./components/MetricsSection";
import Testimonials from "./components/Testimonials";
import GlobalPresence from "./components/GlobalPresence";
import ClosingCTA from "./components/ClosingCTA";
import CalendlyModal from "./components/CalendlyModal";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <Header onBookConsultation={() => setIsCalendlyOpen(true)} />
      <main>
        <Hero />
        <SalesImportance />
        <SalesProblems />
        <SalesPrograms />
        <HowWeWork />
        <MetricsSection />
        <Testimonials />
        <GlobalPresence />
        <ClosingCTA />
      </main>
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </>
  );
}
