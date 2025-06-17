import { Metadata } from "next";

// SEO metadata configuration
// Customize these values to match your personal information
export const siteMetadata: Metadata = {
  title: "Developer Portfolio | Full-Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects and skills in React, Next.js, TypeScript, and more.",
  keywords: [
    "developer", 
    "portfolio", 
    "full-stack", 
    "web development", 
    "react", 
    "next.js",
    "typescript",
    "tailwind css",
    "framer motion"
  ],
  authors: [
    {
      name: "Alex", // Replace with your name
      url: "https://github.com/yourusername", // Replace with your GitHub URL
    },
  ],
  creator: "Alex", // Replace with your name
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com", // Replace with your portfolio URL
    title: "Developer Portfolio | Full-Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects and skills",
    siteName: "Developer Portfolio",
    images: [
      {
        url: "/og-image.png", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Full-Stack Developer",
    description: "Professional portfolio showcasing full-stack development projects and skills",
    images: ["/og-image.png"], // Replace with your Twitter card image
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};
