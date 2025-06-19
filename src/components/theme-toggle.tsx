"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only show the theme toggle after mounting to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the actual current theme (accounting for system preference)
  const resolvedTheme = React.useMemo(() => {
    if (!mounted) return "light"; // Default before mounting
    return theme === "system" ? systemTheme : theme;
  }, [mounted, theme, systemTheme]);

  // Handle theme toggle with proper fallbacks
  const toggleTheme = React.useCallback(() => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [resolvedTheme, setTheme]);

  // Show placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
