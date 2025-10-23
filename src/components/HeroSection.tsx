"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroContainer, heroItem, heroCta } from "@/utils/animations";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 py-24 text-center md:px-12 md:text-left lg:px-24 lg:py-32"
    >
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex max-w-2xl flex-col gap-6">
          <motion.h1
            variants={heroItem}
            className="font-heading text-4xl leading-tight md:text-6xl"
          >
            Marcus Izumi
          </motion.h1>
          <motion.div
            variants={heroItem}
            className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.35em] text-accent md:items-start"
          >
            <span>CS @ BU</span>
            <span>Japanese–English bilingual</span>
          </motion.div>
          <motion.p
            variants={heroItem}
            className="max-w-2xl text-base text-foreground/80 md:text-lg"
          >
            I explore AI agents, the intersection of markets and technology, and
            creative tech like generative music experiences. These are my
            experiences and projects.
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
        </div>

        <motion.figure
          variants={heroItem}
          className="mx-auto h-64 w-64 overflow-hidden rounded-3xl border-2 border-gold/70 shadow-[0_0_0_3px_rgba(12,16,48,0.7),0_18px_42px_rgba(8,9,30,0.4)] md:mx-0 md:h-72 md:w-72"
        >
          <Image
            src="/images/Headshot.jpg"
            alt="Marcus Izumi"
            width={288}
            height={288}
            className="h-full w-full object-cover object-center"
            priority
          />
        </motion.figure>
      </motion.div>
    </section>
  );
}
