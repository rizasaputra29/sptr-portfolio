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
    category: "Fintech",
    title: "Mobile Banking App",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    tags: ["iOS", "SwiftUI", "Security"],
    overview: "A secure and intuitive mobile banking experience created for millions of users. Built with cutting-edge security protocols and a user-first design approach.",
    details: [
      {
        title: "Secure Authentication",
        description: "Implemented biometric authentication with Face ID and Touch ID, along with 2FA for enhanced security. All transactions are encrypted end-to-end.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Real-time Transactions",
        description: "Users can view their balance updates in real-time, with instant notifications for every transaction. The app processes over 10,000 transactions daily.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      }
    ],
    githubUrl: "https://github.com",
    webUrl: "https://example.com"
  },
  {
    category: "SaaS",
    title: "E-Commerce Dashboard",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["React", "Next.js", "Analytics"],
    overview: "Real-time analytics and inventory management for modern e-commerce brands. Helping businesses make data-driven decisions with actionable insights.",
    details: [
      {
        title: "Analytics Dashboard",
        description: "Comprehensive analytics showing sales trends, customer behavior, and conversion rates. Features include custom date ranges and export capabilities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Inventory Management",
        description: "Smart inventory tracking with low-stock alerts, automated reordering suggestions, and multi-warehouse support for seamless operations.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    githubUrl: "https://github.com",
    webUrl: "https://example.com"
  },
  {
    category: "Healthcare",
    title: "Medical Record System",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["HIPAA", "Cloud", "Data"],
    overview: "Secure patient data management system ensuring HIPAA compliance and ease of use. Trusted by healthcare providers to manage sensitive medical information.",
    details: [
      {
        title: "Patient Records",
        description: "Centralized patient records with complete medical history, prescriptions, and test results. Doctors can access records securely from any device.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2031&auto=format&fit=crop"
      },
      {
        title: "HIPAA Compliance",
        description: "Built with security-first architecture including data encryption, access controls, and comprehensive audit logs to meet all HIPAA requirements.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    githubUrl: "https://github.com",
    webUrl: "https://example.com"
  },
  {
    category: "Marketing",
    title: "Social Media Automation",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    tags: ["Automation", "API", "Bot"],
    overview: "Automated content scheduling and engagement tracking for social media growth. Helping creators and brands maintain consistent online presence.",
    details: [
      {
        title: "Smart Scheduling",
        description: "AI-powered scheduling that analyzes your audience engagement patterns and suggests optimal posting times for maximum reach and interaction.",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f1c9f6?q=80&w=2074&auto=format&fit=crop"
      },
      {
        title: "Engagement Analytics",
        description: "Track follower growth, engagement rates, and content performance across all platforms. Get insights to refine your content strategy.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      }
    ],
    githubUrl: "https://github.com",
    webUrl: "https://example.com"
  },
  {
    category: "Consumer",
    title: "Travel Booking Platform",
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    tags: ["Booking", "Maps", "Payment"],
    overview: "Seamless travel booking experience integrating flights, hotels, and local experiences. Making travel planning effortless and enjoyable.",
    details: [
      {
        title: "Unified Search",
        description: "Search and compare flights, hotels, and car rentals from hundreds of providers in one place. Smart filters help find the perfect option.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
      },
      {
        title: "Local Experiences",
        description: "Discover and book unique local experiences, tours, and activities. Curated recommendations based on your interests and travel style.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
      }
    ],
    githubUrl: "https://github.com",
    webUrl: "https://example.com"
  },
  {
    category: "AI Tool",
    title: "AI Content Generator",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: ["LLM", "Python", "FastAPI"],
    overview: "Generative AI tool for creating marketing copy and blog content in seconds. Powered by state-of-the-art language models for high-quality output.",
    details: [
      {
        title: "Content Generation",
        description: "Generate blog posts, social media captions, email newsletters, and ad copy with just a few prompts. Supports multiple tones and styles.",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2080&auto=format&fit=crop"
      },
      {
        title: "SEO Optimization",
        description: "Built-in SEO analysis and keyword suggestions to ensure your content ranks well. Integrates with popular SEO tools for comprehensive optimization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      }
    ],
    githubUrl: "https://github.com",
    webUrl: "https://example.com"
  }
];
