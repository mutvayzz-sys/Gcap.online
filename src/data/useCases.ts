export interface UseCase {
  title: string;
  description: string;
  /** Optional vertical label for balanced presentation */
  vertical?: string;
}

export const useCases: readonly UseCase[] = [
  {
    title: "Schools & Education",
    description: "Progress reports, parent updates, lesson plans, quiz generation, attendance summaries, student notes, and admin workflows.",
    vertical: "Education",
  },
  {
    title: "Small Businesses",
    description: "Client updates, proposals, inbox summaries, recurring reports, operations checklists, and document analysis.",
    vertical: "Business",
  },
  {
    title: "Agencies & Creative",
    description: "Campaign briefs, research, content drafts, client reporting, outreach, asset planning, and task coordination.",
    vertical: "Agencies",
  },
  {
    title: "Technical Teams",
    description: "Code review, debugging, documentation, release notes, repo summaries, and development workflows.",
    vertical: "Engineering",
  },
  {
    title: "Real Estate & Services",
    description: "Lead follow-ups, property descriptions, client updates, document summaries, and listing workflows.",
    vertical: "Services",
  },
  {
    title: "Clinics & Professional Services",
    description: "Intake summaries, follow-up drafts, appointment prep, internal notes, and admin support.",
    vertical: "Healthcare",
  },
] as const;
