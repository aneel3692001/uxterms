"use client";

import { useState } from "react";
import { challenges } from "@/data/challenges";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { Shuffle, Trophy, CheckCircle, Tag, Lightbulb, Target, Sparkles, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { generateChallenge, GeneratedChallenge } from "@/lib/challenge-generator";

export default function ChallengesPage() {
  const [activeChallenge, setActiveChallenge] = useState(challenges[0]);
  const [completed, setCompleted] = useState<string[]>([]);
  
  // Generator State
  const [isGeneratorMode, setIsGeneratorMode] = useState(false);
  const [generatedChallenge, setGeneratedChallenge] = useState<GeneratedChallenge | null>(null);
  const [genCategory, setGenCategory] = useState<"UX Design" | "UI Design" | "Product Design">("UX Design");
  const [genDifficulty, setGenDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");

  const generateRandom = () => {
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    setActiveChallenge(random);
    setIsGeneratorMode(false);
  };

  const handleGenerate = () => {
    const challenge = generateChallenge(genCategory, genDifficulty);
    setGeneratedChallenge(challenge);
    setIsGeneratorMode(true);
  };

  const markComplete = (id: string) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="container-custom py-24 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
            <Target className="w-3 h-3" /> Practice Mode
          </div>
          <h1 className="font-display">
            Design <span className="warm-gradient-text">Challenges</span>
          </h1>
          <p className="text-text-muted text-xl max-w-2xl leading-relaxed">
            Sharpen your skills with practical briefs. Build your portfolio one challenge at a time.
          </p>
        </div>

        {/* Generator Controls */}
        <GlassCard className="p-6 md:p-8 border-brand-primary/20 bg-bg-surface" variant="elevated">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2 font-display">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                AI Challenge Generator
              </h3>
              <p className="text-text-muted text-sm">Generate infinite, unique design briefs tailored to your needs.</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <select 
                value={genCategory}
                onChange={(e) => setGenCategory(e.target.value as any)}
                className="h-10 px-4 rounded-lg bg-bg-base border border-border-strong text-sm font-medium focus:ring-2 focus:ring-brand-primary/50 outline-none text-text-primary"
              >
                <option value="UX Design">UX Design</option>
                <option value="UI Design">UI Design</option>
                <option value="Product Design">Product Design</option>
              </select>
              
              <select 
                value={genDifficulty}
                onChange={(e) => setGenDifficulty(e.target.value as any)}
                className="h-10 px-4 rounded-lg bg-bg-base border border-border-strong text-sm font-medium focus:ring-2 focus:ring-brand-primary/50 outline-none text-text-primary"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              <Button onClick={handleGenerate} className="gap-2 shadow-lg shadow-brand-primary/20">
                <Sparkles className="w-4 h-4" /> Generate New Brief
              </Button>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Challenge Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isGeneratorMode && generatedChallenge ? (
                <motion.div
                  key="generated"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <GlassCard className="h-full flex flex-col p-8 md:p-12 relative overflow-hidden border-brand-accent/30 shadow-2xl bg-bg-elevated/60 backdrop-blur-2xl" variant="elevated">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                      <Sparkles className="w-96 h-96" />
                    </div>
                    
                    <div className="relative z-10 space-y-10 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={cn(
                          "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border shadow-sm",
                          generatedChallenge.difficulty === "Easy" ? "bg-green-500/10 text-green-600 border-green-500/20" :
                          generatedChallenge.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" :
                          "bg-red-500/10 text-red-600 border-red-500/20"
                        )}>
                          {generatedChallenge.difficulty}
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-xs font-bold uppercase tracking-widest shadow-sm">
                          {generatedChallenge.category}
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-bg-soft text-text-muted border border-border-subtle text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                          <Clock className="w-3 h-3" /> {generatedChallenge.suggestedTimeLimit}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-text-primary font-display">{generatedChallenge.title}</h2>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
                          {generatedChallenge.scenario}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-bg-soft/50 rounded-3xl p-6 border border-border-subtle/50 backdrop-blur-sm">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-text-subtle mb-4 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> Constraints
                          </h3>
                          <ul className="space-y-3">
                            {generatedChallenge.constraints.map((c, i) => (
                              <li key={i} className="text-text-muted flex items-start gap-3 text-sm">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-bg-soft/50 rounded-3xl p-6 border border-border-subtle/50 backdrop-blur-sm">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-text-subtle mb-4 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" /> Considerations
                          </h3>
                          <ul className="space-y-3">
                            {generatedChallenge.considerations.map((c, i) => (
                              <li key={i} className="text-text-muted flex items-start gap-3 text-sm">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-text-subtle mb-2">Expected Output</h3>
                        <p className="text-lg font-medium text-text-primary">{generatedChallenge.expectedOutput}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ) : (
                <motion.div
                  key={activeChallenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <GlassCard className="h-full flex flex-col p-8 md:p-12 relative overflow-hidden border-border-subtle shadow-2xl bg-bg-elevated/60 backdrop-blur-2xl" variant="elevated">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                      <Trophy className="w-96 h-96" />
                    </div>
                    
                    <div className="relative z-10 space-y-10 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={cn(
                          "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border shadow-sm",
                          activeChallenge.difficulty === "Easy" ? "bg-green-500/10 text-green-600 border-green-500/20" :
                          activeChallenge.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20" :
                          "bg-red-500/10 text-red-600 border-red-500/20"
                        )}>
                          {activeChallenge.difficulty}
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-xs font-bold uppercase tracking-widest shadow-sm">
                          {activeChallenge.category}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-text-primary font-display">{activeChallenge.title}</h2>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
                          {activeChallenge.description}
                        </p>
                      </div>

                      {/* Example Prompts */}
                      {activeChallenge.examplePrompts && activeChallenge.examplePrompts.length > 0 && (
                        <div className="bg-bg-soft/50 rounded-3xl p-8 border border-border-subtle/50 backdrop-blur-sm">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-text-subtle mb-6 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4" /> Considerations
                          </h3>
                          <ul className="space-y-4">
                            {activeChallenge.examplePrompts.map((prompt, i) => (
                              <li key={i} className="text-text-muted flex items-start gap-4 text-lg">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-brand-primary shrink-0 shadow-[0_0_8px_rgba(var(--brand-primary)/0.5)]" />
                                {prompt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags */}
                      {activeChallenge.tags && activeChallenge.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {activeChallenge.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-soft text-text-subtle text-xs font-bold uppercase tracking-wider border border-transparent hover:border-border-subtle transition-colors">
                              <Tag className="w-3 h-3" /> {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 pt-12 mt-12 border-t border-border-subtle flex flex-col sm:flex-row gap-6">
                      <Button onClick={generateRandom} variant="outline" size="lg" className="gap-3 flex-1 h-16 text-lg rounded-xl hover:bg-bg-soft hover:text-text-primary border-border-strong">
                        <Shuffle className="w-5 h-5" /> Random Challenge
                      </Button>
                      <Button 
                        onClick={() => markComplete(activeChallenge.id)}
                        disabled={completed.includes(activeChallenge.id)}
                        size="lg"
                        className="gap-3 flex-1 h-16 text-lg rounded-xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:scale-[1.02] transition-all"
                      >
                        {completed.includes(activeChallenge.id) ? (
                          <>Completed <CheckCircle className="w-6 h-6" /></>
                        ) : (
                          "Mark Complete"
                        )}
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* List of Challenges */}
          <div className="lg:col-span-4 space-y-6 flex flex-col h-[calc(100vh-8rem)] sticky top-24">
            <h3 className="font-bold text-xl px-2 flex items-center gap-3 text-text-primary font-display">
              All Challenges <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full border border-brand-primary/20">{challenges.length}</span>
            </h3>
            <div className="space-y-4 overflow-y-auto pr-2 flex-1 scrollbar-hide pb-4 -mr-4 pr-4">
              {challenges.map((challenge) => (
                <GlassCard 
                  key={challenge.id} 
                  className={cn(
                    "p-6 cursor-pointer transition-all duration-300 group border-transparent hover:scale-[1.02]",
                    activeChallenge.id === challenge.id && !isGeneratorMode
                      ? "border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/5 ring-1 ring-brand-primary/20" 
                      : "hover:bg-bg-soft hover:shadow-md bg-bg-glass/30"
                  )}
                  onClick={() => { setActiveChallenge(challenge); setIsGeneratorMode(false); }}
                  variant="flat"
                >
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h4 className={cn(
                      "font-bold text-base group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug font-display",
                      activeChallenge.id === challenge.id && !isGeneratorMode ? "text-brand-primary" : "text-text-primary"
                    )}>
                      {challenge.title}
                    </h4>
                    {completed.includes(challenge.id) && (
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 drop-shadow-sm" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                    <span className={cn(
                      "px-2 py-1 rounded-md border",
                      challenge.difficulty === "Easy" ? "text-green-600 bg-green-500/10 border-green-500/10" :
                      challenge.difficulty === "Medium" ? "text-yellow-600 bg-yellow-500/10 border-yellow-500/10" :
                      "text-red-600 bg-red-500/10 border-red-500/10"
                    )}>{challenge.difficulty}</span>
                    <span className="text-border-strong">•</span>
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
