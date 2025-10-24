export interface Experience {
  id: string;
  organization: string;
  title: string;
  description: string;
  timeline: string;
  location?: string;
  role?: string;
  summary: string;
  tech: string[];
  highlights: string[];
  outcomes: string[];
  image?: string;
  video?: string;
  externalLink?: string;
  pdf?: string;
}

export const experiences: Experience[] = [
  {
    id: "bufitcheck",
    organization: "Boston University Spark!",
    title: "Technical Teammate · BU Spark!",
    description:
      "Shipping BU FitCheck at BU Spark!, a hybrid web/mobile app that keeps thrift shop inventory and student browsing in sync.",
    timeline: "Aug 2025 – Present",
    role: "Current Technical Teammate",
    summary:
      "Maintain the BU FitCheck frontend and APIs with Cloud Functions, Cloud Vision, and OpenAI to keep inventory updates and search fast.",
    tech: [
      "Next.js",
      "Ionic Framework",
      "React",
      "TypeScript",
      "Firebase Firestore",
      "Google Cloud Functions",
      "Cloud Vision API",
      "OpenAI API",
      "TailwindCSS",
    ],
    image: "/images/experience/Fitcheck.png",
    video: "https://www.youtube.com/embed/95s9VP7q1rY",
    highlights: [
      "Developed a hybrid Ionic + Next.js interface so shop owners can manage stock and students can browse listings in real time.",
      "Modeled serverless Firestore schemas and Cloud Functions that keep inventory updates under 150ms round-trip.",
      "Integrated Cloud Vision and OCR to classify apparel and extract labels, trimming manual input time by roughly 70%.",
      "Hooked OpenAI endpoints for auto-written descriptions and semantic tagging to boost search relevance.",
    ],
    outcomes: [
      "Unlocked always-current storefronts for campus thrift partners without manual spreadsheet sync.",
      "Students now surface relevant items faster thanks to AI-assisted categorization and search.",
    ],
  },
  {
    id: "smbc-nikko",
    organization: "SMBC Nikko Securities",
    title: "Equity Systems Developer Intern",
    description:
      "Collected observability metrics from KDB+ databases that process hundreds of millions of Tokyo Stock Exchange records each day and surfaced system and pipeline latency issues.",
    timeline: "Jul 2025 – Sep 2025",
    role: "Equity Systems Developer Intern",
    summary:
      "Built the KDB observability stack for the Equity Systems Division — exporters, dashboards, and trace tooling that track system, process, and pipeline latency across tickerplant, RDB, and HDB flows handling Tokyo Stock Exchange feeds.",
    tech: ["KDB+ / q", "TorQ", "Grafana", "Prometheus", "Linux", "Shell", "Python"],
    image: "/images/experience/Nikko.png",
    pdf: "/pdfs/SMBC_KDB.pdf",
    highlights: [
      "Shipped Prometheus exporters in q that emit CPU, memory, I/O, and latency metrics across TorQ components.",
      "Designed Grafana dashboards that visualize process lifecycles and flag RDB/HDB performance regressions in real time.",
      "Improved log parsing, trace correlation, and metric analysis so on-call engineers could pinpoint tickerplant anomalies within minutes.",
      "Partnered with front-office and infra teams to validate end-to-end market data flows between tickerplant, RDB, and HDB tiers.",
    ],
    outcomes: [
      "Shrank diagnostic time for data-feed issues by surfacing correlated traces and resource metrics in a single view.",
      "Enabled proactive paging when latency breaches hit thresholds, preventing downstream trading impact.",
    ],
  },
  {
    id: "workx",
    organization: "WorkX, Inc.",
    title: "Full-Stack Engineering Intern",
    description:
      "Built automation for WorkX’s consultant-matching platform during a full-stack internship in Tokyo.",
    timeline: "Jun 2024 – Sep 2024",
    role: "Full-Stack Engineering Intern",
    summary:
      "Delivered the frontend and data integrations for WorkX’s project-matching portal, using AI-assisted resume parsing and Firebase-backed APIs to connect consultants with client engagements.",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "Google Cloud Functions",
      "OpenAI API",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Prisma",
      "DBeaver",
    ],
    image: "/images/experience/ProConnect.png",
    highlights: [
      "Implemented responsive React dashboards with robust state management for consultant and client intake flows.",
      "Integrated OpenAI pipelines that extract key skills from resumes and automate consultant-to-project matching.",
      "Managed Firestore schemas and Cloud Functions handling authentication, multi-tenant data access, and auditing.",
      "Designed validation and rate limiting to keep API calls performant under peak onboarding loads.",
    ],
    outcomes: [
      "Accelerated consultant matching by automating skill extraction and opportunity triage.",
    ],
  },
];
