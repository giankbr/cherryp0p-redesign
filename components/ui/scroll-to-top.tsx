"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  className?: string;
  threshold?: number;
  smoothScroll?: boolean;
  ariaLabel?: string;
  showLabel?: boolean;
}

export function ScrollToTop({
  className,
  threshold = 400,
  smoothScroll = true,
  ariaLabel = "Scroll to top",
  showLabel = false,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Check if window is scrolled past threshold
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    // Initialize on mount
    toggleVisibility();

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    if (smoothScroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all z-50 flex items-center justify-center gap-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "animate-in fade-in-50 slide-in-from-bottom-10 duration-300",
        className
      )}
      aria-label={ariaLabel}
    >
      <ArrowUp size={20} />
      {showLabel && <span className="ml-1 text-sm font-medium">Top</span>}
    </button>
  );
}
