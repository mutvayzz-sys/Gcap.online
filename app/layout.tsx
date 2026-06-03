import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import CinematicLayer from "@/components/CinematicLayer";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "GCAP | Headmaster",
  description:
    "Headmaster is a persistent AI workforce layer for organizations — combining memory, skills, automations, tools, messaging, specialist agents, approvals, and private deployments.",
  metadataBase: new URL("https://gcap.online"),
  alternates: {
    canonical: "https://gcap.online",
  },
  openGraph: {
    title: "GCAP | Headmaster",
    description: "Persistent AI agents for real organizational work.",
    url: "https://gcap.online",
    siteName: "GCAP",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GCAP Headmaster — persistent AI workforce layer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCAP | Headmaster",
    description: "Persistent AI agents for real organizational work.",
    images: ["/opengraph-image"],
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
    <html lang="en" className={`h-full antialiased ${GeistSans.variable}`}>
      <body className="min-h-[100dvh] flex flex-col">
        <CinematicLayer />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
