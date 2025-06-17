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
import { User } from "lucide-react";

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
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                <User className="h-16 w-16" />
              </div>
              {/* Uncomment and use your own image:
              <Image
                src="/your-profile-image.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
              */}
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
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Biography</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi there! I&apos;m Frankie Fong, a passionate Full-Stack
                    Developer based in Toronto with over 5 years of experience
                    in web development. I specialize in building modern,
                    responsive, and user-friendly applications using React,
                    Next.js, and Node.js.
                  </p>
                  <p>
                    My journey in tech began when I built my first website in
                    college, and I&apos;ve been hooked ever since. I&apos;m
                    constantly learning and exploring new technologies to stay
                    at the cutting edge of web development.
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
