"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import ProductShot from "./ProductShot";

const TABS = ["School", "Business", "Agency", "Technical Team"] as const;
type Tab = typeof TABS[number];

interface Step {
  title: string;
  detail: string;
}

interface Workflow {
  prompt: string;
  steps: Step[];
  output: {
    title: string;
    summary: string;
    meta: string;
  };
}

const WORKFLOWS: Record<Tab, Workflow> = {
  School: {
    prompt: "Prepare Grade 8 progress reports for parent review",
    steps: [
      { title: "Loads organization context", detail: "Teacher notes, grades, attendance, and the preferred report format from last term" },
      { title: "Recalls memory", detail: "Applies prior tone rules, school communication style, and parent-facing language guidelines" },
      { title: "Uses approved tools", detail: "Reads from documents, spreadsheets, templates, and approved data sources" },
      { title: "Delegates to specialist agents", detail: "Drafting agent writes comments, review agent checks language, formatting agent prepares the final pack" },
      { title: "Flags items for review", detail: "Concerns about individual students are held separately for teacher attention" },
      { title: "Waits for approval", detail: "Reports and parent summaries are ready — nothing is sent until a teacher or admin approves" },
    ],
    output: {
      title: "Grade 8 Progress Reports — Term 2",
      summary: "28 reports compiled · Personalized comments drafted · Figures verified · Parent summaries prepared",
      meta: "Ready for teacher review · Memory from 14 prior cycles used",
    },
  },
  Business: {
    prompt: "Prepare the weekly client operations summary",
    steps: [
      { title: "Loads organization context", detail: "CRM data, project notes, previous summaries, and client preferences" },
      { title: "Recalls memory", detail: "Applies the right tone, KPI focus, and escalation rules from past reporting cycles" },
      { title: "Uses approved tools", detail: "Pulls from spreadsheets, email threads, calendar events, and support ticket history" },
      { title: "Delegates to specialist agents", detail: "Analyst agent compiles data, writer agent drafts the narrative, compiler agent assembles the final report" },
      { title: "Flags items for review", detail: "Revenue figures and personnel notes are held for manager sign-off before inclusion" },
      { title: "Waits for approval", detail: "Clean report draft is ready — delivery waits for manager approval" },
    ],
    output: {
      title: "Weekly Client Operations Summary — W23",
      summary: "6 client accounts covered · KPIs compiled · Action items extracted · Email draft prepared",
      meta: "Ready for manager review · Formatted to match prior reports",
    },
  },
  Agency: {
    prompt: "Prepare the campaign performance report and next steps",
    steps: [
      { title: "Loads organization context", detail: "Client brief, past campaign structures, brand guidelines, and performance benchmarks" },
      { title: "Recalls memory", detail: "Uses successful report formats and incorporates previous client feedback history" },
      { title: "Uses approved tools", detail: "Pulls from ad platform data, analytics, creative asset files, and internal notes" },
      { title: "Delegates to specialist agents", detail: "Research agent pulls data, analyst agent interprets results, writer agent drafts the narrative" },
      { title: "Flags items for review", detail: "Budget variances and legal compliance notes are separated for account lead review" },
      { title: "Waits for approval", detail: "Presentation and recommendations are ready — client-facing materials reviewed before delivery" },
    ],
    output: {
      title: "Campaign Report — Q2 Performance",
      summary: "3 campaigns analyzed · Performance vs benchmark included · Next steps recommended · Deck prepared",
      meta: "Ready for account lead review · Formatted to client brand guidelines",
    },
  },
  "Technical Team": {
    prompt: "Prepare release notes and post-mortem summary",
    steps: [
      { title: "Loads organization context", detail: "Tickets, commits, incident logs, and notes from prior releases" },
      { title: "Recalls memory", detail: "Applies team conventions and preferred phrasing for customer-facing impact statements" },
      { title: "Uses approved tools", detail: "Reads from version control, project tracking, monitoring dashboards, and internal docs" },
      { title: "Delegates to specialist agents", detail: "Changelog agent compiles changes, risk reviewer assesses impact, writer drafts customer-facing notes" },
      { title: "Flags items for review", detail: "Security disclosures and breaking changes are held for engineering lead approval" },
      { title: "Waits for approval", detail: "Release notes and internal summary are ready — publishing waits for eng manager and PM sign-off" },
    ],
    output: {
      title: "v2.4.1 Release Notes + Post-Mortem",
      summary: "47 commits summarized · 2 incidents documented · Breaking changes flagged · Customer notes drafted",
      meta: "Ready for eng lead review · Internal and external versions prepared",
    },
  },
};

