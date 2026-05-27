"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play, Pause } from "lucide-react";



// Simple interactive orchestration visualizer
function OrchestrationVisualizer() {
  const [activeTasks, setActiveTasks] = useState<string[]>([]);

  const tasks = [
    { id: "research", label: "Research pricing models", system: "Faculty" },
    { id: "write", label: "Draft competitive memo", system: "Faculty" },
    { id: "organize", label: "Organize findings into Board", system: "Board" },
    { id: "verify", label: "Verify data accuracy", system: "Conductor" },
  ];

  const toggleTask = (id: string) => {
    setActiveTasks(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl p-9">
      <div className="mb-8">
        <div className="text-sm tracking-[1.5px] text-[var(--text-muted)] mb-2">TRY IT</div>
        <div className="text-3xl tracking-tight">Watch the orchestrator work.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map(task => {
          const isActive = activeTasks.includes(task.id);
          return (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`text-left p-6 rounded-2xl border transition-all flex justify-between items-start ${
                isActive 
                  ? "border-[#111111] bg-[#111111] text-[#F9F7F3]" 
                  : "border-[var(--border)] hover:border-[#111111]/40"
              }`}
            >
              <div>
                <div className="font-medium tracking-tight">{task.label}</div>
                <div className={`text-sm mt-1 ${isActive ? "text-[#F9F7F3]/70" : "text-[var(--text-muted)]"}`}>
                  → {task.system}
                </div>
              </div>
              <div className={`mt-1 transition-transform ${isActive ? "rotate-45" : ""}`}>
                <ChevronRight size={18} />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-sm text-[var(--text-muted)]">
        {activeTasks.length > 0 
          ? `${activeTasks.length} task${activeTasks.length > 1 ? "s" : ""} delegated. The orchestrator is coordinating.` 
          : "Click tasks above. Watch how the orchestrator distributes work."}
      </div>
    </div>
  );
}

export default function GCAPLabs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[#111111] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="GCAP Labs" className="h-8 w-auto" />
            <span className="text-[21px] tracking-[-0.8px] font-medium">GCAP</span>
          </div>

          <div className="hidden md:flex items-center gap-9 text-[15px]">
            <a href="#headmaster" className="hover:text-[var(--text-muted)] transition-colors">Headmaster</a>
            <a href="#interfaces" className="hover:text-[var(--text-muted)] transition-colors">Hermes & Paperclip</a>
            <a href="#orchestrator" className="hover:text-[var(--text-muted)] transition-colors">The Orchestrator</a>
            <a href="#memento" className="hover:text-[var(--text-muted)] transition-colors">Memento</a>
            <button 
              onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-[10px] rounded-full bg-[#111111] text-[#F9F7F3] text-sm hover:bg-black transition-colors"
            >
              Get early access
            </button>
          </div>

          <button 
            onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
            className="md:hidden text-sm px-4 py-2 rounded-full bg-[#111111] text-[#F9F7F3]"
          >
            Early access
          </button>
        </div>
      </nav>

      {/* Hero - Full cinematic Palantir-style video */}
      <section className="relative h-[100dvh] min-h-[720px] flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/generated/hero-gcap-products.mp4"
        />

        {/* Strong cinematic gradient for text legibility, very Palantir */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center text-white">
          <h1 className="text-[72px] md:text-[92px] leading-[0.9] tracking-[-5.5px] font-semibold mb-6 drop-shadow-2xl">
            Most assistants answer,<br />then stop.
          </h1>
          <p className="text-3xl md:text-[42px] tracking-[-1.2px] mb-14 text-white/90 drop-shadow-xl">
            Headmaster keeps working.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-14 py-4 rounded-full bg-white text-black text-xl font-medium hover:bg-white/90 active:scale-[0.985] transition-all shadow-xl"
            >
              Get early access
            </button>
            <a 
              href="#orchestrator" 
              className="px-14 py-4 rounded-full border-2 border-white/80 text-xl hover:bg-white/10 transition-all"
            >
              See it in action
            </a>
          </div>
        </div>
      </section>

      {/* Brand Section — Dedicated logo reveal right under the hero */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-elevated)] py-16">
        <div className="max-w-5xl mx-auto px-8 flex justify-center">
          <img 
            src="/images/logo.jpg" 
            alt="GCAP Labs" 
            className="h-14 w-auto" 
          />
        </div>
      </section>

      {/* Headmaster */}
      <section id="headmaster" className="max-w-5xl mx-auto px-8 pt-16 pb-16">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[3px] text-xs mb-4 text-[var(--text-muted)]">THE FLAGSHIP PRODUCT</div>
          <h2 className="text-[64px] tracking-[-2.8px] leading-none font-medium mb-8">Headmaster</h2>
          <p className="text-2xl text-[var(--text-muted)] leading-tight">
            An agent that continues after you leave. It plans, delegates, remembers, and reports back — with the intelligence of a true orchestrator.
          </p>
        </div>
      </section>

      {/* Hermes & Paperclip — The Interfaces */}
      <section id="interfaces" className="max-w-6xl mx-auto px-8 py-20 border-b border-[var(--border)]">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#111111] text-[#F9F7F3] text-xs tracking-[2px] mb-4">THE EXPERIENCE</div>
          <h3 className="text-5xl md:text-[56px] tracking-[-2px] font-medium mb-4">Hermes & Paperclip.</h3>
          <p className="text-2xl text-[var(--text-muted)] max-w-2xl mx-auto">
            The command layer and the executive layer. Raw agent power meets beautiful oversight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Hermes */}
          <div className="group bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl overflow-hidden">
            <div className="relative">
              <img 
                src="/images/references/hermes.png" 
                alt="Hermes Agent terminal interface — powerful CLI with 80+ tools and skills" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]" 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
            <div className="p-9">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[11px] tracking-[2px] text-[#EAB308] font-medium">THE COMMAND LAYER</div>
              </div>
              <div className="text-3xl tracking-[-1.2px] font-medium mb-4">Hermes</div>
              <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-6">
                A terminal-first agent that gives you everything: browser control, code execution, file ops, delegation, cron, MCP, and 79+ skills out of the box. 
                The caduceus for a reason — it moves fast between worlds.
              </p>
              <div className="text-xs text-[var(--text-muted)]">CLI • Local-first • 80+ tools • Subagent orchestration • Works with Headmaster</div>
            </div>
          </div>

          {/* Paperclip */}
          <div className="group bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl overflow-hidden">
            <div className="relative">
              <img 
                src="/images/references/paperclip.png" 
                alt="Paperclip dashboard — CEO agent view with orchestration, charts, and task management" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]" 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
            <div className="p-9">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[11px] tracking-[2px] text-[#22C55E] font-medium">THE EXECUTIVE LAYER</div>
              </div>
              <div className="text-3xl tracking-[-1.2px] font-medium mb-4">Paperclip</div>
              <p className="text-[var(--text-muted)] text-[15px] leading-relaxed mb-6">
                The CEO dashboard for your agent workforce. Assign tasks, watch real-time runs, see priority charts, success rates, and the living heartbeat of work across your entire fleet. 
                One view for the orchestrator above the orchestrator.
              </p>
              <div className="text-xs text-[var(--text-muted)]">SaaS dashboard • Agent heartbeats • Issue tracking • Works with Hermes + Headmaster</div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-[var(--text-muted)] mt-8 max-w-md mx-auto">
          Both interfaces are designed for serious work — one for depth and power, one for oversight and command.
        </p>
      </section>

      {/* The Orchestrator */}
      <section id="orchestrator" className="border-y border-[var(--border)] bg-[var(--bg-elevated)] py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#111111] text-[#F9F7F3] text-xs tracking-widest mb-4">THE CORE</div>
            <h3 className="text-5xl tracking-[-1.8px] font-medium">One system. Real coordination.</h3>
            <p className="mt-4 text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Headmaster doesn't just answer — it orchestrates. It decomposes work, delegates intelligently, and keeps moving until the job is done.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center max-w-md">
              <p className="text-[17px] text-[var(--text-muted)]">
                The live demo below shows how tasks get assigned across specialists in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems + Interactive Orchestration */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="mb-12">
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">HOW IT THINKS</div>
          <h3 className="text-[46px] tracking-[-1.8px] font-medium">The orchestrator in action.</h3>
          <div className="inline-block mt-3 px-3 py-1 text-xs tracking-widest bg-[#111111] text-[#F9F7F3] rounded-full">LIVE DEMO — CLICK THE TASKS</div>
        </div>

        <OrchestrationVisualizer />

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {[
            { name: "Conductor", role: "Decides what to do and when to ask for help.", img: "mockups/82.jpg" },
            { name: "Faculty", role: "Calls in the right specialist agents for the job.", img: "mockups/84.jpg" },
            { name: "Board", role: "Turns chaos into clear, trackable work.", img: "mockups/79.jpg" },
          ].map((s, i) => (
            <motion.div 
              key={i} 
              className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img 
                src={`/images/generated/${s.img}`} 
                alt={s.name} 
                className="w-full h-[210px] object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              />
              <div className="p-8">
                <div className="font-medium text-2xl tracking-tight mb-3">{s.name}</div>
                <p className="text-[var(--text-muted)] leading-snug">{s.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fleet Visualizer */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="mb-8">
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">THE FLEET</div>
          <h3 className="text-[46px] tracking-[-1.8px] font-medium">See the orchestrator at scale.</h3>
        </div>
        
        <div className="grid md:grid-cols-5 gap-4">
          <motion.div 
            className="md:col-span-3 rounded-3xl overflow-hidden border border-[var(--border)] bg-black"
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <video 
              src="/images/generated/palantir-style-fleet-visualizer.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full"
            />
          </motion.div>
          <div className="md:col-span-2">
            <img 
              src="/images/generated/mockups/84.jpg" 
              alt="Headmaster Orchestration on MacBook" 
              className="rounded-3xl w-full h-full object-cover border border-[var(--border)]" 
            />
          </div>
        </div>
        <p className="text-center text-sm text-[var(--text-muted)] mt-4">Multiple orchestrators coordinating specialized agents across complex work.</p>
      </section>

      {/* Memento */}
      <section id="memento" className="bg-[var(--bg-elevated)] border-y border-[var(--border)] py-20">
        <div className="max-w-4xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-4">THE MEMORY LAYER</div>
            <h3 className="text-[52px] tracking-[-2px] font-medium mb-6">Memento</h3>
            <p className="text-2xl text-[var(--text-muted)] leading-tight mb-8">
              Memory that actually persists. Headmaster (and other tools) can finally remember what happened yesterday, last week, or three projects ago.
            </p>
            <div className="text-sm text-[var(--text-muted)]">Works with Headmaster, Claude Code, Codex, Kimi Code, and more coming soon.</div>
          </div>
          <div>
            <img src="/images/generated/mockups/85.jpg" alt="Memento memory layer mockup" className="rounded-3xl w-full" />
          </div>
        </div>
      </section>

      {/* Lens */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">THE FOCUS LAYER</div>
            <h3 className="text-[44px] tracking-[-1.6px] font-medium mb-5">Lens</h3>
            <p className="text-[21px] text-[var(--text-muted)] leading-tight">
              Cuts through noise. Tool outputs, logs, and long context are intelligently compressed before they reach the model — so the orchestrator stays sharp.
            </p>
          </div>
          <img src="/images/generated/mockups/86.jpg" alt="Lens focus layer mockup" className="rounded-3xl w-full" />
        </div>
      </section>



      {/* GCAP Labs */}
      <section className="border-y border-[var(--border)] py-16 bg-[var(--bg-elevated)]">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm tracking-[2px] text-[var(--text-muted)] mb-3">THE COMPANY</div>
            <h3 className="text-5xl tracking-[-1.8px] font-medium mb-6">GCAP Labs</h3>
            <p className="max-w-2xl text-[19px] text-[var(--text-muted)] leading-tight">
              We build the infrastructure for agents that can actually be trusted with real work. 
              Headmaster is our first major product.
            </p>
          </div>
          <img src="/images/generated/mockups/83.jpg" alt="Headmaster on MacBook Pro" className="rounded-3xl w-full" />
        </div>
      </section>

      {/* While You Were Away */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">THE PROMISE</div>
          <h3 className="text-[48px] tracking-[-1.8px] font-medium">While you were away.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl p-9">
            <div className="text-2xl tracking-tight font-medium mb-4">You closed your laptop at 6pm.</div>
            <p className="text-[var(--text-muted)] leading-relaxed">
              By morning, three complex research tasks were completed, summarized, and waiting in your preferred channel — with full provenance and next actions clearly laid out.
            </p>
          </div>
          <div className="space-y-4">
            <img src="/images/generated/mockups/82.jpg" alt="Headmaster on MacBook Pro" className="rounded-3xl w-full object-cover" />
            <img src="/images/generated/mockups/86.jpg" alt="Headmaster interface on laptop" className="rounded-3xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section id="early-access" className="max-w-2xl mx-auto px-8 py-20 border-t border-[var(--border)]">
        <div className="text-center mb-10">
          <h3 className="text-[42px] tracking-[-1.5px] font-medium mb-4">Ready when you are.</h3>
          <p className="text-[var(--text-muted)]">Limited spots for the first cohort of teams using Headmaster in production.</p>
        </div>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none" required />
              <input type="email" placeholder="Work email" className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none" required />
            </div>
            <input type="text" placeholder="Company or team" className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none" />
            <textarea placeholder="What are you hoping to achieve with autonomous agents?" rows={4} className="w-full rounded-3xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none resize-y" required></textarea>
            
            <button type="submit" className="w-full mt-2 py-4 rounded-2xl bg-[#111111] text-[#F9F7F3] text-lg font-medium hover:bg-black transition-all">
              Request early access
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl">✓</span>
            </div>
            <h4 className="text-3xl tracking-tight font-medium mb-3">Application received.</h4>
            <p className="text-[var(--text-muted)] max-w-md mx-auto">
              Thank you. Our team will review your application and reach out within 48 hours if there's a fit for this cohort.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="mt-8 text-sm underline text-[var(--text-muted)] hover:text-[#111111]"
            >
              Submit another application
            </button>
          </div>
        )}

        <p className="text-center text-xs text-[var(--text-muted)] mt-6 tracking-tight">We review every application personally.</p>
      </section>

      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© {new Date().getFullYear()} GCAP Labs.</div>
        <div className="flex gap-6">
          <a href="https://x.com" target="_blank" className="hover:text-[#111111]">X</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-[#111111]">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
