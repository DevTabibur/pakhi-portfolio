import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shafiur Rahman Pakhi | Educator • EdTech Co-Founder • CSE Undergraduate",
  description:
    "Official portfolio of Shafiur Rahman (Pakhi) — Educator, Co-Founder of Studins School, and Computer Science & Engineering undergraduate at the University of Dhaka. Transforming complex computing into intuitive learning.",
  keywords: [
    "Shafiur Rahman Pakhi",
    "Pakhi CSE",
    "Studins School",
    "HSC ICT Educator",
    "University of Dhaka CSE",
    "C Programming Teacher",
    "Computer Networks",
    "EdTech Bangladesh",
  ],
  authors: [{ name: "Shafiur Rahman Pakhi" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased selection:bg-teal-500/20 selection:text-teal-700 dark:selection:text-teal-300">
        {children}
      </body>
    </html>
  );
}
