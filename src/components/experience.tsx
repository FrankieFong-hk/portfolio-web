/**
 * Experience Component
 *
 * A timeline-based display of professional work experience with animated cards.
 * Features a vertical timeline with alternating card positions and animated list items.
 *
 * Features:
 * - Responsive timeline layout (vertical on mobile, alternating on desktop)
 * - Animated entrance effects for each experience card
 * - Staggered animations for responsibility list items
 * - Visual timeline with position indicators
 * - Easily customizable experience data
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building } from "lucide-react";

/**
 * Experience Data
 *
 * This data structure defines the work experience to be displayed in the timeline.
 * Each job entry contains details about the position, company, duration, and responsibilities.
 *
 * To customize:
 * - Add/remove job entries to update your work history
 * - Modify job details (title, company, location, etc.)
 * - Update responsibilities for each position
 * - The order here determines the display order in the timeline (newest first)
 */
const experienceData = [
  {
    title: "Software Developer",
    company: "AritaOne Software Limited",
    duration: "Jul 2023 - Sep 2024",
    location: "Toronto, Canada",
    description:
      "Software Developer for web applications using React, Next.js, TypeScript, and Node.js.",
    responsibilities: [
      "Developed and maintained responsive front-end interfaces for a travel agency website and an NGO mobile app using React.js, Next.js, and TypeScript.",
      "Collaborated with designers via Figma to implement responsive Material UI components, ensuring technical feasibility of designs.",
      "Translated UI/UX designs from Figma into pixel-perfect, functional components, ensuring high-fidelity implementation and seamless user experience.",
      "Increased application reliability by conducting thorough testing and debugging using Jest and React Testing Library, reducing post-deployment bugs by 25%.",
      "Optimized application performance with Webpack and Vite, enhancing page load times by 20% across devices and browsers.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "TBS Interactive Limited",
    duration: "Jul 2022 - Jul 2023",
    location: "Toronto, Canada",
    description:
      "Developed responsive web applications for clients in luxury brands sectors.",
    responsibilities: [
      "Developed 15+ responsive web applications for luxury brands using JavaScript, Bootstrap, and MySQL, improving client satisfaction scores by 20%.",
      "Created animated and responsive websites optimized for all devices, improving mobile accessibility and user satisfaction scores by 20%.",
      "Coordinated with web designers to precisely match visual design plans, ensuring a consistent and high-quality brand representation across all projects.",
      "Optimized SQL queries for backend APIs, reducing load times by 25% for high-traffic websites.",
    ],
  },
  {
    title: "Web Developer",
    company: "City University of Hong Kong Press",
    duration: "May 2021 - May 2022",
    location: "Montreal, Canada",
    description:
      "Created websites and web applications for the City University's official website.",
    responsibilities: [
      "Developed and designed City University's official website with animations, improving visual appeal and user experience",
      "Performed data management and debugging for university website maintenance",
      "Applied CSS with Bootstrap to create responsive webpages ensuring mobile compatibility",
    ],
  },
];

export function Experience() {
  /**
   * The Experience component renders a responsive timeline of work history.
   *
   * Key features:
   * - Vertical timeline with position indicators
   * - Alternating card layout on desktop (even/odd positioning)
   * - Stacked vertical layout on mobile
   * - Animated entrance effects with staggered timing
   * - Hover effects on cards for interactive feedback
   */
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/5 via-primary/10 to-secondary/10 dark:from-secondary/10 dark:via-primary/5 dark:to-secondary/5 z-0"></div>
      <div className="container px-4 md:px-6 m-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            My professional journey and roles
          </p>
        </motion.div>

        {/* Timeline container with vertical line */}
        <div className="relative">
          {/* Timeline center line - positioned differently on mobile vs desktop */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

          {/* Experience cards container */}
          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline position indicator - briefcase icon in a circle */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Experience card with hover effect */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <Card className="overflow-hidden border shadow-lg hover:shadow-xl transition-shadow">
                    {/* Card header with job title, company and duration */}
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          {job.duration}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-1 text-sm">
                        <Building className="h-3.5 w-3.5" />
                        {job.company}
                      </CardDescription>
                    </CardHeader>
                    {/* Card content with job description and responsibilities */}
                    <CardContent>
                      <p className="mb-4 text-muted-foreground">
                        {job.description}
                      </p>
                      {/* Responsibilities list with animated bullet points */}
                      <ul className="space-y-2 text-sm">
                        {job.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
