"use client";

import { motion } from "framer-motion";
import { heroContainer, heroItem, heroCta } from "@/utils/animations";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="relative flex flex-col gap-6 px-6 py-24 text-center md:px-12 md:text-left lg:px-24 lg:py-32"
    >
      <motion.span
        variants={heroItem}
        className="text-xs uppercase tracking-[0.3em] text-accent"
      >
        Welcome to the Realm
      </motion.span>
      <motion.h1
        variants={heroItem}
        className="font-heading text-4xl leading-tight md:text-6xl"
      >
        Marcus Izumi — Systems Engineer on a Quest for Delightful UX
      </motion.h1>
      <motion.p
        variants={heroItem}
        className="mx-auto max-w-2xl text-base text-foreground/80 md:mx-0 md:text-lg"
      >
        This portfolio blends modern engineering rigor with retro RPG charm.
        Toggle between Modern and Quest modes to explore projects, experience,
        and craft.
      </motion.p>
      <motion.div
        variants={heroCta}
        className="flex flex-col gap-4 md:flex-row md:items-center"
      >
        <a className="pixel-button" href="#projects">
          Enter Modern Mode
        </a>
        <a className="pixel-button pixel-button--ghost" href="#quest">
          Begin Quest Mode
        </a>
      </motion.div>
    </motion.section>
  );
}
