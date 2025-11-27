import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import { ArrowRight, BookOpen, Trophy, Zap, Layers } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 to-transparent opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              v1.0 Public Beta
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-text-primary to-text-muted pb-2">
              Master Product Design <br />
              <span className="text-brand-blue">One Level at a Time</span>
            </h1>
            
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              The gamified learning platform for UX, UI, and Product Design. 
              Test your skills, earn XP, and build your design vocabulary.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/quizzes">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/glossary">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14">
                  Explore Glossary
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-bg-soft/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <Link href="/glossary">
              <GlassCard hoverEffect className="h-full flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Glossary</h3>
                  <p className="text-text-muted text-sm">
                    Master the terminology. A comprehensive A-Z guide of design terms and definitions.
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
                    Practical design exercises to sharpen your skills. Randomly generated briefs.
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
