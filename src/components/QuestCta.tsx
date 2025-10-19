"use client";

import { motion } from "framer-motion";
import { questCta } from "@/utils/animations";

export default function QuestCta() {
  return (
    <motion.section
      id="contact"
      variants={questCta}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="px-6 pb-12 text-center md:px-12 md:text-left lg:px-24"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-gold/40 bg-royal-blue/60 p-8 shadow-[0_0_24px_rgba(244,208,63,0.2)] md:mx-0">
        <h3 className="font-heading text-2xl md:text-3xl">Let&apos;s collaborate</h3>
        <p className="mt-4 text-base text-foreground/80">
          I&apos;m refining this portfolio while shipping distributed systems and
          interface experiments. Reach out if you&apos;d like to talk about
          infrastructure, tooling, or product engineering.
        </p>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="pixel-button mt-6"
          href="mailto:marcus@izumi.dev"
        >
          Contact Marcus
        </motion.a>
      </div>
    </motion.section>
  );
}
