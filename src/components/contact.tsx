/**
 * Contact Component
 *
 * A responsive contact section with a form and contact information cards.
 * This component allows visitors to send messages and provides multiple
 * ways to get in touch.
 *
 * Features:
 * - Contact form with validation
 * - Contact information display
 * - Social media links
 * - Responsive grid layout
 * - Animated with Framer Motion
 */

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  /**
   * Form submission handler
   *
   * This is a placeholder function that can be connected to a backend service.
   * In a real implementation, you would typically:
   * 1. Validate form data
   * 2. Send data to an API endpoint (e.g., using fetch or axios)
   * 3. Handle success/error responses
   * 4. Show appropriate feedback to the user
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you would typically handle form submission
    // For example, sending data to an API endpoint
    console.log("Form submitted");
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Section heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2 text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or want to discuss opportunities? Reach out!
          </p>
        </motion.div>

        {/* Two-column layout on medium screens and above, single column on mobile */}
        <div className="grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-2">
          {/* Contact Form - Animated entrance from left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-1 sm:space-y-2">
                <CardTitle className="text-xl sm:text-2xl">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and I&apos;ll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Two-column layout for name and email on larger screens */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="h-10 sm:h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="h-10 sm:h-11"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] sm:min-h-[150px] resize-y"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-11 sm:h-12 text-base sm:text-lg mt-2"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information - Animated entrance from right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact details card */}
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-1 sm:space-y-2">
                <CardTitle className="text-xl sm:text-2xl">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {/* Email contact info */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium text-base sm:text-lg">Email</h3>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">
                      contact@example.com
                    </p>
                  </div>
                </div>
                {/* Phone contact info */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium text-base sm:text-lg">Phone</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>
                {/* Location contact info */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium text-base sm:text-lg">
                      Location
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Toronto, Canada
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-4 sm:px-6 py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Typically responds within 24-48 hours
                </p>
              </CardFooter>
            </Card>

            {/* Social Media Links Card */}
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-1 sm:space-y-2">
                <CardTitle className="text-xl sm:text-2xl">
                  Social Media
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Connect with me on social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Responsive social media icons grid */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {/* GitHub social link with hover animation */}
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>

                  {/* Twitter/X social link with hover animation */}
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Twitter Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </motion.a>

                  {/* LinkedIn social link with hover animation */}
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
