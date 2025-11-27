"use client";

import { useState } from "react";
import { challenges } from "@/data/challenges";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { Shuffle, Trophy, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Design Challenges</h1>
          <p className="text-text-muted text-lg">
            Sharpen your skills with practical briefs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Challenge Card */}
          <div className="lg:col-span-2">
            <GlassCard className="h-full flex flex-col p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Trophy className="w-32 h-32" />
              </div>
              
              <div className="relative z-10 space-y-6 flex-1">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                    activeChallenge.difficulty === "Easy" ? "bg-green-500/10 text-green-500" :
                    activeChallenge.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-500" :
                    "bg-red-500/10 text-red-500"
                  )}>
                    {activeChallenge.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
                    {activeChallenge.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold">{activeChallenge.title}</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {activeChallenge.description}
                </p>
              </div>

              <div className="relative z-10 pt-8 flex gap-4">
                <Button onClick={generateRandom} variant="outline" className="gap-2">
                  <Shuffle className="w-4 h-4" /> New Challenge
                </Button>
                <Button 
                  onClick={() => markComplete(activeChallenge.id)}
                  disabled={completed.includes(activeChallenge.id)}
                  className="gap-2"
                >
                  {completed.includes(activeChallenge.id) ? (
                    <>Completed <CheckCircle className="w-4 h-4" /></>
                  ) : (
                    "Mark Complete"
                  )}
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* List of Challenges */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg px-2">All Challenges</h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {challenges.map((challenge) => (
                <GlassCard 
                  key={challenge.id} 
                  className={cn(
                    "p-4 cursor-pointer transition-colors hover:bg-bg-soft",
                    activeChallenge.id === challenge.id ? "border-brand-blue bg-brand-blue/5" : ""
                  )}
                  onClick={() => setActiveChallenge(challenge)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-sm">{challenge.title}</h4>
                    {completed.includes(challenge.id) && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div className="flex gap-2 text-xs text-text-muted">
                    <span>{challenge.category}</span>
                    <span>•</span>
                    <span>{challenge.difficulty}</span>
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
