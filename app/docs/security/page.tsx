export const metadata = {
  title: "Security & Compliance - Documentation",
  description: "Security model, permissions, compliance posture, and data handling practices",
};

export default function SecurityPage() {
  return (
    <article className="prose max-w-4xl">
      <h1>Security & Compliance</h1>
      <p>
        Headmaster is designed around least-privilege access, human approval gates, auditable agent runs, and clear deployment boundaries. This page describes the security model and the compliance evidence organizations should collect during rollout.
      </p>

      <h2>Security model</h2>
      <h3>Workspace isolation</h3>
      <p>Each organization should run with isolated workspace configuration, separate credentials, and scoped agent memory.</p>
      <h3>Human approval gates</h3>
      <p>Sensitive actions such as external communications, data writes, exports, and financial operations can pause until an authorized approver signs off.</p>
      <h3>Audit trail</h3>
      <p>Runs should retain prompts, tool calls, approvals, results, and operator interventions so teams can reconstruct what happened.</p>

      <h2>Permissions</h2>
      <h3>Least privilege</h3>
      <p>Agents and plugins should receive only the tools, channels, files, and APIs required for their assigned workflows.</p>
      <h3>Role separation</h3>
      <p>Recommended roles are viewer, operator, approver, and administrator. Approvers should be distinct from the agent identity performing the work.</p>
      <h3>Credential handling</h3>
      <p>Store API keys and integration credentials in managed secrets storage. Rotate credentials on a regular schedule and after personnel or vendor changes.</p>

      <h2>Compliance</h2>
      <h3>Evidence to maintain</h3>
      <p>Keep deployment diagrams, data-flow maps, access reviews, approval policy records, incident-response procedures, and run-audit samples.</p>
      <h3>Customer-controlled deployment</h3>
      <p>For regulated environments, deploy into infrastructure controlled by the customer and align retention, backup, and logging with internal policy.</p>
      <h3>Vendor review</h3>
      <p>Review model providers, messaging platforms, storage systems, and plugins before enabling them in production workflows.</p>

      <h2>Production checklist</h2>
      <ul>
        <li>Define approval gates before production access.</li>
        <li>Restrict integrations to required scopes.</li>
        <li>Enable run logging and retention policies.</li>
        <li>Review plugin permissions before installation.</li>
        <li>Document incident response and rollback procedures.</li>
      </ul>
    </article>
  );
}
