/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Overview - Headmaster Documentation",
  description: "What is Headmaster and how it works",
};

export default function OverviewPage() {
  return (
    <article className="prose prose-invert max-w-4xl">
      <h1>What is Headmaster</h1>

      <p>
        Headmaster is a persistent AI agent platform for organizations that need governed agents to handle recurring work across teams, tools, and approval gates. Unlike traditional chatbots that reset with each conversation, Headmaster agents maintain complete memory of past interactions, understand organizational context, and coordinate complex workflows across teams.
      </p>

      <h2>Product Architecture</h2>

      <p>
        Headmaster's architecture is built around three core pillars that make long-running agent work governable:
      </p>

      <h3>1. Persistent Memory Layer</h3>

      <p>
        Headmaster agents retain complete context of every interaction, decision, and outcome. This enables:
      </p>
      <ul>
        <li><strong>Continuity</strong>: Agents remember previous conversations and build context over time</li>
        <li><strong>Reduced Redundancy</strong>: No need to re-explain context or previous decisions</li>
        <li><strong>Learning</strong>: Agents improve through interaction history and feedback</li>
      </ul>

      <p>
        The memory layer is fully auditable, meaning organizations can inspect exactly what information agents have retained and used for decisions.
      </p>

      <h3>2. Multi-Platform Orchestration</h3>

      <p>
        Headmaster doesn't lock you into a single communication channel. Deploy the same agent logic across:
      </p>
      <ul>
        <li><strong>Messaging Platforms</strong>: Slack, Teams, Discord, WhatsApp, Telegram, Signal</li>
        <li><strong>Email</strong>: Full email integration for workflow automation</li>
        <li><strong>Web</strong>: Custom web interfaces and API endpoints</li>
        <li><strong>Voice</strong>: Phone and audio integration</li>
      </ul>

      <p>One agent, 17+ platforms, zero duplication of logic.</p>

      <h3>3. Human-in-the-Loop Control</h3>

      <p>
        Critical operations never happen without human approval. Headmaster's approval framework ensures:
      </p>
      <ul>
        <li><strong>Sensitive Actions</strong>: High-stakes decisions require explicit human sign-off</li>
        <li><strong>Audit Trail</strong>: Every action and approval is logged for compliance</li>
        <li><strong>Graceful Degradation</strong>: Workflows continue while waiting for approvals, no blocking</li>
      </ul>

      <h2>How It Works</h2>

      <p>
        When you deploy Headmaster to your organization:
      </p>

      <ol>
        <li><strong>Agent Definition</strong>: Define what your agent should do using natural language prompts or API specifications</li>
        <li><strong>Model Selection</strong>: Choose any LLM—Claude, GPT, Grok, Gemini, or bring your own</li>
        <li><strong>Integration</strong>: Connect to your systems (Slack, email, databases, APIs)</li>
        <li><strong>Memory Setup</strong>: Configure what context the agent should retain and when to archive</li>
        <li><strong>Approvals</strong>: Define approval gates for sensitive operations</li>
        <li><strong>Launch</strong>: Deploy to production with full observability</li>
      </ol>

      <p>
        Your agents then run continuously, handling routine work while escalating exceptions to humans.
      </p>


      <h2>Internal Architecture</h2>
      <p>Headmaster is organized around four internal components that keep execution, permissions, memory, and context management separate.</p>
      <ul>
        <li><strong>Executor</strong>: handles agent execution, tool dispatch, run state, and workflow coordination.</li>
        <li><strong>Gatekeeper</strong>: manages permissions, approved tools, role-based access, and approval boundaries.</li>
        <li><strong>Memory</strong>: provides persistent, searchable, pluggable memory for workspace context and prior decisions.</li>
        <li><strong>Lens</strong>: compresses and selects context so long-running workflows stay inside model token limits.</li>
      </ul>
      <p><strong>Audit-ready:</strong> every tool call, cost event, approval decision, operator edit, and final output is logged and searchable.</p>

      <h2>Key Differentiators</h2>

      <ul>
        <li><strong>Model-Agnostic</strong>: Zero vendor lock-in. Switch models without rewriting agent logic</li>
        <li><strong>Platform-Agnostic</strong>: Deploy to any messaging system, database, or API</li>
        <li><strong>Human-Centric</strong>: No autonomous decisions without oversight</li>
        <li><strong>Audit-ready</strong>: Every tool call, cost event, approval decision, and operator edit is logged and searchable</li>
        <li><strong>Scalable</strong>: Run one agent or coordinate hundreds working in parallel</li>
      </ul>

      <h2>Next Steps</h2>

      <p>
        <a href="/docs/headmaster">Get started with Headmaster</a> — Learn the core concepts and features
      </p>
      <p>
        <a href="/docs/deployment">Deploy Headmaster</a> — Setup guide and configuration
      </p>
      <p>
        <a href="/docs/security">Security & Compliance</a> — Security features, certifications, and data handling
      </p>
          <div className="mt-16 border-t pt-8">
        <p><strong>Next:</strong></p>
        <p><a href="/docs/headmaster">Headmaster Core</a> · <a href="/docs/deployment">Deployment</a> · <a href="/docs/security">Security</a></p>
      </div>
    </article>
  );
}
