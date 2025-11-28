import { Award, Star, Zap } from "lucide-react";

export const levels = [
  { title: "Beginner", xp: "0 XP", icon: Star, color: "text-text-subtle" },
  { title: "Junior Designer", xp: "500 XP", icon: Star, color: "text-brand-xp" },
  { title: "Mid-Level", xp: "2,000 XP", icon: Zap, color: "text-brand-primary", current: true },
  { title: "Senior", xp: "5,000 XP", icon: Award, color: "text-brand-accent" },
  { title: "Lead Designer", xp: "10,000 XP", icon: Award, color: "text-brand-xp" },
];
