export interface SchoolWorkflow {
  title: string;
  description: string;
}

export const schoolWorkflows: readonly SchoolWorkflow[] = [
  {
    title: "Weekly Parent Updates",
    description: "Draft parent-friendly updates from teacher notes, grades, and attendance context.",
  },
  {
    title: "Student Progress Reports",
    description: "Compile progress summaries, comments, strengths, concerns, and next steps.",
  },
  {
    title: "Lesson Planning",
    description: "Generate structured lesson plans, quizzes, activities, and follow-up material.",
  },
  {
    title: "Admin Support",
    description: "Summarize meetings, prepare notices, draft forms, and organize recurring school tasks.",
  },
  {
    title: "Approval Before Sending",
    description: "Teachers or admins review every message before it leaves the system.",
  },
] as const;
