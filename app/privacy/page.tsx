import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — GCAP Labs",
  description: "How GCAP Labs handles your data.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-2xl mx-auto px-8 py-24">
        <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-10 inline-block">
          ← Back to gcap.online
        </Link>
        <h1 className="text-[40px] tracking-[-1.5px] font-medium mb-4">Privacy Policy</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-sm max-w-none space-y-8 text-[var(--text-muted)] leading-relaxed">
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">What we collect</h2>
            <p>
              When you apply for early access, we collect your name, email address, company or school name,
              and the details you provide in your application. We use this information only to evaluate
              your application and communicate about Headmaster.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">How we use it</h2>
            <p>
              We use your information to review and respond to your early-access application,
              communicate updates about Headmaster, and improve the product. We do not sell
              your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Data security</h2>
            <p>
              We use industry-standard security practices to protect your information. Early-access
              members receive detailed security documentation on request.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Your rights</h2>
            <p>
              You may request deletion of your data at any time by emailing{" "}
              <a href="mailto:privacy@gcap.online" className="text-[var(--text)] underline underline-offset-2">
                privacy@gcap.online
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a href="mailto:privacy@gcap.online" className="text-[var(--text)] underline underline-offset-2">
                privacy@gcap.online
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
