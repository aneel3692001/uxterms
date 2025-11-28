"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard 
              className="p-10 md:p-16 text-center border-brand-primary/20 bg-bg-glass/80"
              variant="elevated"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Mail className="w-8 h-8 text-brand-primary" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Get weekly <span className="warm-gradient-text">design insights</span>
              </h2>
              <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Short, actionable, beginner-friendly tips delivered to your inbox every week. No fluff, just value.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitted}
                    className="flex-1 h-14 px-6 rounded-full bg-bg-base border border-border-strong focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all text-base placeholder:text-text-subtle shadow-inner"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitted}
                    className="h-14 px-8 rounded-full font-bold text-base shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-text-subtle mt-6 font-medium">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
