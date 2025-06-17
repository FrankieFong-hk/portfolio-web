/**
 * Footer Component
 *
 * A responsive footer with copyright information and social media links.
 * Features subtle animations and accessibility features.
 *
 * Features:
 * - Responsive layout (stacked on mobile, row on desktop)
 * - Animated entrance effects
 * - Interactive social media icons with hover animations
 * - Screen reader accessible links
 * - Dynamic copyright year
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  /**
   * The Footer component provides copyright information and social links.
   *
   * It uses a responsive layout that changes from column to row based on screen size,
   * and includes animated entrance effects for both the copyright text and social icons.
   */
  return (
    <footer className="w-full border-t bg-background py-6">
      {/* Footer with top border and padding */}
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row m-auto">
        {/* Responsive container - column on mobile, row on desktop */}
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          © {new Date().getFullYear()} Frankie Fong Portfolio. All rights
          reserved.
        </motion.p>

        {/* Social media links container with staggered animation */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {/* GitHub link with hover animation and accessibility */}
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              {/* Text for screen readers only */}
              <span className="sr-only">GitHub</span>
            </motion.div>
          </Link>
          {/* LinkedIn link with hover animation and accessibility */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </motion.div>
          </Link>
          {/* Email contact link with hover animation and accessibility */}
          <Link href="mailto:contact@example.com" aria-label="Send email">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="sr-only">Email</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
