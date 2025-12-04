"use client";

import Section from "./Section";

export default function MetricsSection() {
  const metrics = [
    {
      label: "Clients Net Promoter Score",
      subtext: "From 55 to 74",
      highlight: "+55 percent"
    },
    {
      label: "Employee engagement",
      subtext: "Highest level in 15 years",
      highlight: "+13 percent"
    },
    {
      label: "Satisfaction with direct leader",
      subtext: "From 48 percent to 75 percent",
      highlight: "+56 percent"
    }
  ];

  return (
    <Section className="bg-ao-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-h1 font-heading text-ao-navy text-center mb-6">
          Culture and leadership that show up in your sales numbers.
        </h2>
        
        <p className="text-body-lg text-ao-navy text-center mb-16 max-w-3xl mx-auto">
          The same methods we use to improve engagement, leadership and trust also drive better 
          commercial outcomes.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl font-bold text-ao-teal mb-3">
                {metric.highlight}
              </div>
              <h4 className="text-h4 font-heading text-ao-navy mb-2">
                {metric.label}
              </h4>
              <p className="text-body text-ao-gray500">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        <p className="text-caption text-ao-gray500 text-center max-w-2xl mx-auto">
          These cultural improvements directly support sales retention, motivation and customer trust.
        </p>
      </div>
    </Section>
  );
}
