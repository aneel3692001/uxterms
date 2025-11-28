"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Loved by designers worldwide</h2>
            <p className="text-text-muted text-lg">Join thousands learning UX, UI & Product Design</p>
          </div>

          {/* Horizontal Scrollable Grid */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-0 snap-start h-full"
              >
                <GlassCard 
                  className="p-8 h-full flex flex-col border-border-subtle bg-bg-glass/50"
                  hoverEffect
                  variant="flat"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-sm border border-brand-primary/20">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base text-text-primary truncate">{testimonial.name}</h4>
                      <p className="text-sm text-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-text-muted leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
