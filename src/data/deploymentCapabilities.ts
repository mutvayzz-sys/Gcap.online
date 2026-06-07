export interface DeploymentCapability {
  title: string;
  description: string;
}

export const deploymentCapabilities: readonly DeploymentCapability[] = [
  {
    title: "Private Workspace",
    description: "Each organization gets its own context, data, workflows, and configuration.",
  },
  {
    title: "Custom Workflows",
    description: "Turn repeated work into buttons, automations, and reusable agent skills.",
  },
  {
    title: "Role-Based Access",
    description: "Admins, staff, managers, operators, and client-facing teams can receive different permissions.",
  },
  {
    title: "Human Approval",
    description: "Keep control over emails, reports, data edits, and external actions.",
  },
  {
    title: "Connected Tools",
    description: "Integrate documents, inboxes, calendars, databases, CRMs, or internal APIs.",
  },
  {
    title: "Branded Interface",
    description: "The client-facing workspace can match the organization without changing the core engine.",
  },
] as const;
