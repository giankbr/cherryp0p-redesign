"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  initialScale?: number;
  once?: boolean;
  threshold?: number;
}

export function ScaleIn({
  children,
  className = "",
  duration = 0.5,
  delay = 0,
  initialScale = 0.9,
  once = true,
  threshold = 0.1
}: ScaleInProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const variants = {
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
