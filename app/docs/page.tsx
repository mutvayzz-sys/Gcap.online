import Link from "next/link";

export const metadata = {
  title: "Documentation - Headmaster",
  description: "Complete guide to deploying and managing Headmaster AI agents",
};

const docs = [
  {
    title: "Overview",
    description: "What is Headmaster and how its architecture works",
    href: "/docs/overview",
    icon: "📚",
  },
  {
    title: "Headmaster Core",
    description: "Complete feature guide, capabilities, and configuration",
    href: "/docs/headmaster",
    icon: "⚙️",
  },
  {
    title: "Headmaster HQ",
    description: "HQ functionality, setup, usage, approvals, and run supervision",
    href: "/docs/hq",
    icon: "🕹️",
  },
  {
    title: "Plugin System",
    description: "Plugin architecture and development guide for extending Headmaster",
    href: "/docs/plugins",
    icon: "🧩",
  },
  {
    title: "Security & Compliance",
    description: "Security features, permissions, compliance, and data handling",
    href: "/docs/security",
    icon: "🔒",
  },
  {
    title: "Deployment Guide",
    description: "How to deploy Headmaster, prerequisites, and configuration",
    href: "/docs/deployment",
    icon: "🚀",
  },
];

export default function DocsIndex() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-8 pt-24 pb-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[var(--text)]">
            Documentation
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Everything you need to understand, deploy, and manage Headmaster. From architecture overview to production deployment.
          </p>
        </div>

        {/* Docs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docs.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--border)] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--text-muted)] transition-colors">
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h2 className="text-2xl font-semibold mb-2 text-[var(--text)]">
                  {doc.title}
                </h2>
                <p className="text-[var(--text-muted)] mb-4">
                  {doc.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)]">
                  Read more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-20 pt-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-8 text-[var(--text)]">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/docs/overview"
              className="p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
            >
              <div className="font-medium text-[var(--text)] mb-2">Get Started</div>
              <p className="text-sm text-[var(--text-muted)]">
                Learn what Headmaster is and how it works
              </p>
            </Link>
            <Link
              href="/docs/deployment"
              className="p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
            >
              <div className="font-medium text-[var(--text)] mb-2">Deploy Now</div>
              <p className="text-sm text-[var(--text-muted)]">
                Step-by-step deployment guide and prerequisites
              </p>
            </Link>
            <Link
              href="/docs/security"
              className="p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
            >
              <div className="font-medium text-[var(--text)] mb-2">Security Info</div>
              <p className="text-sm text-[var(--text-muted)]">
                Compliance, certifications, and data handling
              </p>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-8 text-[var(--text)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl">
            <details className="group p-6 rounded-lg border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-[var(--text)] select-none">
                <span>What LLMs does Headmaster support?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--text-muted)]">
                Headmaster supports Claude, GPT-4, Gemini, Grok, Llama, Mistral, and any model available via API. You can switch between models without changing your agent code.
              </p>
            </details>

            <details className="group p-6 rounded-lg border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-[var(--text)] select-none">
                <span>Can I run Headmaster on-premises?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--text-muted)]">
                Yes. Headmaster can be deployed on AWS, Google Cloud, Azure, or your own data center. See the deployment guide for details.
              </p>
            </details>

            <details className="group p-6 rounded-lg border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-[var(--text)] select-none">
                <span>Is my data encrypted?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--text-muted)]">
                Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) with customer-specific keys. See security documentation for details.
              </p>
            </details>

            <details className="group p-6 rounded-lg border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-[var(--text)] select-none">
                <span>How much does Headmaster cost?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--text-muted)]">
                Pricing is based on model usage and number of agents. Contact our sales team at sales@gcaplabs.com for a custom quote.
              </p>
            </details>

            <details className="group p-6 rounded-lg border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors cursor-pointer">
              <summary className="flex items-center justify-between font-medium text-[var(--text)] select-none">
                <span>What support is available?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-[var(--text-muted)]">
                Email support at support@gcaplabs.com, community forum, and priority phone support for enterprise customers.
              </p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-[var(--border)] text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[var(--text)]">
            Ready to deploy?
          </h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
            Get started with our deployment guide or schedule a demo to see Headmaster in action.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/docs/deployment"
              className="px-8 py-3 rounded-full bg-[#111111] text-[#F9F7F3] font-medium hover:bg-black transition-colors"
            >
              Deploy Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border border-[var(--border)] text-[var(--text)] font-medium hover:bg-[var(--border)] transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
