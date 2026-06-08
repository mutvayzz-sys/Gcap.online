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
    description:
      "Low-risk internal drafts can run automatically while sensitive workflows require explicit approval before release. Risk levels can be set per workflow, per tool, per channel, or per agent profile. This lets teams automate routine work without weakening controls around external messages, data writes, or regulated actions.",
  },
] as const;
