"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

export function ParticlesBackground() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>("light"); // Initialize with a default theme
  const [mounted, setMounted] = useState(false);

  // Determine the actual theme considering system preference
  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Use theme if defined, otherwise fall back to system theme or default to 'light'
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(resolvedTheme || "light");
  }, [theme, systemTheme]);

  // Initialize the particles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Optional: Handle container ready
  const particlesLoaded = useCallback(async () => {
    // Container parameter removed as it's not being used
  }, []);

  // Don't render particles until component is mounted and theme is determined
  if (!mounted) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      loaded={particlesLoaded}
      key={currentTheme} // Force re-render when theme changes
      options={{
        fullScreen: false,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: currentTheme === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            color: currentTheme === "dark" ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
