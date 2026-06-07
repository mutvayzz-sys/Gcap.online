import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Headmaster Documentation",
  description: "Complete guide to deploying and managing Headmaster AI agents",
};

const navItems = [
  ["Overview", "/docs/overview"],
  ["Headmaster", "/docs/headmaster"],
  ["HQ", "/docs/hq"],
  ["Plugins", "/docs/plugins"],
  ["Security", "/docs/security"],
  ["Deployment", "/docs/deployment"],
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-8 py-6 md:flex-row md:items-center md:justify-between">
          <Link href="/docs" className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--text)]">
            Headmaster Docs
          </Link>
          <nav aria-label="Documentation" className="flex flex-wrap gap-2 text-sm text-[var(--text-muted)]">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-[var(--border)] px-3 py-1.5 transition-colors hover:bg-white hover:text-[var(--text)]">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-[1280px] px-8 py-16">
        {children}
      </div>
    </div>
  );
}
