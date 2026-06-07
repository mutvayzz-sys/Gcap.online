"use client";

import { Brain, Wrench, BookOpen, CalendarClock, RadioTower, UsersRound, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SYSTEM_ITEMS = [
  {
    icon: Brain,
    title: "Memory",
    description: "Remembers your organization's context, decisions, formats, and preferences across sessions.",
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Connects to approved files, browsers, APIs, documents, and systems to do real work.",
  },
  {
    icon: BookOpen,
    title: "Skills",
    description: "Repeated workflows become reusable playbooks, so work gets faster the second time.",
  },
  {
    icon: CalendarClock,
    title: "Automations",
    description: "Runs recurring reports, summaries, reminders, and scheduled drafts without manual triggers.",
  },
  {
    icon: RadioTower,
    title: "Channels",
    description: "Reach Headmaster from the dashboard, email, Slack, WhatsApp, and other approved channels.",
  },
  {
    icon: UsersRound,
    title: "Specialist Agents",
    description: "Splits work across focused agents — research, writing, checking, formatting — then unifies the result.",
  },
  {
    icon: ShieldCheck,
    title: "Approvals",
    description: "Sensitive actions pause for human review before anything is sent, changed, or published.",
  },
];

export default function SystemBehind() {
  return (
    <section
      id="system"
      data-chapter="system"
      data-label="System"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="The System"
        title="Ask it. It runs."
        body="Headmaster is a connected work layer where memory, tools, channels, automations, specialist agents, and approvals operate together."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
        {SYSTEM_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              data-reveal-item
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-5">
                <Icon size={19} strokeWidth={1.8} />
              </div>
              <h3 className="text-[20px] font-medium tracking-tight mb-2">{item.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
