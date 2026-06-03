"use client";

import { CalendarClock, FileText, Bell, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

const SCHEDULED_ITEMS = [
  {
    icon: FileText,
    title: "Weekly reports",
    description: "Client status, project summaries, and team updates prepared before Monday morning.",
  },
  {
    icon: Bell,
    title: "Daily summaries",
    description: "Inbox digests, meeting briefs, and priority lists ready when the day starts.",
  },
  {
    icon: CheckCircle2,
    title: "Reminders & audits",
    description: "Follow-up nudges, compliance checks, and recurring review cycles on schedule.",
  },
  {
    icon: CalendarClock,
    title: "Parent updates",
    description: "School communications drafted for teacher review at the same time every week.",
  },
];

export default function ScheduledWork() {
  return (
    <section
      id="scheduled"
      data-chapter="scheduled"
      data-label="Scheduled"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="Scheduled Work"
        title="Work That Wakes Up On Schedule"
        body="Headmaster can prepare recurring work before anyone asks. Sensitive actions can still wait for approval."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-group>
        {SCHEDULED_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              data-reveal-item
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 transition hover:border-[var(--border-strong)]"
            >
              <Icon size={20} strokeWidth={1.8} className="mb-5 text-[var(--text-muted)]" />
              <h3 className="text-[17px] font-medium tracking-tight mb-2">{item.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6" data-reveal>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
          <div className="text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-3">School example</div>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
            Every Friday, Headmaster drafts parent updates for teacher review.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
          <div className="text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-3">Business example</div>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
            Every Monday, it prepares a client status update from the previous week's notes.
          </p>
        </div>
      </div>

      <div className="mt-14" data-reveal>
        <ProductShot
          src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/07-automations-schedules.png"
          alt="Automations page showing scheduled workflows and recurring tasks."
          aspect="aspect-[16/10]"
        />
      </div>
    </section>
  );
}
