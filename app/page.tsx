"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import WorksWith from "@/components/WorksWith";
import HowItWorksFlow from "@/components/HowItWorksFlow";
import UseCases from "@/components/UseCases";
import {
  DeploymentSection,
  FeatureMatrix,
  FinalCTA,
  HeroCommandCenter,
  ProductPillars,
  SchoolExample,
  TrustControl,
} from "@/components/ProductSections";

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
    window.open("mailto:waitlist@gcap.online?subject=Headmaster Deployment Demo", "_blank");
    setSubmitted(true);
  };

  const navItems = [
    { href: "#product", label: "Product" },
    { href: "#features", label: "Features" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#deployments", label: "Deployments" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[#111111] selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="GCAP home">
            <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} />
            <span className="text-[21px] tracking-[-0.8px] font-medium">GCAP</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--text-muted)] transition-colors">
                {item.label}
              </a>
            ))}
            <button onClick={() => scrollTo("demo")} className="px-6 py-[10px] rounded-full bg-[#111111] text-[#F9F7F3] text-sm hover:bg-black transition-colors" aria-label="Book a demo">
              Book a Demo
            </button>
          </div>
          <button onClick={() => setMobileMenuOpen((p) => !p)} className="md:hidden z-50 relative flex flex-col gap-[5px] p-2" aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 px-8 flex flex-col">
            <nav className="flex flex-col gap-7" aria-label="Mobile navigation">
              {navItems.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="text-3xl tracking-tight font-medium hover:text-[var(--text-muted)] transition-colors">{label}</a>
              ))}
            </nav>
            <button onClick={() => scrollTo("demo")} className="mt-10 w-full py-4 rounded-full bg-[#111111] text-[#F9F7F3] text-lg font-medium">
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="top" data-chapter="top" data-label="Start" data-theme="dark" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black pt-28 pb-16">
        <video autoPlay muted loop playsInline poster="/images/hero-poster.jpg" className="absolute inset-0 w-full h-full object-cover opacity-45" src="/videos/hero.mp4" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_30%),linear-gradient(135deg,rgba(0,0,0,0.86),rgba(0,0,0,0.58)_45%,rgba(0,0,0,0.88))]" />
        <div data-hero-copy className="relative z-10 max-w-6xl mx-auto px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center text-white">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[2px] uppercase text-white/70 mb-8">
              Headmaster by GCAP Labs
            </div>
            <h1 className="text-[46px] sm:text-[64px] md:text-[clamp(64px,8vw,112px)] leading-[0.9] tracking-[-3px] md:tracking-[-5px] font-semibold mb-7 drop-shadow-2xl">
              Your organization’s persistent AI workforce.
            </h1>
            <p className="text-xl md:text-[27px] tracking-[-0.8px] mb-10 text-white/78 drop-shadow-xl max-w-3xl leading-tight">
              Headmaster combines memory, skills, automations, tools, messaging, and specialist agents into one private command layer for real work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("demo")} className="px-10 py-4 rounded-full bg-white text-black text-lg font-medium hover:bg-white/90 active:scale-[0.985] transition-all shadow-xl text-center" data-magnet>
                Book a Demo
              </button>
              <a href="#features" className="px-10 py-4 rounded-full border border-white/70 text-lg hover:bg-white/10 transition-all text-center">
                Explore Features
              </a>
            </div>
          </div>
          <HeroCommandCenter />
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-[0.24em] uppercase z-10">Scroll</div>
      </section>

      <ProductPillars />
      <WorksWith />

      <section id="how-it-works" data-chapter="how" data-label="How" className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]">
        <div className="mb-12" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">How Headmaster Works</div>
          <h2 className="text-[30px] md:text-[44px] tracking-[-1.2px] md:tracking-[-1.8px] font-medium mb-4 leading-tight">
            Work can start from a prompt, a button, a recurring schedule, or a message from your team.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[var(--text-muted)] max-w-3xl leading-relaxed">
            Headmaster turns organizational context into a repeatable operating loop: understand the work, recall the process, delegate, use tools, prepare output, and wait for approval.
          </p>
        </div>
        <HowItWorksFlow />
      </section>

      <section id="use-cases" data-chapter="usecases" data-label="Use Cases" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12" data-reveal>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">Use Cases</div>
            <h2 className="text-[30px] md:text-[44px] tracking-[-1.2px] md:tracking-[-1.8px] font-medium mb-4 leading-tight">
              Deploy Headmaster Where Work Repeats
            </h2>
            <p className="text-[17px] md:text-[19px] text-[var(--text-muted)] max-w-3xl leading-relaxed">
              Headmaster adapts to the workflows of different organizations without changing the core system.
            </p>
          </div>
          <UseCases />
        </div>
      </section>

      <DeploymentSection />
      <FeatureMatrix />
      <SchoolExample />
      <TrustControl />
      <FinalCTA onDemo={() => scrollTo("demo")} />

      <section id="demo" className="max-w-2xl mx-auto px-8 py-24 border-t border-[var(--border)]">
        <div className="text-center mb-12" data-reveal>
          <h2 className="text-[30px] md:text-[42px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium mb-4 leading-tight">
            Discuss a Headmaster deployment.
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            Tell us about the workflow, tools, and review rules your organization wants to start with.
          </p>
        </div>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Full name" className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors" required />
              <input type="email" name="email" placeholder="Work email" className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors" required />
            </div>
            <input type="text" name="company" placeholder="School, company, or team" className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors" />
            <textarea name="message" placeholder="Which workflow should Headmaster learn first?" rows={4} className="w-full rounded-3xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors resize-y" required />
            <button type="submit" data-magnet className="w-full mt-2 py-4 rounded-2xl bg-[#111111] text-[#F9F7F3] text-lg font-medium hover:bg-black transition-all" aria-label="Book a Headmaster demo">
              Book a Demo →
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl" aria-hidden="true">✓</span>
            </div>
            <h3 className="text-3xl tracking-tight font-medium mb-3">Request received.</h3>
            <p className="text-[var(--text-muted)] max-w-md mx-auto">
              Thank you. Our team will review your deployment fit and reach out with next steps.
            </p>
            <button onClick={() => setSubmitted(false)} className="mt-8 text-sm underline text-[var(--text-muted)] hover:text-[#111111]">
              Submit another request
            </button>
          </div>
        )}
      </section>

      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© {new Date().getFullYear()} GCAP Labs.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="https://x.com/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors" aria-label="GCAP Labs on X">X</a>
          <a href="https://linkedin.com/company/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors" aria-label="GCAP Labs on LinkedIn">LinkedIn</a>
          <a href="/privacy" className="hover:text-[#111111] transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-[#111111] transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
