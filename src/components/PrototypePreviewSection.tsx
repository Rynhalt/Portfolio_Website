"use client";

import { motion } from "framer-motion";
import PrototypeScene from "@/components/PrototypeMode/PrototypeScene";
import {
  sectionHeadingContainer,
  sectionHeadingItem,
} from "@/utils/animations";

export default function PrototypePreviewSection() {
  return (
    <section id="prototype" className="px-6 md:px-12 lg:px-24">
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionHeadingContainer}
        className="mb-8 text-center md:text-left"
      >
        <motion.span
          variants={sectionHeadingItem}
          className="text-xs uppercase tracking-[0.3em] text-accent"
        >
          Prototype Preview
        </motion.span>
        <motion.h2
          variants={sectionHeadingItem}
          className="font-heading text-3xl md:text-4xl"
        >
          Interactive Walkthrough
        </motion.h2>
      </motion.header>
      <PrototypeScene />
    </section>
  );
}
