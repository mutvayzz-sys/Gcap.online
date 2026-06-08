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
      <p>Track active, queued, blocked, completed, failed, and escalated runs from one workspace view. Each run links to its timeline, assigned agent, selected model route, connected tools, approval state, elapsed time, and final output.</p>
      <h3>Approval inbox</h3>
      <p>The approval inbox has pending, approved, rejected, edited, and escalated states. Approve releases the output, reject returns the workflow to draft, edit records an operator change before release, and review routes the item to a second approver.</p>
      <p>Timeout rules can escalate blocked items to the workflow owner, workspace administrator, or a fallback approval group. Processed items move into the audit log with the decision, reviewer identity, timestamp, and any operator notes.</p>
      <h3>Run timeline</h3>
      <p>The run timeline records prompts, memory lookups, context-compression events, model used, tool calls, cost events, approval requests, approval decisions, operator edits, output previews, errors, retries, and elapsed time.</p>
      <h3>Memory review</h3>
      <p>Inspect important memories, archive stale context, confirm retained preferences, and verify that the system is learning operational knowledge that belongs in the workspace.</p>

      <h2>Setup</h2>
      <h3>Connect a workspace</h3>
      <p>Start by creating a workspace with an organization name, owner, approval group, default retention policy, and channel bindings. Add the channels your team uses and assign owners for each approval queue.</p>
      <h3>Configure permissions</h3>
      <p>Map each teammate to the least-privilege role they need: viewer, operator, approver, or administrator. Then scope agent access by workflow, tool, channel, and credential.</p>

      <h2>Usage</h2>
      <h3>Daily operations</h3>
      <ol>
        <li>Scan overnight runs for blocked, failed, or escalated work.</li>
        <li>Clear the approval inbox before scheduled outbound work begins.</li>
        <li>Review cost and token budget warnings by agent.</li>
        <li>Open memory review for any workflow that repeated an outdated assumption.</li>
        <li>Schedule follow-up runs or reassign work to the right owner.</li>
      </ol>
      <h3>Incident review</h3>
      <p>When a workflow needs attention, open the run timeline to review prompts, tool calls, approvals, final outputs, and operator interventions. Export the timeline when compliance or customer review requires evidence.</p>

      <div className="mt-16 border-t pt-8">
        <p><strong>Next:</strong></p>
        <p><a href="/docs/plugins">Plugin System</a> · <a href="/docs/security">Security</a> · <a href="/docs/deployment">Deployment</a></p>
      </div>
    </article>
  );
}
