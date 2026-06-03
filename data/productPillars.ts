import type { LucideIcon } from "lucide-react";
import { Archive, Bot, CalendarClock, GitBranch, KeyRound, Network, ShieldCheck } from "lucide-react";

export interface ProductPillar {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const productPillars: ProductPillar[] = [
  {
    title: "Memory",
    description: "Headmaster remembers your organization’s context, decisions, documents, workflows, and preferences across sessions.",
    Icon: Archive,
  },
  {
    title: "Skills",
    description: "Repeated workflows become reusable procedures, so the system improves instead of starting from zero every time.",
    Icon: Bot,
  },
  {
    title: "Automations",
    description: "Daily reports, weekly summaries, reminders, audits, and recurring admin tasks can run on schedule.",
    Icon: CalendarClock,
  },
  {
    title: "Tools",
    description: "Connect files, browsers, APIs, databases, documents, internal systems, and third-party platforms.",
    Icon: GitBranch,
  },
  {
    title: "Gateways",
    description: "Reach your agents from a dashboard, email, chat apps, or terminal while keeping work continuous.",
    Icon: Network,
  },
  {
    title: "Delegation",
    description: "Split work across specialist agents, then bring the result back into one reviewed output.",
    Icon: KeyRound,
  },
  {
    title: "Approvals",
    description: "Sensitive actions can pause for human review before emails, edits, reports, or external actions are sent.",
    Icon: ShieldCheck,
  },
];
