"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import PrototypeStage from "./PrototypeStage";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const typeLabels: Record<Project["type"], string> = {
  system: "Systems",
  ai: "AI",
  web: "Web Experience",
  hackathon: "Hackathon",
  robotics: "Robotics",
};

export default function PrototypeScene() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const { walkableTiles, hotspots, gridDimensions } = useMemo(() => {
    const baseRow = 2;
    const branchRow = baseRow - 1;
    const spacing = 4;
    const startCol = 1;
    const cols = startCol + spacing * Math.max(projects.length - 1, 0) + 3;
    const rows = baseRow + 2;

    const walkables: Array<{ x: number; y: number }> = [];
    for (let x = 0; x < cols; x += 1) {
      walkables.push({ x, y: baseRow });
    }

    const hotspotEntries = projects.map((project, index) => {
      const x = startCol + spacing * index;
      walkables.push({ x, y: branchRow });
      return {
        id: project.id,
        position: { x, y: branchRow },
      };
    });

    return {
      walkableTiles: walkables,
      hotspots: hotspotEntries,
      gridDimensions: { cols, rows },
    };
  }, []);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  const handleHotspotChange = useCallback((projectId: string | null) => {
    setActiveProjectId(projectId);
  }, []);

  return (
    <section
      className="flex w-full max-w-5xl flex-col gap-6 rounded-xl border border-accent/40 bg-royal-blue/80 p-6 shadow-[0_0_40px_rgba(31,45,128,0.35)]"
      aria-label="Interactive prototype overview"
    >
      <PrototypeStage
        gridDimensions={gridDimensions}
        walkableTiles={walkableTiles}
        hotspots={hotspots}
        onHotspotChange={handleHotspotChange}
      />

      <div className="rounded-lg border-2 border-gold bg-parchment/95 p-6 text-sm text-ink-black shadow-pixel">
        {activeProject ? (
          <>
            <div className="flex items-center gap-3">
              <span className="pixel-chip bg-royal-blue/10 text-xs text-ink-black">
                {typeLabels[activeProject.type]}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-ink-black/60">
                {activeProject.timeline}
              </span>
            </div>
            <h3 className="mt-3 font-heading text-xl text-royal-blue">
              {activeProject.title}
            </h3>
            <p className="mt-3 text-sm text-ink-black/80">
              {activeProject.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-royal-blue/80">
              {activeProject.tech.slice(0, 4).map((tech) => (
                <li key={tech} className="pixel-chip bg-royal-blue/15">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/projects/${activeProject.id}`}
                className="pixel-button pixel-button--inline bg-[rgba(47,52,110,0.95)] text-foreground"
              >
                View full project
              </Link>
              {activeProject.externalLink ? (
                <a
                  href={activeProject.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.3em] text-royal-blue underline-offset-4 hover:underline"
                >
                  External link →
                </a>
              ) : null}
            </div>
          </>
        ) : (
          <p className="text-sm text-ink-black/80">
            Use the map above to navigate between highlighted nodes. Each stop
            previews a project; press Enter on the buttons to jump into the full
            case study.
          </p>
        )}
      </div>
    </section>
  );
}
