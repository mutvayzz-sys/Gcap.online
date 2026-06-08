"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";

const EASE = [0.23, 1, 0.32, 1] as const;

interface FormData {
  name: string;
  organization: string;
  email: string;
  role: string;
  platforms: string;
  workflow: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    role: "",
    platforms: "",
    workflow: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Please enter a valid email address";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setStatus("success");
      setFormData({
        name: "",
        organization: "",
        email: "",
        role: "",
        platforms: "",
        workflow: "",
        notes: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] pt-32 pb-20">
      <SiteNav />

      <main className="max-w-[1280px] mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left column — context */}
          <div>
            <h1 className="text-[42px] sm:text-[52px] md:text-[64px] leading-[0.94] tracking-[-0.03em] font-semibold mb-6">Talk to the team</h1>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed mb-12 max-w-[45ch]">
              Headmaster is deployed per organization — configuration, integrations, and pricing are scoped to your workflows. Tell us what you&apos;re trying to automate and we&apos;ll take it from there.
            </p>

            <div className="space-y-8 mt-16">
              <div>
                <p className="text-[13px] tracking-[2.5px] uppercase text-[var(--text-muted)] font-medium mb-2">Response time</p>
                <p className="text-[15px]">We respond within one business day.</p>
              </div>
              <div>
                <p className="text-[13px] tracking-[2.5px] uppercase text-[var(--text-muted)] font-medium mb-2">Timeline</p>
                <p className="text-[15px]">Deployments typically take 1–2 weeks from first call to live.</p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <motion.form onSubmit={handleSubmit} className="space-y-5">
            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-[#d4edda] border border-[#c3e6cb] text-[#155724] text-[14px]">
                ✓ Got it — we&apos;ll be in touch within 24 hours.
              </motion.div>
            )}

            {status === "error" && Object.keys(errors).length > 0 && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-[#f8d7da] border border-[#f5c6cb] text-[#721c24] text-[14px]">
                <p className="font-medium mb-2">Please fix the following:</p>
                <ul className="list-disc list-inside space-y-1">
                  {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>{message}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                className="field w-full"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "loading"}
              />
              {errors.name && <p className="text-[12px] text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                aria-required="true"
                className="field w-full"
                value={formData.organization}
                onChange={handleChange}
                disabled={status === "loading"}
              />
              {errors.organization && <p className="text-[12px] text-red-500 mt-1">{errors.organization}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                Work email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                className="field w-full"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
              />
              {errors.email && <p className="text-[12px] text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                Your role / title
              </label>
              <input
                id="role"
                name="role"
                type="text"
                className="field w-full"
                value={formData.role}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            {/* Platforms */}
            <div>
              <label htmlFor="platforms" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                Which platforms does your team use?
              </label>
              <input
                id="platforms"
                name="platforms"
                type="text"
                placeholder="e.g. Slack, Teams, Email, WhatsApp, Other"
                className="field w-full"
                value={formData.platforms}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            {/* Workflow */}
            <div>
              <label htmlFor="workflow" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                What workflow do you want to start with?
              </label>
              <textarea
                id="workflow"
                name="workflow"
                rows={3}
                className="field w-full resize-none"
                value={formData.workflow}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-[13px] text-[var(--text-muted)] mb-2 font-medium">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                placeholder="Optional"
                className="field w-full resize-none"
                value={formData.notes}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-3 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Email"}
              </button>

              <div className="relative">
                <button
                  type="button"
                  disabled
                  className="w-full py-3 rounded-full border border-[var(--border-strong)] text-[var(--text-muted)] text-[15px] font-medium opacity-50 cursor-not-allowed"
                >
                  Chat with us
                </button>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[12px] text-[var(--text-muted)] font-medium">Coming soon</span>
              </div>
            </div>
          </motion.form>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-20 py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="/security" className="hover:text-[var(--text)] transition-colors">
            Security
          </a>
          <a href="/changelog" className="hover:text-[var(--text)] transition-colors">
            Changelog
          </a>
          <a href="/privacy" className="hover:text-[var(--text)] transition-colors">
            Privacy
          </a>
          <a href="/terms" className="hover:text-[var(--text)] transition-colors">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}
