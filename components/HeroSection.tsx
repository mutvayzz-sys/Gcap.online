import { ArrowRight, Bot, Brain, CalendarClock, CheckCircle2, KeyRound, Network, PlugZap, ShieldCheck, Workflow } from "lucide-react";

const nodes = [
  { label: "Memory", Icon: Brain },
  { label: "Skills", Icon: Workflow },
  { label: "Automations", Icon: CalendarClock },
  { label: "Tools", Icon: PlugZap },
  { label: "Gateways", Icon: Network },
  { label: "Agents", Icon: Bot },
  { label: "Approvals", Icon: ShieldCheck },
];

export default function HeroSection() {
  return (
    <section id="product" className="relative overflow-hidden px-8 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[520px] max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),rgba(248,247,244,0)_66%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm text-[var(--text-muted)] shadow-[var(--shadow-subtle)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Persistent AI agents for real organizational work
          </div>
          <h1 className="max-w-4xl text-[56px] font-medium leading-[0.95] tracking-[-0.055em] md:text-[92px]">
            Your organization’s persistent AI workforce.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[var(--text-muted)] md:text-2xl">
            Headmaster combines memory, skills, automations, tools, messaging, and specialist agents into one private command layer for real work.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:waitlist@gcap.online?subject=Headmaster Demo Request" className="inline-flex items-center justify-center rounded-full bg-[#111] px-8 py-4 text-lg font-medium text-[#F9F7F3] transition hover:bg-black">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-8 py-4 text-lg font-medium text-[#111] transition hover:border-[#111]">
              Explore Features
            </a>
          </div>
        </div>
        <div className="relative rounded-[32px] border border-white/10 bg-[#0D0D0D] p-4 text-white shadow-2xl">
          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-white/45">Agent command layer</div>
                <div className="mt-1 text-xl font-medium">Headmaster Workspace</div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Private</div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {nodes.map(({ label, Icon }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-white/[0.06]">
                  <Icon className="mb-4 h-5 w-5 text-blue-300" />
                  <div className="text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-100"><KeyRound className="h-4 w-4" /> Approval queue</div>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center justify-between rounded-xl bg-black/25 px-3 py-2"><span>Parent update drafts</span><CheckCircle2 className="h-4 w-4 text-emerald-300" /></div>
                <div className="flex items-center justify-between rounded-xl bg-black/25 px-3 py-2"><span>Weekly ops report</span><span className="text-amber-200">Review</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
