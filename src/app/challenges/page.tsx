"use client";

import { useState } from "react";
import { challenges } from "@/data/challenges";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { Shuffle, Trophy, CheckCircle, Tag, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ChallengesPage() {
  const [activeChallenge, setActiveChallenge] = useState(challenges[0]);
  const [completed, setCompleted] = useState<string[]>([]);

  const generateRandom = () => {
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    setActiveChallenge(random);
  };

  const markComplete = (id: string) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Design Challenges</h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Sharpen your skills with practical briefs. Build your portfolio one challenge at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Challenge Card */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChallenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlassCard className="h-full flex flex-col p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                    <Trophy className="w-64 h-64" />
                  </div>
                  
                  <div className="relative z-10 space-y-8 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border",
                        activeChallenge.difficulty === "Easy" ? "bg-green-500/10 text-green-600 border-green-500/20" :
                        activeChallenge.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" :
                        "bg-red-500/10 text-red-600 border-red-500/20"
                      )}>
                        {activeChallenge.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-xs font-bold uppercase tracking-wider">
                        {activeChallenge.category}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{activeChallenge.title}</h2>
                      <p className="text-lg text-text-muted leading-relaxed">
                        {activeChallenge.description}
                      </p>
                    </div>

                    {/* Example Prompts */}
                    {activeChallenge.examplePrompts && activeChallenge.examplePrompts.length > 0 && (
                      <div className="bg-bg-soft/50 rounded-xl p-6 border border-border-subtle">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-subtle mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" /> Considerations
                        </h3>
                        <ul className="space-y-2">
                          {activeChallenge.examplePrompts.map((prompt, i) => (
                            <li key={i} className="text-text-muted flex items-start gap-2 text-sm">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                              {prompt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    {activeChallenge.tags && activeChallenge.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {activeChallenge.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-bg-soft text-text-subtle text-xs font-medium">
                            <Tag className="w-3 h-3" /> {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 pt-8 mt-8 border-t border-border-subtle flex flex-col sm:flex-row gap-4">
                    <Button onClick={generateRandom} variant="outline" size="lg" className="gap-2 flex-1">
                      <Shuffle className="w-4 h-4" /> Random Challenge
                    </Button>
                    <Button 
                      onClick={() => markComplete(activeChallenge.id)}
                      disabled={completed.includes(activeChallenge.id)}
                      size="lg"
                      className="gap-2 flex-1 shadow-lg shadow-brand-primary/20"
                    >
                      {completed.includes(activeChallenge.id) ? (
                        <>Completed <CheckCircle className="w-4 h-4" /></>
                      ) : (
                        "Mark Complete"
                      )}
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* List of Challenges */}
          <div className="space-y-4 flex flex-col h-[600px]">
            <h3 className="font-bold text-lg px-2 flex items-center gap-2">
              All Challenges <span className="text-xs font-normal text-text-muted bg-bg-soft px-2 py-0.5 rounded-full">{challenges.length}</span>
            </h3>
            <div className="space-y-3 overflow-y-auto pr-2 flex-1 scrollbar-thin">
              {challenges.map((challenge) => (
                <GlassCard 
                  key={challenge.id} 
                  className={cn(
                    "p-4 cursor-pointer transition-all hover:bg-bg-soft group border-transparent",
                    activeChallenge.id === challenge.id 
                      ? "border-brand-primary bg-brand-primary/5 shadow-md" 
                      : "hover:border-border-subtle"
                  )}
                  onClick={() => setActiveChallenge(challenge)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={cn(
                      "font-bold text-sm group-hover:text-brand-primary transition-colors",
                      activeChallenge.id === challenge.id ? "text-brand-primary" : ""
                    )}>
                      {challenge.title}
                    </h4>
                    {completed.includes(challenge.id) && (
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <span className={cn(
                      "px-1.5 py-0.5 rounded bg-bg-soft",
                      challenge.difficulty === "Easy" ? "text-green-600 bg-green-500/10" :
                      challenge.difficulty === "Medium" ? "text-yellow-600 bg-yellow-500/10" :
                      "text-red-600 bg-red-500/10"
                    )}>{challenge.difficulty}</span>
                    <span>•</span>
                    <span>{challenge.category}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