export default function GuidedDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("School");
  const [approved, setApproved] = useState(false);

  const workflow = WORKFLOWS[activeTab];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setApproved(false);
  };

  const handleApprove = () => {
    setApproved(true);
    setTimeout(() => setApproved(false), 2400);
  };

  return (
    <section
      id="how-it-works"
      data-chapter="how-it-works"
      data-label="How it Works"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      {/* Header */}
      <div className="mb-12 max-w-3xl" data-reveal>
        <div className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)] mb-4">
          Guided Workflow
        </div>
        <h2 className="text-[36px] md:text-[52px] tracking-[-1.4px] md:tracking-[-2.2px] font-medium leading-[1.05] mb-5">
          See Headmaster run a workflow
        </h2>
        <p className="text-[18px] md:text-[20px] text-[var(--text-muted)] leading-relaxed">
          Pick an organization type and see how Headmaster coordinates memory, tools, specialist agents, and approvals to complete real work.
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-5 py-2 text-[14px] font-medium rounded-lg border transition-all ${
              activeTab === tab
                ? "bg-[#111111] text-[#F9F7F3] border-[#111111]"
                : "border-[var(--border)] text-[var(--text)] hover:bg-white hover:border-[var(--border-strong)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Prompt */}
      <div className="rounded-2xl border border-[var(--border)] bg-white px-6 py-4 mb-6 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
        <span className="text-[15px] font-medium tracking-tight">{workflow.prompt}</span>
      </div>

      {/* Main layout: steps + output */}
      <div className="grid lg:grid-cols-[1fr_380px] gap-5">
        {/* Left: steps */}
        <div className="rounded-2xl border border-[var(--border)] bg-white p-7">
          <div className="text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-6">How Headmaster handles it</div>
          <div className="space-y-6">
            {workflow.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#111111] text-[#F9F7F3] flex items-center justify-center text-xs font-semibold">
                    {idx + 1}
                  </div>
                  {idx < workflow.steps.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] mt-2 min-h-[20px]" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="font-medium tracking-tight text-[15px] mb-1">{step.title}</div>
                  <div className="text-[14px] text-[var(--text-muted)] leading-relaxed">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: output + approval */}
        <div className="rounded-2xl border border-[var(--border)] bg-white p-6 flex flex-col gap-5">
          <div className="text-xs tracking-[2px] uppercase text-[var(--text-muted)]">Output ready for review</div>

          <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
            <div className="text-[10px] tracking-[2px] uppercase text-[var(--text-muted)] mb-2">Prepared</div>
            <div className="font-medium tracking-tight mb-3 leading-snug">{workflow.output.title}</div>
            <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{workflow.output.summary}</p>
            <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-[12px] text-[var(--text-muted)]">
              <Clock size={12} />
              {workflow.output.meta}
            </div>
          </div>

          <div>
            {!approved ? (
              <button
                onClick={handleApprove}
                className="w-full py-3 rounded-xl bg-[#111111] text-[#F9F7F3] text-[14px] font-medium hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                <ShieldCheck size={15} />
                Approve &amp; Release
              </button>
            ) : (
              <div className="w-full py-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-[14px] font-medium flex items-center justify-center gap-2">
                <CheckCircle2 size={15} />
                Approved. Output released.
              </div>
            )}
            <p className="text-center text-[11px] text-[var(--text-muted)] mt-3 leading-relaxed">
              Nothing leaves the workspace without explicit human approval
            </p>
          </div>
        </div>
      </div>

      {/* Large product showcase */}
      <div className="mt-14" data-reveal>
        <ProductShot
          src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/12-guided-workflow-run.png"
          alt="Guided workflow run showing steps, context, tools, output preview, and approval checkpoint."
          aspect="aspect-[16/10]"
        />
      </div>
    </section>
  );
}
