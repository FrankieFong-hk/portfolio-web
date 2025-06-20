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
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Submission status state
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  /**
   * Form submission handler using EmailJS
   *
   * This function:
   * 1. Validates form data (handled by HTML required attributes)
   * 2. Sends data using EmailJS service
   * 3. Handles success/error responses
   * 4. Shows appropriate feedback to the user
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set submitting state
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: "Sending your message...",
    });

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Send the email using EmailJS
      const result = await emailjs.send(
        serviceId ?? "",
        templateId ?? "",
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      console.log("Email sent successfully:", result.text);

      // Update status on success
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false, message: "" }));
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);

      // Update status on error
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Failed to send your message. Please try again later.",
      });

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: false, message: "" }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Section heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
            transition={{ duration: 0.5, delay: 0.5 }}
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Status message display */}
                  {status.message && (
                    <div
                      className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                        status.error
                          ? "bg-red-100 text-red-700"
                          : status.submitted
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {status.submitting && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      )}
                      {status.submitted && <CheckCircle className="h-4 w-4" />}
                      {status.error && <AlertCircle className="h-4 w-4" />}
                      <span>{status.message}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-11 sm:h-12 text-base sm:text-lg mt-2"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information - Animated entrance from right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
                      <a
                        href="mailto:httfong@gmail.com"
                        className="hover:text-primary transition-colors duration-200"
                      >
                        httfong@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* Phone contact info */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mt-0.5 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium text-base sm:text-lg">Phone</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      <a
                        href="tel:+14374361203"
                        className="hover:text-primary transition-colors duration-200"
                      >
                        +1 (437) 436-1203
                      </a>
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
                    href="https://github.com/FrankieFong-hk"
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

                  {/* LinkedIn social link with hover animation */}
                  <motion.a
                    href="https://linkedin.com/in/frankie-fong98"
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
