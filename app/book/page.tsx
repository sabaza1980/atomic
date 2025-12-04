"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BookPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

  return (
    <div className="min-h-screen bg-white">
      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-ao-gray800 hover:text-ao-teal transition-colors"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Header Section */}
      <div className="pt-24 px-6 text-center bg-gradient-to-b from-ao-offwhite to-white -mb-4">
        <h1 className="text-display font-heading text-ao-navy mb-6 max-w-5xl mx-auto leading-tight">
          You&apos;re <span className="text-ao-teal">One Call Away From</span> a{" "}
          <span className="text-ao-teal">Sales Team</span> That{" "}
          <span className="text-ao-teal">Hits Target, Performs Consistently,</span> and Finally Makes You{" "}
          <span className="text-ao-teal">Profitable</span>
        </h1>
        <p className="text-body-lg text-ao-gray800 max-w-3xl mx-auto">
          Book your free 30 minute sales performance consultation to map your challenges and 
          identify the biggest levers for growth.
        </p>
      </div>

      {/* Calendly Inline Widget */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  );
}
