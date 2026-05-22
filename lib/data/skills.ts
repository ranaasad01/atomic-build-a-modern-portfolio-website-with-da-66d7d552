export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillBars: Skill[] = [
  { name: "TypeScript / JavaScript", level: 95, category: "Frontend" },
  { name: "React & Next.js", level: 93, category: "Frontend" },
  { name: "Node.js & Express", level: 88, category: "Backend" },
  { name: "UI/UX Design", level: 82, category: "Design" },
  { name: "PostgreSQL & Prisma", level: 85, category: "Backend" },
  { name: "AWS & DevOps", level: 78, category: "Infrastructure" },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "GraphQL",
      "Redux",
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    name: "Mobile",
    icon: "📱",
    skills: [
      "React Native",
      "Expo",
      "iOS (Swift)",
      "Android (Kotlin)",
      "App Store",
      "Push Notifications",
    ],
  },
  {
    name: "Design",
    icon: "✏️",
    skills: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "User Research",
      "Accessibility",
      "Motion Design",
    ],
  },
  {
    name: "Infrastructure",
    icon: "☁️",
    skills: [
      "AWS",
      "Vercel",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Monitoring",
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "VS Code",
      "Storybook",
      "Jest",
      "Playwright",
      "Postman",
      "Linear",
      "Notion",
    ],
  },
];
