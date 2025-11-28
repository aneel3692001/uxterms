"use client";

import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { levels } from "@/data/skill-progression";

export function SkillProgression() {
  const currentIndex = levels.findIndex(l => l.current);
  const progress = ((currentIndex + 0.5) / levels.length) * 100;

  return (
    <section className="section-spacing relative overflow-hidden bg-bg-elevated/20">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Your skill progression</h2>
            <p className="text-text-muted text-lg">
              Level up from beginner to lead designer
            </p>
          </div>

          {/* Progress Track */}
          <div className="relative mb-12">
            <div className="h-2 bg-bg-soft rounded-full overflow-hidden border border-border-subtle">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-xp rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Level Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {levels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`p-4 rounded-xl border transition-all text-center h-full flex flex-col items-center justify-center ${
                  level.current
                    ? "bg-brand-primary/10 border-brand-primary shadow-lg shadow-brand-primary/20"
                    : "bg-bg-surface border-border-strong hover:border-brand-primary/30"
                }`}>
                  <div className={`w-12 h-12 rounded-full ${
                    level.current ? "bg-brand-primary/20" : "bg-bg-soft"
                  } flex items-center justify-center mx-auto mb-3`}>
                    <level.icon className={`w-6 h-6 ${level.color}`} />
                  </div>
                  <h4 className="text-xs font-bold font-display mb-1.5">{level.title}</h4>
                  <p className="text-[10px] text-text-subtle font-semibold uppercase tracking-wider">{level.xp}</p>
                  
                  {level.current && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center border-2 border-bg-base shadow-sm">
                      <Zap className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted mt-10">
            Currently at <span className="font-bold text-brand-primary">Mid-Level</span> • 1,250 / 2,000 XP
          </p>
        </div>
      </div>
    </section>
  );
}
