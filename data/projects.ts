export interface DetailSection {
  title: string;
  description: string;
  image: string;
}

export interface ProjectData {
  category: string;
  title: string;
  src: string;
  tags: string[];
  overview: string;
  details: DetailSection[];
  githubUrl?: string;
  webUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    category: "Education",
    title: "Al Madeena Islamic School",
    src: "https://res.cloudinary.com/imagehandlers/image/upload/v1769623551/image_4_ur4tyk.png",
    tags: ["Next.js 15", "React 19", "Tailwind v4", "Prisma"],
    overview: "A modern, dynamic school portal combining a high-performance public landing page with a robust Admin CMS. Built to manage academic records, news, and galleries in real-time.",
    details: [
      {
        title: "Dynamic Content Management",
        description: "Features a custom-built secure Admin Dashboard allowing staff to easily manage news articles, gallery uploads, staff profiles, and academic achievements without coding.",
        image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769623999/image_5_s58ndx.png"
      },
      {
        title: "Bleeding Edge Tech Stack",
        description: "Powered by Next.js 15 App Router and React 19 Server Components for lightning-fast SEO performance. Styled with the new Tailwind CSS v4 engine.",
        image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769624002/image_6_ckyawf.png"
      }
    ],
    githubUrl: "https://github.com/rizasaputra29/madeena-landing-page",
    webUrl: "https://almadeenaislamicschool.sch.id"
  },
  {
    category: "SaaS",
    title: "School Finance System",
    src: "https://res.cloudinary.com/imagehandlers/image/upload/v1769624834/cf32c50f-4185-42cc-9e66-d9d994efe5ae.png",
    tags: ["Next.js 16", "Prisma", "Tailwind v4", "PostgreSQL"],
    overview: "A comprehensive financial management system tailored for educational institutions. Streamlines tuition billing, expense tracking, and generates automated financial reports.",
    details: [
      {
        title: "Smart Billing & Tuition",
        description: "Automated monthly billing generation for students with real-time payment tracking. Supports various payment categories (SPP, Uniforms, Books) and digital receipt generation.",
        image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769624886/272bd204-4956-4754-99b3-1efb37ad2a69.png"
      },
      {
        title: "Financial Analytics",
        description: "Real-time cashflow visualization using Recharts. Features automated generation of general ledgers, income statements, and exportable reports (PDF/Excel) for administrative auditing.",
        image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769624902/b2b54f50-659a-4f0b-88ee-0f9dd8c47d05.png"
      }
    ],
    githubUrl: "https://github.com/rizasaputra29/school-finance",
    webUrl: "https://school-finance-mu.vercel.app/"
  },
  {
    category: "Fintech",
    title: "CashMap",
    src: "https://res.cloudinary.com/imagehandlers/image/upload/v1769625362/e4708246-94bb-47cc-bee3-c596b6b6f314.png",
    tags: ["Next.js 16", "PWA", "Prisma", "PostgreSQL"],
    overview: "A progressive web app (PWA) designed for personal finance mastery. Features a dynamic 'Safe-to-Spend' algorithm that adjusts daily budget limits in real-time based on spending habits.",
    details: [
      {
        title: "Dynamic Budgeting Engine",
        description: "Core logic calculates a daily spending limit that adapts automatically. If you overspend today, tomorrow's limit adjusts down to keep you on track for the month.",
        image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769625384/6d293e31-93c4-4410-bae5-75a0e8a17caf.png"
      },
      {
        title: "Native-Like PWA",
        description: "Built as a fully installable Progressive Web App for iOS and Android. Provides an app-like experience with offline capabilities, smooth gestures, and biometric-ready security.",
        image: "https://res.cloudinary.com/imagehandlers/image/upload/v1769625412/d83a5941-0583-447d-b6b6-73b37ed6d971.png"
      }
    ],
    githubUrl: "https://github.com/rizasaputra29/cashmap",
    webUrl: "https://cash-map.vercel.app/"
  }
];
