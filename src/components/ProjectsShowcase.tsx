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
          className="text-xs uppercase tracking-[0.3em] text-accent"
        >
          Modern Mode
        </motion.span>
        <motion.h2
          variants={sectionHeadingItem}
          className="font-heading text-3xl md:text-4xl"
        >
          Featured Projects &amp; Systems
        </motion.h2>
        <motion.p
          variants={sectionHeadingItem}
          className="mx-auto max-w-3xl text-base text-foreground/80 md:mx-0"
        >
          Explore recent work that highlights infrastructure rigor, accessible
          interfaces, and motion studies. Expect continuous iteration as new
          experiments land here.
        </motion.p>
      </motion.header>

      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectPanel key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
