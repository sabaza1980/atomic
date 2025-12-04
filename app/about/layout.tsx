import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Atomic Organizations - Sales Performance Coaching Experts",
  description: "We exist to improve the way commercial teams work. Evidence-based coaching and behavioral science for sales leaders and teams.",
  openGraph: {
    title: "About Atomic Organizations",
    description: "Evidence-based sales performance coaching for commercial leaders.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
