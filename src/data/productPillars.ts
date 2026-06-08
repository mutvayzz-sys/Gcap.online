export interface ProductPillar {
  title: string;
  description: string;
}

export const productPillars: readonly ProductPillar[] = [
  {
    title: "Memory",
    description:
      "Headmaster keeps a persistent record of workspace context, approved formats, decisions, documents, and user preferences. Memory can be backed by pluggable providers, so teams can use managed storage or bring their own retrieval layer. Agents start new work with the right context already loaded instead of asking teams to re-brief every run.",
  },
  {
    title: "Skills",
    description: "Repeated workflows become reusable procedures with named steps, preferred tools, and approval rules. Headmaster stores the way a team wants recurring work handled and applies that procedure consistently — the same format, the same review checkpoint, every time. The result is reliability across reports, summaries, updates, and operational checklists.",
  },
  {
    title: "Automations",
    description:
      "Scheduled triggers can start daily reports, weekly summaries, reminders, audits, and recurring admin work without a new prompt. Runs can be triggered by time, workspace events, or operator commands. High-stakes outputs still stop at the approval queue before anything leaves the workspace.",
  },
  {
    title: "Tools",
    description:
      "Headmaster connects to files, browsers, APIs, databases, documents, internal systems, and third-party platforms through permissioned tool access. Each workflow receives only the tools it needs, and every call is recorded for review. Teams get broad operational reach without handing agents unrestricted access.",
  },
  {
    title: "Channels",
    description:
      "Reach Headmaster from the dashboard, email, chat apps, terminal, or API while the underlying work stays continuous. A request can start in one channel, continue in another, and still use the same memory, permissions, and approval policy. Channels are entry points into one persistent workspace rather than separate bots.",
  },
  {
    title: "Delegation",
    description:
      "Complex requests split into specialist agent profiles for research, writing, analysis, operations, or code. Each subagent can receive its own tools, model route, and context window, then report back to a parent agent. Headmaster assembles the work into one review-ready output instead of returning disconnected fragments.",
  },
  {
    title: "Approvals",
    description:
      "Sensitive actions pause for human review before emails, edits, reports, data writes, or external actions are released. Approvers can approve, reject, edit, or route work for a second review from a centralized queue. The decision and operator edits are logged with the run so teams can reconstruct exactly what happened.",
  },
] as const;
