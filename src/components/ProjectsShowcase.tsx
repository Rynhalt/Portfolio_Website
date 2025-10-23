"use client";

import { motion } from "framer-motion";
import ProjectPanel from "@/components/ProjectPanel";
import { projects } from "@/data/projects";
import {
  sectionHeadingContainer,
  sectionHeadingItem,
} from "@/utils/animations";

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24">
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
        variants={sectionHeadingContainer}
        className="mb-12 flex flex-col gap-4 text-center md:text-left"
      >
        <motion.span
          variants={sectionHeadingItem}
          className="font-heading text-xs uppercase tracking-[0.5em] text-accent/80"
        >
          · Projects ·
        </motion.span>
        <motion.h2
          variants={sectionHeadingItem}
          className="font-heading text-3xl md:text-4xl"
        >
          Featured Projects &amp; Experiments
        </motion.h2>
      </motion.header>

      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        {projects.map((project, index) => (
          <ProjectPanel key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
