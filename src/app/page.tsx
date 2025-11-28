"use client";

import { Button } from "@/components/button";
import { HeroVisualPanel } from "@/components/hero-visual-panel";
import { Testimonials } from "@/components/sections/testimonials";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SkillProgression } from "@/components/sections/skill-progression";
import { WhatYouLearn } from "@/components/sections/what-you-learn";
import { LiveQuizPreview } from "@/components/sections/live-quiz-preview";
import { Metrics } from "@/components/sections/metrics";
import { FeaturedChallenges } from "@/components/sections/featured-challenges";
import { ToolsAndResources } from "@/components/sections/tools-and-resources";
import { Differentiators } from "@/components/sections/differentiators";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const heroContainerMotion = shouldReduceMotion
    ? { initial: false, animate: false, style: { opacity: 1 } }
    : { initial: "hidden", animate: "show", variants: container };

  const heroItemStyle = shouldReduceMotion ? { opacity: 1, transform: "none" } : undefined;

  const heroPrimaryButtonClass = `w-full sm:w-auto h-12 px-7 text-base font-semibold rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white border border-white/10 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 ${shouldReduceMotion ? "transition-none" : "transition-all duration-200 hover:scale-[1.02]"}`;

  const heroSecondaryButtonClass = `w-full sm:w-auto h-12 px-7 text-base font-semibold rounded-full border-border-strong backdrop-blur-sm ${shouldReduceMotion ? "transition-none" : "transition-all duration-200 hover:bg-bg-elevated hover:border-brand-primary/30"}`;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        {/* Background - Warm, Minimal Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-[-10%] right-[10%] w-[400px] h-[400px] bg-brand-primary/6 rounded-full blur-[100px] ${shouldReduceMotion ? "animate-none" : "animate-pulse"}`}
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-brand-primary/4 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* LEFT COLUMN - Content */}
              <motion.div 
                className="space-y-7 text-center lg:text-left flex flex-col justify-center"
                {...heroContainerMotion}
              >
                <motion.div variants={shouldReduceMotion ? undefined : item} style={heroItemStyle} className="flex justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-widest">
                    Learn UX · UI · Product Design
                  </span>
                </motion.div>

                <motion.h1 
                  variants={shouldReduceMotion ? undefined : item}
                  style={heroItemStyle}
                  className="font-display"
                >
                  Level up your{" "}
                  <span className="warm-gradient-text">UX, UI & Product Design</span>
                  {" "}— the fun way
                </motion.h1>

                <motion.p 
                  variants={shouldReduceMotion ? undefined : item}
                  style={heroItemStyle}
                  className="text-base md:text-lg text-text-muted leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  UxTerms turns design craft into gamified quizzes, real-world challenges, and an A–Z glossary so you can learn faster without getting overwhelmed.
                </motion.p>

                <motion.div 
                  variants={shouldReduceMotion ? undefined : item}
                  style={heroItemStyle}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1"
                >
                  <Link href="/quizzes">
                    <Button size="lg" className={heroPrimaryButtonClass}>
                      Start learning <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/glossary">
                    <Button variant="outline" size="lg" className={heroSecondaryButtonClass}>
                      Browse glossary
                    </Button>
                  </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div 
                  variants={shouldReduceMotion ? undefined : item}
                  style={heroItemStyle}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-text-muted"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span>100+ terms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span>30+ quizzes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span>15+ challenges</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN - Visual Panel */}
              <div className="relative lg:block hidden">
                <HeroVisualPanel shouldReduceMotion={shouldReduceMotion} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* All New Sections */}
      <Testimonials />
      <HowItWorks />
      <SkillProgression />
      <WhatYouLearn />
      <LiveQuizPreview />
      <Metrics />
      <FeaturedChallenges />
      <ToolsAndResources />
      <Differentiators />
      <FAQ />
      <Newsletter />
    </div>
  );
}
