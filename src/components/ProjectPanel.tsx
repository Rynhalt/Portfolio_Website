import type { Project } from "@/data/projects";

interface ProjectPanelProps {
  project: Project;
}

export default function ProjectPanel({ project }: ProjectPanelProps) {
  return (
    <article className="pixel-card flex flex-col gap-3 p-6">
      <header className="flex items-center justify-between">
        <h3 className="font-heading text-xl">{project.title}</h3>
        {project.emoji ? <span className="text-2xl">{project.emoji}</span> : null}
      </header>
      <p className="text-sm text-foreground/80">{project.description}</p>
      <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-accent">
        {project.tech.map((tech) => (
          <li key={tech} className="pixel-chip">
            {tech}
          </li>
        ))}
      </ul>
      {project.link ? (
        <a
          className="pixel-button pixel-button--inline"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Quest Scroll
        </a>
      ) : null}
    </article>
  );
}
