"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import WorksWith from "@/components/WorksWith";
import {
  DeploymentSection,
  FeatureMatrix,
  FinalCTA,
  HeroSection,
  HowItWorks,
  ProductPillars,
  SchoolExample,
  TrustControl,
  UseCases,
} from "@/components/HomeSections";

const navItems = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#deployments", label: "Deployments" },
  { href: "#contact", label: "Contact" },
];

export default function GCAPLabs() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(el, { offset: 0 });
      else el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("mailto:waitlist@gcap.online?subject=Discuss%20a%20Headmaster%20Deployment", "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[#111111] selection:text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
          <a href="#product" className="flex items-center gap-3" aria-label="GCAP Labs home">
            <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} />
            <span className="text-[21px] font-medium tracking-[-0.8px]">GCAP</span>
          </a>
          <div className="hidden items-center gap-8 text-[15px] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[var(--text-muted)]">
                {item.label}
              </a>
            ))}
            <button onClick={() => scrollTo("contact")} className="rounded-full bg-[#111111] px-6 py-[10px] text-sm text-[#F9F7F3] transition-colors hover:bg-black" aria-label="Book a Headmaster demo">
              Book a Demo
            </button>
          </div>
          <button onClick={() => setMobileMenuOpen((p) => !p)} className="relative z-50 flex flex-col gap-[5px] p-2 md:hidden" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
            <span className={`block h-[1.5px] w-5 bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 flex flex-col bg-[var(--bg)] px-8 pt-24">
            <nav className="flex flex-col gap-7" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-medium tracking-tight transition-colors hover:text-[var(--text-muted)]">
                  {item.label}
                </a>
              ))}
            </nav>
            <button onClick={() => scrollTo("contact")} className="mt-10 w-full rounded-full bg-[#111111] py-4 text-lg font-medium text-[#F9F7F3]">
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection onScroll={scrollTo} />
      <ProductPillars />
      <WorksWith />
      <HowItWorks />
      <UseCases />
      <DeploymentSection />
      <FeatureMatrix />
      <SchoolExample />
      <TrustControl />
      <FinalCTA onScroll={scrollTo} />

      <section id="contact-form" className="mx-auto max-w-2xl px-8 py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">Deployment inquiry</div>
          <h3 className="mb-4 text-[32px] font-medium leading-tight tracking-[-1.3px] md:text-[46px] md:tracking-[-2px]">
            Tell us where work repeats.
          </h3>
          <p className="text-lg text-[var(--text-muted)]">
            We review each deployment request and help identify the first workflow, tools, approval gates, and workspace configuration.
          </p>
        </div>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="text" name="name" placeholder="Full name" className="field" required />
              <input type="email" name="email" placeholder="Work email" className="field" required />
            </div>
            <input type="text" name="company" placeholder="Organization" className="field" required />
            <textarea name="message" placeholder="Which workflow should Headmaster support first?" rows={4} className="field resize-y rounded-3xl" required />
            <button type="submit" data-magnet className="mt-2 w-full rounded-2xl bg-[#111111] py-4 text-lg font-medium text-[#F9F7F3] transition-all hover:bg-black" aria-label="Discuss a Headmaster deployment">
              Discuss a Deployment →
            </button>
          </form>
        ) : (
          <div className="rounded-3xl border border-[var(--border)] bg-white px-8 py-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <span className="text-3xl text-green-600" aria-hidden="true">✓</span>
            </div>
            <h4 className="mb-3 text-3xl font-medium tracking-tight">Inquiry received.</h4>
            <p className="mx-auto max-w-md text-[var(--text-muted)]">
              Thank you. We will review the deployment fit and reach out with recommended next steps.
            </p>
            <button onClick={() => setSubmitted(false)} className="mt-8 text-sm text-[var(--text-muted)] underline hover:text-[#111111]">
              Submit another inquiry
            </button>
          </div>
        )}
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-y-2 border-t border-[var(--border)] px-8 py-9 text-xs text-[var(--text-muted)] md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} GCAP Labs.</div>
        <div className="flex flex-wrap gap-6">
          <a href="https://x.com/gcaplabs" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#111111]" aria-label="GCAP Labs on X">X</a>
          <a href="https://linkedin.com/company/gcaplabs" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#111111]" aria-label="GCAP Labs on LinkedIn">LinkedIn</a>
          <a href="/privacy" className="transition-colors hover:text-[#111111]">Privacy</a>
          <a href="/terms" className="transition-colors hover:text-[#111111]">Terms</a>
        </div>
      </footer>
    </div>
  );
}
