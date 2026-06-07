export const metadata = {
  title: "Headmaster HQ - Documentation",
  description: "HQ functionality, setup, and usage for coordinating Headmaster workspaces",
};

export default function HQDocsPage() {
  return (
    <article className="prose prose-invert max-w-4xl">
      <h1>Headmaster HQ</h1>
      <p>
        Headmaster HQ is the operator console for supervising agents, approving sensitive work, reviewing runs, and coordinating team-level workflows.
      </p>

      <h2>HQ functionality</h2>
      <h3>Run supervision</h3>
      <p>Track active, queued, blocked, and completed runs from one workspace view.</p>
      <h3>Approval inbox</h3>
      <p>Review outbound messages, data edits, reports, and other gated actions before they leave the workspace.</p>
      <h3>Memory review</h3>
      <p>Inspect important memories, archive stale context, and confirm the system is retaining the right organizational knowledge.</p>

      <h2>Setup</h2>
      <h3>Connect a workspace</h3>
      <p>Start by creating a workspace, adding the channels your team uses, and assigning owners for approval queues.</p>
      <h3>Configure permissions</h3>
      <p>Map each teammate to the least-privilege role they need: viewer, operator, approver, or administrator.</p>

      <h2>Usage</h2>
      <h3>Daily operations</h3>
      <p>Use HQ as the morning control room: scan overnight work, clear approval queues, and schedule follow-up runs.</p>
      <h3>Incident review</h3>
      <p>When a workflow needs attention, open the run timeline to review prompts, tool calls, approvals, and final outputs.</p>
    </article>
  );
}
