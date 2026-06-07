export const metadata = {
  title: "Plugin System - Documentation",
  description: "Plugin architecture and development guide for extending Headmaster",
};

export default function PluginDocsPage() {
  return (
    <article className="prose prose-invert max-w-4xl">
      <h1>Plugin System</h1>
      <p>
        Headmaster plugins extend the agent runtime with commands, hooks, tools, dashboard surfaces, and policy checks without changing core agent code.
      </p>

      <h2>Plugin architecture</h2>
      <h3>Manifest</h3>
      <p>Each plugin declares its name, version, permissions, commands, hooks, and dashboard contributions in a manifest.</p>
      <h3>Runtime hooks</h3>
      <p>Hooks can observe or modify lifecycle events such as session start, tool pre-call, tool result, approval request, and run completion.</p>
      <h3>Permission boundary</h3>
      <p>Plugins receive only the scopes declared in their manifest and can be blocked by workspace policy before activation.</p>

      <h2>Development guide</h2>
      <h3>Create a plugin</h3>
      <p>Start with a manifest, add a command or hook handler, then test it in a local workspace before distributing it to a team.</p>
      <pre><code>{`plugin:
  name: weekly-review
  version: 0.1.0
  permissions:
    - runs:read
    - reports:write
  commands:
    - /weekly-review`}</code></pre>
      <h3>Test safely</h3>
      <p>Run plugins in a sandbox workspace first, confirm their audit events, then promote them to production after approval.</p>

      <h2>Distribution</h2>
      <h3>Private marketplace</h3>
      <p>Organizations can maintain an internal plugin catalog with approved versions and owner metadata.</p>
    </article>
  );
}
