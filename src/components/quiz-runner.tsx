"use client";

import { useState } from "react";
import { QuizCategory } from "@/data/quizzes";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { useGamification } from "@/hooks/use-gamification";
import { CheckCircle, XCircle, ArrowRight, RefreshCw, Trophy, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface QuizRunnerProps {
  category: QuizCategory;
}

export function QuizRunner({ category }: QuizRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const { completeQuiz } = useGamification();

  const currentQuestion = category.questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.correctIndex;

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
    // Award XP: 10 XP per correct answer
    const xpEarned = score * 10;
    if (xpEarned > 0) {
      completeQuiz(category.id, xpEarned);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((score / category.questions.length) * 100);
    const xpEarned = score * 10;

    return (
      <div className="max-w-xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <GlassCard className="p-12 space-y-8 relative overflow-hidden">
          {/* Confetti/Background decoration could go here */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-accent" />
          
          <div className="relative">
            <div className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-brand-primary" />
            </div>
            {percentage >= 80 && (
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Quiz Completed!</h2>
            <p className="text-text-muted text-lg">
              You scored <span className="font-bold text-brand-primary">{score}</span> out of {category.questions.length}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 py-4 bg-bg-soft/50 rounded-xl border border-border-subtle">
            <span className="text-sm font-medium text-text-muted">XP Earned:</span>
            <span className="text-xl font-bold text-brand-accent-dark flex items-center gap-1">
              +{xpEarned} XP
            </span>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Link href="/quizzes" className="w-full">
              <Button className="w-full h-12 text-lg">
                Back to Quizzes
              </Button>
            </Link>
            <Button variant="ghost" onClick={restartQuiz} className="gap-2">
              <RefreshCw className="w-4 h-4" /> Try Again
            </Button>
          </div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-text-muted uppercase tracking-wider">
          <span>Question {currentQuestionIndex + 1} of {category.questions.length}</span>
          <span>{category.title}</span>
        </div>
        <div className="w-full h-2 bg-bg-soft rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-primary transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / category.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <GlassCard className="p-6 md:p-10 min-h-[400px] flex flex-col justify-between relative overflow-hidden">
        <div className="space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let stateStyles = "hover:bg-bg-soft hover:border-brand-primary/30 border-border-subtle";
              if (isAnswered) {
                if (index === currentQuestion.correctIndex) {
                  stateStyles = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 shadow-[0_0_0_1px_rgba(34,197,94,0.4)]";
                } else if (index === selectedOption) {
                  stateStyles = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
                } else {
                  stateStyles = "opacity-50 border-border-subtle grayscale";
                }
              } else if (selectedOption === index) {
                stateStyles = "border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary/20";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all duration-200 flex justify-between items-center text-lg font-medium",
                    stateStyles
                  )}
                >
                  <span>{option}</span>
                  {isAnswered && index === currentQuestion.correctIndex && (
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0 ml-4" />
                  )}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correctIndex && (
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 ml-4" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-8 mt-8 border-t border-border-subtle"
            >
              <div className="bg-bg-soft/50 rounded-xl p-4 mb-6 border border-border-subtle">
                <span className="font-bold block mb-1 text-sm uppercase tracking-wider text-text-subtle">Explanation</span>
                <p className="text-text-muted">{currentQuestion.explanation}</p>
              </div>
              <Button onClick={handleNext} size="lg" className="w-full gap-2 text-lg h-14 shadow-lg shadow-brand-primary/20">
                {currentQuestionIndex < category.questions.length - 1 ? "Next Question" : "See Results"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}
