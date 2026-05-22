export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "oss" | "design";
  github?: string;
  live?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "nexus-dashboard",
    title: "Nexus Analytics Dashboard",
    description:
      "A real-time analytics platform with interactive charts, custom widgets, and multi-tenant support for SaaS businesses.",
    longDescription:
      "Built a comprehensive analytics dashboard that processes millions of events per day. Features include real-time WebSocket updates, customizable widget layouts, role-based access control, and white-label support for enterprise clients.",
    image: "https://cdn.dribbble.com/userupload/37149546/file/original-5fdb31fc70832bb5fdd94b2070f1eb0b.jpg?format=webp&resize=400x300&vertical=center",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts", "Tailwind"],
    category: "web",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: 2024,
  },
  {
    id: "orbit-app",
    title: "Orbit — Task Management App",
    description:
      "A beautifully designed productivity app with kanban boards, time tracking, and AI-powered task prioritization.",
    longDescription:
      "Orbit reimagines task management with a focus on flow state. Features drag-and-drop kanban boards, Pomodoro timer integration, AI suggestions powered by GPT-4, and seamless calendar sync.",
    image: "https://kanbanflow.com/img/screenshots/KanbanFlowBoard_1000.png?1cba8",
    tags: ["React Native", "Expo", "Supabase", "OpenAI", "TypeScript"],
    category: "mobile",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: 2024,
  },
  {
    id: "prism-ui",
    title: "Prism UI — Component Library",
    description:
      "An open-source React component library with 60+ accessible components, dark mode support, and Figma design tokens.",
    longDescription:
      "Prism UI is a production-ready component library built with accessibility at its core. Every component follows WAI-ARIA guidelines, supports keyboard navigation, and ships with comprehensive TypeScript types.",
    image: "https://uxpin.com/studio/wp-content/themes/uxpin-juggernaut/img/cta-banner-merge.png",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables"],
    category: "oss",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: 2023,
  },
  {
    id: "echo-social",
    title: "Echo — Social Audio Platform",
    description:
      "A social platform for sharing short audio clips, with real-time transcription, waveform visualization, and discovery feeds.",
    longDescription:
      "Echo brings audio-first social networking to the web. Users can record, edit, and share audio clips up to 3 minutes. Features include AI transcription, waveform visualization, and a personalized discovery algorithm.",
    image: "https://cdn.prod.website-files.com/685be7dcd32275d383065239/685be7dcd32275d383067ce2_Blog-Cover-2022_03_A-Guide-to-Generate-Audio-Waveform-Videos-for-Social-Media.webp",
    tags: ["Next.js", "WebAudio API", "AWS S3", "Redis", "Socket.io"],
    category: "web",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: 2023,
  },
  {
    id: "forge-cli",
    title: "Forge CLI",
    description:
      "A developer CLI tool for scaffolding full-stack projects with opinionated defaults, 15+ templates, and plugin support.",
    longDescription:
      "Forge CLI reduces project setup from hours to seconds. Choose from 15+ battle-tested templates, configure your stack interactively, and get a production-ready project with CI/CD, testing, and deployment configured out of the box.",
    image: "https://uploads.toptal.io/blog/image/125259/toptal-blog-image-1516868261509-87c208749f5430932e4541a0a71033aa.png",
    tags: ["Node.js", "TypeScript", "Commander.js", "Inquirer", "Handlebars"],
    category: "oss",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: 2023,
  },
  {
    id: "lumina-ecommerce",
    title: "Lumina — E-Commerce Platform",
    description:
      "A headless e-commerce storefront with blazing-fast performance, AR product previews, and a seamless checkout flow.",
    longDescription:
      "Lumina achieves perfect Lighthouse scores through aggressive optimization. Features include AR product try-on via WebXR, one-click checkout, inventory management, and a custom CMS for product content.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*rDN1RbUDmaoNHiKfXSURog.png",
    tags: ["Next.js", "Shopify", "Three.js", "WebXR", "Stripe"],
    category: "web",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: 2022,
  },
  {
    id: "pulse-health",
    title: "Pulse — Health Tracker",
    description:
      "A cross-platform health tracking app integrating with Apple Health and Google Fit for unified wellness insights.",
    longDescription:
      "Pulse aggregates health data from multiple sources and surfaces actionable insights. Features include trend analysis, goal setting, medication reminders, and sharing reports with healthcare providers.",
    image: "https://images.ctfassets.net/lzny33ho1g45/3L77mMruOrEOWxyDmcKkEp/2e1d7aff0d998602ddaa18fad2bb75fb/image2.jpg",
    tags: ["React Native", "HealthKit", "Google Fit", "D3.js", "Firebase"],
    category: "mobile",
    github: "https://github.com",
    featured: false,
    year: 2022,
  },
  {
    id: "atlas-design",
    title: "Atlas Design System",
    description:
      "A comprehensive design system with Figma components, design tokens, and auto-generated documentation from code.",
    longDescription:
      "Atlas bridges the gap between design and development. The system includes 200+ Figma components, a token pipeline that syncs to code, automated visual regression testing, and living documentation.",
    image: "https://s3-alpha.figma.com/hub/file/6247762682/2afcc689-16cd-4ce4-86ca-958944ce350b-cover.png",
    tags: ["Figma", "Style Dictionary", "Storybook", "Chromatic", "TypeScript"],
    category: "design",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    year: 2022,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const categories = ["all", "web", "mobile", "oss", "design"] as const;
