/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export const metadata = {
  title: "Terms of Service — GCAP Labs",
  description: "Terms of service for Headmaster by GCAP Labs.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main className="max-w-2xl mx-auto px-8 pt-40 pb-24">
        <h1 className="text-[40px] tracking-[-1.5px] font-medium mb-4">Terms of Service</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">
          Last updated: June 8, 2026
        </p>

        <div className="space-y-10 text-[var(--text-muted)] leading-relaxed">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Headmaster
              platform, including all associated web interfaces, APIs, documentation, and services
              (collectively, the "Service") provided by GCAP Labs, Inc. ("GCAP Labs," "we," "us," or
              "our"). By accessing or using the Service, you agree to be bound by these Terms. If you
              are using the Service on behalf of an organization, you represent and warrant that you
              have the authority to bind that organization to these Terms, and "you" will refer to
              that organization.
            </p>
            <p className="mt-3">
              If you do not agree to all of these Terms, you may not access or use the Service. Your
              continued use of the Service after any modifications to these Terms constitutes your
              acceptance of the revised Terms.
            </p>
          </section>

          {/* 2. Account & Workspace Creation */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              2. Account &amp; Workspace Creation
            </h2>
            <p>
              To use the Service, you must create an account and, where applicable, a workspace. You
              agree to: (a) provide accurate, current, and complete information during registration;
              (b) maintain and promptly update your account information to keep it accurate; (c)
              maintain the security and confidentiality of your login credentials; and (d) accept
              responsibility for all activities that occur under your account.
            </p>
            <p className="mt-3">
              Workspaces are the organizational unit within Headmaster. A workspace owner
              (administrator) may invite other users to join their workspace. The workspace owner is
              responsible for all activity within that workspace, including actions taken by invited
              members and by automated agents operating on behalf of the workspace. You must not share
              your account credentials with any third party.
            </p>
          </section>

          {/* 3. Acceptable Use Policy */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              3. Acceptable Use Policy
            </h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5">
              <li>Violate any applicable local, state, national, or international law or regulation;</li>
              <li>Generate, distribute, or store content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable;</li>
              <li>Infringe upon the intellectual property rights, privacy rights, or any other rights of any third party;</li>
              <li>Transmit any material that contains viruses, malware, or any other destructive or disruptive code;</li>
              <li>Attempt to gain unauthorized access to any part of the Service, other users' accounts, or any systems or networks connected to the Service;</li>
              <li>Interfere with or disrupt the integrity or performance of the Service;</li>
              <li>Use the Service to send unsolicited or unauthorized commercial communications;</li>
              <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code or underlying algorithms of the Service;</li>
              <li>Use the Service to develop a competing product or service;</li>
              <li>Resell, sublicense, lease, or otherwise transfer your access to the Service without our prior written consent.</li>
            </ul>
            <p className="mt-3">
              You are responsible for the actions of any agents, automations, or workflows operating
              within your workspace. GCAP Labs reserves the right to suspend or terminate access for
              any violation of this policy, at its sole discretion.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              4. Intellectual Property
            </h2>
            <h3 className="text-[16px] font-medium text-[var(--text)] mt-4 mb-2">4.1 Your Content</h3>
            <p>
              You retain all right, title, and interest in and to any data, documents, content,
              prompts, configurations, and outputs that you create, upload, or generate through the
              Service ("Customer Data"). GCAP Labs does not claim any ownership interest in your
              Customer Data. You grant us a limited, non-exclusive license to process, store, and
              transmit your Customer Data solely for the purpose of providing the Service to you.
            </p>
            <h3 className="text-[16px] font-medium text-[var(--text)] mt-4 mb-2">4.2 GCAP Labs Platform</h3>
            <p>
              GCAP Labs owns all right, title, and interest in and to the Service, including all
              software, documentation, user interfaces, algorithms, models, infrastructure, branding,
              and any derivative works thereof (collectively, the "Platform"). No part of these
              Terms grants you any right, title, or interest in the Platform, except for the limited
              access rights expressly set forth herein.
            </p>
            <h3 className="text-[16px] font-medium text-[var(--text)] mt-4 mb-2">4.3 Feedback</h3>
            <p>
              If you provide GCAP Labs with any feedback, suggestions, or ideas regarding the Service
              ("Feedback"), you hereby grant GCAP Labs a non-exclusive, perpetual, irrevocable,
              worldwide, royalty-free license to use, modify, and incorporate such Feedback into the
              Platform without any obligation to you.
            </p>
          </section>

          {/* 5. Service Level */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              5. Service Level
            </h2>
            <p>
              You acknowledge that Headmaster is currently offered in a beta, early-access, or
              preview capacity. During this period, the Service is provided on a best-effort basis
              and GCAP Labs makes no guarantees regarding uptime, availability, response time, or
              error rates. No service-level agreement (SLA) is in effect during beta.
            </p>
            <p className="mt-3">
              We strive to provide a reliable service and will use commercially reasonable efforts to
              minimize downtime and address critical issues promptly. Scheduled maintenance windows
              will be communicated in advance when practicable. We may modify, suspend, or
              discontinue any aspect of the Service at any time, including the availability of any
              feature, database, or content, with or without notice.
            </p>
            <p className="mt-3">
              Following general availability, GCAP Labs may publish a separate Service Level Agreement
              that will govern uptime and performance commitments for customers on paid plans.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              6. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GCAP LABS AND ITS OFFICERS,
              DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
              LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, REGARDLESS OF THE
              THEORY OF LIABILITY AND WHETHER GCAP LABS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>
            <p className="mt-3">
              IN NO EVENT SHALL GCAP LABS' AGGREGATE LIABILITY UNDER THESE TERMS EXCEED THE GREATER
              OF (A) THE TOTAL FEES YOU PAID TO GCAP LABS IN THE TWELVE (12) MONTHS PRECEDING THE
              EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100.00).
            </p>
          </section>

          {/* 7. Indemnification */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              7. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless GCAP Labs and its officers,
              directors, employees, agents, and affiliates from and against any and all claims,
              damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out
              of or related to: (a) your use of the Service; (b) your violation of these Terms;
              (c) your violation of any applicable law or the rights of any third party; or (d) any
              content you submit, transmit, or generate through the Service.
            </p>
            <p className="mt-3">
              GCAP Labs reserves the right, at its own expense, to assume the exclusive defense and
              control of any matter subject to indemnification, in which event you will cooperate
              with GCAP Labs' reasonable requests in connection therewith.
            </p>
          </section>

          {/* 8. Termination */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              8. Termination
            </h2>
            <p>
              Either party may terminate these Terms at any time by discontinuing use of the Service
              and providing written notice to the other party. GCAP Labs may suspend or terminate
              your access to the Service at any time, with or without cause, and with or without
              notice, including for violation of these Terms or for conduct that GCAP Labs, in its
              sole discretion, believes is harmful to the Service, its users, or GCAP Labs.
            </p>
            <p className="mt-3">
              Upon termination: (a) all licenses and access rights granted to you under these Terms
              will immediately cease; (b) you must discontinue all use of the Service; and (c) GCAP
              Labs may, but is not obligated to, delete your Customer Data after a reasonable period.
              We recommend that you export your data prior to termination.
            </p>
            <p className="mt-3">
              Sections 4.2, 5, 6, 7, 8, 9, and 10 shall survive any termination or expiration of
              these Terms.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Delaware, United States, without regard to its conflict of law principles. Any
              disputes arising under or in connection with these Terms shall be resolved exclusively
              in the state or federal courts located in Delaware, and each party irrevocably consents
              to the personal jurisdiction and venue of such courts.
            </p>
          </section>

          {/* 10. Modifications to Terms */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              10. Modifications to Terms
            </h2>
            <p>
              GCAP Labs may modify these Terms at any time by posting the revised Terms on this page
              with an updated "Last updated" date. For material changes, we will make commercially
              reasonable efforts to provide notice, such as via email or an in-service notification,
              at least thirty (30) days before the changes take effect. Your continued use of the
              Service after the effective date of any modifications constitutes your binding
              acceptance of the revised Terms.
            </p>
            <p className="mt-3">
              If you do not agree to the modified Terms, you must discontinue use of the Service
              before the changes take effect. GCAP Labs will maintain an archive of prior versions of
              these Terms, which will be made available upon request.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">
              11. Contact
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:legal@gcaplabs.com"
                className="text-[var(--text)] underline underline-offset-2"
              >
                legal@gcaplabs.com
              </a>
              .
            </p>
          </section>
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