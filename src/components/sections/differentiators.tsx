"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { differentiators } from "@/data/differentiators";

export function Differentiators() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why UxTerms stands out</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              More than just another learning platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <GlassCard 
                  className="p-8 h-full border-border-strong bg-bg-surface"
                  hoverEffect
                  variant="flat"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 shadow-sm border border-brand-primary/20">
                    <item.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-display mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {item.description}
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
