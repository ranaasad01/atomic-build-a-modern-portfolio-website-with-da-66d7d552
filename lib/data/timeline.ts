export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "achievement";
  tags?: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Full-Stack Engineer",
    company: "Vercel",
    description:
      "Leading the development of Next.js-based SaaS products. Architected a multi-tenant platform serving 50k+ users, reduced page load times by 60%, and mentored a team of 5 engineers.",
    type: "work",
    tags: ["Next.js", "TypeScript", "AWS", "Team Lead"],
  },
  {
    year: "2023",
    title: "Open Source Contributor",
    company: "Prism UI (Personal Project)",
    description:
      "Built and launched Prism UI, an open-source React component library that gained 2,400+ GitHub stars and 180+ npm weekly downloads within 6 months of launch.",
    type: "achievement",
    tags: ["React", "Open Source", "TypeScript", "Storybook"],
  },
  {
    year: "2022",
    title: "Full-Stack Developer",
    company: "Stripe",
    description:
      "Developed internal tooling and merchant-facing dashboard features. Improved developer onboarding flow, reducing time-to-first-payment by 40%. Worked closely with design and product teams.",
    type: "work",
    tags: ["React", "Go", "PostgreSQL", "Payments"],
  },
  {
    year: "2021",
    title: "Frontend Engineer",
    company: "Figma",
    description:
      "Contributed to the Figma web editor and plugin ecosystem. Built performance-critical canvas rendering features and improved accessibility across the core product.",
    type: "work",
    tags: ["TypeScript", "WebGL", "Canvas API", "Accessibility"],
  },
  {
    year: "2020",
    title: "B.S. Computer Science",
    company: "UC Berkeley",
    description:
      "Graduated with honors (GPA 3.9). Specialized in Human-Computer Interaction and Distributed Systems. Senior thesis on adaptive UI systems using machine learning.",
    type: "education",
    tags: ["HCI", "Distributed Systems", "ML", "Honors"],
  },
  {
    year: "2019",
    title: "Software Engineering Intern",
    company: "Airbnb",
    description:
      "Built React components for the host dashboard, improving listing management UX. Shipped a feature used by 500k+ hosts globally. Won internal hackathon for an accessibility improvement tool.",
    type: "work",
    tags: ["React", "Ruby on Rails", "A/B Testing"],
  },
  {
    year: "2018",
    title: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Designed and developed websites and web apps for 20+ clients across e-commerce, healthcare, and fintech. Built a reputation for clean code, on-time delivery, and exceptional design quality.",
    type: "work",
    tags: ["React", "WordPress", "Shopify", "Freelance"],
  },
];
