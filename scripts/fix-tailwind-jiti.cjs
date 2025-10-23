#!/usr/bin/env node

/**
 * Tailwind CSS 4.1.x currently bundles its own copy of `jiti`, but the published
 * package omits the precompiled `dist` artifacts. That makes `require("../dist/jiti.cjs")`
 * crash at runtime when the PostCSS plugin boots up.
 *
 * The root of this project already gets a complete `jiti` install (with `dist/`),
 * so we copy those artifacts into the nested package the first time dependencies
 * are installed. Keeping this in a script instead of patching node_modules by hand
 * means new installs stay reproducible.
 */

const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const sourceDist = path.join(projectRoot, "node_modules", "jiti", "dist");
const nestedJiti = path.join(
  projectRoot,
  "node_modules",
  "@tailwindcss",
  "node",
  "node_modules",
  "jiti",
);
const nestedDist = path.join(nestedJiti, "dist");

function ensureNestedDist() {
  if (!fs.existsSync(nestedJiti)) {
    return;
  }
  if (fs.existsSync(nestedDist)) {
    return;
  }
  if (!fs.existsSync(sourceDist)) {
    console.warn(
      "[fix-tailwind-jiti] Unable to find root jiti dist assets – nothing copied.",
    );
    return;
  }

  fs.cpSync(sourceDist, nestedDist, { recursive: true });
  console.log(
    "[fix-tailwind-jiti] Restored missing jiti dist/ files for @tailwindcss/node.",
  );
}

try {
  ensureNestedDist();
} catch (error) {
  console.warn("[fix-tailwind-jiti] Failed to copy jiti dist files:", error);
}
