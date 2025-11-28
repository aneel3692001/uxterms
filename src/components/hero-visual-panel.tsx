"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { Trophy, Zap, BookOpen, Star, Clock, Target } from "lucide-react";

interface HeroVisualPanelProps {
  shouldReduceMotion?: boolean;
}

export function HeroVisualPanel({ shouldReduceMotion = false }: HeroVisualPanelProps) {
  const cardMotionProps = (delay: number, y: number = 20) => 
    shouldReduceMotion
      ? { initial: false, animate: false, style: { opacity: 1 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" }
        };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-sm mx-auto">
        
        {/* Background Subtle Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/5 rounded-2xl blur-3xl" />
        
        {/* Revolut-style Card Stack - Tighter spacing */}
        <div className="relative space-y-3">
          
          {/* Card 1: XP & Level Card - More compact, app-like */}
          <motion.div
            {...cardMotionProps(0.1, 10)}
            className="relative z-10"
          >
            <div className="p-4 rounded-xl bg-bg-elevated/80 backdrop-blur-sm border border-border-strong shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                    <Zap className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-text-subtle">Your XP</p>
                    <p className="text-xl font-bold text-text-primary font-display">1,250</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-accent/10 border border-brand-accent/20">
                  <Star className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
                  <span className="text-sm font-bold text-brand-accent font-display">Lvl 5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Quiz Preview - Larger, central */}
          <motion.div
            {...cardMotionProps(0.2, 15)}
            className="relative z-20"
          >
            <div className="p-5 rounded-xl bg-bg-elevated/90 backdrop-blur-sm border border-border-strong shadow-xl">
              <div className="space-y-3.5">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">Quiz Question</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-500/10 text-green-600 border border-green-500/20 uppercase tracking-wide">
                        Easy
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-text-primary leading-tight font-display">
                      What does WCAG stand for?
                    </h4>
                  </div>
                </div>
                
                {/* Sample Options - More compact */}
                <div className="space-y-2">
                  {[
                    { text: "Web Content Accessibility Guidelines", correct: true },
                    { text: "Website Compliance Guardrails", correct: false }
                  ].map((option, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-lg text-xs font-medium border ${
                        option.correct
                          ? "bg-brand-primary/5 border-brand-primary/30 text-text-primary"
                          : "bg-bg-soft/50 border-border-subtle text-text-muted"
                      }`}
                    >
                      {option.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Glossary Term Preview + Stats Row */}
          <motion.div
            {...cardMotionProps(0.3, 10)}
            className="relative z-10"
          >
            <div className="p-4 rounded-xl bg-bg-elevated/80 backdrop-blur-sm border border-border-strong shadow-lg">
              <div className="flex items-start gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20 shrink-0">
                  <BookOpen className="w-4 h-4 text-brand-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-bold text-text-primary font-display">Affordance</h5>
                  <p className="text-[11px] text-text-muted mt-0.5 line-clamp-1">
                    Visual clues showing object usage...
                  </p>
                </div>
              </div>
              
              {/* Mini Stats - Revolut-style */}
              <div className="flex items-center gap-2 pt-3 border-t border-border-subtle">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-text-subtle">
                  <Target className="w-3 h-3" />
                  <span>100+ terms</span>
                </div>
                <span className="text-border-strong">•</span>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-text-subtle">
                  <Clock className="w-3 h-3" />
                  <span>30+ quizzes</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Trophy Badge - Smaller, cleaner */}
          <motion.div
            {...(shouldReduceMotion
              ? { initial: false, animate: false, style: { opacity: 1, scale: 1 } }
              : {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }
                })}
            className="absolute -top-2 -right-2 z-30"
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-brand-accent/30 rounded-full blur-lg ${shouldReduceMotion ? "" : "animate-pulse"}`} />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent/80 flex items-center justify-center shadow-lg border border-white/20">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
