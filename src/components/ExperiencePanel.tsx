"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { experienceCard } from "@/utils/animations";

interface ExperiencePanelProps {
  experience: Experience;
  index: number;
}

export default function ExperiencePanel({ experience, index }: ExperiencePanelProps) {
  const isReversed = index % 2 === 1;
  const imageSrc = experience.image ?? "/images/placeholder-experience.svg";

  return (
    <motion.article
      variants={experienceCard}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={`flex flex-col gap-6 md:items-center md:gap-12 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="pixel-card flex-1 p-6">
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent/80">
            <span>{experience.organization}</span>
            <span className="hidden md:inline">•</span>
            <span>{experience.timeline}</span>
          </div>
          <h3 className="font-heading text-xl leading-snug">{experience.title}</h3>
        </header>
        <p className="mt-4 text-sm text-foreground/80">{experience.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-accent">
          {experience.tech.map((tech) => (
            <li key={tech} className="pixel-chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 space-y-3 text-sm text-foreground/70">
          {experience.highlights.slice(0, 2).map((highlight) => (
            <p key={highlight} className="relative pl-4">
              <span className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-gold" />
              {highlight}
            </p>
          ))}
        </div>
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <Link
            href={`/experience/${experience.id}`}
            className="pixel-button pixel-button--inline"
          >
            View Experience Brief
          </Link>
          {experience.externalLink ? (
            <a
              href={experience.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.25em] text-accent underline-offset-4 hover:underline"
            >
              External Link →
            </a>
          ) : null}
        </motion.div>
      </div>
      <div className="relative w-full overflow-hidden rounded-xl border border-gold/30 bg-[rgba(24,28,84,0.45)] shadow-[0_18px_36px_rgba(8,9,30,0.35)] md:h-64 md:w-80">
        <Image
          src={imageSrc}
          alt={`${experience.organization} experience preview`}
          width={640}
          height={480}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </motion.article>
  );
}
