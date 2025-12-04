"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CTAButton({ 
  onClick, 
  children, 
  variant = "primary",
  className = ""
}: CTAButtonProps) {
  const baseClasses = "px-8 py-4 rounded-lg font-semibold text-body transition-all duration-300";
  const variantClasses = variant === "primary"
    ? "bg-ao-teal text-ao-navy hover:bg-ao-teal-soft"
    : "bg-ao-coral text-white hover:bg-opacity-90";

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
