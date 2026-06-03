"use client";

import Image from "next/image";

const dashboardUrl = "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png";

export default function HeroSection() {
  return (
    <section
      id="top"
      data-chapter="top"
      data-label="Start"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[var(--bg)] pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_24%,rgba(0,0,0,0.045),transparent_58%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/55 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-4 py-1 text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-6 shadow-[0_8px_24px_rgba(17,17,17,0.04)]">
            Headmaster by GCAP Labs
          </div>

          <h1 className="text-[42px] sm:text-[56px] md:text-[64px] leading-[0.94] tracking-[-2.8px] md:tracking-[-3.8px] font-semibold mb-6 text-[var(--text)]">
            Persistent AI agents<br />for organizations that<br />run on repeat work.
          </h1>

          <p className="text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[39ch] leading-snug">
            Headmaster remembers context, learns workflows, connects to tools, schedules recurring work, and routes sensitive actions through human approval.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.985] transition-all"
              data-magnet
            >
              Book a Demo
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg)]/70 text-[15px] font-medium hover:bg-white transition-all"
            >
              Explore the System
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <div className="product-shot product-shot-hero">
            <Image
              src={dashboardUrl}
              alt="Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status."
              width={1600}
              height={1000}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--text-muted)]">
            <div className="rounded-2xl border border-[var(--border)] bg-white/80 p-3">
              <span className="block text-[var(--text)] font-medium">Runs</span>
              Active work stays visible.
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/80 p-3">
              <span className="block text-[var(--text)] font-medium">Memory</span>
              Context belongs to the workspace.
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white/80 p-3">
              <span className="block text-[var(--text)] font-medium">Approvals</span>
              People stay in control.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[3px] uppercase text-[var(--text-muted)] z-10 hidden sm:block">
        Scroll to explore
      </div>
    </section>
  );
}
