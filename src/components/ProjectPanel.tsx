"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { projectCard } from "@/utils/animations";

interface ProjectPanelProps {
  project: Project;
  index: number;
}

export default function ProjectPanel({ project, index }: ProjectPanelProps) {
  const isReversed = index % 2 === 1;
  const imageSrc = project.image ?? "/images/placeholder-project.svg";

  return (
    <motion.article
      variants={projectCard}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={`flex flex-col gap-6 md:items-center md:gap-12 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="relative w-full overflow-hidden rounded-xl border border-gold/30 bg-[rgba(24,28,84,0.45)] shadow-[0_18px_36px_rgba(8,9,30,0.35)] md:h-64 md:w-80">
        <Image
          src={imageSrc}
          alt={`${project.title} preview`}
          width={640}
          height={480}
          className="h-full w-full object-cover object-center"
        />
        {project.emoji ? (
          <span className="absolute right-4 top-4 text-3xl drop-shadow-[0_4px_12px_rgba(8,9,30,0.65)]">
            {project.emoji}
          </span>
        ) : null}
      </div>
      <div className="pixel-card flex-1 p-6">
        <header className="flex flex-col gap-2">
          <h3 className="font-heading text-xl leading-snug">{project.title}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
            {project.timeline}
          </p>
        </header>
        <p className="mt-4 text-sm text-foreground/80">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-accent">
          {project.tech.map((tech) => (
            <li key={tech} className="pixel-chip">
              {tech}
            </li>
          ))}
        </ul>
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <Link
            href={`/projects/${project.id}`}
            className="pixel-button pixel-button--inline"
          >
            View Project Brief
          </Link>
          {project.externalLink ? (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.25em] text-accent underline-offset-4 hover:underline"
            >
              External Link →
            </a>
          ) : null}
        </motion.div>
      </div>
    </motion.article>
  );
}
