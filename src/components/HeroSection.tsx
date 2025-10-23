"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroContainer, heroItem, heroCta } from "@/utils/animations";

export default function HeroSection() {
  const [isPixelated, setIsPixelated] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsPixelated(true);
    }, 1600);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 py-24 text-center md:px-12 md:text-left lg:px-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className={`hero-headshot ${
          isPixelated ? "hero-headshot--pixelated" : ""
        }`}
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-6"
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
          Marcus Izumi — Systems Engineer crafting dependable, engaging products
        </motion.h1>
        <motion.p
          variants={heroItem}
          className="mx-auto max-w-2xl text-base text-foreground/80 md:mx-0 md:text-lg"
        >
          This portfolio blends modern engineering rigor with thoughtful
          interaction design. Explore the latest systems work, hackathon wins,
          and student-led products — each with deep-dive briefs and outcomes.
        </motion.p>
        <motion.div
          variants={heroCta}
          className="flex flex-col gap-4 md:flex-row md:items-center"
        >
          <a className="pixel-button" href="#projects">
            View Featured Work
          </a>
          <a className="pixel-button pixel-button--ghost" href="#contact">
            Connect with Marcus
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
