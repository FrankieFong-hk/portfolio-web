/**
 * Hero Component
 *
 * A visually appealing introduction section for the portfolio with animated elements,
 * a brief self-introduction, and call-to-action buttons. This component appears at the
 * top of the page and serves as the first impression for visitors.
 *
 * Features:
 * - Animated entrance effects using Framer Motion
 * - Interactive particle background with mouse interaction
 * - Subtle background gradient elements
 * - Responsive design for all screen sizes
 * - Call-to-action buttons for projects and resume
 * - Customizable avatar/profile image
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { ParticlesBackground } from "@/components/particles-background";
import { Link as ScrollLink } from "react-scroll";
import BlurText from "./animation/BlurText";
import StarBorder from "@/components/animation/StarBorder";

export function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 overflow-hidden flex justify-center items-center h-[calc(100vh-4rem)]"
    >
      {/* Interactive particle background */}
      <ParticlesBackground />

      {/* Background elements - Decorative blurred circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top-right decorative circle */}
        <motion.div
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        {/* Bottom-left decorative circle */}
        <motion.div
          className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Greeting text with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              Hi, I&apos;m Frankie Fong
            </h2>
          </motion.div>

          {/* Main headline and description with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Delayed slightly after greeting
            className="space-y-4"
          >
            {/* Main title with typing animation */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <TypeAnimation
                sequence={[
                  "Passionate Full-Stack Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </h1>
            {/* Brief description - customize with your location and skills */}
            <BlurText
              text="Crafting beautiful and functional web experiences with modern technologies"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl text-muted-foreground max-w-[850px] justify-center"
            />
          </motion.div>

          {/* Call-to-action buttons with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} // Delayed after headline
            className="flex flex-col sm:flex-row gap-4" // Stack vertically on mobile, horizontally on larger screens
          >
            <StarBorder
              as="div"
              className=""
              color="#676cd9"
              speed="5s"
              thickness={1}
            >
              {/* Primary CTA button - links to projects section */}
              <Button asChild size="lg" className="rounded-full px-8">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </ScrollLink>
              </Button>
            </StarBorder>
            {/* Secondary CTA button - links to resume download */}
            <StarBorder
              as="div"
              className=""
              color="#676cd9"
              speed="5s"
              thickness={1}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </StarBorder>
          </motion.div>

          {/* Profile image/avatar with spring animation */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6, // Appears last
              type: "spring", // Bouncy animation
              stiffness: 100, // Controls bounce intensity
            }}
            className="relative w-full max-w-[320px] aspect-square rounded-full overflow-hidden border-4 border-background shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              <Image
                src={avatarImage}
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
