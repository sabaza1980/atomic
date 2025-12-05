"use client";

import Section from "./Section";
import Image from "next/image";

export default function GlobalPresence() {
  const partners = [
    { name: "Google", logo: "/clients/google.svg" },
    { name: "TomTom", logo: "/clients/TomTom_logo.svg" },
    { name: "Zalando", logo: "/clients/zalando.svg" },
    { name: "TomTom", logo: "/clients/TomTom_logo.svg" },
    { name: "Molex", logo: "/clients/molex.svg" },
    { name: "ProGlobal", logo: "/clients/PG.png" }
  ];

  return (
    <Section className="bg-ao-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-h2 font-heading text-ao-navy text-center mb-6">
          Supporting sales teams across regions and markets.
        </h2>
        
        <p className="text-body-lg text-ao-gray800 text-center mb-12 max-w-3xl mx-auto">
          We work with sales and commercial teams in the USA, Europe and the Middle East. This mix of 
          markets helps us adapt coaching and programs to different buyer expectations and sales motions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20 hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className={`${
                    partner.name === "TomTom" || partner.name === "ProGlobal" 
                      ? "object-cover scale-[1.2]" 
                      : partner.name === "Molex"
                      ? "object-contain scale-150"
                      : "object-contain p-2"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
