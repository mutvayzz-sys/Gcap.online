export interface ProductScreenshot {
  id: string;
  title: string;
  eyebrow: string;
  src: string;
  alt: string;
  description: string;
  bullets: readonly string[];
}

export const productScreenshots: readonly ProductScreenshot[] = [
  {
    id: "dashboard",
    eyebrow: "Command Center",
    title: "See work, approvals, memory, and automation status in one place.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png",
    alt: "Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status.",
    description:
      "The dashboard gives teams a shared view of what Headmaster is doing, what needs attention, and which workflows are active across the workspace.",
    bullets: ["Active runs and status", "Approvals waiting for review", "Memory and automation signals"],
  },
  {
    id: "chat",
    eyebrow: "Ask Headmaster",
    title: "Start in plain language, then let the system assemble the work.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/02-chat-ask-headmaster.png",
    alt: "Headmaster chat view generating a product launch plan from workspace context.",
    description:
      "Chat is the front door. Headmaster can load context, use approved tools, delegate to agents, and prepare the next artifact for review.",
    bullets: ["Workspace-aware requests", "Context-rich drafts", "Human review before release"],
  },
  {
    id: "workflows",
    eyebrow: "Workflows / Skills",
    title: "Reusable playbooks turn repeated work into repeatable execution.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/08-workflows-skills-library.png",
    alt: "Workflows page showing reusable skills and workflow playbooks.",
    description:
      "Teams can package recurring work into skills and workflows so Headmaster does not start from scratch every time.",
    bullets: ["Approved workflow steps", "Reusable skills", "Playbooks for recurring work"],
  },
  {
    id: "guided-run",
    eyebrow: "Guided Workflow Run",
    title: "Follow a workflow from context to tools, output, and approval.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/12-guided-workflow-run.png",
    alt: "Guided workflow run showing steps, context, tools, output preview, and approval checkpoint.",
    description:
      "Guided runs make execution visible: inputs, steps, tools, draft output, and approval checkpoints are structured instead of hidden.",
    bullets: ["Visible workflow steps", "Tool and context trace", "Approval checkpoint"],
  },
  {
    id: "memory",
    eyebrow: "Memory",
    title: "Keep organizational context available across sessions and workflows.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/06-memory-providers.png",
    alt: "Memory page showing agent memory, user profile, providers, and persona tabs.",
    description:
      "Headmaster can retain approved preferences, formats, decisions, and working context so teams do not have to restate the same instructions.",
    bullets: ["Organization context", "User and agent profiles", "Approved memory providers"],
  },
  {
    id: "documents",
    eyebrow: "Documents",
    title: "Ground outputs in approved documents and knowledge sources.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/05-documents-knowledge-base.png",
    alt: "Documents page showing approved workspace files and knowledge sources.",
    description:
      "Documents and knowledge sources give Headmaster the source material it needs for reports, drafts, summaries, and decisions.",
    bullets: ["Approved workspace files", "Knowledge sources", "Document-backed output"],
  },
  {
    id: "agents",
    eyebrow: "Agents / Profiles",
    title: "Assign specialist agents with the right models, memory, skills, and tools.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/09-agents-profiles.png",
    alt: "Agents page showing specialist agent profiles with models, memory, skills, and tools.",
    description:
      "Specialist profiles help split work across research, writing, analysis, operations, and technical execution without losing central control.",
    bullets: ["Specialist profiles", "Model and tool assignment", "Coordinated delegation"],
  },
  {
    id: "automations",
    eyebrow: "Automations",
    title: "Schedule recurring work while keeping sensitive actions supervised.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/07-automations-schedules.png",
    alt: "Automations page showing scheduled workflows and recurring tasks.",
    description:
      "Recurring reports, summaries, reminders, and operational checks can run on schedule with review gates where the organization needs them.",
    bullets: ["Scheduled workflows", "Recurring tasks", "Review gates"],
  },
  {
    id: "approvals",
    eyebrow: "Approvals",
    title: "Pause important outputs for human review before they leave the workspace.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/04-approvals-queue.png",
    alt: "Approvals queue showing product launch documents awaiting human review.",
    description:
      "Approvals keep people in control of external communications, sensitive edits, final documents, and important operational actions.",
    bullets: ["Approve, reject, edit, or request changes", "External communication review", "Clear ownership"],
  },
  {
    id: "runs",
    eyebrow: "Runs / Execution History",
    title: "Review what ran, who handled it, how long it took, and where it stands.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/03-runs-execution-history.png",
    alt: "Runs page showing workflow execution history, agents, statuses, and durations.",
    description:
      "Execution history gives teams a practical record of workflow status, agent involvement, durations, and outcomes.",
    bullets: ["Workflow history", "Agent and status tracking", "Operational visibility"],
  },
  {
    id: "integrations",
    eyebrow: "Integrations / Channels / MCP",
    title: "Connect channels, tools, connectors, MCP servers, webhooks, and API keys.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/10-integrations-channels-mcp.png",
    alt: "Integrations page showing channels, tools, connectors, MCP servers, webhooks, and API keys.",
    description:
      "The deeper integrations layer belongs on the product page: channels, tools, connectors, MCP servers, webhooks, API keys, and provider configuration.",
    bullets: ["Communication channels", "Tools and connectors", "MCP, webhooks, and API keys"],
  },
  {
    id: "model-stack",
    eyebrow: "Model Stack",
    title: "Route work across provider models and GCAP’s own TayX model layer.",
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/11-model-stack-providers-tayx.png",
    alt: "Model stack page showing TayX, cloud models, coding models, local models, and enterprise endpoints.",
    description:
      "Headmaster is model-agnostic. It can use cloud models, coding models, local models, enterprise endpoints, custom endpoints, and TayX.",
    bullets: ["Model routing", "Cloud, local, and enterprise options", "TayX as GCAP’s tuned model layer"],
  },
] as const;
