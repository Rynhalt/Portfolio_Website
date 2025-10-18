
# 🧙 AGENT.md — Development Manifesto for Rynhalt.github.io

## 🧭 Project Overview
**Rynhalt.github.io** is a personal portfolio that blends **modern design principles** with **retro JRPG aesthetics** inspired by the *Dragon Quest* series.  
It should feel immersive, story-driven, and nostalgic — while remaining performant, accessible, and cleanly engineered.

The site serves as:
- A professional portfolio (projects, experience, and contact info).  
- A creative expression of identity — combining technical precision and playful nostalgia.  
- A codebase that demonstrates proficiency with modern frameworks, TypeScript, and UI motion design.

---

## 🎨 Experience Goals
- ⚔️ Blend **modern polish** and **retro charm**.  
- 🧭 Two distinct modes:
  - **Modern Mode:** Scrollable, responsive layout with project panels, animations, and media.  
  - **Quest Mode:** Interactive experience where a pixel-art hero walks along a path and projects appear as “quests.”  
- 💫 Transitions should be smooth, responsive, and light (60 FPS target).  
- 🪄 Performance and usability always take priority over heavy graphics.

---

## ⚙️ Tech Stack
**Framework:** Next.js 14+ (TypeScript)  
**Styling:** Tailwind CSS with custom pixel-border utilities  
**Animation:** Framer Motion (Modern Mode), PixiJS / Canvas API / React Three Fiber (Quest Mode)  
**Fonts:**  
- Primary — *Inter* (modern readability)  
- Accent — *Press Start 2P* (retro pixel headings)  
**Deployment:** Vercel  
**Optional:** Howler.js for background or ambient audio

Avoid:
- Large 3D engines (e.g. Babylon.js, Three.js physics) unless justified.  
- Generic UI kits that conflict with the pixel aesthetic.  

---

## 🧱 Design System

### Colors
| Name | Hex | Usage |
|------|-----|--------|
| Royal Blue | `#1E2A78` | primary background |
| Gold | `#F4D03F` | accents, borders, highlights |
| Silver | `#C0C0C0` | secondary text or frames |
| Parchment | `#F8F6F2` | background for light mode |
| Ink Black | `#222222` | main text |

### Layout & Style Rules
- Use **flex** or **grid** layouts with clear spacing.  
- Minimum section padding: `3rem 0`.  
- Cards, buttons, and modals should feature **pixel borders** and **gold glow** on hover.  
- Use subtle easing for all transitions (`easeInOut`, 200–400 ms).  
- Hero text should mimic RPG “dialog boxes” — box-shadow or frame borders.  
- Keep the overall tone *adventurous yet professional.*

---

## 🧩 Project Data Schema

```ts
// src/data/projects.ts
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
````

All components that render projects should consume this schema.

---

## 📁 Recommended Directory Structure

```
src/
  app/
    layout.tsx
    page.tsx
  components/
    Navbar.tsx
    HeroSection.tsx
    ProjectPanel.tsx
    QuestMode/
      RpgScene.tsx
      HeroSprite.tsx
  data/
    projects.ts
  styles/
    globals.css
  utils/
    animations.ts
public/
  sprites/
  images/
  audio/
```

---

## 💻 Code Style Guide

* Use **TypeScript** with explicit interfaces and props.
* Keep components under 150 lines where possible.
* Use **Tailwind CSS** classes, avoid inline styles except for dynamic motion props.
* Always include comments for animation logic and Canvas rendering.
* Maintain semantic HTML and accessibility (ARIA roles, keyboard support).
* Commit messages should be action-based (`feat:`, `fix:`, `style:` etc.).

---

## 🪄 Interaction Guidelines

* Player sprite and motion logic should live in isolated components (no global state pollution).
* In **Quest Mode**, use lightweight physics and smooth transitions — think SNES overworld, not open world.
* In **Modern Mode**, project panels should fade or slide into view via Framer Motion scroll triggers.
* Audio is opt-in (muted by default) and can be toggled from a small floating control.

---

## 📜 Commands Codex Should Understand

Codex or any code-generation assistant may receive prompts like:

| Intent           | Example Command                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| Add component    | “Create a `ProjectCard` component that renders project data with pixel borders and hover glow.” |
| Animate motion   | “Add Framer Motion fade-in for project panels on scroll.”                                       |
| Quest mode logic | “Make the hero sprite walk along a 5-tile path and display each project as a dialog box.”       |
| Theme extension  | “Add Tailwind plugin for pixel-border utilities.”                                               |
| Layout           | “Implement scroll snapping between main sections (Intro → Projects → Contact).”                 |

All outputs should comply with this document’s design and code style guidelines.

---

## 🔮 Tone & Philosophy

> *‘Simplicity is elegance, and nostalgia is power.’*
> This project should show technical depth without clutter. Every pixel, transition, and line of code should serve clarity, personality, or performance.

---

## 🧑‍💻 Author Context

**Marcus Izumi** — third-year CS student @ Boston University
Focus: Operating Systems / Distributed Systems / Infrastructure
Experience: KDB Observability at SMBC Nikko Securities, Full-Stack Engineering ( PERN stack ), ROS2 Tele-operation systems
Languages: English / 日本語 Fluent

---

## ✅ Output Expectations for Codex

* Clean, production-grade TypeScript + React code.
* Clear file placement and imports.
* Visual consistency with color palette and typography above.
* Accessibility and mobile responsiveness by default.
* Annotated comments when introducing new visual or interactive logic.

---