import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://gcap.online"),
  title: "GCAP | Headmaster",
  description:
    "Headmaster is a persistent AI workforce layer for organizations, combining memory, skills, automations, tools, messaging, specialist agents, approvals, and private deployments.",
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
        alt: "GCAP Headmaster",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
