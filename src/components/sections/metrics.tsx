"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { metrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Trusted by designers globally</h2>
            <p className="text-text-muted text-lg">
              Join a growing community of design learners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassCard 
                  className="p-6 h-full flex flex-col items-center justify-center text-center border-border-strong bg-bg-surface"
                  hoverEffect
                  variant="flat"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg-base flex items-center justify-center mb-4 shadow-sm border border-border-subtle">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`text-3xl font-black font-display mb-2 ${metric.color}`}>
                    {metric.number}
                  </div>
                  <div className="text-xs text-text-muted font-bold uppercase tracking-wider leading-tight">
                    {metric.label}
                  </div>
                  {metric.subtext && (
                    <div className="text-[10px] text-text-subtle mt-2 font-medium">
                      {metric.subtext}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
