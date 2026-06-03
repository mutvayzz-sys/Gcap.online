"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      org: formData.get("org") as string,
      email: formData.get("email") as string,
      workflow: formData.get("workflow") as string,
      notes: formData.get("notes") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-chapter="contact"
      data-label="Contact"
      className="max-w-[1120px] mx-auto px-8 py-20"
    >
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-[36px] md:text-[52px] tracking-[-1.6px] md:tracking-[-2.2px] font-medium mb-4 leading-tight">
          Deploy Headmaster inside your organization.
        </h2>
        <p className="text-[18px] md:text-[20px] text-[var(--text-muted)]">
          Start with one workflow, connect the right tools, and let your AI workforce learn from real operations.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-[720px] mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cta-name" className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Name</label>
              <input id="cta-name" type="text" name="name" className="field" required aria-required="true" />
            </div>
            <div>
              <label htmlFor="cta-org" className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Organization</label>
              <input id="cta-org" type="text" name="org" className="field" required aria-required="true" />
            </div>
          </div>

          <div>
            <label htmlFor="cta-email" className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Work email</label>
            <input id="cta-email" type="email" name="email" className="field" required aria-required="true" />
          </div>

          <div>
            <label htmlFor="cta-workflow" className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Workflow you want to start with</label>
            <input id="cta-workflow" type="text" name="workflow" className="field" placeholder="e.g. Weekly client reports, Grade 8 progress reports" required aria-required="true" />
          </div>

          <div>
            <label htmlFor="cta-notes" className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Notes (optional)</label>
            <textarea id="cta-notes" name="notes" rows={3} className="field resize-y" placeholder="Tools, team size, specific requirements..." />
          </div>

          {error && (
            <div role="alert" aria-live="polite" className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3" id="form-error">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="submit"
              disabled={loading}
              aria-describedby={error ? "form-error" : undefined}
              data-magnet
              className="flex-1 py-4 rounded-2xl bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Book a Demo"}
            </button>
            <button
              type="button"
              onClick={() => window.open("mailto:waitlist@gcap.online?subject=Headmaster Deployment Discussion", "_blank")}
              className="flex-1 py-4 rounded-2xl border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all"
            >
              Discuss a Deployment
            </button>
          </div>
        </form>
      ) : (
        <div className="max-w-md mx-auto text-center py-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
            <span className="text-green-600 text-2xl" aria-hidden="true">✓</span>
          </div>
          <h3 className="text-2xl tracking-tight font-medium mb-2">Request received.</h3>
          <p className="text-[var(--text-muted)]">
            Thank you. Our team will review your deployment fit and reach out with next steps.
          </p>
          <button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline text-[var(--text-muted)] hover:text-[var(--text)]">
            Submit another request
          </button>
        </div>
      )}
    </section>
  );
}
