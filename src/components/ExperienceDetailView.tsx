"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import {
  detailListItem,
  detailSection,
  sectionHeadingContainer,
  sectionHeadingItem,
} from "@/utils/animations";
import ContactCta from "@/components/ContactCta";

interface ExperienceDetailViewProps {
  experience: Experience;
}

export default function ExperienceDetailView({
  experience,
}: ExperienceDetailViewProps) {
  return (
    <main className="flex flex-1 flex-col gap-16 px-6 pb-24 md:px-12 lg:px-24">
      <motion.section
        initial="hidden"
        animate="show"
        variants={sectionHeadingContainer}
        className="mt-8 rounded-3xl border border-gold/35 bg-[rgba(20,24,60,0.78)] p-10 shadow-[0_24px_80px_rgba(8,9,30,0.55)] backdrop-blur-lg md:mt-12 md:p-14"
      >
        <motion.div
          variants={sectionHeadingItem}
          className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-accent/80"
        >
          <Link
            href="/"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            ← Back to portfolio
          </Link>
          <span>{experience.timeline}</span>
        </motion.div>
        <motion.h1
          variants={sectionHeadingItem}
          className="font-heading text-3xl leading-tight md:text-5xl"
        >
          {experience.title}
        </motion.h1>
        <motion.p
          variants={sectionHeadingItem}
          className="mt-4 max-w-3xl text-base text-foreground/80 md:text-lg"
        >
          {experience.summary}
        </motion.p>
        {experience.role ? (
          <motion.div
            variants={sectionHeadingItem}
            className="mt-6 text-xs uppercase tracking-[0.3em] text-foreground/60"
          >
            {experience.role}
          </motion.div>
        ) : null}
      </motion.section>

      <motion.section
        className="grid gap-12 lg:grid-cols-[2fr,1fr]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={detailSection}
      >
        <div className="space-y-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            variants={sectionHeadingContainer}
          >
            <motion.h2
              variants={sectionHeadingItem}
              className="font-heading text-2xl md:text-3xl"
            >
              Key Contributions
            </motion.h2>
            <motion.ul
              variants={sectionHeadingContainer}
              className="mt-6 space-y-4 text-sm text-foreground/80 md:text-base"
            >
              {experience.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  className="relative pl-6"
                  variants={detailListItem}
                >
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gold" />
                  {highlight}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            variants={sectionHeadingContainer}
          >
            <motion.h3
              variants={sectionHeadingItem}
              className="font-heading text-2xl md:text-3xl"
            >
              Outcomes
            </motion.h3>
            <motion.ul
              variants={sectionHeadingContainer}
              className="mt-6 space-y-3 text-sm text-foreground/80"
            >
              {experience.outcomes.map((outcome) => (
                <motion.li
                  key={outcome}
                  className="rounded-lg border border-gold/30 bg-[rgba(24,28,84,0.5)] px-5 py-4 shadow-[0_12px_32px_rgba(8,9,30,0.35)]"
                  variants={detailListItem}
                >
                  {outcome}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <aside className="pixel-card flex flex-col gap-6 p-6">
          <div>
            <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-accent">
              Stack &amp; Tooling
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide">
              {experience.tech.map((tech) => (
                <li key={tech} className="pixel-chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {experience.image ? (
            <figure className="overflow-hidden rounded-xl border border-gold/30">
              <Image
                src={experience.image}
                alt={`${experience.organization} experience preview`}
                width={640}
                height={360}
                className="h-full w-full object-cover"
                priority
              />
            </figure>
          ) : null}
          {experience.pdf ? (
            <div className="pdf-frame h-[28rem] md:h-[34rem] lg:h-[40rem]">
              <object
                data={experience.pdf}
                type="application/pdf"
                className="h-full w-full"
              >
                <p className="p-4 text-xs text-foreground/70">
                  PDF preview unavailable.{" "}
                  <a
                    href={experience.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Download the experience brief
                  </a>
                  .
                </p>
              </object>
            </div>
          ) : null}
          {experience.externalLink ? (
            <a
              href={experience.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button text-center"
            >
              View External Link
            </a>
          ) : null}
        </aside>
      </motion.section>

      <ContactCta />
    </main>
  );
}
