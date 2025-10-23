"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const navLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(scrollY.get() > 24);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const glowShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0px 0px 0px rgba(12, 14, 35, 0)",
      "0px 12px 48px rgba(9, 12, 40, 0.45)",
    ],
  );

  const navClass = [
    "flex w-full max-w-6xl items-center justify-between rounded-full border px-6 transition-all duration-300",
    scrolled
      ? "border-gold/60 bg-[rgba(24,30,92,0.92)] py-3 shadow-[0_10px_40px_rgba(9,12,40,0.45)] backdrop-blur-xl"
      : "border-gold/30 bg-[rgba(24,30,92,0.78)] py-4 backdrop-blur",
  ].join(" ");

  return (
    <motion.header
      className="sticky top-0 z-50 flex justify-center px-4 py-6"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.nav layout style={{ boxShadow: glowShadow }} className={navClass}>
        <Link
          href="/"
          className="font-heading text-sm uppercase tracking-[0.35em]"
        >
          Rynhalt
        </Link>
        <ul className="flex items-center gap-6 text-[0.7rem] uppercase tracking-[0.35em] text-foreground/70">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gold/80 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  );
}
