"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: "default" | "elevated" | "flat";
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  variant = "default",
  ...props
}: GlassCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? { initial: false, animate: false, transition: undefined, style: { opacity: 1, transform: "none" } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: "easeOut" } };

  return (
    <motion.div
      className={cn(
        "rounded-3xl",
        shouldReduceMotion ? "transition-none" : "transition-all duration-300",
        variant === "default" && "glass-panel",
        variant === "elevated" && "glass-panel-elevated",
        variant === "flat" && "bg-bg-glass/30 border border-border-subtle",
        hoverEffect && !shouldReduceMotion && "glass-card-hover cursor-pointer",
        className
      )}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
