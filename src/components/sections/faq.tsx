"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { faqs } from "@/data/faq";

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-border-subtle last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <h3 className="text-lg font-bold font-display group-hover:text-brand-primary transition-colors">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-primary" : ""
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-base text-text-muted leading-relaxed pb-6 max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="section-spacing relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-text-muted text-lg">
              Everything you need to know
            </p>
          </div>

          <GlassCard 
            className="p-8 md:p-10 border-border-strong bg-bg-surface"
            variant="flat"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
