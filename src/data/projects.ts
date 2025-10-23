export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  emoji?: string;
  image?: string;
  gallery?: string[];
  pdf?: string;
  externalLink?: string;
  timeline: string;
  role: string;
  summary: string;
  highlights: string[];
  outcomes: string[];
  videos?: string[];
  type: "system" | "ai" | "web" | "hackathon" | "robotics";
}

export const projects: Project[] = [
  {
    id: "echodio",
    title: "Echodio — Immersive Audio Rooms",
    description:
      "Weather-reactive ambient music app that syncs visuals and Suno AI soundscapes to the listener’s environment.",
    tech: [
      "Next.js",
      "React",
      "Firebase",
      "Node.js",
      "Firestore",
      "OpenWeather API",
      "GoAPI (Suno AI)",
      "TailwindCSS",
    ],
    image: "/images/projects/Echodio.png",
    gallery: [
      "/images/projects/Echodio2.png",
      "/images/projects/Echodio3.png",
    ],
    timeline: "Jun 2024 – Sep 2024",
    role: "Product Engineer",
    summary:
      "Built a weather-driven ambient player with Suno AI tracks and Firebase session sync.",
    highlights: [
      "Linked OpenWeather telemetry to dynamic themes so the UI mirrors local climate and time of day.",
      "Integrated Suno AI via GoAPI to generate genre-specific tracks that match the user’s atmosphere.",
      "Persisted playlists, favorites, and sessions with Firebase Auth and Firestore for seamless cross-device playback.",
      "Designed animated transitions and ambient loading states that keep the experience calm and immersive.",
    ],
    outcomes: [
      "Delivered an always-fresh ambient companion that removes the overhead of playlist curation for focus workflows.",
      "Established hooks for upcoming Apple Watch mood detection and social playlist sharing features.",
    ],
    videos: ["https://www.youtube.com/watch?v=1h2ezTZUQog"],
    type: "web",
  },
  {
    id: "alpha-agents",
    title: "AlphaAgents for Stock Evaluation",
    description:
      "Debate-driven multi-agent framework that reverse-engineers BlackRock’s Aug 2025 portfolio construction research for stock evaluation.",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Matplotlib",
      "Server-Sent Events",
      "JSONL",
      "Jinja",
      "GitHub Actions",
    ],
    image: "/images/projects/alpha.png",
    timeline: "Aug 2025 – Present",
    role: "Systems Engineer",
    summary:
      "Personal learning project to implement the debate-driven multi-agent framework from BlackRock’s Aug 2025 paper for stock evaluation.",
    highlights: [
      "Implemented domain-specific agents that emit structured reports with reasoning, metrics, and confidence scoring.",
      "Built a debate engine that streams multi-round critiques over SSE while logging every turn to reasoning_trace.jsonl.",
      "Developed a coordinator module that applies majority voting and deterministic tie-breakers to synthesize consensus.",
      "Visualized cumulative returns, rolling Sharpe, and drawdowns with Matplotlib dashboards backed by mock backtests.",
    ],
    outcomes: [
      "Delivered an explainable baseline mirroring BlackRock’s research and ready for reinforcement-learning extensions.",
      "Enabled researchers to monitor live debates and reasoning traces through a FastAPI + Jinja interface.",
    ],
    videos: [
      "https://www.youtube.com/watch?v=hKLtMo6ddo8",
      "https://www.youtube.com/watch?v=InjFbHU7RYk",
    ],
    type: "ai",
  },
  {
    id: "spacecafe",
    title: "SpaceCafe — BostonHacks 2024",
    description:
      "Immersive virtual café that reconnects astronauts with Earth through 3D storytelling, ambient audio, and live chat.",
    tech: [
      "Node.js",
      "Express",
      "React",
      "Three.js",
      "Socket.io",
      "Firebase",
      "Google Cloud Platform",
      "CSS Animations",
    ],
    image: "/images/projects/SpaceCafe.png",
    videos: [
      "https://www.youtube.com/watch?v=1VFKOktbCgE",
    ],
    timeline: "Apr 2024 – Jun 2024",
    role: "Frontend & Systems Lead",
    summary:
      "Built an interstellar café experience with Three.js visuals, Socket.io chat, and ambient audio to support astronaut wellbeing.",
    highlights: [
      "Animated a seamless solar-system fly-in with Three.js that lands visitors inside the SpaceCafe lounge.",
      "Implemented Socket.io servers for global public chats and invite-only family rooms with access keys.",
      "Layered atmospheric lighting, audio loops, and UI motion to evoke Earth-like calm despite isolation.",
      "Backed sessions with Firebase auth and GCP-hosted services for secure, scalable communication.",
    ],
    outcomes: [
      "Provided a mental-wellbeing prototype that helps astronauts maintain emotional ties during missions.",
      "Established the foundation for future VR and biometric feedback integrations within the experience.",
    ],
    type: "web",
  },
];
