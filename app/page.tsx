"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import ProductPillars from "@/components/ProductPillars";
import ChatSection from "@/components/ChatSection";
import GuidedWorkflowSection from "@/components/GuidedWorkflowSection";
import ApprovalsSection from "@/components/ApprovalsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import DeploymentSection from "@/components/DeploymentSection";
import TrustControl from "@/components/TrustControl";
import UseCases from "@/components/UseCases";
import ModelAgnostic from "@/components/ModelAgnostic";
import TayXSection from "@/components/TayXSection";
import FinalCTA from "@/components/FinalCTA";

export default function GCAPLabs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement, opts?: { offset?: number }) => void } }).__lenis;
      if (lenis) lenis.scrollTo(el, { offset: 0 });
      else el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const navItems = [
    { href: "#product", label: "Product" },
    { href: "/products/headmaster", label: "Headmaster" },
    { href: "/products/tayx", label: "TayX" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[#111] selection:text-white">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
            <span className="text-[21px] tracking-[-0.8px] font-medium">GCAP</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--text-muted)] transition-colors">
                {item.label}
              </a>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-[10px] rounded-full bg-[#111111] text-[#F9F7F3] text-sm hover:bg-black transition-colors"
              aria-label="Book a demo"
            >
              Book a Demo
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((p) => !p)}
            className="md:hidden z-50 relative flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 px-8 flex flex-col"
          >
            <nav className="flex flex-col gap-7" aria-label="Mobile navigation">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl tracking-tight font-medium hover:text-[var(--text-muted)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-10 w-full py-4 rounded-full bg-[#111111] text-[#F9F7F3] text-lg font-medium"
              aria-label="Book a demo"
            >
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <HeroSection />

      {/* CHAT — front door to the product */}
      <ChatSection />

      {/* PRODUCT PILLARS — broad system overview */}
      <ProductPillars />

      {/* GUIDED WORKFLOW — strongest product proof */}
      <GuidedWorkflowSection />

      {/* INTEGRATIONS — visual proof only on the homepage */}
      <IntegrationsSection />

      {/* USE CASES — school is one vertical, not the homepage identity */}
      <UseCases />

      {/* TRUST + APPROVALS — control stays with people */}
      <TrustControl />
      <ApprovalsSection />

      {/* DEPLOYMENTS — generic workspace snapshot */}
      <DeploymentSection />

      {/* MODEL-AGNOSTIC + TAYX TEASER */}
      <ModelAgnostic />
      <TayXSection />

      {/* CTA */}
      <FinalCTA />

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2025 GCAP Labs. Headmaster is a persistent AI workforce layer.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="https://x.com/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">X</a>
          <a href="https://linkedin.com/company/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">LinkedIn</a>
          <a href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-[var(--text)] transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
