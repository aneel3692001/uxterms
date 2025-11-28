"use client";

import { useState, useEffect, useCallback } from "react";
import { QuizCategory, QuizQuestion } from "@/data/quizzes";
import { GlassCard } from "@/components/glass-card";
import { Button } from "@/components/button";
import { useGamification } from "@/hooks/use-gamification";
import { CheckCircle, XCircle, ArrowRight, RefreshCw, Trophy, Star, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface QuizRunnerProps {
  category: QuizCategory;
}

interface ProcessedQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  timer: number;
}

export function QuizRunner({ category }: QuizRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<ProcessedQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  
  const { completeQuiz } = useGamification();

  const prepareQuestion = useCallback((q: QuizQuestion): ProcessedQuestion => {
    // 1. Select random question variant
    const qVariant = q.questionVariants[Math.floor(Math.random() * q.questionVariants.length)];

    // 2. Select random correct answer
    const correctVariant = q.correctAnswerVariants[Math.floor(Math.random() * q.correctAnswerVariants.length)];

    // 3. Select random distractor set
    const distractorSet = q.distractorVariants[Math.floor(Math.random() * q.distractorVariants.length)];

    // 4. Combine and shuffle (1 correct + 3 distractors)
    const distractors = distractorSet.slice(0, 3);
    const allOptions = [correctVariant, ...distractors];

    // Shuffle
    const shuffledOptions = [...allOptions].sort(() => Math.random() - 0.5);

    // Find new correct index
    const newCorrectIndex = shuffledOptions.indexOf(correctVariant);

    return {
      id: q.id,
      questionText: qVariant,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      explanation: q.explanation || "",
      timer: q.timer
    };
  }, []);

  // Initialize first question
  useEffect(() => {
    if (category.questions.length > 0 && !currentQuestion) {
      const firstQ = prepareQuestion(category.questions[0]);
      setCurrentQuestion(firstQ);
      setTimeLeft(firstQ.timer);
    }
  }, [category, prepareQuestion, currentQuestion]);

  // Timer Logic
  useEffect(() => {
    if (!currentQuestion || isAnswered || showResults) return;

    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      // Time's up! Mark as answered (incorrect)
      setIsAnswered(true);
    }
  }, [timeLeft, isAnswered, showResults, currentQuestion]);

  const handleAnswer = (index: number) => {
    if (isAnswered || !currentQuestion) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const nextQ = prepareQuestion(category.questions[nextIndex]);
      setCurrentQuestion(nextQ);
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(nextQ.timer);
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
    const firstQ = prepareQuestion(category.questions[0]);
    setCurrentQuestion(firstQ);
    setTimeLeft(firstQ.timer);
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
        <GlassCard className="p-12 space-y-8 relative overflow-hidden" variant="elevated">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-accent" />
          
          <div className="relative">
            <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-primary/20 shadow-lg shadow-brand-primary/10">
              <Trophy className="w-12 h-12 text-brand-primary" />
            </div>
            {percentage >= 80 && (
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Star className="w-8 h-8 text-brand-accent fill-brand-accent drop-shadow-lg" />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight font-display">Quiz Completed!</h2>
            <p className="text-text-muted text-lg">
              You scored <span className="font-bold text-brand-primary">{score}</span> out of {category.questions.length}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 py-4 bg-bg-soft/50 rounded-xl border border-border-subtle">
            <span className="text-sm font-medium text-text-muted">XP Earned:</span>
            <span className="text-xl font-bold text-brand-xp flex items-center gap-1">
              +{xpEarned} XP
            </span>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Link href="/quizzes" className="w-full">
              <Button className="w-full h-12 text-lg shadow-lg shadow-brand-primary/20">
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

  if (!currentQuestion) return null;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header: Progress & Timer */}
      <div className="flex items-end justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex justify-between text-xs font-bold text-text-muted uppercase tracking-wider">
            <span>Question {currentQuestionIndex + 1} of {category.questions.length}</span>
            <span>{category.title}</span>
          </div>
          <div className="w-full h-2 bg-bg-soft rounded-full overflow-hidden border border-border-subtle">
            <div 
              className="h-full bg-brand-primary transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestionIndex + 1) / category.questions.length) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Timer Widget */}
        <div className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg border font-mono font-bold transition-colors",
          timeLeft <= 5 
            ? "bg-red-500/10 text-red-500 border-red-500/20 animate-pulse" 
            : "bg-bg-elevated border-border-subtle text-text-primary"
        )}>
          <Timer className="w-4 h-4" />
          <span>{timeLeft}s</span>
        </div>
      </div>

      <GlassCard className="p-6 md:p-10 min-h-[400px] flex flex-col justify-between relative overflow-hidden" variant="elevated">
        <div className="space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight font-display">
            {currentQuestion.questionText}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let stateStyles = "hover:bg-bg-soft hover:border-brand-primary/30 border-border-strong";
              
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

              // Disable hover if time is up and not answered (technically isAnswered is true then)
              if (timeLeft === 0 && !selectedOption && index !== currentQuestion.correctIndex) {
                 stateStyles = "opacity-50 border-border-subtle grayscale";
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
              <div className="bg-bg-soft/50 rounded-xl p-5 mb-6 border border-border-subtle">
                <span className="font-bold block mb-2 text-xs uppercase tracking-wider text-brand-primary">Explanation</span>
                <p className="text-text-muted leading-relaxed">{currentQuestion.explanation}</p>
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
