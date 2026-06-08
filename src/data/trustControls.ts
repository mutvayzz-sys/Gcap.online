export interface TrustControl {
  title: string;
  description: string;
}

export const trustControls: readonly TrustControl[] = [
  {
    title: "Human Review",
    description:
      "Important actions pause before release and appear in an approval queue for authorized reviewers. Approvers can approve, reject, edit, or send work to a second reviewer depending on the workflow policy. Timeouts and escalation rules can route blocked work to the right owner instead of letting it disappear.",
  },
  {
    title: "Permissioned Tools",
    description:
      "Agents only receive access to the tools, files, APIs, and channels required for their assigned work. Permissions can be scoped by workflow, agent profile, and role so a reporting agent does not inherit broad administrative access. Tool use is recorded with the run so reviewers can see exactly what was touched.",
  },
  {
    title: "Separate Workspaces",
    description:
      "Each organization keeps isolated memory, credentials, tools, and configuration. Workspace context does not cross into another customer or team environment. This separation makes pilots safer because teams can start with a bounded workspace before expanding access.",
  },
  {
    title: "Action Logs",
    description:
      "Every prompt, tool call, model route, cost event, approval decision, operator edit, and final output is captured in a structured log. Logs give operators a practical record for incident review, cost review, and compliance evidence. Teams can trace a result back to the workflow that produced it instead of relying on chat history.",
  },
  {
    title: "Configurable Risk Levels",
    description: "Low-risk internal drafts run automatically. Sensitive workflows stop at the approval queue before release. Risk thresholds are configured per workflow, tool, channel, or agent profile — so routine work is unblocked while external messages, data writes, and regulated actions stay gated. Changes to risk policy are logged with the workspace configuration.",
  },
] as const;
