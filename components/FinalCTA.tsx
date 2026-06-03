"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production this would POST to an API / workflow trigger
    window.open("mailto:waitlist@gcap.online?subject=Headmaster Deployment Inquiry", "_blank");
    setSubmitted(true);
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
              <label className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Name</label>
              <input type="text" name="name" className="field" required />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Organization</label>
              <input type="text" name="org" className="field" required />
            </div>
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Work email</label>
            <input type="email" name="email" className="field" required />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Workflow you want to start with</label>
            <input type="text" name="workflow" className="field" placeholder="e.g. Weekly client reports, Grade 8 progress reports" required />
          </div>

          <div>
            <label className="block text-xs tracking-widest uppercase text-[var(--text-muted)] mb-1.5">Notes (optional)</label>
            <textarea name="notes" rows={3} className="field resize-y" placeholder="Tools, team size, specific requirements..." />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              type="submit"
              data-magnet
              className="flex-1 py-4 rounded-2xl bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black transition-all"
            >
              Book a Demo
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
