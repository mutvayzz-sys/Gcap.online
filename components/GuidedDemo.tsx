"use client";

import { useState } from "react";
import { CheckCircle2, FileText, Database, Users, ShieldCheck, Clock } from "lucide-react";

const TABS = ["School", "Business", "Agency", "Technical Team"] as const;

type Tab = typeof TABS[number];

interface Step {
  num: number;
  title: string;
  detail: string;
}

const WORKFLOWS: Record<Tab, { title: string; steps: Step[] }> = {
  School: {
    title: "Prepare Grade 8 progress reports",
    steps: [
      { num: 1, title: "Loads context", detail: "Teacher notes, grades, attendance, previous report format" },
      { num: 2, title: "Recalls memory", detail: "Uses prior tone, school preferences, parent communication rules" },
      { num: 3, title: "Uses tools", detail: "Checks documents, sheets, templates, and approved sources" },
      { num: 4, title: "Delegates work", detail: "Drafting agent, review agent, formatting agent" },
      { num: 5, title: "Flags sensitive items", detail: "Concerns requiring teacher review are separated" },
      { num: 6, title: "Prepares output", detail: "Reports and parent-safe summaries are ready for approval" },
      { num: 7, title: "Waits for approval", detail: "Nothing is sent until a human approves it" },
    ],
  },
  Business: {
    title: "Weekly client operations summary",
    steps: [
      { num: 1, title: "Loads context", detail: "CRM data, previous summaries, client preferences" },
      { num: 2, title: "Recalls memory", detail: "Tone, KPI focus, escalation rules from past cycles" },
      { num: 3, title: "Uses tools", detail: "Pulls from sheets, email, calendar, support tickets" },
      { num: 4, title: "Delegates work", detail: "Analyst agent, writer agent, compiler agent" },
      { num: 5, title: "Flags sensitive items", detail: "Revenue or personnel items held for manager review" },
      { num: 6, title: "Prepares output", detail: "Clean PDF + email draft + action list" },
      { num: 7, title: "Waits for approval", detail: "Manager reviews before any client communication" },
    ],
  },
  Agency: {
    title: "Campaign performance & next steps report",
    steps: [
      { num: 1, title: "Loads context", detail: "Client brief, past campaigns, brand guidelines" },
      { num: 2, title: "Recalls memory", detail: "Successful structures, client feedback history" },
      { num: 3, title: "Uses tools", detail: "Ad platforms, analytics, creative assets, Slack" },
      { num: 4, title: "Delegates work", detail: "Researcher, analyst, copywriter, designer liaison" },
      { num: 5, title: "Flags sensitive items", detail: "Budget or legal notes separated for account lead" },
      { num: 6, title: "Prepares output", detail: "Presentation deck + recommended next actions" },
      { num: 7, title: "Waits for approval", detail: "Client-facing materials reviewed before delivery" },
    ],
  },
  "Technical Team": {
    title: "Release notes + post-mortem summary",
    steps: [
      { num: 1, title: "Loads context", detail: "Tickets, commits, incident logs, prior releases" },
      { num: 2, title: "Recalls memory", detail: "Team conventions, customer impact phrasing" },
      { num: 3, title: "Uses tools", detail: "Git, Jira, monitoring dashboards, docs" },
      { num: 4, title: "Delegates work", detail: "Changelog agent, risk reviewer, writer" },
      { num: 5, title: "Flags sensitive items", detail: "Security or breaking changes held for eng lead" },
      { num: 6, title: "Prepares output", detail: "Release notes + internal summary + action items" },
      { num: 7, title: "Waits for approval", detail: "Eng manager + PM sign-off before publishing" },
    ],
  },
};

export default function GuidedDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("School");
  const [approved, setApproved] = useState(false);

  const workflow = WORKFLOWS[activeTab];

  const handleApprove = () => {
    setApproved(true);
    setTimeout(() => setApproved(false), 2200);
  };

  return (
    <section
      id="how-it-works"
      data-chapter="how-it-works"
      data-label="How"
      className="max-w-[1280px] mx-auto px-8 py-20 border-b border-[var(--border)]"
    >
      <div className="mb-10">
        <div className="uppercase tracking-[3px] text-xs text-[var(--text-muted)] mb-3">Guided Workflow</div>
        <h2 className="text-[36px] md:text-[52px] tracking-[-1.6px] md:tracking-[-2.4px] font-medium leading-none mb-4">
          See Headmaster run a workflow
        </h2>
        <p className="text-[18px] md:text-[20px] text-[var(--text-muted)] max-w-3xl">
          A guided look at how Headmaster coordinates memory, tools, agents, and approvals inside an organization.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-[var(--border)] pb-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setApproved(false);
            }}
            className={`px-5 py-1.5 text-sm rounded-full border transition ${
              activeTab === tab
                ? "bg-[#111111] text-[#F9F7F3] border-[#111111]"
                : "border-[var(--border)] hover:bg-white text-[var(--text)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-sm uppercase tracking-widest text-[var(--text-muted)] mb-2">
        {workflow.title}
      </div>

      {/* Theater layout: tabs info / timeline / output */}
      <div className="grid lg:grid-cols-[240px,1fr,320px] gap-6">
        {/* Left: context summary */}
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 text-sm self-start">
          <div className="font-medium mb-3 tracking-tight">Workflow context</div>
          <ul className="space-y-2 text-[var(--text-muted)]">
            <li className="flex gap-2"><FileText size={15} className="mt-0.5" /> Organization memory + preferences</li>
            <li className="flex gap-2"><Database size={15} className="mt-0.5" /> Approved tools and data sources</li>
            <li className="flex gap-2"><Users size={15} className="mt-0.5" /> Role-based delegation rules</li>
            <li className="flex gap-2"><ShieldCheck size={15} className="mt-0.5" /> Human approval gates defined</li>
          </ul>
        </div>

        {/* Center: step timeline */}
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
          <div className="text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-4">Execution steps</div>
          <div className="space-y-5">
            {workflow.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-[#111111] text-[#F9F7F3] flex-shrink-0 flex items-center justify-center text-xs font-semibold">
                  {step.num}
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="font-medium tracking-tight">{step.title}</div>
                  <div className="text-[15px] text-[var(--text-muted)] mt-0.5 leading-snug">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: output / approval preview */}
        <div className="rounded-2xl border border-[var(--border)] bg-white p-5 flex flex-col">
          <div className="text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-3">Live output preview</div>

          <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm">
            <div className="uppercase text-[10px] tracking-widest text-[var(--text-muted)] mb-2">Ready for review</div>
            <div className="font-medium mb-2">Grade 8 Progress Reports — Term 2</div>
            <div className="text-[var(--text-muted)] text-[13px] leading-relaxed">
              4 reports compiled • Personalized comments drafted • Figures verified against source • Parent summaries prepared
            </div>

            <div className="mt-4 pt-3 border-t text-[12px] flex items-center gap-2 text-[var(--text-muted)]">
              <Clock size={13} /> Generated in 3m 41s using memory from 14 prior cycles
            </div>
          </div>

          <div className="mt-4">
            {!approved ? (
              <button
                onClick={handleApprove}
                className="w-full py-3 rounded-2xl bg-[#111111] text-[#F9F7F3] text-sm font-medium hover:bg-black flex items-center justify-center gap-2"
              >
                <ShieldCheck size={16} /> Approve &amp; Release
              </button>
            ) : (
              <div className="w-full py-3 rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle2 size={16} /> Approved. Reports sent.
              </div>
            )}
            <div className="text-center text-[11px] text-[var(--text-muted)] mt-2">
              Nothing leaves the system without explicit human approval
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
