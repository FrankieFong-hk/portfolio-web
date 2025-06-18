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
import Image from "next/image";
import HTML5 from "@/assets/icons/HTML5.svg";
import CSS3 from "@/assets/icons/CSS3.svg";
import JavaScript from "@/assets/icons/JavaScript.svg";
import ReactIcon from "@/assets/icons/React.svg";
import Nextjs from "@/assets/icons/Next.js.svg";
import TypeScript from "@/assets/icons/TypeScript.svg";
import Redux from "@/assets/icons/Redux.svg";
import TailwindCSS from "@/assets/icons/TailwindCSS.svg";
import Shadcn from "@/assets/icons/Shadcn.svg";
import Bootstrap from "@/assets/icons/Bootstrap.svg";
import FramerMotion from "@/assets/icons/FramerMotion.svg";
import Git from "@/assets/icons/Git.svg";
import MaterialUI from "@/assets/icons/MaterialUI.svg";
import MongoDB from "@/assets/icons/MongoDB.svg";
import MySQL from "@/assets/icons/MySQL.svg";
import Nodejs from "@/assets/icons/Nodejs.svg";
import PostgresSQL from "@/assets/icons/PostgresSQL.svg";
import PHP from "@/assets/icons/PHP.svg";
import Stripe from "@/assets/icons/Stripe.svg";
import Vitejs from "@/assets/icons/Vite.js.svg";
import WordPress from "@/assets/icons/WordPress.svg";
import Figma from "@/assets/icons/Figma.svg";
import Webpack from "@/assets/icons/Webpack.svg";
import Express from "@/assets/icons/Express.svg";
import ReactNative from "@/assets/icons/ReactNative.svg";
import Jest from "@/assets/icons/Jest.svg";

/**T
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
      { name: "HTML", icon: HTML5 },
      { name: "CSS", icon: CSS3 },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: ReactIcon },
      { name: "React Native", icon: ReactNative },
      { name: "Next.js", icon: Nextjs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Redux", icon: Redux },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "Shadcn", icon: Shadcn },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Material UI", icon: MaterialUI },
      { name: "Framer Motion", icon: FramerMotion },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Nodejs },
      { name: "Express", icon: Express },
      { name: "MongoDB", icon: MongoDB },
      { name: "PostgresSQL", icon: PostgresSQL },
      { name: "PHP", icon: PHP },
      { name: "MySQL", icon: MySQL },
      { name: "Stripe", icon: Stripe },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Vite", icon: Vitejs },
      { name: "Git", icon: Git },
      { name: "Wordpress", icon: WordPress },
      { name: "Jest", icon: Jest },
      { name: "Webpack", icon: Webpack },
      { name: "Figma", icon: Figma },
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
  { name: "HTML", icon: HTML5 },
  { name: "CSS", icon: CSS3 },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: ReactIcon },
  { name: "React Native", icon: ReactNative },
  { name: "Next.js", icon: Nextjs },
  { name: "TypeScript", icon: TypeScript },
  { name: "Redux", icon: Redux },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "Shadcn", icon: Shadcn },
  { name: "Material UI", icon: MaterialUI },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Framer Motion", icon: FramerMotion },
];

const techIconsRow2 = [
  { name: "Node.js", icon: Nodejs },
  { name: "Express", icon: Express },
  { name: "MongoDB", icon: MongoDB },
  { name: "PostgreSQL", icon: PostgresSQL },
  { name: "Stripe", icon: Stripe },
  { name: "PHP", icon: PHP },
  { name: "MySQL", icon: MySQL },
  { name: "Wordpress", icon: WordPress },
  { name: "Jest", icon: Jest },
  { name: "Webpack", icon: Webpack },
  { name: "Figma", icon: Figma },
  { name: "Git", icon: Git },
];

// Duplicate the arrays multiple times to create a truly seamless infinite scroll effect
const techIconsRow1Extended = [...techIconsRow1, ...techIconsRow1];
const techIconsRow2Extended = [...techIconsRow2, ...techIconsRow2];

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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/10 dark:from-primary/10 dark:via-primary/5 dark:to-secondary/5 z-0"></div>
      <div className="container px-4 md:px-6 m-auto relative z-10">
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
                  <div className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center mb-2">
                    <div className="text-2xl font-bold text-primary">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
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
                  <div className="w-16 h-16 rounded-xl shadow-md flex items-center justify-center mb-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
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
