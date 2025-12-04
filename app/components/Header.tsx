"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  onBookConsultation: () => void;
}

export default function Header({ onBookConsultation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          height: scrolled ? "4rem" : "5rem",
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md backdrop-blur-sm bg-opacity-95" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/ao-logo-blue-horizontal.png" 
              alt="Atomic Organizations" 
              width={200} 
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-ao-navy hover:text-ao-teal transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-ao-navy hover:text-ao-teal transition-colors">
              About
            </Link>
            <Link
              href="/book"
              className="px-6 py-2.5 bg-ao-teal text-ao-navy font-semibold rounded-lg hover:bg-ao-teal-soft transition-colors"
            >
              Book consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-ao-navy block"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-ao-navy block"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-ao-navy block"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading text-ao-navy hover:text-ao-teal transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading text-ao-navy hover:text-ao-teal transition-colors"
              >
                About
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-ao-teal text-ao-navy font-semibold rounded-lg text-lg"
              >
                Book consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
