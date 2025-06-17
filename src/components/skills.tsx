/**
 * Skills Component
 *
 * A comprehensive display of technical skills and technologies, organized into
 * categories with visual representations. Features an interactive grid of tech icons
 * and categorized skill badges.
 *
 * Features:
 * - Animated tech icons grid with hover effects
 * - Categorized skills in card layout
 * - Responsive design for all screen sizes
 * - Staggered animations using Framer Motion
 * - Easily customizable skill data
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Skills Data
 *
 * This data structure defines the skills to be displayed in the Skills component.
 * Each category contains an array of skills with name and proficiency level.
 *
 * To customize:
 * - Add/remove categories or change category names
 * - Add/remove skills within each category
 * - Modify skill names and proficiency levels
 */
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "Redux", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "REST API", level: "Advanced" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Jest", level: "Intermediate" },
      { name: "Webpack", level: "Intermediate" },
    ],
  },
];

/**
 * Tech Icons Data
 *
 * These arrays define the technologies to be displayed in the scrolling rows.
 * Each string represents a technology name that will be displayed with its first letter as an icon.
 * The technologies are split into two rows for the alternating scroll directions.
 *
 * To customize:
 * - Add/remove technology names to change which icons are displayed
 * - Keep names concise for better mobile display
 * - Ensure each row has enough items for a smooth infinite scroll effect
 */
const techIconsRow1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
];

const techIconsRow2 = [
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS",
  "Git",
  "Express",
];

// Duplicate the arrays multiple times to create a truly seamless infinite scroll effect
const techIconsRow1Extended = [
  ...techIconsRow1,
  ...techIconsRow1,
  ...techIconsRow1,
  ...techIconsRow1,
];
const techIconsRow2Extended = [
  ...techIconsRow2,
  ...techIconsRow2,
  ...techIconsRow2,
  ...techIconsRow2,
];

export function Skills() {
  /**
   * Animation Settings
   *
   * These settings control the infinite scroll animation behavior
   * - scrollAnimationDuration: Controls the speed of the infinite scroll animation
   */

  // Animation settings for the infinite scroll
  const scrollAnimationDuration = 30; // seconds for one complete cycle

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 m-auto">
        {" "}
        {/* Container with responsive padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Technology Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            My technical expertise and tools I work with
          </p>
        </motion.div>
        {/* Tech Icons Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 space-y-8 overflow-hidden"
        >
          {/* First row - scrolling right */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: scrollAnimationDuration,
                  ease: "linear",
                },
              }}
            >
              {techIconsRow1Extended.map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  className="inline-flex flex-col items-center justify-center mx-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-background shadow-md flex items-center justify-center mb-2">
                    <div className="text-2xl font-bold text-primary">
                      {tech.charAt(0)}
                    </div>
                  </div>
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolling left */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: scrollAnimationDuration,
                  ease: "linear",
                },
              }}
            >
              {techIconsRow2Extended.map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  className="inline-flex flex-col items-center justify-center mx-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-background shadow-md flex items-center justify-center mb-2">
                    <div className="text-2xl font-bold text-primary">
                      {tech.charAt(0)}
                    </div>
                  </div>
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        {/* Skills Categories - Responsive 3-column grid on medium screens and above */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Map through skill categories with staggered animations */}
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="px-3 py-1 text-sm rounded-full"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
