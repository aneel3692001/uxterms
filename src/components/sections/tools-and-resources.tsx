"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { resources } from "@/data/resources";

export function ToolsAndResources() {
  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Tools & resources</h2>
            <p className="text-text-muted text-lg">
              Everything you need to level up
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassCard 
                  className="p-6 h-full flex flex-col items-center text-center border-border-strong bg-bg-surface"
                  hoverEffect
                  variant="flat"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 shadow-sm border border-brand-primary/20">
                    <resource.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold font-display mb-2">{resource.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
                    {resource.description}
                  </p>
                  
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    resource.status === "Available"
                      ? "bg-green-500/10 text-green-600 border border-green-500/20"
                      : "bg-bg-soft text-text-subtle border border-border-subtle"
                  }`}>
                    {resource.status}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
