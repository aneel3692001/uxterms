"use client";

import { useState } from "react";
import { QuizCategory } from "@/data/quizzes";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { useGamification } from "@/hooks/use-gamification";
import { CheckCircle, XCircle, ArrowRight, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <GlassCard className="p-12 space-y-6">
          <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-brand-black">
            {Math.round((score / category.questions.length) * 100)}%
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p className="text-text-muted">
              You scored {score} out of {category.questions.length}
            </p>
          </div>
          <div className="pt-4">
            <Button onClick={restartQuiz} className="gap-2">
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
      <div className="w-full h-2 bg-bg-soft rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-blue transition-all duration-300"
          style={{ width: `${((currentQuestionIndex) / category.questions.length) * 100}%` }}
        />
      </div>

      <GlassCard className="p-8 min-h-[400px] flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm text-text-muted">
            <span>Question {currentQuestionIndex + 1} of {category.questions.length}</span>
            <span className="font-medium text-brand-blue">{category.title}</span>
          </div>
          
          <h2 className="text-2xl font-bold leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let stateStyles = "hover:bg-bg-soft border-border-subtle";
              if (isAnswered) {
                if (index === currentQuestion.correctIndex) {
                  stateStyles = "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400";
                } else if (index === selectedOption) {
                  stateStyles = "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400";
                } else {
                  stateStyles = "opacity-50 border-border-subtle";
                }
              } else if (selectedOption === index) {
                stateStyles = "border-brand-blue bg-brand-blue/5";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200 flex justify-between items-center",
                    stateStyles
                  )}
                >
                  <span>{option}</span>
                  {isAnswered && index === currentQuestion.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {isAnswered && index === selectedOption && index !== currentQuestion.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-6 border-t border-border-subtle mt-6"
            >
              <div className="mb-4 text-sm text-text-muted">
                <span className="font-bold block mb-1">Explanation:</span>
                {currentQuestion.explanation}
              </div>
              <Button onClick={handleNext} className="w-full gap-2">
                {currentQuestionIndex < category.questions.length - 1 ? "Next Question" : "See Results"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}
