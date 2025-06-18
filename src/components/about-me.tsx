/**
 * About Me Component
 *
 * A personal introduction section that showcases your background, skills, and interests.
 * This component provides visitors with a deeper understanding of who you are,
 * your journey, and what drives you as a professional.
 *
 * Features:
 * - Animated content sections with Framer Motion
 * - Responsive layout with grid for skills/interests
 * - Personal image with animation effects
 * - Customizable content sections
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import avatarImage from "../assets/images/avatar.jpg";

export function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6 m-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Profile image - left side on desktop, top on mobile */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-xl">
              <Image
                src={avatarImage}
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* About me content - right side on desktop, bottom on mobile */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Bio section */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi there! I&apos;m Frankie Fong, a passionate Software
                    Developer with over 3 years of experience in web
                    development. I specialize in building modern, responsive,
                    and user-friendly applications using React, Next.js,
                    Node.js, TypeScript, PostgreSQL, MongoDB, and Tailwind CSS.
                  </p>
                  <p>
                    With over three years of dedicated expertise, I have worked
                    in various fields, including web design and development,
                    software development, and database design and optimization.
                    I am always excited to explore new tools and technologies.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me hiking through
                    nature trails, capturing moments through my camera lens, or
                    diving into a good book on technology and innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
