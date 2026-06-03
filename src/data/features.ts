export interface FeatureItem {
  capability: string;
  meaning: string;
}

export const features: readonly FeatureItem[] = [
  {
    capability: "Persistent memory",
    meaning: "Remembers projects, preferences, decisions, and repeated context across time.",
  },
  {
    capability: "Skill creation",
    meaning: "Turns solved workflows into reusable procedures the system can apply again.",
  },
  {
    capability: "Scheduled automations",
    meaning: "Runs recurring reports, summaries, and admin tasks without manual triggers.",
  },
  {
    capability: "Tool access",
    meaning: "Works with approved files, APIs, browsers, databases, and connected systems.",
  },
  {
    capability: "Multi-channel gateways",
    meaning: "Can be reached through dashboard, email, chat apps, or terminal.",
  },
  {
    capability: "Specialist agents",
    meaning: "Delegates subtasks across focused agents that coordinate automatically.",
  },
  {
    capability: "Approval gates",
    meaning: "Pauses sensitive actions for human review before external effects.",
  },
  {
    capability: "Private deployments",
    meaning: "Keeps each organization’s context, memory, and workflows fully separate.",
  },
] as const;
