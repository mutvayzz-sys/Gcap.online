import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CinematicLayer from "@/components/CinematicLayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <CinematicLayer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
