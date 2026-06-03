import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CinematicLayer from "@/components/CinematicLayer";

export const metadata: Metadata = {
  title: "Headmaster by GCAP Labs",
  description:
    "Headmaster is a persistent AI workforce layer for organizations — combining memory, skills, automations, tools, messaging, and specialist agents.",
  metadataBase: new URL("https://gcap.online"),
  alternates: {
    canonical: "https://gcap.online",
  },
  openGraph: {
    title: "GCAP Labs — Headmaster",
    description: "Persistent AI agents for real organizational work.",
    url: "https://gcap.online",
    siteName: "GCAP Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCAP Labs — Headmaster",
    description: "Persistent AI agents for real organizational work.",
  },
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <CinematicLayer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
