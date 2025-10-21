"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "default" | "primary" | "secondary" | "white";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  color = "primary",
  className
}: LoadingSpinnerProps) {
  // Map size to dimensions
  const sizeMap = {
    xs: "w-3 h-3 border-[2px]",
    sm: "w-4 h-4 border-[2px]",
    md: "w-6 h-6 border-[3px]",
    lg: "w-8 h-8 border-[3px]",
    xl: "w-10 h-10 border-[4px]",
  };

  // Map color to border colors
  const colorMap = {
    default: "border-accent-foreground/20 border-t-accent-foreground/80",
    primary: "border-primary/20 border-t-primary",
    secondary: "border-secondary/20 border-t-secondary",
    white: "border-white/20 border-t-white",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full",
        sizeMap[size],
        colorMap[color],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
