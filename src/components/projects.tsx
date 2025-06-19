/**
 * Projects Component
 *
 * A responsive grid display of portfolio projects with animated cards.
 * Features project images, descriptions, technology badges, and links to demos and code.
 *
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
 * - Animated entrance effects with staggered timing
 * - Hover animations for interactive feedback
 * - Technology badge display for each project
 * - Links to live demos and GitHub repositories
 */

"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ZoomIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ImageModal } from "@/components/ui/image-modal";

/**
 * Projects Data
 *
 * This data structure defines the projects to be displayed in the grid.
 * Each project contains details like title, description, technologies used, and links.
 *
 * To customize:
 * - Add/remove projects to update your portfolio
 * - Update project details (title, description, technologies)
 * - Replace placeholder image paths with actual project screenshots
 * - Update demo and GitHub URLs to point to your actual projects
 */
const projectsData = [
  {
    title: "Expense Tracker App",
    description:
      "A cross-platform expense tracking application built with React Native and Expo, featuring user authentication through Clerk and data persistence with NeonDB.",
    image: "/expense-tracker-app.png",
    technologies: [
      "React Native",
      "Expo",
      "Clerk Authentication",
      "Express.js",
      "NeonDB",
      "Upstash Redis",
      "TypeScript",
      "Expo Router",
    ],
    githubUrl: "https://github.com/FrankieFong-hk/expense-tracker-app",
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart functionality, payment processing, and analytics dashboard.",
    image: "/e-commerce-store.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "Stripe",
      "Zustand",
      "DaisyUI",
      "Framer Motion",
    ],
    demoUrl: "https://e-commerce-store-2-zeta.vercel.app/",
    githubUrl: "https://github.com/FrankieFong-hk/e-commerce-store",
  },
  {
    title: "Twitter Clone",
    description:
      "A full-stack social media platform with user authentication, real-time posts, notifications, and media sharing capabilities, modeled after Twitter's core functionality.",
    image: "/twitter-clone.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "DaisyUI",
      "Vite",
      "React Query",
      "JWT Authentication",
      "Cloudinary",
      "React Router",
      "React Icons",
    ],
    demoUrl: "https://twitter-clone-opal-six.vercel.app/",
    githubUrl: "https://github.com/FrankieFong-hk/twitter-clone",
  },
  {
    title: "Product Store",
    description:
      "A full-stack web application for managing product listings with CRUD operations, responsive UI, and MongoDB database integration.",
    image: "/product-store.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "Zustand",
      "React Router",
      "Mongoose",
      "React Icons",
    ],
    demoUrl: "https://product-store-livid.vercel.app/",
    githubUrl: "https://github.com/FrankieFong-hk/mern-crash-course",
  },
  {
    title: "Monsters Rolodex",
    description:
      "The Monster Rolodex is based on React and contains functions for searching data and setting titles.",
    image: "/monster-rolodex.png", // Replace with actual image path
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    demoUrl: "https://frankiefong-hk.github.io/monsters_rolodex/",
    githubUrl: "https://github.com/FrankieFong-hk/monsters_rolodex",
  },
];

export function Projects() {
  // State for image modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");

  // Function to open the modal with the selected image
  const openImageModal = (imageSrc: string, imageAlt: string) => {
    setSelectedImage(imageSrc);
    setSelectedImageAlt(imageAlt);
    setModalOpen(true);
  };

  /**
   * Animation Variants
   *
   * These Framer Motion animation variants define how elements animate in and out of view.
   * - containerVariants: Controls the parent container with staggered children animations
   * - itemVariants: Controls individual project card animations
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Creates a staggered effect for child elements
        delay: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 via-primary/5 to-secondary/5 dark:from-secondary/5 dark:via-primary/10 dark:to-secondary/10 z-0"></div>
      {/* Section with subtle background color */}
      <div className="container px-4 md:px-6 m-auto relative z-10">
        {/* Responsive container with padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects grid with responsive columns - 1 on mobile, 2 on tablet, 3 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Project card with hover effect and full height */}
              <Card className="overflow-hidden h-full border shadow-lg hover:shadow-xl transition-all flex flex-col">
                {/* Project image container with 16:9 aspect ratio */}
                <div className="aspect-video relative overflow-hidden bg-muted cursor-pointer group">
                  {/* Project image with click to zoom functionality */}
                  <div
                    onClick={() => openImageModal(project.image, project.title)}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                      <ZoomIn
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={32}
                      />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Technologies badge list - flexbox with wrapping */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* Map through technologies and create badges */}
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2 py-0.5 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {/* Card footer with GitHub and demo links */}
                <CardFooter className="flex justify-between mt-auto">
                  {/* GitHub repository link */}
                  <Button asChild variant="ghost" size="sm">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {/* Live demo link */}
                  {project.demoUrl && (
                    <Button asChild variant="ghost" size="sm">
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal Component */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
        imageAlt={selectedImageAlt}
      />
    </section>
  );
}
