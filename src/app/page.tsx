import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectPanel from "@/components/ProjectPanel";
import RpgScene from "@/components/QuestMode/RpgScene";
import QuestCta from "@/components/QuestCta";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex flex-1 flex-col gap-24 pb-24">
        <HeroSection />

        <section id="projects" className="px-6">
          <header className="mb-12 flex flex-col gap-4 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Modern Mode
            </span>
            <h2 className="font-heading text-3xl md:text-4xl">
              Featured Quests &amp; Systems
            </h2>
            <p className="mx-auto max-w-3xl text-base text-foreground/80 md:mx-0">
              Explore recent projects that showcase infrastructure rigor,
              immersive UX, and playful storytelling. Expect Framer Motion
              flourishes, pixel borders, and dynamic theming as we iterate.
            </p>
          </header>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectPanel key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="px-6">
          <header className="mb-8 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Quest Mode Preview
            </span>
            <h2 className="font-heading text-3xl md:text-4xl">
              Walk the Overworld
            </h2>
          </header>
          <RpgScene />
        </section>

        <QuestCta />
      </main>
      <footer className="px-6 pb-10 text-center text-xs text-foreground/60">
        Crafted with curiosity &amp; nostalgia — © {new Date().getFullYear()}{" "}
        Marcus Izumi.
      </footer>
    </div>
  );
}
