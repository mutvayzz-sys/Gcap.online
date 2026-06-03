"use client";

import { CheckCircle2, Clock, FileText, Mail, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="top"
      data-chapter="top"
      data-label="Start"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[var(--bg)] pt-20 pb-16"
    >
      {/* Subtle background treatment - warm, not full dark overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-4 py-1 text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-6">
            Headmaster by GCAP Labs
          </div>

          <h1 className="text-[42px] sm:text-[56px] md:text-[64px] leading-[0.94] tracking-[-2.8px] md:tracking-[-3.8px] font-semibold mb-6 text-[var(--text)]">
            Persistent AI agents<br />for organizations that<br />run on repeat work.
          </h1>

          <p className="text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[38ch] leading-snug">
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
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all"
            >
              Explore the System
            </a>
          </div>
        </div>

        {/* Product proof panel — dark contained visual only */}
        <div className="relative mx-auto w-full max-w-[520px] rounded-3xl border border-black/10 bg-white p-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="rounded-[20px] bg-[#0D0D0D] text-[#F9F7F3] p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
              <div>
                <div className="text-[10px] tracking-[2.5px] uppercase text-white/40">Active Workflow</div>
                <div className="text-lg font-medium tracking-tight mt-0.5">Weekly Operations Report</div>
              </div>
              <div className="rounded-full bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Running
              </div>
            </div>

            {/* Proof metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <FileText size={15} /> Memory used
                </div>
                <div className="font-medium">14 prior runs</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Mail size={15} /><Calendar size={15} /> Tools connected
                </div>
                <div className="font-medium">Docs • Email • Calendar</div>
              </div>

              <div className="pt-1">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Current status</div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-amber-400" />
                  <span>Awaiting approval • 3 items flagged for review</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[12px] text-white/50 flex items-center gap-2">
              <Clock size={13} /> Next scheduled: Tomorrow 6:30am
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[3px] uppercase text-[var(--text-muted)] z-10">
        Scroll to explore
      </div>
    </section>
  );
}
