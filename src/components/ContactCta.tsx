"use client";

import { motion } from "framer-motion";
import { contactCta } from "@/utils/animations";

export default function ContactCta() {
  return (
    <motion.section
      id="contact"
      variants={contactCta}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="px-6 pb-12 text-center md:px-12 md:text-left lg:px-24"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-gold/40 bg-royal-blue/60 p-8 shadow-[0_0_24px_rgba(244,208,63,0.2)] md:mx-0">
        <h3 className="font-heading text-2xl md:text-3xl">
          Let&apos;s connect
        </h3>
        <p className="mt-4 text-base text-foreground/80">
          I&apos;m working on distributed systems, AI agents, and product
          interfaces. Message me on LinkedIn if you want to collaborate or talk
          shop.
        </p>
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="pixel-button mt-6"
          href="https://www.linkedin.com/in/marcus-izumi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message on LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}
