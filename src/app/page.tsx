"use client";

import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import { ArrowRight, BookOpen, Trophy, Zap, Layers, Star, Users, CheckCircle } from "lucide-react";
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
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 to-transparent opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              v1.0 Public Beta
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-text-primary to-text-muted pb-2">
              Master UX Terminology <br />
              <span className="text-brand-blue">& Design Principles</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              The ultimate glossary and quiz platform for designers. 
              Learn <span className="text-text-primary font-semibold">100+ terms</span>, 
              test your skills with <span className="text-text-primary font-semibold">50+ questions</span>, 
              and tackle <span className="text-text-primary font-semibold">30+ design challenges</span>.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/glossary">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/quizzes">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14">
                  Take a Quiz
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-border/50 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">100+</div>
                <div className="text-sm text-text-muted">UX Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">50+</div>
                <div className="text-sm text-text-muted">Quiz Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-accent">30+</div>
                <div className="text-sm text-text-muted">Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">Free</div>
                <div className="text-sm text-text-muted">Forever</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-bg-soft/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything you need to level up</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Whether you're a beginner or a senior designer, keep your skills sharp with our curated tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/glossary">
              <GlassCard hoverEffect className="h-full flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Glossary</h3>
                  <p className="text-text-muted text-sm">
                    Master the terminology. A comprehensive A-Z guide of 100+ design terms and definitions.
                  </p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/quizzes">
              <GlassCard hoverEffect className="h-full flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quizzes</h3>
                  <p className="text-text-muted text-sm">
                    Test your knowledge across UX, UI, and Product categories. Earn XP for every correct answer.
                  </p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/challenges">
              <GlassCard hoverEffect className="h-full flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Challenges</h3>
                  <p className="text-text-muted text-sm">
                    Practical design exercises to sharpen your skills. Randomly generated briefs for your portfolio.
                  </p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/resources">
              <GlassCard hoverEffect className="h-full flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resources</h3>
                  <p className="text-text-muted text-sm">
                    Curated tools, templates, and reading materials to level up your workflow.
                  </p>
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
