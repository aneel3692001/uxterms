"use client";

import { GlassCard } from "./glass-card";
import { Trophy, Star } from "lucide-react";

interface XPLevelWidgetProps {
  level?: number;
  xp?: number;
  nextLevelXp?: number;
}

export function XPLevelWidget({
  level = 1,
  xp = 0,
  nextLevelXp = 200,
}: XPLevelWidgetProps) {
  const progress = Math.min((xp / nextLevelXp) * 100, 100);

  return (
    <GlassCard className="flex items-center gap-3 py-2 px-4 !rounded-full border-brand-primary/20 bg-brand-primary/5 shadow-lg shadow-brand-primary/10" variant="elevated">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-brand-accent to-lime-400 text-brand-primary font-bold text-sm shadow-md shadow-brand-accent/20">
          {level}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Level {level}</span>
          </div>
          <div className="w-24 h-2 bg-bg-soft rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-brand-primary to-indigo-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      <div className="h-8 w-[1px] bg-border-subtle mx-1" />
      <div className="flex items-center gap-1.5 text-xs font-bold text-text-muted">
        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
        <span>{xp} XP</span>
      </div>
    </GlassCard>
  );
}
