"use client";

import Section from "./Section";

export default function Testimonials() {
  const quotes = [
    {
      text: "Working with Atomic Organizations has been one of the most transformative and important career decisions I have ever made.",
      author: "Mariam Toulan",
      company: "Google"
    },
    {
      text: "AO insights have helped us make strategic decisions and build a more cohesive and motivated team.",
      author: "Ali Sharif",
      company: "ProGlobal"
    },
    {
      text: "AO was instrumental as we developed new sales roles and guided us while we searched for the right talent.",
      author: "Bart van Ettinger",
      company: "Molex"
    }
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-h1 font-heading text-ao-navy text-center mb-16">
          Trusted by leaders who depend on strong commercial performance.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="border-l-4 border-ao-teal pl-6 py-4"
            >
              <p className="text-body text-ao-navy mb-6 italic">
                &quot;{quote.text}&quot;
              </p>
              <div>
                <p className="text-body font-semibold text-ao-navy">
                  {quote.author}
                </p>
                <p className="text-caption text-ao-gray500">
                  {quote.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
