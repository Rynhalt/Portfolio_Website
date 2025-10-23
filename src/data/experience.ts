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
    title: "Technical Teammate · BUSpark!",
    description:
      "Building BU FitCheck inside BU Spark! — a sustainability-focused hybrid web/mobile app that powers thrift shop inventory and student browsing.",
    timeline: "Aug 2025 – Present",
    role: "Full-Stack Technical Teammate",
    summary:
      "Leading frontend and API integration for BU FitCheck as part of BU Spark!, combining Next.js, Ionic, and Google Cloud Functions so thrift shops manage inventory while students browse AI-tagged listings enriched by Cloud Vision analysis.",
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
    title: "Systems Engineering Intern",
    description:
      "Built observability modules for SMBC Nikko’s TorQ-based market data platform, capturing resource metrics and surfacing latency anomalies.",
    timeline: "Jul 2025 – Sep 2025",
    role: "Systems Engineering Intern",
    summary:
      "Authored the KDB Observability Platform for the Equity Systems Division — exporters, dashboards, and trace tooling that give traders and SREs instant visibility into tickerplant, RDB, and HDB performance.",
    tech: ["KDB+ / q", "TorQ", "Grafana", "Prometheus", "Linux", "Shell", "Python", "Docker"],
    image: "/images/experience/Nikko.png",
    pdf: "/pdfs/SMBC_KDB.pdf",
    highlights: [
      "Shipped Prometheus exporters in q that emit CPU, memory, I/O, and latency metrics across TorQ components.",
      "Designed Grafana dashboards that visualize process lifecycles and flag RDB/HDB performance regressions in real time.",
      "Improved log parsing and trace correlation so on-call engineers could pinpoint tickerplant anomalies within minutes.",
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
    title: "Founding Full-Stack Engineer",
    description:
      "Built automation for WorkX’s consultant-matching platform — from resume parsing to project dashboards — during a full-stack internship in Tokyo.",
    timeline: "Jun 2024 – Sep 2024",
    role: "Full-Stack Engineering Intern",
    summary:
      "Owned the frontend and data integration for WorkX’s project-matching portal, using AI-assisted resume parsing and Firebase-backed APIs to connect consultants with client engagements at scale.",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "Google Cloud Functions",
      "OpenAI API",
      "Node.js",
      "Material UI",
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
      "Improved platform reliability through guardrails that reduced noisy API retries under heavy usage.",
    ],
  },
];
