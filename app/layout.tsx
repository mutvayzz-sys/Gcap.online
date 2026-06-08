import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import CinematicLayer from "@/components/CinematicLayer";

export const metadata: Metadata = {
  title: "GCAP | Headmaster",
  description:
    "Headmaster is a persistent AI agent for organizations. Persistent memory, 17 messaging platforms, 300+ models, subagent delegation, and human approval gates. By GCAP Labs.",
  metadataBase: new URL("https://gcap.online"),
  alternates: {
    canonical: "https://gcap.online",
  },
  openGraph: {
    title: "GCAP | Headmaster",
    description: "The AI agent that runs your organization. While you sleep.",
    url: "https://gcap.online",
    siteName: "GCAP",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GCAP Headmaster — persistent AI agent for organizations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCAP | Headmaster",
    description: "The AI agent that runs your organization. While you sleep.",
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
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CinematicLayer />
        <div id="main-content" className="flex flex-col flex-1">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
