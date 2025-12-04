"use client";

import Section from "./Section";

export default function SalesImportance() {
  return (
    <Section className="bg-ao-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-h1 font-heading text-ao-navy text-center mb-6">
          Your sales organization drives the growth of the whole company.
        </h2>
        
        <p className="text-body-lg text-ao-navy text-center mb-16 max-w-3xl mx-auto">
          When the sales team loses focus, every metric in the company suffers. When it performs at 
          its best, everything else follows.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-h3 font-heading text-ao-navy mb-4">
              Revenue and growth
            </h3>
            <p className="text-body text-ao-navy">
              Sales performance is the engine of predictable revenue. Missed targets ripple into budget 
              cuts, stalled investments and pressure on every other function.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-h3 font-heading text-ao-navy mb-4">
              Customer reality
            </h3>
            <p className="text-body text-ao-navy">
              Your sales team sits closest to the market. If they are disengaged or unclear, you lose 
              signal from customers and react too slowly to change.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-h3 font-heading text-ao-navy mb-4">
              Culture and energy
            </h3>
            <p className="text-body text-ao-navy">
              Sales teams often carry the highest pressure in the business. When they burn out or churn, 
              you lose hard won experience and relationships.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
