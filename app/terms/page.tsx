import Link from "next/link";

export const metadata = {
  title: "Terms of Service — GCAP Labs",
  description: "Terms of service for GCAP Labs and Headmaster.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-2xl mx-auto px-8 py-24">
        <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors mb-10 inline-block">
          ← Back to gcap.online
        </Link>
        <h1 className="text-[40px] tracking-[-1.5px] font-medium mb-4">Terms of Service</h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-sm max-w-none space-y-8 text-[var(--text-muted)] leading-relaxed">
          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Early access</h2>
            <p>
              Headmaster is currently in early access. By joining the waitlist or using the product,
              you agree to provide honest feedback and to use the platform only for lawful purposes.
              Early access is by invitation only and may be withdrawn at any time.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Use of the service</h2>
            <p>
              You may not use Headmaster to generate content that is illegal, harmful, deceptive,
              or in violation of third-party rights. You are responsible for any actions taken by
              agents operating on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Intellectual property</h2>
            <p>
              GCAP Labs retains all rights to the Headmaster platform, infrastructure, and
              underlying models developed by GCAP Labs. Content generated on your behalf
              is owned by you.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Limitation of liability</h2>
            <p>
              The service is provided &ldquo;as is&rdquo; during early access. GCAP Labs is not liable
              for any indirect, incidental, or consequential damages arising from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-medium text-[var(--text)] mb-3 tracking-tight">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:legal@gcap.online" className="text-[var(--text)] underline underline-offset-2">
                legal@gcap.online
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
