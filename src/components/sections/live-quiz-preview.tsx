"use client";

import { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { GlassCard } from "@/components/glass-card";
import Link from "next/link";

const sampleQuestions = [
  {
    question: "What does WCAG stand for?",
    options: [
      "Web Content Accessibility Guidelines",
      "Website Compliance and Guardrails",
      "Web Component Architecture Guide",
      "Website Code Accessibility Group"
    ],
    correctIndex: 0,
    category: "Accessibility",
    timer: 20
  },
  {
    question: "Which law states that decision time increases with the number of choices?",
    options: [
      "Hick's Law",
      "Fitts's Law",
      "Jakob's Law",
      "Miller's Law"
    ],
    correctIndex: 0,
    category: "UX Laws",
    timer: 25
  },
  {
    question: "What is the recommended minimum touch target size for mobile?",
    options: [
      "44x44pt",
      "32x32pt",
      "24x24pt",
      "56x56pt"
    ],
    correctIndex: 0,
    category: "Mobile UI",
    timer: 20
  }
];

export function LiveQuizPreview() {
  const [currentQ] = useState(sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(currentQ.timer);

  useEffect(() => {
    if (showAnswer || timeLeft === 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [showAnswer, timeLeft]);

  const handleReveal = () => {
    setShowAnswer(true);
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-bg-elevated/20">
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Try a live quiz</h2>
            <p className="text-text-muted text-lg">
              Test your knowledge right now
            </p>
          </div>

          <GlassCard 
            className="p-8 md:p-10 border-brand-primary/20 bg-bg-surface"
            variant="elevated"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <span className="px-3 py-1 rounded-md bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider border border-brand-primary/20">
                {currentQ.category}
              </span>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-sm border ${
                timeLeft <= 5 
                  ? "bg-red-500/10 text-red-500 border-red-500/20 animate-pulse" 
                  : "bg-bg-soft text-text-muted border-border-subtle"
              }`}>
                <Clock className="w-4 h-4" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-bold font-display mb-8 leading-tight">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showAnswer && setSelectedAnswer(index)}
                  disabled={showAnswer}
                  className={`w-full text-left p-5 rounded-xl border transition-all text-base font-medium ${
                    showAnswer
                      ? index === currentQ.correctIndex
                        ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400"
                        : index === selectedAnswer
                        ? "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400"
                        : "opacity-50 border-border-subtle"
                      : selectedAnswer === index
                      ? "border-brand-primary bg-brand-primary/5 shadow-sm ring-1 ring-brand-primary/20"
                      : "border-border-strong hover:border-brand-primary/50 hover:bg-bg-soft"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                       showAnswer && index === currentQ.correctIndex ? "border-green-500 bg-green-500 text-white" :
                       showAnswer && index === selectedAnswer ? "border-red-500 bg-red-500 text-white" :
                       selectedAnswer === index ? "border-brand-primary bg-brand-primary text-white" : "border-border-strong text-text-subtle"
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    {option}
                  </div>
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              {!showAnswer ? (
                <Button
                  onClick={handleReveal}
                  disabled={selectedAnswer === null}
                  className="flex-1 h-14 text-base font-bold shadow-lg shadow-brand-primary/20"
                >
                  Reveal Answer
                </Button>
              ) : (
                <Link href="/quizzes" className="flex-1">
                  <Button className="w-full h-14 gap-2 text-base font-bold shadow-lg shadow-brand-primary/20">
                    Take Full Quiz <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
