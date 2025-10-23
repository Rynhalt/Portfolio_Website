"use client";

import { motion } from "framer-motion";
import ExperiencePanel from "@/components/ExperiencePanel";
import { experiences } from "@/data/experience";
import {
  sectionHeadingContainer,
  sectionHeadingItem,
} from "@/utils/animations";

export default function ExperienceShowcase() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24">
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
          · Experience ·
        </motion.span>
        <motion.h2
          variants={sectionHeadingItem}
          className="font-heading text-3xl md:text-4xl"
        >
          Experiences &amp; Impact
        </motion.h2>
      </motion.header>

      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        {experiences.map((experience, index) => (
          <ExperiencePanel
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
