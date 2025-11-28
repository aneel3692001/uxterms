"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { steps } from "@/data/how-it-works";

export function HowItWorks() {
  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest border border-brand-primary/20 mb-4">
              Your Learning Loop
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How UxTerms works</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A simple three-step cycle to master design craft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent border-t border-dashed border-brand-primary/30 z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative z-10 h-full"
              >
                <GlassCard 
                  className="p-8 h-full flex flex-col items-center text-center border-border-strong bg-bg-surface"
                  hoverEffect
                  variant="flat"
                >
                  <div className="w-16 h-16 rounded-2xl bg-bg-base flex items-center justify-center mb-6 shadow-sm border border-border-subtle group-hover:scale-110 transition-transform duration-300 relative">
                    <step.icon className="w-8 h-8 text-brand-primary" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-bold border-2 border-bg-surface shadow-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
