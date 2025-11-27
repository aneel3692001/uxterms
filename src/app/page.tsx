"use client";

import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import { XPLevelWidget } from "@/components/xp-level-widget";
import { ArrowRight, BookOpen, Trophy, Zap, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={item} className="flex justify-center">
               <XPLevelWidget level={1} xp={0} nextLevelXp={100} />
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Level up your <span className="text-gradient">UX, UI & Product</span> skills — the fun way
            </motion.h1>
            
            <motion.p variants={item} className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              UxTerms turns design theory into gamified quizzes, bite-sized challenges, and a clean A–Z glossary so you can learn faster without getting overwhelmed.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href="/quizzes">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14 shadow-xl shadow-brand-primary/20">
                  Start learning <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/glossary">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 bg-bg-glass backdrop-blur-sm border-border-subtle hover:bg-bg-elevated">
                  Browse glossary
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/quizzes" className="group">
              <GlassCard hoverEffect className="h-full p-8 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">Quizzes</h3>
                  <p className="text-text-muted leading-relaxed">
                    Test your knowledge across UX, UI, and Product with card-style quizzes. Earn XP and track your progress.
                  </p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/glossary" className="group">
              <GlassCard hoverEffect className="h-full p-8 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors">A–Z UX Glossary</h3>
                  <p className="text-text-muted leading-relaxed">
                    Clear definitions, examples, and micro-challenges to grow your vocabulary. Never get lost in jargon again.
                  </p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/challenges" className="group">
              <GlassCard hoverEffect className="h-full p-8 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-7 h-7 text-brand-accent-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent-dark transition-colors">Design Challenges</h3>
                  <p className="text-text-muted leading-relaxed">
                    Solve realistic tasks and practice your UX/UI/Product thinking. Build your portfolio one brief at a time.
                  </p>
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>
      </section>

      {/* Why UXTerms? */}
      <section className="py-20 border-t border-border-subtle bg-bg-soft/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why UXTerms?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Fast, practical learning without fluff",
                "Content curated by experienced product & UX designers",
                "Clean, focused UI that respects your time and attention"
              ].map((text, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-lg leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
