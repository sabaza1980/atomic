import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atomic Organizations - Sales Performance Coaching for Revenue Teams",
  description: "Help your sales team hit target more often. Expert coaching for sales leaders and teams to translate strategy into daily sales behavior that wins more deals.",
  keywords: "sales coaching, sales performance, CRO coaching, VP of Sales, revenue leadership, sales team development, sales training",
  authors: [{ name: "Atomic Organizations" }],
  openGraph: {
    title: "Atomic Organizations - Sales Performance Coaching",
    description: "Help your sales team hit target more often. Expert coaching for sales leaders and teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
