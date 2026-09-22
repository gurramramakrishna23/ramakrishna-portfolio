import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurram Ramakrishna | Computer Science & Data Science Student",
  description:
    "Portfolio of Gurram Ramakrishna — Computer Science student focused on software development, data science, machine learning, data analytics, and problem solving.",
  keywords: [
    "Gurram Ramakrishna",
    "Ramakrishna",
    "Computer Science Student",
    "Data Science Student",
    "Software Developer",
    "Data Analyst",
    "Machine Learning",
    "Python",
    "SQL",
    "Portfolio",
  ],
  authors: [
    {
      name: "Gurram Ramakrishna",
    },
  ],
  creator: "Gurram Ramakrishna",

  metadataBase: new URL(
    "https://ramakrishna-portfolio-drab.vercel.app"
  ),

  openGraph: {
    title: "Gurram Ramakrishna | Portfolio",
    description:
      "Computer Science student building software, data science, machine learning, and analytics projects.",
    url: "https://ramakrishna-portfolio-drab.vercel.app",
    type: "website",
    locale: "en_IN",
    siteName: "Gurram Ramakrishna Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gurram Ramakrishna | Portfolio",
    description:
      "Computer Science student focused on software development, data science, machine learning, and data analytics.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}