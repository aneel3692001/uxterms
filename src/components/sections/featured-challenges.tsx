"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import Link from "next/link";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Redesign a Login Screen",
    difficulty: "Easy",
    category: "UI Design",
    considerations: [
      "Must support both email and social login",
      "Ensure accessibility (WCAG AA)"
    ],
    color: "green"
  },
  {
    title: "Create a Mobile Onboarding Flow",
    difficulty: "Medium",
    category: "UX Design",
    considerations: [
      "Target users: first-time app users",
      "Keep it under 3 steps"
    ],
    color: "yellow"
  },
  {
    title: "Design a Design System Component",
    difficulty: "Hard",
    category: "Product Design",
    considerations: [
      "Must have multiple variants and states",
      "Document usage guidelines"
    ],
    color: "red"
  }
];

export function FeaturedChallenges() {
  return (
    <section className="section-spacing relative overflow-hidden bg-bg-elevated/20">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Featured design challenges</h2>
              <p className="text-text-muted text-lg">
                Put your skills to the test with real-world briefs
              </p>
            </div>
            <Link href="/challenges" className="hidden md:block">
              <Button variant="outline" className="gap-2">
                View all <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassCard 
                  className="p-8 h-full flex flex-col border-border-strong bg-bg-surface"
                  hoverEffect
                  variant="flat"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                      challenge.difficulty === "Easy"
                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                        : challenge.difficulty === "Medium"
                        ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                        : "bg-red-500/10 text-red-600 border-red-500/20"
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider border border-brand-primary/20">
                      {challenge.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display mb-4 group-hover:text-brand-primary transition-colors">
                    {challenge.title}
                  </h3>

                  <div className="space-y-3 flex-1">
                    <p className="text-xs font-bold text-text-subtle uppercase tracking-wider">Considerations:</p>
                    {challenge.considerations.map((item, i) => (
                      <p key={i} className="text-sm text-text-muted leading-relaxed flex items-start gap-2">
                        <span className="text-brand-primary mt-1">•</span>
                        {item}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border-subtle">
                    <span className="text-sm font-bold text-brand-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      Start Challenge <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <Link href="/challenges" className="md:hidden">
            <Button className="w-full gap-2 h-12">
              View all challenges <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
