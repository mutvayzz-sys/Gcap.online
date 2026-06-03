"use client";

import { motion } from "framer-motion";
import { Brain, CalendarClock, CheckCircle2, Network, PlugZap, ShieldCheck, Workflow } from "lucide-react";

const nodes = [
  { label: "Memory", Icon: Brain },
  { label: "Skills", Icon: Workflow },
  { label: "Automations", Icon: CalendarClock },
  { label: "Tools", Icon: PlugZap },
  { label: "Gateways", Icon: Network },
  { label: "Agents", Icon: ShieldCheck },
  { label: "Approvals", Icon: CheckCircle2 },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      data-chapter="top"
      data-label="Start"
      data-theme="dark"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black pt-28 pb-16"
    >
      {/* Background video (subtle, kept from approved) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(135deg,rgba(0,0,0,0.82),rgba(0,0,0,0.62)_48%,rgba(0,0,0,0.88))]" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center text-white">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[2.5px] uppercase text-white/70 mb-8">
            Headmaster by GCAP Labs
          </div>

          <h1 className="text-[46px] sm:text-[62px] md:text-[clamp(64px,7.8vw,108px)] leading-[0.9] tracking-[-3.2px] md:tracking-[-5.2px] font-semibold mb-7 drop-shadow-2xl">
            Your organization’s<br />persistent AI workforce.
          </h1>

          <p className="text-xl md:text-[26px] tracking-[-0.6px] mb-10 text-white/78 drop-shadow-xl max-w-3xl leading-tight">
            Headmaster combines memory, skills, automations, tools, messaging, and specialist agents into one private command layer for real work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-10 py-4 rounded-full bg-white text-black text-lg font-medium hover:bg-white/90 active:scale-[0.985] transition-all shadow-xl text-center"
              data-magnet
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="px-10 py-4 rounded-full border border-white/70 text-lg hover:bg-white/10 transition-all text-center"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Calm command center visual — subtle Framer ambient motion */}
        <div className="relative mx-auto w-full max-w-[520px] rounded-[2rem] border border-white/15 bg-white/[0.055] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur" aria-hidden="true">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-[10px] tracking-[2px] uppercase text-white/45">Command Layer</div>
                <div className="mt-1 text-lg font-medium tracking-tight text-white">Headmaster Ops</div>
              </div>
              <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">Live</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  className={`rounded-2xl border border-white/10 bg-white/[0.055] p-4 ${i === 6 ? "col-span-2" : ""}`}
                  animate={{ opacity: [0.92, 1, 0.92] }}
                  transition={{ duration: 3.6 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <div className="mb-3 flex items-center gap-2 text-white/70">
                    <node.Icon size={15} />
                    <span className="text-sm font-medium">{node.label}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-white/75"
                      animate={{ width: ["42%", "78%", "42%"] }}
                      transition={{ duration: 4.2 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left text-xs leading-relaxed text-white/55">
              Approval queue · 3 drafts ready · weekly report scheduled · workspace isolated
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-[0.24em] uppercase z-10">
        Scroll
      </div>
    </section>
  );
}
