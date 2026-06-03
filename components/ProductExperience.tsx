import Image from "next/image";

const blobBase = "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com";

const shots = {
  chat: {
    src: `${blobBase}/02-chat-ask-headmaster.png`,
    alt: "Headmaster chat view generating a product launch plan from workspace context.",
  },
  runs: {
    src: `${blobBase}/03-runs-execution-history.png`,
    alt: "Runs page showing workflow execution history, agents, statuses, and durations.",
  },
  approvals: {
    src: `${blobBase}/04-approvals-queue.png`,
    alt: "Approvals queue showing product launch documents awaiting human review.",
  },
  documents: {
    src: `${blobBase}/05-documents-knowledge-base.png`,
    alt: "Documents page showing approved workspace files and knowledge sources.",
  },
  memory: {
    src: `${blobBase}/06-memory-providers.png`,
    alt: "Memory page showing agent memory, user profile, providers, and persona tabs.",
  },
  automations: {
    src: `${blobBase}/07-automations-schedules.png`,
    alt: "Automations page showing scheduled workflows and recurring tasks.",
  },
  workflows: {
    src: `${blobBase}/08-workflows-skills-library.png`,
    alt: "Workflows page showing reusable skills and workflow playbooks.",
  },
  agents: {
    src: `${blobBase}/09-agents-profiles.png`,
    alt: "Agents page showing specialist agent profiles with models, memory, skills, and tools.",
  },
  integrations: {
    src: `${blobBase}/10-integrations-channels-mcp.png`,
    alt: "Integrations page showing channels, tools, connectors, MCP servers, webhooks, and API keys.",
  },
  models: {
    src: `${blobBase}/11-model-stack-providers-tayx.png`,
    alt: "Model stack page showing TayX, cloud models, coding models, local models, and enterprise endpoints.",
  },
  guided: {
    src: `${blobBase}/12-guided-workflow-run.png`,
    alt: "Guided workflow run showing steps, context, tools, output preview, and approval checkpoint.",
  },
};

type ShotKey = keyof typeof shots;

function ProductShot({ shot, priority = false }: { shot: ShotKey; priority?: boolean }) {
  const { src, alt } = shots[shot];

  return (
    <div className="product-shot">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes="(min-width: 1120px) 52vw, (min-width: 768px) 82vw, 96vw"
        className="h-auto w-full"
      />
    </div>
  );
}

function ProductRow({
  id,
  eyebrow,
  title,
  body,
  bullets,
  shot,
  reverse = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  shot: ShotKey;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="product-row py-14 md:py-20 border-t border-[var(--border)]">
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h2 className="text-[34px] md:text-[48px] leading-[0.98] tracking-[-1.8px] md:tracking-[-2.4px] font-medium mb-5">
            {title}
          </h2>
          <p className="text-[18px] md:text-[20px] leading-snug text-[var(--text-muted)] max-w-[44ch] mb-7">{body}</p>
          <div className="flex flex-wrap gap-2.5">
            {bullets.map((bullet) => (
              <span key={bullet} className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--text-muted)]">
                {bullet}
              </span>
            ))}
          </div>
        </div>
        <ProductShot shot={shot} />
      </div>
    </section>
  );
}

