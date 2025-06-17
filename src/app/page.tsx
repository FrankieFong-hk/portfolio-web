/**
 * Main Portfolio Page
 *
 * This is the main entry point for the portfolio website. It imports and renders
 * all the major sections in sequence. To rearrange sections, simply change the order
 * of the components below.
 *
 * Each section is designed to be fully responsive and self-contained.
 */

import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main sections of the portfolio */}
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Add additional sections here if needed */}
    </div>
  );
}
