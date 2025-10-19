export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  emoji?: string;
  image?: string;
  pdf?: string;
  externalLink?: string;
  timeline: string;
  role: string;
  summary: string;
  highlights: string[];
  outcomes: string[];
  type: "system" | "ai" | "web" | "hackathon" | "robotics";
}

export const projects: Project[] = [
  {
    id: "kdb-observability",
    title: "KDB Observability Platform",
    description:
      "Built dashboards and alerting to surface latency patterns across a global equities platform, tightening incident response loops.",
    tech: ["TypeScript", "React", "KDB+", "Grafana"],
    emoji: "🗼",
    externalLink: "https://github.com/Rynhalt",
    pdf: "/pdfs/SMBC_KDB.pdf",
    timeline: "Summer 2024 · SMBC Nikko Securities",
    role: "Systems Engineering Intern",
    summary:
      "Instrumented KDB+ market data pipelines with near real-time observability, pairing Grafana dashboards with alerting automation to spotlight latency regressions before they escalated.",
    highlights: [
      "Implemented TypeScript services that tailed KDB+ tables and normalized telemetry for Grafana Cloud.",
      "Modelled latency percentiles across 15 global trading venues to reveal jitter patterns in pre-open sessions.",
      "Partnered with SRE to codify on-call playbooks so alerts linked to root-cause queries and runbooks.",
    ],
    outcomes: [
      "Reduced time-to-detect for market data incidents from ~18 minutes to under 5.",
      "Enabled daily regression reports that caught a serialization bug before production rollout.",
    ],
    type: "system",
  },
  {
    id: "teleop-ros2",
    title: "ROS2 Tele-Operation Suite",
    description:
      "Designed ROS2 nodes for remote robot control with resilient QoS channels and haptic feedback for Boston University Robotics Lab.",
    tech: ["ROS2", "C++", "Python", "Docker"],
    emoji: "🤖",
    externalLink: "https://github.com/Rynhalt",
    timeline: "2023 · Boston University Robotics Lab",
    role: "Robotics Software Engineer",
    summary:
      "Engineered a ROS2 tele-operation stack that let operators drive differential-drive robots from low-bandwidth links while streaming lidar and control telemetry into a mission dashboard.",
    highlights: [
      "Authored C++ nodes leveraging DDS QoS profiles to keep control loops responsive on flaky Wi-Fi.",
      "Integrated web-based joystick controls with ROS bridge layers for rapid operator onboarding.",
      "Developed visualization plugins that overlayed SLAM data with real-time robot health metrics.",
    ],
    outcomes: [
      "Achieved <80ms round-trip latency for command packets on campus Wi-Fi networks.",
      "Adopted as the baseline tele-op package for two capstone robotics projects.",
    ],
    type: "robotics",
  },
  {
    id: "quest-ui",
    title: "Quest UI Motion Playground",
    description:
      "Experimented with pixel-perfect motion studies that blend Framer Motion with CRT-inspired shaders for nostalgic yet crisp UX.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    emoji: "✨",
    externalLink: "https://github.com/Rynhalt",
    pdf: "/pdfs/quest-ui-brief.pdf",
    timeline: "Ongoing · Personal Exploration",
    role: "Product Designer & Frontend Engineer",
    summary:
      "A living playground for modern-meets-retro interactions: CRT bloom shaders, parallax overworlds, and delightful micro-interactions that still respect accessibility budgets.",
    highlights: [
      "Crafted reusable Framer Motion primitives for scroll-linked progress, floating navs, and quest dialogs.",
      "Built pixel-border Tailwind utilities and animation tokens that keep retro styling consistent.",
      "Prototype hero sprite movement logic that will power the Quest Mode walkthrough experience.",
    ],
    outcomes: [
      "Established the visual language used across the Rynhalt portfolio refresh.",
      "Serves as a sandbox for testing Quest Mode performance targets ahead of public launch.",
    ],
    type: "web",
  },
];
