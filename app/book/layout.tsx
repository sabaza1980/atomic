import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Sales Performance Consultation - Atomic Organizations",
  description: "Schedule a 30 minute consultation to map your sales challenges and identify the biggest levers for growth.",
  openGraph: {
    title: "Book Your Consultation - Atomic Organizations",
    description: "Take the first step to achieve your sales results today.",
    type: "website",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
