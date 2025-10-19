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
      className="relative flex flex-col gap-6 px-6 py-24 text-center md:text-left"
    >
      <motion.span
        variants={heroItem}
        className="text-xs uppercase tracking-[0.3em] text-accent"
      >
        Welcome to the Realm
      </motion.span>
      <motion.h1
        variants={heroItem}
        className="font-heading text-4xl md:text-6xl leading-tight"
      >
        Marcus Izumi — Systems Engineer on a Quest for Delightful UX
      </motion.h1>
      <motion.p
        variants={heroItem}
        className="max-w-2xl text-base md:text-lg text-foreground/80"
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
