import {
  Brain, Building, CalendarClock, CheckCircle2, Fingerprint, GitBranch,
  KeyRound, Library, LockKeyhole, MailCheck, Network, PenLine, RadioTower,
  ShieldCheck, SlidersHorizontal, Sparkles, TableProperties, TimerReset, Workflow,
  Wrench,
} from "lucide-react";
import { deploymentCapabilities } from "@/src/data/deploymentCapabilities";
import { features } from "@/src/data/features";
import { productPillars } from "@/src/data/productPillars";
import { schoolWorkflows } from "@/src/data/schoolWorkflows";
import { trustControls } from "@/src/data/trustControls";

const pillarIcons = [Brain, Library, CalendarClock, Wrench, RadioTower, GitBranch, CheckCircle2];
const deploymentIcons = [LockKeyhole, Workflow, KeyRound, MailCheck, Network, Fingerprint];
const schoolIcons = [MailCheck, TableProperties, PenLine, Building, ShieldCheck];
const trustIcons = [CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset];

function SectionHeader({ eyebrow, title, body, centered = false }: { eyebrow: string; title: string; body?: string; centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto" : ""}`} data-reveal>
      <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">{eyebrow}</div>
      <h2 className="text-[30px] md:text-[44px] tracking-[-1.2px] md:tracking-[-1.8px] font-medium mb-4 leading-tight">
        {title}
      </h2>
      {body && <p className={`text-[17px] md:text-[19px] text-[var(--text-muted)] leading-relaxed ${centered ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>{body}</p>}
    </div>
  );
}

export function ProductPillars() {
  return (
    <section id="product" data-chapter="product" data-label="Product" className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]">
      <SectionHeader
        eyebrow="The Product"
        title="What Headmaster Is Built On"
        body="Headmaster is a persistent AI workforce layer for organizations: a private command layer that remembers, learns, schedules, connects, delegates, and waits for review where it matters."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
        {productPillars.map((pillar, i) => {
          const Icon = pillarIcons[i];
          return (
            <div key={pillar.title} data-reveal-item className="group rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 min-h-[245px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
              <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-[1.04]" aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-[23px] font-medium tracking-tight mb-3">{pillar.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function DeploymentSection() {
  return (
    <section id="deployments" data-chapter="deploy" data-label="Deployments" className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]">
      <SectionHeader
        eyebrow="Configured Deployments"
        title="Configured Around Your Organization"
        body="Every deployment can include custom workflows, private memory, approved tools, branded interfaces, role permissions, and human review rules."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
        {deploymentCapabilities.map((capability, i) => {
          const Icon = deploymentIcons[i];
          return (
            <div key={capability.title} data-reveal-item className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
              <Icon className="mb-6 text-[var(--text)]" size={24} strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-xl font-medium tracking-tight mb-3">{capability.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{capability.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function FeatureMatrix() {
  return (
    <section id="features" data-chapter="features" data-label="Features" className="bg-[#0D0D0D] text-[#F9F7F3] py-24 border-b border-black">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          eyebrow="Feature Matrix"
          title="More Than a Chat Interface"
          body="The visible interface is only the front door. The product layer underneath gives organizations memory, permissions, automation, tool access, and reviewable agent work."
        />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.25)]" data-reveal>
          <div className="grid gap-3">
            {features.map((feature) => (
              <div key={feature.capability} className="grid md:grid-cols-[0.75fr_1.25fr] gap-4 rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-5">
                <div className="font-medium tracking-tight text-white">{feature.capability}</div>
                <div className="text-white/60 leading-relaxed">{feature.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SchoolExample() {
  return (
    <section id="schools" className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]">
      <SectionHeader
        eyebrow="Example Deployment"
        title="Example Deployment: Headmaster for Schools"
        body="A school can deploy Headmaster to support teachers and administrators with reports, parent communication, lesson materials, student summaries, and recurring academic workflows."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" data-reveal-group>
        {schoolWorkflows.map((workflow, i) => {
          const Icon = schoolIcons[i];
          return (
            <div key={workflow.title} data-reveal-item className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <Icon size={22} strokeWidth={1.7} className="mb-6" aria-hidden="true" />
              <h3 className="text-lg font-medium tracking-tight mb-3 leading-tight">{workflow.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{workflow.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function TrustControl() {
  return (
    <section id="control" className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-24">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          eyebrow="Trust & Control"
          title="Built for Control, Not Blind Automation"
          body="Headmaster is designed to work through permissions, review steps, and approved tools so organizations stay in control."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" data-reveal-group>
          {trustControls.map((control, i) => {
            const Icon = trustIcons[i];
            return (
              <div key={control.title} data-reveal-item className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6">
                <Icon size={22} strokeWidth={1.7} className="mb-6" aria-hidden="true" />
                <h3 className="text-lg font-medium tracking-tight mb-3 leading-tight">{control.title}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{control.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HeroCommandCenter() {
  const nodes = ["Memory", "Skills", "Automations", "Tools", "Gateways", "Agents", "Approvals"];
  return (
    <div className="relative mx-auto w-full max-w-[520px] rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur" aria-hidden="true">
      <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="text-[10px] tracking-[2px] uppercase text-white/45">Command Layer</div>
            <div className="mt-1 text-lg font-medium tracking-tight text-white">Headmaster Ops</div>
          </div>
          <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">Live</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {nodes.map((node, i) => (
            <div key={node} className={`rounded-2xl border border-white/10 bg-white/[0.055] p-4 ${i === 6 ? "col-span-2" : ""}`}>
              <div className="mb-3 flex items-center gap-2 text-white/70">
                <Sparkles size={14} />
                <span className="text-sm font-medium">{node}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-white/70" style={{ width: `${52 + i * 6}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left text-xs leading-relaxed text-white/55">
          Approval queue · 3 drafts ready · weekly report scheduled · school workspace isolated
        </div>
      </div>
    </div>
  );
}

export function FinalCTA({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="contact" data-chapter="contact" data-label="Contact" className="max-w-4xl mx-auto px-8 py-24 text-center">
      <div data-reveal>
        <h2 className="text-[36px] md:text-[58px] tracking-[-1.6px] md:tracking-[-2.6px] font-medium mb-6 leading-tight">
          Deploy Headmaster inside your organization.
        </h2>
        <p className="text-[19px] md:text-[22px] text-[var(--text-muted)] leading-snug mb-10 max-w-2xl mx-auto">
          Start with one workflow, connect the right tools, and let your AI workforce learn from real operations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={onDemo} data-magnet className="px-10 py-4 rounded-full bg-[#111111] text-[#F9F7F3] text-lg font-medium hover:bg-black transition-all">
            Book a Demo
          </button>
          <button onClick={onDemo} className="px-10 py-4 rounded-full border border-[var(--border-strong)] text-lg hover:bg-[var(--bg-elevated)] transition-all">
            Discuss a Deployment
          </button>
        </div>
      </div>
    </section>
  );
}
