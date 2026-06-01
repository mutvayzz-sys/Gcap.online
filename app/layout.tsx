import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CinematicLayer from "@/components/CinematicLayer";

export const metadata: Metadata = {
  title: "Headmaster by GCAP Labs",
  description:
    "One prompt. Your entire workforce. Headmaster orchestrates specialist AI agents to execute real work — autonomously.",
  metadataBase: new URL("https://gcap.online"),
  alternates: {
    canonical: "https://gcap.online",
  },
  openGraph: {
    title: "GCAP Labs — Headmaster",
    description: "One prompt. Your entire workforce.",
    url: "https://gcap.online",
    siteName: "GCAP Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCAP Labs — Headmaster",
    description: "One prompt. Your entire workforce.",
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
