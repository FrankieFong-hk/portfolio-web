/**
 * Navbar Component
 *
 * A responsive navigation bar with smooth scrolling links, mobile menu,
 * and theme toggle functionality. The navbar becomes sticky and changes
 * appearance on scroll.
 *
 * Features:
 * - Responsive design (mobile and desktop layouts)
 * - Smooth scroll navigation using react-scroll
 * - Mobile slide-out menu using Shadcn UI Sheet component
 * - Theme toggle button
 * - Animated with Framer Motion
 * - Transparent to solid background transition on scroll
 */

"use client";

import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Navigation items configuration
 *
 * Customize this array to add, remove or modify navigation links.
 * Each item should have:
 * - name: Display text for the navigation item
 * - href: ID of the section to scroll to (must match section IDs in your page)
 */
const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

export function Navbar() {
  // Track scroll position to change navbar appearance
  const [isScrolled, setIsScrolled] = React.useState(false);
  // State to control the mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Add scroll event listener to detect when user scrolls down
  React.useEffect(() => {
    const handleScroll = () => {
      // Change navbar appearance after scrolling 10px
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close the mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        // Apply different styles based on scroll position
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm" // Scrolled state
          : "bg-transparent" // Initial state
      )}
      // Animation for navbar entrance
      initial={{ y: -100 }} // Start position (above viewport)
      animate={{ y: 0 }} // End position
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between m-auto">
        {/* Logo/Brand - Links to top of page */}
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <motion.div
            className="font-bold text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </motion.div>
        </ScrollLink>

        {/* Desktop Navigation - Only visible on medium screens and above */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Main navigation links using Shadcn NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <ScrollLink
                    to={item.href}
                    spy={true} // Highlights active link based on scroll position
                    smooth={true} // Enables smooth scrolling
                    offset={-70} // Offset to account for navbar height
                    duration={500} // Animation duration in ms
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer"
                    )}
                  >
                    {item.name}
                  </ScrollLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="default">
            <Link
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </Button>
          {/* Theme toggle button */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation - Only visible on small screens */}
        <div className="md:hidden flex items-center">
          {/* Theme toggle button */}
          <ThemeToggle />
          {/* Mobile slide-out menu using Shadcn Sheet component */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="px-2 py-1 text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <Link
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                  onClick={closeMenu}
                >
                  Resume
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
