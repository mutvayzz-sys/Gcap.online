"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/products/headmaster", label: "Headmaster" },
  { href: "/products/hq", label: "HQ" },
  { href: "/integrations", label: "Integrations" },
  { href: "/products/tayx", label: "TayX" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4" aria-label="Primary navigation">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between rounded-full border border-white/60 bg-[var(--bg)]/78 px-4 pl-5 shadow-[0_18px_60px_rgba(17,17,17,0.10)] backdrop-blur-2xl ring-1 ring-black/5 md:px-5">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">
          <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
          <span className="text-[21px] tracking-[-0.6px] font-medium">GCAP</span>
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/55 p-1 text-[14px] shadow-inner shadow-white/60">
          {navItems.map((item) => {
            const isActive = item.href !== "/" && pathname?.startsWith(item.href.split("#")[0]);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] ${isActive ? "bg-white text-[var(--text)] shadow-sm" : "text-[var(--text-muted)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white [@media(hover:hover)_and_(pointer:fine)]:hover:text-[var(--text)]"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-[#111111] px-5 py-2.5 text-sm text-[#F9F7F3] shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-colors hover:bg-black active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
