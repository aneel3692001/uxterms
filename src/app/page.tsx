"use client";

import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import { XPLevelWidget } from "@/components/xp-level-widget";
import { ArrowRight, BookOpen, BrainCircuit, Trophy, Zap, Layers, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        {/* Background Elements - Nebula/Aura Inspired */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            {/* Deep Cosmic Base Gradient */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-10"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {/* Eyebrow Label */}
            <motion.div variants={item} className="flex justify-center">
              <span className="px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_-5px_rgba(var(--brand-primary)/0.3)] backdrop-blur-sm">
                UX · UI · Product Design · Gamified
              </span>
            </motion.div>

            <motion.div variants={item} className="flex justify-center scale-110 mb-2">
               <XPLevelWidget level={1} xp={0} nextLevelXp={100} />
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] drop-shadow-sm">
              Level up your <br className="hidden md:block" />
              <span className="nebula-text-gradient">Design Skills</span>
              <br className="hidden md:block" /> the fun way
            </motion.h1>
            
            <motion.p variants={item} className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Master terminology, ace quizzes, and complete challenges to build your XP and portfolio.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/quizzes">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white shadow-[0_0_30px_-5px_rgba(var(--brand-primary)/0.4)] hover:shadow-[0_0_40px_-5px_rgba(var(--brand-primary)/0.6)] border border-white/10 transition-all duration-300 hover:scale-105">
                  Start Learning <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/glossary">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-border-strong hover:bg-bg-elevated/50 hover:border-brand-primary/30 backdrop-blur-md transition-all duration-300">
                  Explore Glossary
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-10 space-y-6 border-border-subtle hover:border-brand-primary/30 group" hoverEffect variant="elevated">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(var(--brand-primary)/0.2)]">
                <BookOpen className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">Smart Glossary</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Master the jargon. From "Affordance" to "Zeigarnik Effect", we've got you covered with clear definitions and examples.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-8 md:p-10 space-y-6 border-border-subtle hover:border-brand-primary/30 group" hoverEffect variant="elevated">
              <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center text-brand-lime-dark group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(var(--brand-lime)/0.2)]">
                <BrainCircuit className="w-7 h-7 text-brand-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">Interactive Quizzes</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Test your knowledge. Earn XP and level up by answering questions about UX principles, UI patterns, and more.
                </p>
              </div>
            </GlassCard>

            <GlassCard className="p-8 md:p-10 space-y-6 border-border-subtle hover:border-brand-primary/30 group" hoverEffect variant="elevated">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)]">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-purple-500 transition-colors">Design Challenges</h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  Apply what you learn. Solve real-world design problems and build your portfolio with practical briefs.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why UxTerms Section - Premium Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-bg-elevated/30 skew-y-3 transform origin-top-left scale-110" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
                <Zap className="w-3 h-3" /> The Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Bridge the gap between <span className="text-brand-primary">theory</span> and <span className="text-brand-accent">practice</span>.
              </h2>
              <p className="text-xl text-text-muted leading-relaxed">
                Most designers struggle with terminology and articulating their decisions. UxTerms turns learning into a game, helping you internalize concepts so you can speak confidently in your next interview or stakeholder meeting.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Layers, label: "Structured Learning" },
                  { icon: Target, label: "Practical Application" },
                  { icon: Zap, label: "Gamified Progress" },
                  { icon: BrainCircuit, label: "Cognitive Science" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-bg-elevated border border-border-subtle shadow-sm text-brand-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-text-primary">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse" />
                <GlassCard className="relative p-8 md:p-12 border-border-subtle/50 bg-bg-glass/80 backdrop-blur-xl" variant="elevated">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-border-subtle pb-6">
                      <div>
                        <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Current Status</p>
                        <h4 className="text-2xl font-bold text-text-primary mt-1">Junior Designer</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Next Goal</p>
                        <h4 className="text-2xl font-bold text-brand-primary mt-1">Mid-Level</h4>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm font-bold">
                        <span>XP Progress</span>
                        <span className="text-brand-primary">1,250 / 2,000 XP</span>
                      </div>
                      <div className="h-4 bg-bg-soft rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-brand-primary to-brand-lime"
                          initial={{ width: 0 }}
                          whileInView={{ width: "62.5%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-sm text-text-muted text-center pt-2">
                        You're top 15% of learners this week! 🚀
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
