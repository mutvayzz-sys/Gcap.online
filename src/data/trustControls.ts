export const trustControls = [
  { title: "Human Review", description: "Approve important actions before they happen." },
  { title: "Permissioned Tools", description: "Agents only use the tools and data they are allowed to access." },
  { title: "Separate Workspaces", description: "Each organization keeps its own memory, files, and configuration." },
  { title: "Action Logs", description: "Track what the system did, what it used, and what still needs review." },
  { title: "Configurable Risk Levels", description: "Low-risk tasks can run automatically. Sensitive workflows require approval." },
] as const;
