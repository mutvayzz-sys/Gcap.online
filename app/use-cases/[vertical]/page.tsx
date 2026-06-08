"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import { useCases } from "@/src/data/useCases";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const verticalDetails: Record<string, {
  title: string;
  description: string;
  painPoints: string[];
  workflows: string[];
  savings: string;
  sourceContext: string;
}> = {
  education: {
    title: "Schools & Education",
    description: "Streamline administrative workflows, automate parent communication, and create personalized learning experiences",
    painPoints: [
      "Manual progress report compilation from multiple sources",
      "Time-consuming parent communication and updates",
      "Repetitive lesson planning across classes",
      "Exam and quiz administration overhead",
    ],
    workflows: [
      "Automated progress reports from student data and teacher notes",
      "Weekly parent updates and attendance summaries",
      "Quiz and assessment generation from learning standards",
      "Parent communication workflows with automated scheduling",
      "Student performance analysis and intervention recommendations",
      "Administrative task coordination across departments",
    ],
    savings: "15–20 hours per week per teacher",
    sourceContext: "Based on beta pilot results from automating progress reports, parent updates, and recurring classroom administration.",
  },
  business: {
    title: "Small Businesses",
    description: "Automate client communication, proposal generation, and operational workflows to scale without adding headcount",
    painPoints: [
      "Repetitive client communication and updates",
      "Manual proposal and document generation",
      "Email inbox management and response delays",
      "Recurring reports and operational checklists",
    ],
    workflows: [
      "Automated client updates and weekly summaries",
      "Proposal generation from templates and project data",
      "Inbox prioritization and draft responses",
      "Recurring operational checklists and reminders",
      "Invoice follow-ups and payment tracking",
      "Document analysis and contract summaries",
    ],
    savings: "20–30 hours per week per team",
    sourceContext: "Estimated from automating client updates, proposal drafts, inbox triage, and recurring operations workflows.",
  },
  agencies: {
    title: "Agencies & Creative",
    description: "Accelerate campaign planning, content creation, and client reporting while maintaining brand consistency",
    painPoints: [
      "Campaign briefing and research compilation",
      "Content draft creation across channels",
      "Client reporting and performance analysis",
      "Asset and project coordination overhead",
    ],
    workflows: [
      "Campaign brief generation from insights and goals",
      "Social media and blog content drafting",
      "Client performance reports and analytics summaries",
      "Content calendar management and planning",
      "Lead outreach and follow-up automation",
      "Project coordination across teams and clients",
    ],
    savings: "25–35 hours per week per team",
    sourceContext: "Based on beta pilot results from campaign briefs, content drafting, client reporting, and project coordination.",
  },
  engineering: {
    title: "Technical Teams",
    description: "Automate code review, documentation, and development workflows to keep teams focused on building",
    painPoints: [
      "Time-consuming code review and documentation",
      "Manual release note preparation",
      "Repository and commit analysis overhead",
      "Debugging and investigation documentation",
    ],
    workflows: [
      "Automated code review comments and suggestions",
      "Technical documentation generation from code",
      "Release notes and changelog automation",
      "Repository summaries and insights",
      "Error log analysis and debugging assistance",
      "Development workflow coordination and status updates",
    ],
    savings: "10–15 hours per week per team",
    sourceContext: "Estimated from automating release notes, documentation drafts, repository summaries, and investigation writeups.",
  },
  services: {
    title: "Real Estate & Services",
    description: "Automate lead follow-up, property descriptions, and client communication at scale",
    painPoints: [
      "Manual lead follow-up and nurturing",
      "Property description writing and photography captions",
      "Client communication delays and inconsistency",
      "Document and contract processing overhead",
    ],
    workflows: [
      "Automated lead follow-up and qualification",
      "Property description and listing generation",
      "Client updates and milestone notifications",
      "Document summarization and contract review",
      "Appointment scheduling and confirmation",
      "Market analysis and competitive summaries",
    ],
    savings: "15–25 hours per week per agent",
    sourceContext: "Estimated from automating lead follow-up, listing drafts, client updates, and document summarization.",
  },
  healthcare: {
    title: "Clinics & Professional Services",
    description: "Streamline patient intake, follow-up communication, and administrative workflows while maintaining compliance",
    painPoints: [
      "Patient intake form processing and summarization",
      "Appointment preparation and note review",
      "Follow-up communication and scheduling",
      "Administrative documentation overhead",
      "Ensuring staff-reviewed output before anything patient-facing leaves the system.",
    ],
    workflows: [
      "Patient intake summarization and flagging",
      "Appointment preparation and history review",
      "Follow-up drafts and scheduling",
      "Internal note taking and documentation",
      "Referral coordination and communication",
      "Insurance and billing administration assistance",
    ],
    savings: "12–18 hours per week per provider",
    sourceContext: "Estimated from automating intake summaries, appointment prep, follow-up drafts, and internal documentation.",
  },
};

