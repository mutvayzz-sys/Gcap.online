import { ArrowRight, CheckCircle2, Layers3, LockKeyhole, MessageSquare, Network, ShieldCheck, Sparkles } from "lucide-react";
import { deploymentCapabilities } from "@/data/deploymentCapabilities";
import { features } from "@/data/features";
import { howItWorksSteps } from "@/data/howItWorks";
import { productPillars } from "@/data/productPillars";
import { schoolWorkflows } from "@/data/schoolWorkflows";
import { trustControls } from "@/data/trustControls";
import { useCases } from "@/data/useCases";

type ScrollHandler = (id: string) => void;

export function HeroSection({ onScroll }: { onScroll: ScrollHandler }) {
  return (
    <section id="product" data-chapter="top" data-label="Product" data-theme="dark" className="relative min-h-[100dvh] overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.13),transparent_24%),linear-gradient(180deg,#050505_0%,#111_72%,#050505_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto grid min-h-[100dvh] max-w-6xl items-center gap-14 px-8 py-32 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
            <Sparkles size={14} /> Persistent AI workforce
          </div>
          <h1 className="max-w-4xl text-[48px] font-semibold leading-[0.95] tracking-[-2.5px] sm:text-[64px] md:text-[88px] md:tracking-[-4px]">
            Your organization’s persistent AI workforce.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-snug tracking-[-0.4px] text-white/72 md:text-2xl">
            Headmaster combines memory, skills, automations, tools, messaging, and specialist agents into one private command layer for real work.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => onScroll("contact")} className="rounded-full bg-white px-9 py-4 text-lg font-medium text-black shadow-2xl transition hover:bg-white/90" data-magnet>
              Book a Demo
            </button>
            <a href="#features" className="rounded-full border border-white/30 px-9 py-4 text-center text-lg font-medium text-white transition hover:bg-white/10">
              Explore Features
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">Agent command layer</div>
                <div className="mt-1 text-lg font-medium">Headmaster Workspace</div>
              </div>
              <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Live</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Memory", "Policy decisions, project history, preferences"],
                ["Skills", "Reusable report and communication workflows"],
                ["Automations", "Weekly summaries and morning briefings"],
                ["Tools", "Docs, APIs, calendars, browser, files"],
                ["Gateways", "Dashboard, email, chat, terminal"],
                ["Approvals", "Review required before sensitive actions"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={15} className="text-blue-300" />{title}</div>
                  <p className="text-sm leading-relaxed text-white/55">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium"><Network size={15} className="text-blue-300" />Specialist delegation</div>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px] uppercase tracking-[0.14em] text-white/50">
                {['Research', 'Writing', 'Analysis', 'Ops'].map((agent) => <div key={agent} className="rounded-xl bg-white/[0.06] px-2 py-3">{agent}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductPillars() {
  return (
    <section id="pillars" className="mx-auto max-w-6xl px-8 py-24">
      <SectionIntro eyebrow="Product pillars" title="What Headmaster Is Built On" description="A persistent operating layer for memory, reusable workflows, connected tools, specialist delegation, and human review." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {productPillars.map(({ title, description, Icon }) => (
          <article key={title} className="group rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#111]/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.07)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111] text-white"><Icon size={21} /></div>
            <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-[var(--border)] bg-[var(--bg-elevated)] py-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionIntro eyebrow="How it works" title="How Headmaster Works" description="Work can start from a prompt, a button, a recurring schedule, or a message from your team." />
        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {howItWorksSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-3xl border border-[var(--border)] bg-white p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#111] text-sm font-semibold text-white">{index + 1}</div>
              <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-8 py-24">
      <SectionIntro eyebrow="Use cases" title="Deploy Headmaster Where Work Repeats" description="Headmaster adapts to the workflows of different organizations without changing the core system." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <article key={useCase.title} className="rounded-3xl border border-[var(--border)] bg-white p-7">
            <h3 className="text-2xl font-medium tracking-tight">{useCase.title}</h3>
            <p className="mt-3 leading-relaxed text-[var(--text-muted)]">{useCase.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DeploymentSection() {
  return (
    <section id="deployments" className="border-y border-[var(--border)] bg-[#111] py-24 text-white">
      <div className="mx-auto max-w-6xl px-8">
        <SectionIntro eyebrow="Configured deployments" title="Configured Around Your Organization" description="Every deployment can include custom workflows, private memory, approved tools, branded interfaces, role permissions, and human review rules." dark />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deploymentCapabilities.map((capability) => (
            <article key={capability.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-7 backdrop-blur">
              <LockKeyhole className="mb-5 text-blue-200" size={22} />
              <h3 className="text-2xl font-medium tracking-tight">{capability.title}</h3>
              <p className="mt-3 leading-relaxed text-white/62">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureMatrix() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-8 py-24">
      <SectionIntro eyebrow="Feature matrix" title="More Than a Chat Interface" description="The operating layer is designed for persistent work, not isolated answers." />
      <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[#0d0d0d] p-3 text-white shadow-2xl">
        {features.map((feature, index) => (
          <div key={feature.capability} className={`grid gap-3 rounded-3xl p-6 md:grid-cols-[0.38fr_0.62fr] ${index % 2 === 0 ? "bg-white/[0.055]" : ""}`}>
            <div className="flex items-center gap-3 font-medium tracking-tight"><Layers3 size={18} className="text-blue-200" />{feature.capability}</div>
            <div className="text-white/64">{feature.meaning}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SchoolExample() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-elevated)] py-24">
      <div className="mx-auto max-w-6xl px-8">
        <SectionIntro eyebrow="Example deployment" title="Example Deployment: Headmaster for Schools" description="A school can deploy Headmaster to support teachers and administrators with reports, parent communication, lesson materials, student summaries, and recurring academic workflows." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {schoolWorkflows.map((workflow) => (
            <article key={workflow.title} className="rounded-3xl border border-[var(--border)] bg-white p-6">
              <MessageSquare className="mb-5 text-[#111]" size={21} />
              <h3 className="text-xl font-medium tracking-tight">{workflow.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{workflow.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustControl() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24">
      <SectionIntro eyebrow="Trust and control" title="Built for Control, Not Blind Automation" description="Headmaster is designed to work through permissions, review steps, and approved tools so organizations stay in control." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {trustControls.map((control) => (
          <article key={control.title} className="rounded-3xl border border-[var(--border)] bg-white p-6">
            <ShieldCheck className="mb-5 text-[#111]" size={21} />
            <h3 className="text-xl font-medium tracking-tight">{control.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{control.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA({ onScroll }: { onScroll: ScrollHandler }) {
  return (
    <section id="contact" data-chapter="contact" data-label="Contact" className="border-t border-[var(--border)] bg-[#050505] px-8 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-[42px] font-medium leading-tight tracking-[-1.8px] md:text-[68px] md:tracking-[-3px]">Deploy Headmaster inside your organization.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-snug text-white/64">Start with one workflow, connect the right tools, and let your AI workforce learn from real operations.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:waitlist@gcap.online?subject=Book%20a%20Headmaster%20Demo" className="rounded-full bg-white px-9 py-4 text-lg font-medium text-black transition hover:bg-white/90">Book a Demo</a>
          <button onClick={() => onScroll("contact-form")} className="rounded-full border border-white/25 px-9 py-4 text-lg font-medium transition hover:bg-white/10">Discuss a Deployment <ArrowRight className="inline" size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, description, dark = false }: { eyebrow: string; title: string; description: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <div className={`mb-4 text-xs uppercase tracking-[0.24em] ${dark ? "text-white/45" : "text-[var(--text-muted)]"}`}>{eyebrow}</div>
      <h2 className="text-[36px] font-medium leading-tight tracking-[-1.5px] md:text-[56px] md:tracking-[-2.2px]">{title}</h2>
      <p className={`mt-5 text-xl leading-snug ${dark ? "text-white/62" : "text-[var(--text-muted)]"}`}>{description}</p>
    </div>
  );
}
