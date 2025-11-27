"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

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
  return (
    <motion.div
      className={cn(
        "rounded-3xl transition-all duration-300",
        variant === "default" && "glass-panel",
        variant === "elevated" && "glass-panel-elevated",
        variant === "flat" && "bg-bg-glass/30 border border-border-subtle",
        hoverEffect && "glass-card-hover cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
