"use client";

import Section from "./Section";
import Image from "next/image";

export default function SalesPrograms() {
  const programs = [
    {
      heading: "Sales leadership coaching",
      bullets: [
        "One to one and small group coaching for CROs, VPs of Sales and sales managers",
        "Clear expectations and operating rhythm for your sales organization",
        "Stronger decision making and communication with the team",
        "Resilience and mental toughness in a high pressure environment"
      ]
    },
    {
      heading: "Sales team performance programs",
      bullets: [
        "Shared standards for pipeline quality and deal progression",
        "Practical routines for preparation, follow up and collaboration",
        "Workshops that connect individual strengths with sales responsibilities"
      ]
    },
    {
      heading: "Sales talent and performance systems",
      bullets: [
        "Role design and competency profiles for sales teams",
        "Performance and incentive frameworks that support the right behavior",
        "Feedback loops built on your existing sales data"
      ]
    }
  ];

  return (
    <Section className="bg-ao-navy relative overflow-hidden">
      {/* Wave motif background */}
      <div className="absolute inset-0 opacity-30">
        <Image 
          src="/waves/wave2.png" 
          alt="" 
          fill
          className="object-cover object-left"
        />
      </div>
      <div className="absolute inset-0 opacity-30">
        <Image 
          src="/waves/wave3.png" 
          alt="" 
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-h1 font-heading text-white text-center mb-4">
          Targeted coaching and programs for sales leaders and teams.
        </h2>
        
        <p className="text-body-lg text-ao-gray100 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          We combine coaching, behavioral science and sales management experience to help your sales 
          organization execute with more focus and less friction.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-ao-navy-soft border border-ao-teal border-opacity-20 p-8 rounded-xl flex flex-col"
            >
              <div className="bg-ao-teal bg-opacity-10 border border-ao-teal border-opacity-30 rounded-full px-6 py-3 mb-6 text-center h-20 flex items-center justify-center">
                <h3 className="text-h4 font-heading text-ao-teal leading-tight capitalize">
                  {program.heading}
                </h3>
              </div>
              <ul className="space-y-4 flex-grow">
                {program.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-body text-ao-gray100 flex gap-3 leading-relaxed">
                    <span className="text-ao-teal mt-1 flex-shrink-0 text-lg">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
