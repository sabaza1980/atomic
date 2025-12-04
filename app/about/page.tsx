"use client";

import { useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import CalendlyModal from "../components/CalendlyModal";

export default function AboutPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookConsultation = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <>
      <Header onBookConsultation={handleBookConsultation} />
      <main className="pt-20">
        {/* Section 1: Mission */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-display font-heading text-ao-navy text-center mb-8">
              We exist to improve the way commercial teams work.
            </h1>
            <p className="text-body-lg text-ao-gray800 text-center max-w-3xl mx-auto">
              Atomic Organizations builds trust and performance inside sales and commercial teams. 
              We help leaders solve talent and culture problems that stand between them and their 
              revenue targets.
            </p>
          </div>
        </Section>

        {/* Section 2: What to Expect */}
        <Section className="bg-ao-offwhite">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-h1 font-heading text-ao-navy text-center mb-16">
              What you can expect when you work with us.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-h4 font-heading text-ao-navy mb-4">
                  Evidence based and practical for sales environments
                </h3>
                <p className="text-body text-ao-gray800">
                  Our methods are grounded in behavioral science and tested in real sales 
                  organizations facing real commercial pressure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-h4 font-heading text-ao-navy mb-4">
                  Co created with sales leaders and managers
                </h3>
                <p className="text-body text-ao-gray800">
                  We work alongside your frontline leadership to design interventions that fit 
                  their reality and reinforce their authority.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-h4 font-heading text-ao-navy mb-4">
                  Measured using the metrics that matter to your commercial organization
                </h3>
                <p className="text-body text-ao-gray800">
                  We track progress using your existing sales dashboards, CRM data and performance 
                  indicators.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3: Marta */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-h2 font-heading text-ao-navy text-center mb-8">
              Your transformation partner.
            </h2>
            <p className="text-body-lg text-ao-gray800 max-w-3xl mx-auto">
              Marta Galacka is a trusted partner to sales and commercial leaders. She brings deep 
              experience in behavioral science, mental toughness and strengths based coaching and 
              applies these methods to help sales organizations operate with clarity, trust and 
              resilience.
            </p>
          </div>
        </Section>

        {/* Section 4: Legal Info */}
        <Section className="bg-ao-offwhite">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-h3 font-heading text-ao-navy mb-6">
              Legal Information
            </h3>
            <div className="text-body text-ao-gray800 space-y-2">
              <p>Atomic Organizations is registered in the Netherlands</p>
              <p>KVK: 88992969</p>
              <p>VAT: NL004679861B82</p>
            </div>
          </div>
        </Section>
      </main>
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </>
  );
}
