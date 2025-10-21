"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerFadeProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number;
  childClassName?: string;
}

export const StaggerFade: FC<StaggerFadeProps> = ({
  children,
  delay = 0.1,
  staggerDelay = 0.1,
  className = "",
  direction = "up",
  distance = 20,
  once = true,
  threshold = 0.1,
  childClassName = ""
}) => {
  // Get direction offset
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
      default:
        return { y: distance };
    }
  };

  // Variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Variants for each item
  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Function to check if the child is a valid React element
  const renderChildren = () => {
    return Array.isArray(children)
      ? children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={childClassName}
          >
            {child}
          </motion.div>
        ))
      : (
        <motion.div variants={itemVariants} className={childClassName}>
          {children}
        </motion.div>
      );
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={containerVariants}
    >
      {renderChildren()}
    </motion.div>
  );
};
