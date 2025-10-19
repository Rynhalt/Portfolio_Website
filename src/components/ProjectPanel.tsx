"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { projectCard } from "@/utils/animations";

interface ProjectPanelProps {
  project: Project;
}

export default function ProjectPanel({ project }: ProjectPanelProps) {
  return (
    <motion.article
      variants={projectCard}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="pixel-card flex flex-col gap-3 p-6"
    >
      <header className="flex items-center justify-between">
        <h3 className="font-heading text-xl">{project.title}</h3>
        {project.emoji ? (
          <motion.span
            initial={{ rotate: -8, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl"
          >
            {project.emoji}
          </motion.span>
        ) : null}
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
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="pixel-button pixel-button--inline"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Quest Scroll
        </motion.a>
      ) : null}
    </motion.article>
  );
}
