"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/products/headmaster", label: "Headmaster" },
  { href: "/products/hq", label: "HQ" },
  { href: "/products/tayx", label: "TayX" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">
          <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
          <span className="text-[21px] tracking-[-0.8px] font-medium">GCAP</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px]">
          {navItems.map((item) => {
            const isActive = item.href !== "/" && pathname?.startsWith(item.href.split("#")[0]);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded ${isActive ? "text-[var(--text)]" : "hover:text-[var(--text-muted)]"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-6 py-[10px] rounded-full bg-[#111111] text-[#F9F7F3] text-sm hover:bg-black transition-colors active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
