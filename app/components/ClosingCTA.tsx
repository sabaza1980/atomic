"use client";

import Section from "./Section";
import Link from "next/link";
import Image from "next/image";

export default function ClosingCTA() {
  return (
    <Section className="bg-ao-navy relative overflow-hidden">
      {/* Wave motif background */}
      <div className="absolute inset-0 opacity-25">
        <Image 
          src="/waves/wave4.png" 
          alt="" 
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-h1 font-heading text-white mb-6">
          Ready to help your sales team hit target more often
        </h2>
        
        <p className="text-body-lg text-ao-gray100 mb-12 max-w-2xl mx-auto">
          Whether you want to support a region, a key account team or the whole sales organization, 
          we help you identify the quickest wins and the deeper shifts needed for sustainable performance.
        </p>

        <div className="mb-6">
          <Link
            href="/book"
            className="inline-block px-8 py-4 bg-ao-teal text-ao-navy font-semibold rounded-lg hover:bg-ao-teal-soft transition-all duration-300 hover:scale-105"
          >
            Book a sales performance consultation
          </Link>
        </div>

        <p className="text-caption text-ao-gray100 font-semibold">
          Take the first step to achieve your sales results today.
        </p>
      </div>
    </Section>
  );
}
