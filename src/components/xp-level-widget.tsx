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
    <GlassCard className="flex items-center gap-3 py-2 px-4 !rounded-full border-brand-blue/20 bg-brand-blue/5">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent text-brand-black font-bold text-xs">
          {level}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-xs font-medium text-brand-blue">
            <Trophy className="w-3 h-3" />
            <span>Level {level}</span>
          </div>
          <div className="w-20 h-1.5 bg-bg-soft rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-brand-blue transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      <div className="h-6 w-[1px] bg-border-subtle" />
      <div className="flex items-center gap-1 text-xs font-semibold text-text-muted">
        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        <span>{xp} XP</span>
      </div>
    </GlassCard>
  );
}
