"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
