import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Headmaster by GCAP Labs",
  description:
    "Persistent AI agents for organizations that run on repeat work. Headmaster is GCAP’s work console for memory, workflows, approvals, automations, and model routing.",
  metadataBase: new URL("https://gcap.online"),
  alternates: {
    canonical: "https://gcap.online",
  },
  openGraph: {
    title: "GCAP Labs — Headmaster",
    description: "Persistent AI agents for organizations that run on repeat work.",
    url: "https://gcap.online",
    siteName: "GCAP Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCAP Labs — Headmaster",
    description: "Persistent AI agents for organizations that run on repeat work.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
