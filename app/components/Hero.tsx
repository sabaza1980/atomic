"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Wave motif background */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="/waves/wave1.png" 
          alt="" 
          fill
          className="object-cover object-bottom-right"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display font-heading text-ao-navy mb-8 text-balance"
        >
          Help your <span className="text-ao-teal">sales team</span> hit target <span className="text-ao-teal">more often.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-lg text-ao-navy mb-12 max-w-3xl mx-auto text-balance"
        >
          Atomic Organizations coaches sales leaders and their teams to turn strategy, pipeline and 
          performance data into daily sales behavior that wins more deals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/book"
            className="inline-block px-8 py-4 bg-ao-teal text-ao-navy font-semibold rounded-lg hover:bg-ao-teal-soft transition-all duration-300 hover:scale-105"
          >
            Book a sales performance consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-caption text-ao-navy space-y-2"
        >
          <p>A 30 minute session to map your sales challenges and identify the biggest levers for growth.</p>
          <p className="font-semibold">Take the first step to achieve your sales results today.</p>
        </motion.div>
      </div>
    </section>
  );
}
