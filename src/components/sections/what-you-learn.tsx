"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { topics } from "@/data/curriculum";

export function WhatYouLearn() {
  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What you'll learn</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Comprehensive coverage across all design disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(topics).map(([key, topic], colIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: colIndex * 0.15 }}
                className="h-full"
              >
                <GlassCard 
                  className="p-8 h-full border-border-strong bg-bg-surface"
                  hoverEffect
                  variant="flat"
                >
                  <h3 className={`text-xl font-bold font-display mb-6 ${topic.color}`}>
                    {topic.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {topic.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`w-5 h-5 ${topic.color} shrink-0`} />
                        <span className="text-text-muted leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