export default function UseCasePage() {
  const params = useParams();
  const verticalKey = params.vertical as string;
  const details = verticalDetails[verticalKey];
  const useCase = useCases.find((uc) => uc.slug === verticalKey);

  if (!details) {
    notFound();
  }

  const t = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
            <motion.div {...t(0)}>
              <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[var(--text-muted)] hover:text-[var(--text)] mb-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]">
                <span>← Back to home</span>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Use Case
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                {details.title}
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug">
                {details.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
                data-magnet
              >
                Deploy for your organization
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <h2 className="text-[36px] md:text-[48px] font-semibold tracking-[-1.2px] mb-4">
              What&apos;s holding you back
            </h2>
            <p className="text-[18px] text-[var(--text-muted)] max-w-2xl">
              These are the workflows teams in your industry spend hours on manually.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {details.painPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8"
              >
                <p className="text-[18px] text-[var(--text)] leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <h2 className="text-[36px] md:text-[48px] font-semibold tracking-[-1.2px] mb-4">
              What Headmaster handles
            </h2>
            <p className="text-[18px] text-[var(--text-muted)] max-w-2xl">
              Workflows automated in beta. Executed consistently with review gates where sensitive work needs sign-off.
            </p>
          </motion.div>

          <div className="space-y-4">
            {details.workflows.map((workflow, i) => (
              <motion.div
                key={workflow}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="flex gap-4 items-start p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-[17px] text-[var(--text)]">{workflow}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[#111111] text-[#F9F7F3] rounded-3xl p-12 md:p-16 text-center"
          >
            <p className="text-[15px] tracking-widest uppercase text-white/60 mb-4">Time Savings</p>
            <h2 className="text-[48px] md:text-[64px] font-semibold tracking-[-2px] mb-4 leading-tight">
              {details.savings}
            </h2>
            <p className="text-[20px] text-white/80 mb-3 max-w-2xl mx-auto">
              That&apos;s time freed up for strategic work instead of repetitive tasks.
            </p>
            <p className="text-[14px] text-white/55 mb-8 max-w-2xl mx-auto">
              {useCase?.savingsSource ?? details.sourceContext}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#F9F7F3] text-[#111111] text-[15px] font-medium hover:bg-white active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
              data-magnet
            >
              Start your deployment
            </Link>
          </motion.div>
        </section>

        {verticalKey === "healthcare" && (
          <section className="max-w-[1280px] mx-auto px-8 py-16 border-b border-[var(--border)]">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 md:p-10">
              <p className="text-[13px] tracking-[0.16em] uppercase text-[var(--text-muted)] mb-3">Privacy &amp; review</p>
              <h2 className="text-[28px] md:text-[36px] font-semibold tracking-[-1px] mb-4">Patient-adjacent output stays gated.</h2>
              <p className="text-[17px] text-[var(--text-muted)] leading-relaxed max-w-3xl mb-6">
                All patient-adjacent drafts require staff approval before release. Headmaster can prepare intake summaries, follow-up messages, and internal notes, but nothing patient-facing leaves without human sign-off.
              </p>
              <Link href="/security" className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)] hover:gap-3 transition-all">
                See how Headmaster handles sensitive data <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* Other use cases */}
        <section className="max-w-[1280px] mx-auto px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-[-1px] mb-8">
              Explore other use cases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases
                .filter((uc) => uc.slug !== params.vertical)
                .slice(0, 4)
                .map((uc) => {
                  const ucVertical = uc.slug;
                  return (
                    <Link
                      key={uc.title}
                      href={`/use-cases/${ucVertical}`}
                      className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 hover:border-[var(--border-strong)] transition-all"
                    >
                      <h3 className="text-[20px] font-semibold mb-2 group-hover:text-[var(--text-muted)] transition-colors">{uc.title}</h3>
                      <p className="text-[15px] text-[var(--text-muted)]">{uc.description}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-[1120px] mx-auto px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-[36px] md:text-[48px] tracking-[-1.6px] md:tracking-[-2.2px] font-semibold mb-6 leading-tight">
                Ready to automate {details.title.toLowerCase()}?
              </h2>
              <p className="text-[18px] md:text-[20px] text-[var(--text-muted)] mb-8">
                Deploy Headmaster in your environment in under an hour. Start with one workflow, expand from there.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
                data-magnet
              >
                Schedule a deployment call
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="/security" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Security</a>
          <a href="/changelog" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Changelog</a>
          <a href="/privacy" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Privacy</a>
          <a href="/terms" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Terms</a>
        </div>
      </footer>
    </div>
  );
}