export default function ProductExperience() {
  return (
    <main id="product" className="max-w-[1180px] mx-auto px-6 sm:px-8">
      <section className="py-20 md:py-24 text-center">
        <div className="eyebrow mb-4">The Headmaster System</div>
        <h2 className="text-[38px] md:text-[60px] leading-[0.96] tracking-[-2px] md:tracking-[-3px] font-medium mb-6">
          A real work console, not a thin chatbot layer.
        </h2>
        <p className="max-w-3xl mx-auto text-[18px] md:text-[21px] leading-snug text-[var(--text-muted)]">
          Headmaster gives organizations a private AI workforce layer: chat as the front door, reusable workflows as the operating model, and approvals, memory, tools, schedules, agents, integrations, and model routing underneath.
        </p>
      </section>

      <ProductRow
        id="chat"
        eyebrow="More than a chat box"
        title="Ask Headmaster. Get work moving."
        body="Start with a request, attach context, and let Headmaster turn it into a plan, workflow, draft, or approval-ready output. Chat is the front door; the product console does the operational work behind it."
        bullets={["Workspace context", "Plans and drafts", "Approval-ready output"]}
        shot="chat"
      />

      <ProductRow
        id="workflows"
        eyebrow="Reusable workflow layer"
        title="Reusable workflows, not one-off prompts."
        body="Headmaster turns repeated work into reusable workflow playbooks your agents can run: launch plans, research briefs, email campaigns, client reports, progress updates, and more. Skills are the reusable engine underneath."
        bullets={["Workflow playbooks", "Reusable skills", "Repeatable team work"]}
        shot="workflows"
        reverse
      />

      <section id="guided-run" className="py-16 md:py-24 border-t border-[var(--border)]">
        <div className="rounded-[32px] border border-[var(--border)] bg-white p-5 md:p-8 shadow-[0_18px_70px_rgba(17,17,17,0.07)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-center mb-8">
            <div>
              <div className="eyebrow mb-4">Demo theater</div>
              <h2 className="text-[35px] md:text-[52px] leading-[0.98] tracking-[-2.4px] font-medium mb-5">
                See a workflow run from start to approval.
              </h2>
              <p className="text-[18px] md:text-[20px] leading-snug text-[var(--text-muted)]">
                Headmaster loads context, uses approved tools, drafts outputs, tracks progress, and pauses for review when human approval is required.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-[var(--text-muted)]">
              {[
                "Loads approved context",
                "Uses approved tools",
                "Tracks each step",
                "Pauses for human review",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                  <span className="text-[var(--text)] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <ProductShot shot="guided" />
        </div>
      </section>

      <section id="knowledge" className="py-16 md:py-20 border-t border-[var(--border)]">
        <div className="mb-9 max-w-3xl">
          <div className="eyebrow mb-4">Workspace-owned context</div>
          <h2 className="text-[35px] md:text-[52px] leading-[0.98] tracking-[-2.4px] font-medium mb-5">
            Memory and documents stay tied to the work.
          </h2>
          <p className="text-[18px] md:text-[20px] leading-snug text-[var(--text-muted)]">
            Policies, templates, reports, briefs, spreadsheets, user profiles, personas, and working files can become approved context for Headmaster workflows.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <article className="rounded-[28px] border border-[var(--border)] bg-white p-5 md:p-6">
            <h3 className="text-2xl tracking-tight font-medium mb-2">Memory that belongs to the workspace.</h3>
            <p className="text-[var(--text-muted)] mb-5 leading-relaxed">
              Use Agent Memory, User Profile, Providers, and Persona views with built-in memory or pluggable long-term memory providers, so teams stop repeating the same context every time.
            </p>
            <ProductShot shot="memory" />
          </article>
          <article className="rounded-[28px] border border-[var(--border)] bg-white p-5 md:p-6">
            <h3 className="text-2xl tracking-tight font-medium mb-2">Your organization’s knowledge base.</h3>
            <p className="text-[var(--text-muted)] mb-5 leading-relaxed">
              Approved documents and working files give Headmaster reliable workspace context for policies, templates, reports, briefs, spreadsheets, and repeatable workflows.
            </p>
            <ProductShot shot="documents" />
          </article>
        </div>
      </section>

      <ProductRow
        id="integrations"
        eyebrow="Connected systems"
        title="Connect the systems work already lives in."
        body="Headmaster connects communication channels, approved tools, connectors, webhooks, APIs, and MCP servers so workflows can reach the systems your team already uses without turning the site into a raw technical dashboard."
        bullets={["Channels", "Tools", "Connectors", "MCP Servers", "Webhooks", "API Keys"]}
        shot="integrations"
      />

      <ProductRow
        id="agents"
        eyebrow="Specialist agents"
        title="Specialist agents with their own workspace."
        body="Each agent can have its own model, memory, skills, tools, and role. Researchers, strategists, copywriters, analysts, admins, code agents, and other focused helpers can work inside the same private workspace."
        bullets={["Roles", "Models", "Memory", "Skills", "Approved tools"]}
        shot="agents"
        reverse
      />

      <ProductRow
        id="automations"
        eyebrow="Scheduled work"
        title="Work that wakes up on schedule."
        body="Recurring workflows can prepare reports, summaries, reminders, follow-ups, and approvals before anyone asks. Sensitive actions can still wait for review before anything important leaves the workspace."
        bullets={["Recurring reports", "Summaries", "Follow-ups", "Review gates"]}
        shot="automations"
      />

      <ProductRow
        id="approvals"
        eyebrow="Human control"
        title="Control stays with people."
        body="Headmaster can prepare work, but sensitive actions can pause for approval. Review, approve, reject, or request changes before anything important leaves the workspace."
        bullets={["Approve", "Reject", "Request changes", "Human review"]}
        shot="approvals"
        reverse
      />

      <ProductRow
        id="runs"
        eyebrow="Operational visibility"
        title="Every run leaves a trail."
        body="Track what ran, which agent handled it, what status it reached, how long it took, and what needs attention. Headmaster is built to make repeated AI work visible and accountable."
        bullets={["Execution history", "Agent ownership", "Statuses", "Durations"]}
        shot="runs"
      />

      <ProductRow
        id="tayx"
        eyebrow="Model stack + TayX"
        title="Model-agnostic by design."
        body="Headmaster can route work across cloud models, coding models, local models, enterprise endpoints, custom endpoints, and GCAP’s own TayX model layer. TayX is GCAP’s trained and fine-tuned model layer for agentic work, coding, research, long-context reasoning, and tool-heavy workflows."
        bullets={["Cloud models", "Coding models", "Local models", "Enterprise endpoints", "TayX"]}
        shot="models"
        reverse
      />
    </main>
  );
}
