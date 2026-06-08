/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-8">
          <h1 className="text-[40px] tracking-[-1.5px] font-medium mb-4">Privacy Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mb-12">
            Last updated: June 8, 2026 &middot; Effective: June 8, 2026
          </p>

          <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">
            {/* ── Introduction ──────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                1&nbsp;&nbsp;Introduction
              </h2>
              <p>
                GCAP Labs, Inc. ("GCAP Labs", "we", "us", or "our") operates the Headmaster platform
                (the "Service") at <span className="text-[var(--text)]">gcap.online</span> and related
                subdomains. This Privacy Policy describes how we collect, use, retain, and disclose
                information when organisations and individuals use Headmaster — a persistent AI agent
                platform designed for enterprise workflows.
              </p>
              <p className="mt-4">
                This policy applies to all users of the Service, including Workspace Administrators,
                Members, and end-users whose content is processed within a workspace. By using
                Headmaster, you consent to the practices described here. If your organisation has
                executed a Data Processing Agreement (DPA) with GCAP Labs, the terms of that DPA
                supplement and, where they conflict, override this policy.
              </p>
            </section>

            {/* ── Data Collection ───────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                2&nbsp;&nbsp;Data we collect
              </h2>

              <h3 className="text-[17px] font-medium text-[var(--text)] mb-2 mt-6">
                2.1&nbsp;&nbsp;Information you provide
              </h3>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[15px]">
                <li>
                  <span className="text-[var(--text)]">Account credentials:</span> name, email address,
                  organisation name, and billing details when you create a workspace.
                </li>
                <li>
                  <span className="text-[var(--text)]">Workspace content:</span> prompts, uploaded files,
                  messages, documents, code, and any other data you or your team submit to Headmaster.
                </li>
                <li>
                  <span className="text-[var(--text)]">Integration credentials:</span> API keys for
                  third-party services (e.g., Slack, GitHub, email providers) that you configure to
                  enable Headmaster's integrations. These keys are encrypted at rest using AES-256-GCM
                  with per-key salts and are accessible only to the agent runtime during an active run.
                </li>
                <li>
                  <span className="text-[var(--text)]">Voluntary communications:</span> support tickets,
                  feedback, and survey responses.
                </li>
              </ul>

              <h3 className="text-[17px] font-medium text-[var(--text)] mb-2 mt-6">
                2.2&nbsp;&nbsp;Information collected automatically
              </h3>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[15px]">
                <li>
                  <span className="text-[var(--text)]">Usage analytics:</span> page views, feature
                  interactions, session duration, crash reports, and device/browser metadata. We collect
                  these to improve product reliability and are careful to minimise what we capture.
                </li>
                <li>
                  <span className="text-[var(--text)]">Agent run telemetry:</span> timestamps, model
                  identifiers, token counts, latency metrics, and success/error status for each agent
                  invocation. Content of prompts and completions is <em>not</em> included in telemetry.
                </li>
                <li>
                  <span className="text-[var(--text)]">Infrastructure logs:</span> server-side access logs,
                  IP addresses, and request headers processed for security and abuse prevention.
                </li>
              </ul>
            </section>

            {/* ── Data Processing ───────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                3&nbsp;&nbsp;How we process your data
              </h2>

              <h3 className="text-[17px] font-medium text-[var(--text)] mb-2 mt-6">
                3.1&nbsp;&nbsp;Agent runs
              </h3>
              <p>
                When you initiate a task, Headmaster sends your prompt along with relevant workspace
                context to a large-language-model provider (see Section&nbsp;6). The model returns a
                completion, which is stored in your workspace alongside the prompt. We process this data
                solely to fulfil the request you made and to maintain your workspace history.
              </p>

              <h3 className="text-[17px] font-medium text-[var(--text)] mb-2 mt-6">
                3.2&nbsp;&nbsp;Persistent memory
              </h3>
              <p>
                Headmaster maintains a persistent memory store that accumulates facts, decisions, and
                preferences across sessions. Memory entries are scoped to your workspace and are never
                shared across organisations. Memory data is used exclusively to improve the quality and
                personalisation of subsequent agent runs within the same workspace.
              </p>

              <h3 className="text-[17px] font-medium text-[var(--text)] mb-2 mt-6">
                3.3&nbsp;&nbsp;Audit trails
              </h3>
              <p>
                Every mutating action (creating, updating, or deleting a resource) is logged as a
                durable, append-only audit event. Audit logs record the actor identity, timestamp,
                action type, and affected resource identifier. They are immutable once written and
                available to Workspace Administrators through the audit log view and API.
              </p>

              <h3 className="text-[17px] font-medium text-[var(--text)] mb-2 mt-6">
                3.4&nbsp;&nbsp;Lawful bases (GDPR)
              </h3>
              <p>
                For users in the European Economic Area, we rely on the following GDPR lawful bases:
                performance of a contract (Art.&nbsp;6(1)(b)) for processing necessary to deliver the
                Service; legitimate interests (Art.&nbsp;6(1)(f)) for security, fraud prevention, and
                product analytics; and consent (Art.&nbsp;6(1)(a)) where explicitly obtained, such as
                for optional marketing communications.
              </p>
            </section>

            {/* ── Data Retention ────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                4&nbsp;&nbsp;Data retention
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-[15px] border-collapse mt-2">
                  <thead>
                    <tr className="border-b border-[var(--border-strong)] text-left text-[var(--text)]">
                      <th className="py-2 pr-6 font-medium">Data category</th>
                      <th className="py-2 pr-6 font-medium">Retention period</th>
                      <th className="py-2 font-medium">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text-muted)]">
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Workspace content &amp; memory</td>
                      <td className="py-2 pr-6">Duration of subscription + 90&nbsp;days</td>
                      <td className="py-2">Service delivery</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Audit trails</td>
                      <td className="py-2 pr-6">3&nbsp;years</td>
                      <td className="py-2">Legal &amp; compliance</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Encrypted API keys</td>
                      <td className="py-2 pr-6">Until revoked or workspace deleted</td>
                      <td className="py-2">Service delivery</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Usage &amp; crash analytics</td>
                      <td className="py-2 pr-6">13&nbsp;months (rolling)</td>
                      <td className="py-2">Product improvement</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Infrastructure logs</td>
                      <td className="py-2 pr-6">90&nbsp;days</td>
                      <td className="py-2">Security &amp; abuse prevention</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-6">Billing &amp; tax records</td>
                      <td className="py-2 pr-6">7&nbsp;years</td>
                      <td className="py-2">Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Upon account termination, we delete workspace content and associated data within 90&nbsp;days
                except where retention is required by law. Audit logs are retained for their full
                3-year period regardless of account status, though they contain only metadata — not
                your prompts or completions.
              </p>
            </section>

            {/* ── Subprocessors ─────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                5&nbsp;&nbsp;Third-party service providers
              </h2>
              <p>
                We engage the following categories of subprocessors to operate the Service. Each
                processor is bound by a data-processing agreement that contractually prohibits the use
                of your data for training, advertising, or any purpose beyond providing the contracted
                service.
              </p>

              <div className="overflow-x-auto mt-4">
                <table className="w-full text-[15px] border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-strong)] text-left text-[var(--text)]">
                      <th className="py-2 pr-6 font-medium">Subprocessor</th>
                      <th className="py-2 pr-6 font-medium">Purpose</th>
                      <th className="py-2 font-medium">Data processed</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text-muted)]">
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Vercel, Inc.</td>
                      <td className="py-2 pr-6">Application hosting &amp; CDN</td>
                      <td className="py-2">HTTP request metadata; infrastructure logs</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">OpenAI, LLC</td>
                      <td className="py-2 pr-6">Model inference</td>
                      <td className="py-2">Prompts &amp; completions (API calls; data not used for training)</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Anthropic, PBC</td>
                      <td className="py-2 pr-6">Model inference</td>
                      <td className="py-2">Prompts &amp; completions (API calls; data not used for training)</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Google LLC (Gemini)</td>
                      <td className="py-2 pr-6">Model inference</td>
                      <td className="py-2">Prompts &amp; completions (API calls; data not used for training)</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-2 pr-6">Stripe, Inc.</td>
                      <td className="py-2 pr-6">Payment processing</td>
                      <td className="py-2">Billing name, email, card token</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                <span className="text-[var(--text)]">Training data commitment:</span> OpenAI, Anthropic,
                and Google each offer API zero-data-training agreements. We use only API access — not
                consumer products — and confirm that your prompts and completions are <strong>never used
                to train or improve their models</strong>. We will update this section if any
                subprocessor arrangement changes, with at least 30&nbsp;days' notice for material changes.
              </p>
            </section>

            {/* ── Cookies ───────────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                6&nbsp;&nbsp;Cookies &amp; tracking
              </h2>
              <p>
                Headmaster uses a minimal set of cookies, all strictly functional:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[15px] mt-3">
                <li>
                  <span className="text-[var(--text)]">Session cookie</span> — authenticates your
                  logged-in session; HttpOnly, Secure, SameSite=Lax.
                </li>
                <li>
                  <span className="text-[var(--text)]">CSRF token cookie</span> — prevents
                  cross-site request forgery; HttpOnly, Secure, SameSite=Lax.
                </li>
                <li>
                  <span className="text-[var(--text)]">Vercel analytics cookie</span> — anonymous,
                  first-party performance telemetry; no cross-site tracking, opted into via
                  anonymised IP processing.
                </li>
              </ul>
              <p className="mt-4">
                We do not use advertising cookies, remarketing pixels, or third-party tracking
                identifiers. No cookie on this site qualifies as a "targeting" cookie under ePrivacy
                or CCPA definitions.
              </p>
            </section>

            {/* ── GDPR Rights ───────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                7&nbsp;&nbsp;Your rights (GDPR &amp; UK GDPR)
              </h2>
              <p>
                If you are a data subject in the EEA or the UK, you have the following rights regarding
                your personal data:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[15px] mt-3">
                <li>
                  <span className="text-[var(--text)]">Access (Art.&nbsp;15):</span> obtain confirmation
                  of whether we process your data and a copy of that data.
                </li>
                <li>
                  <span className="text-[var(--text)]">Rectification (Art.&nbsp;16):</span> correct
                  inaccurate personal data or complete incomplete records.
                </li>
                <li>
                  <span className="text-[var(--text)]">Erasure (Art.&nbsp;17):</span> request deletion
                  of your personal data, subject to legal retention obligations. Workspace content is
                  purged within 90&nbsp;days of erasure confirmation. Audit metadata (which does not
                  include prompt/completion content) is retained for its full 3-year period.
                </li>
                <li>
                  <span className="text-[var(--text)]">Portability (Art.&nbsp;20):</span> receive your
                  personal data in a structured, commonly used, machine-readable format. We support JSON
                  and CSV exports for all workspace content and account data.
                </li>
                <li>
                  <span className="text-[var(--text)]">Restriction (Art.&nbsp;18):</span> request that
                  we limit processing of your data while a dispute is resolved.
                </li>
                <li>
                  <span className="text-[var(--text)]">Objection (Art.&nbsp;21):</span> object to
                  processing based on legitimate interest; we will cease unless compelling grounds
                  exist.
                </li>
                <li>
                  <span className="text-[var(--text)]">Withdrawal of consent (Art.&nbsp;7(3)):</span>{' '}
                  where processing is based on consent, you may withdraw it at any time without
                  affecting the lawfulness of processing carried out before withdrawal.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact{" "}
                <a
                  href="mailto:privacy@gcaplabs.com"
                  className="text-[var(--text)] underline underline-offset-2"
                >
                  privacy@gcaplabs.com
                </a>
                . We will respond within 30&nbsp;days. You also have the right to lodge a complaint
                with the supervisory authority in your jurisdiction.
              </p>
            </section>

            {/* ── CCPA ──────────────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                8&nbsp;&nbsp;CCPA compliance
              </h2>
              <p>
                Under the California Consumer Privacy Act (Cal. Civ. Code §&nbsp;1798.100 et seq.) and
                the California Privacy Rights Act, California residents have the right to:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[15px] mt-3">
                <li>
                  <span className="text-[var(--text)]">Know:</span> request disclosure of the categories
                  and specific pieces of personal information we have collected, the purposes, and the
                  categories of third parties to whom it was disclosed.
                </li>
                <li>
                  <span className="text-[var(--text)]">Delete:</span> request deletion of personal
                  information we have collected, subject to exceptions for legal compliance, security,
                  and bug resolution.
                </li>
                <li>
                  <span className="text-[var(--text)]">Opt out of sale:</span> we do not sell, rent, or
                  share personal information for monetary or other valuable consideration. No opt-out
                  is necessary because no sale occurs.
                </li>
                <li>
                  <span className="text-[var(--text)]">Non-discrimination:</span> we will not
                  discriminate against any consumer for exercising CCPA rights.
                </li>
              </ul>
              <p className="mt-4">
                Categories of personal information collected in the preceding 12&nbsp;months: identifiers
                (name, email), commercial information (billing records), internet activity (page views,
                feature usage), and professional information (organisation, role). We collect no
                sensitive personal information as defined by the CCPA, except to the extent a user
                voluntarily includes it in workspace content.
              </p>
              <p className="mt-3">
                To submit a CCPA request, email{" "}
                <a
                  href="mailto:privacy@gcaplabs.com"
                  className="text-[var(--text)] underline underline-offset-2"
                >
                  privacy@gcaplabs.com
                </a>{" "}
                or call +1&nbsp;(415)&nbsp;888-3848. We will verify your identity and respond within
                45&nbsp;days.
              </p>
            </section>

            {/* ── Data Security ─────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                9&nbsp;&nbsp;Data security
              </h2>
              <p>
                We implement industry-standard technical and organisational measures to protect your data:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-[15px] mt-3">
                <li>
                  <span className="text-[var(--text)]">Encryption in transit:</span> TLS&nbsp;1.3 for all
                  network connections.
                </li>
                <li>
                  <span className="text-[var(--text)]">Encryption at rest:</span> AES-256 for databases
                  and object storage; per-key encryption with unique salts for API keys.
                </li>
                <li>
                  <span className="text-[var(--text)]">Access control:</span> role-based permissions,
                  principle of least privilege, and mandatory multi-factor authentication for
                  administrative access.
                </li>
                <li>
                  <span className="text-[var(--text)]">Sandboxed execution:</span> agent code runs in
                  isolated container environments with restricted network egress.
                </li>
                <li>
                  <span className="text-[var(--text)]">Audit logging:</span> immutable, append-only logs
                  for all mutating actions.
                </li>
              </ul>
              <p className="mt-4">
                No system is completely secure. While we work to protect your information, we cannot
                guarantee absolute security. Enterprise customers may request our SOC&nbsp;2 Type&nbsp;II
                report and security questionnaire by contacting{" "}
                <a
                  href="mailto:security@gcaplabs.com"
                  className="text-[var(--text)] underline underline-offset-2"
                >
                  security@gcaplabs.com
                </a>
                .
              </p>
            </section>

            {/* ── International Transfers ────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                10&nbsp;&nbsp;International data transfers
              </h2>
              <p>
                GCAP Labs is headquartered in the United States. Data may be processed in the US, EU,
                or other jurisdictions where our subprocessors operate. For transfers of EEA personal
                data to the US, we rely on the EU-US Data Privacy Framework (adequacy decision) and
                Standard Contractual Clauses (SCCs) as a supplementary measure. A copy of our SCCs is
                available to enterprise customers upon request.
              </p>
            </section>

            {/* ── Children ──────────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                11&nbsp;&nbsp;Children's privacy
              </h2>
              <p>
                Headmaster is not intended for use by individuals under the age of 16. We do not
                knowingly collect personal information from children. If we discover that we have
                accidentally received personal data from a child under 16, we will delete it promptly.
                Contact{" "}
                <a
                  href="mailto:privacy@gcaplabs.com"
                  className="text-[var(--text)] underline underline-offset-2"
                >
                  privacy@gcaplabs.com
                </a>{" "}
                if you believe this has occurred.
              </p>
            </section>

            {/* ── Changes ──────────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                12&nbsp;&nbsp;Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be notified
                by email to workspace administrators and by a notice banner on the Service at least
                30&nbsp;days before they take effect. Continued use of the Service after changes become
                effective constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* ── Contact ───────────────────────────────────────── */}
            <section>
              <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
                13&nbsp;&nbsp;Contact
              </h2>
              <p>
                For privacy inquiries, data-subject requests, or questions about this policy:
              </p>
              <p className="mt-3">
                <strong className="text-[var(--text)]">Email:</strong>{" "}
                <a
                  href="mailto:privacy@gcaplabs.com"
                  className="text-[var(--text)] underline underline-offset-2"
                >
                  privacy@gcaplabs.com
                </a>
              </p>
              <p className="mt-1">
                <strong className="text-[var(--text)]">Data Protection Officer:</strong>{" "}
                privacy@gcaplabs.com
              </p>
              <p className="mt-1">
                <strong className="text-[var(--text)]">Postal address:</strong>{" "}
                GCAP Labs, Inc., Attn: Privacy, San Francisco, CA 94105, United States
              </p>
              <p className="mt-4">
                Our EU representative for GDPR purposes may be contacted at{" "}
                <a
                  href="mailto:eu-rep@gcaplabs.com"
                  className="text-[var(--text)] underline underline-offset-2"
                >
                  eu-rep@gcaplabs.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <Link href="/security" className="hover:text-[var(--text)] transition-colors">Security</Link>
          <Link href="/changelog" className="hover:text-[var(--text)] transition-colors">Changelog</Link>
          <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--text)] transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}