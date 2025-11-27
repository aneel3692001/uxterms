"use client";

import { useState, useEffect } from "react";

export interface GamificationState {
  totalXP: number;
  level: number;
  badges: string[];
  quizHistory: Record<string, boolean>; // quizId -> completed
  challengesCompleted: string[]; // challengeIds
}

const INITIAL_STATE: GamificationState = {
  totalXP: 0,
  level: 1,
  badges: [],
  quizHistory: {},
  challengesCompleted: [],
};

export function useGamification() {
  const [state, setState] = useState<GamificationState>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ux-academy-gamification");
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse gamification state", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("ux-academy-gamification", JSON.stringify(state));
    }
  }, [state, isLoaded]);

  const addXP = (amount: number) => {
    setState((prev) => {
      const newXP = prev.totalXP + amount;
      const newLevel = Math.floor(newXP / 200) + 1;
      return {
        ...prev,
        totalXP: newXP,
        level: newLevel,
      };
    });
  };

  const awardBadge = (badgeName: string) => {
    setState((prev) => {
      if (prev.badges.includes(badgeName)) return prev;
      return {
        ...prev,
        badges: [...prev.badges, badgeName],
      };
    });
  };

  const completeQuiz = (quizId: string, xpReward: number) => {
    if (state.quizHistory[quizId]) return; // Already completed
    addXP(xpReward);
    setState((prev) => ({
      ...prev,
      quizHistory: { ...prev.quizHistory, [quizId]: true },
    }));
    
    // Check for badges
    if (Object.keys(state.quizHistory).length + 1 >= 10) {
      awardBadge("Quiz Explorer");
    }
  };

  return {
    state,
    addXP,
    awardBadge,
    completeQuiz,
    isLoaded,
  };
}
