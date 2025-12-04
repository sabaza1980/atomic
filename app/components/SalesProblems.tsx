"use client";

import Section from "./Section";

export default function SalesProblems() {
  const problems = [
    {
      title: "Targets missed and inconsistent performance",
      body: "Forecasts are often off, deals slip to the next quarter and teams scramble at the end of the period to catch up."
    },
    {
      title: "Strategy that does not show up in daily sales behavior",
      body: "The go to market strategy is clear on slides but not in customer conversations, qualification or pipeline management."
    },
    {
      title: "Burnout, churn and misaligned motivation",
      body: "Sales talent is expensive to hire and painful to lose. Disconnected coaching and unclear expectations push people to leave at the wrong time."
    },
    {
      title: "Sales managers stretched between deals and their people",
      body: "Frontline managers carry heavy quotas and do not always have the time or tools to coach, develop and hold teams accountable in the right way."
    }
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-h1 font-heading text-ao-navy text-center mb-6">
          We help you fix the people side of sales performance.
        </h2>
        
        <p className="text-body-lg text-ao-navy text-center mb-16 max-w-3xl mx-auto">
          We focus on the behavioral and cultural factors that sit behind your sales numbers, then we 
          align leaders and teams around clear habits and standards.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="border border-ao-gray100 p-8 rounded-lg hover:border-ao-teal transition-colors"
            >
              <h3 className="text-h4 font-heading text-ao-navy mb-4">
                {problem.title}
              </h3>
              <p className="text-body text-ao-navy">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
