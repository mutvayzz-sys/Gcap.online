export interface DeploymentCapability {
  title: string;
  description: string;
}

export const deploymentCapabilities: readonly DeploymentCapability[] = [
  {
    title: "Private Workspace",
    description:
      "Each organization runs with separate memory, credentials, approved tools, workflow configuration, and audit history. No workspace context is shared across customers or teams, which keeps pilots bounded and production deployments easier to govern.",
  },
  {
    title: "Custom Workflows",
    description:
      "Repeated work becomes reusable agent skills, scheduled automations, and operator-triggered workflows. Runs can start from time-based schedules, workspace events, slash commands, or dashboard buttons, then pause at review gates when policy requires it.",
  },
  {
    title: "Role-Based Access",
    description:
      "Viewer, operator, approver, and administrator roles keep responsibilities separated. Teams can scope who can launch runs, connect tools, approve external actions, change policies, or inspect audit logs.",
  },
  {
    title: "Human Approval",
    description:
      "Emails, reports, data edits, exports, and external actions can stop in a central approval queue before release. Approvers can approve, reject, edit, or request a second review, and each decision is written back to the run log.",
  },
  {
    title: "Connected Tools",
    description:
      "Integrate documents, inboxes, calendars, databases, CRMs, browsers, storage systems, and internal APIs through permissioned connectors. Each workflow receives the tools it needs rather than unrestricted workspace access.",
  },
  {
    title: "Branded Interface",
    description:
      "Professional deployments can match the organization with custom logo placement, theme tokens, workspace naming, and deployment-specific entry points. The brand layer changes the client-facing shell without changing the underlying agent runtime.",
  },
] as const;
