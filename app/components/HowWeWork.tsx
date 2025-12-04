"use client";

import Section from "./Section";

export default function HowWeWork() {
  const blocks = [
    {
      title: "Aligned with your revenue targets",
      body: "We start with your pipeline, targets and team structure. Every intervention connects to a clear commercial outcome."
    },
    {
      title: "Co created with your sales managers",
      body: "We work closely with frontline leadership to design routines and coaching moments that actually fit their week."
    },
    {
      title: "Measured and transparent",
      body: "We use metrics like win rate, pipeline quality indicators, engagement and retention to track progress using your own dashboards."
    }
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-h1 font-heading text-ao-navy text-center mb-16">
          Designed for CROs and VPs of Sales.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {blocks.map((block, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-ao-teal bg-opacity-10 rounded-full">
                <span className="text-2xl font-bold text-ao-teal">{index + 1}</span>
              </div>
              <h3 className="text-h4 font-heading text-ao-navy mb-4">
                {block.title}
              </h3>
              <p className="text-body text-ao-navy">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
