"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const docNavItems = [
  ["Overview", "/docs/overview"],
  ["Headmaster", "/docs/headmaster"],
  ["HQ", "/docs/hq"],
  ["Plugins", "/docs/plugins"],
  ["Security", "/docs/security"],
  ["Deployment", "/docs/deployment"],
] as const;

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-8 border-r border-[var(--border)] pr-5 text-sm" aria-label="Documentation sections">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">Docs</div>
        <div className="space-y-1">
          {docNavItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block rounded-xl px-3 py-2 transition-colors ${active ? "bg-white text-[var(--text)]" : "text-[var(--text-muted)] hover:bg-white/70 hover:text-[var(--text)]"}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
