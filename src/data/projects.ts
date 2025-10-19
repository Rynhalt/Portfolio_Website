export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  emoji?: string;
  image?: string;
  link?: string;
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
    link: "https://github.com/Rynhalt",
    type: "system",
  },
  {
    id: "teleop-ros2",
    title: "ROS2 Tele-Operation Suite",
    description:
      "Designed ROS2 nodes for remote robot control with resilient QoS channels and haptic feedback for Boston University Robotics Lab.",
    tech: ["ROS2", "C++", "Python", "Docker"],
    emoji: "🤖",
    link: "https://github.com/Rynhalt",
    type: "robotics",
  },
  {
    id: "quest-ui",
    title: "Quest UI Motion Playground",
    description:
      "Experimented with pixel-perfect motion studies that blend Framer Motion with CRT-inspired shaders for nostalgic yet crisp UX.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    emoji: "✨",
    link: "https://github.com/Rynhalt",
    type: "web",
  },
];
