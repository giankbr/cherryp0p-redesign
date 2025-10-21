"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ModeToggleProps {
      className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
      const { theme, setTheme } = useTheme();
      const [mounted, setMounted] = useState(false);

      useEffect(() => {
            setMounted(true);
      }, []);

      const toggleTheme = () => {
            setTheme(theme === "dark" ? "light" : "dark");
      };

      if (!mounted) {
            return (
                  <button
                        className={`relative w-12 h-12 flex items-center justify-center rounded-lg border border-border bg-background transition-all ${className || ""}`}
                        aria-label="Toggle theme"
                  >
                        <div className="w-5 h-5 rounded-full bg-muted" />
                  </button>
            );
      }

      return (
            <button
                  onClick={toggleTheme}
                  className={`group relative w-12 h-12 flex items-center justify-center rounded-lg border border-border bg-background hover:border-primary/50 hover:bg-accent/50 transition-all duration-300 ${className || ""}`}
                  aria-label="Toggle theme"
            >
                  {/* Sun Icon */}
                  <Sun
                        className={`absolute h-5 w-5 text-amber-500 transition-all duration-500 ease-in-out ${
                              theme === "dark"
                                    ? "rotate-90 scale-0 opacity-0"
                                    : "rotate-0 scale-100 opacity-100"
                        }`}
                  />

                  {/* Moon Icon */}
                  <Moon
                        className={`absolute h-5 w-5 text-blue-400 transition-all duration-500 ease-in-out ${
                              theme === "dark"
                                    ? "rotate-0 scale-100 opacity-100"
                                    : "-rotate-90 scale-0 opacity-0"
                        }`}
                  />

                  {/* Ripple effect on click */}
                  <span className="absolute inset-0 rounded-lg bg-primary/10 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-300" />
            </button>
      );
}
