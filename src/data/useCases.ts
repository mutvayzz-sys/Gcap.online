export interface UseCase {
  title: string;
  description: string;
  /** Optional vertical label for balanced presentation */
  vertical?: string;
  /** Route slug for the matching detail page. */
  slug: string;
  /** Buyer-facing savings hook surfaced on list and homepage cards. */
  savings: string;
  /** Number of workflows covered on the detail page. */
  workflowCount: number;
}

export const useCases: readonly UseCase[] = [
  {
    title: "Schools & Education",
    description:
      "Teachers and administrators lose hours turning scattered notes, attendance data, and class context into parent-ready updates. Headmaster assembles the recurring reports, drafts the communications, and keeps staff in the approval loop before anything reaches families.",
    vertical: "Education",
    slug: "education",
    savings: "15–20 hrs/week per teacher",
    workflowCount: 6,
  },
  {
    title: "Small Businesses",
    description:
      "Operators juggling clients, inboxes, proposals, and weekly reporting can hand the repeatable admin layer to Headmaster. The system drafts client updates, prepares checklists, and turns document context into review-ready work without adding headcount.",
    vertical: "Business",
    slug: "business",
    savings: "20–30 hrs/week per team",
    workflowCount: 6,
  },
  {
    title: "Agencies & Creative",
    description:
      "Agency teams need research, campaign briefs, content drafts, and client reports to move faster without losing brand consistency. Headmaster coordinates the background work, drafts the first pass, and routes outputs for human review before clients see them.",
    vertical: "Agencies",
    slug: "agencies",
    savings: "25–35 hrs/week per team",
    workflowCount: 6,
  },
  {
    title: "Technical Teams",
    description:
      "Engineering teams spend valuable build time summarizing repositories, preparing release notes, writing docs, and documenting investigations. Headmaster handles the repeatable development operations layer so engineers can stay focused on shipping.",
    vertical: "Engineering",
    slug: "engineering",
    savings: "10–15 hrs/week per team",
    workflowCount: 6,
  },
  {
    title: "Real Estate & Services",
    description:
      "Agents and service teams move quickly, but leads, listing copy, client updates, and document summaries create constant drag. Headmaster keeps follow-ups and operational drafts moving while people stay responsible for approvals and client judgment.",
    vertical: "Services",
    slug: "services",
    savings: "15–25 hrs/week per agent",
    workflowCount: 6,
  },
  {
    title: "Clinics & Professional Services",
    description:
      "Providers and practice teams need intake summaries, appointment prep, follow-up drafts, and internal notes without weakening review around sensitive information. Headmaster prepares the administrative work and stops patient-adjacent outputs for staff sign-off.",
    vertical: "Healthcare",
    slug: "healthcare",
    savings: "12–18 hrs/week per provider",
    workflowCount: 6,
  },
] as const;
