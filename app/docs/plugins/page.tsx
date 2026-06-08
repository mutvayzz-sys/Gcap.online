export const metadata = {
  title: "Plugin System - Documentation",
  description: "Plugin architecture and development guide for extending Headmaster",
};

const hooks = [
  ["session:start", "A run session begins", "workspace, run, agent", "Seed context or attach metadata"],
  ["tool:pre-call", "Before a tool executes", "tool, arguments, run", "Veto, rewrite arguments, or require approval"],
  ["tool:result", "After a tool returns", "tool, result, correlation_id", "Transform, redact, or annotate results"],
  ["approval:request", "A gated output is queued", "approval, output, policy", "Route or enrich approval requests"],
  ["run:complete", "A run finishes", "run, output, costs", "Emit summaries or archive evidence"],
];

export default function PluginDocsPage() {
  return (
    <article className="prose prose-invert max-w-4xl">
      <h1>Plugin System</h1>
      <p>
        Headmaster plugins extend the agent runtime with commands, hooks, tools, dashboard surfaces, and policy checks without changing core agent code.
      </p>

      <h2>Plugin architecture</h2>
      <h3>Manifest</h3>
      <p>Each plugin declares name, version, owner, permissions, slash commands, lifecycle hooks, dashboard contributions, and distribution metadata.</p>
      <pre><code>{`plugin:
  name: weekly-review
  version: 0.1.0
  owner: ops
  permissions:
    - runs:read
    - reports:write
  commands:
    - name: /weekly-review
      route: handlers.weekly_review
  hooks:
    - event: session:start
      handler: hooks.seed_context
    - event: tool:pre-call
      handler: hooks.policy_check
    - event: tool:result
      handler: hooks.redact_result
  dashboard:
    - tab: Weekly Review
      component: dashboard.weekly_review`}</code></pre>

      <h3>Runtime hooks</h3>
      <table>
        <thead><tr><th>Hook</th><th>Fires when</th><th>Arguments</th><th>Can modify</th></tr></thead>
        <tbody>{hooks.map(([hook, fires, args, modify]) => <tr key={hook}><td>{hook}</td><td>{fires}</td><td>{args}</td><td>{modify}</td></tr>)}</tbody>
      </table>

      <h3>Hook examples</h3>
      <pre><code>{`export async function policy_check({ tool, arguments, run }) {
  if (tool.name === "send_email" && !run.approval_id) {
    return { veto: true, reason: "Email requires approval" };
  }
  return { allow: true, correlation_id: run.id };
}

export async function redact_result({ result }) {
  return { result: redactSecrets(result) };
}`}</code></pre>

      <h2>Commands</h2>
      <p>Slash commands register in the manifest, route to a handler, and pass the invocation text, user, channel, workspace, and correlation ID to the agent runtime. Handlers can create a run, attach context, request approval, or return an immediate response.</p>

      <h2>Permission boundary</h2>
      <p>Plugins receive only the scopes declared in their manifest and can be blocked by workspace policy before activation. Test plugins in a sandbox workspace first, confirm their audit events, then promote them to production after approval.</p>

      <h2>Distribution</h2>
      <h3>Private marketplace</h3>
      <p>Organizations can maintain an internal plugin catalog with approved versions, owner metadata, changelog, required scopes, and rollback instructions.</p>

      <div className="mt-16 border-t pt-8">
        <p><strong>Next:</strong></p>
        <p><a href="/docs/security">Security</a> · <a href="/docs/deployment">Deployment</a> · <a href="/docs/headmaster">Headmaster Core</a></p>
      </div>
    </article>
  );
}
