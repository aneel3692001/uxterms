export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const quizzes: QuizCategory[] = [
  {
    id: "ux-fundamentals",
    title: "UX Fundamentals",
    description: "Test your knowledge of core User Experience principles.",
    questions: [
      {
        id: "q1",
        question: "What does 'Affordance' refer to in design?",
        options: [
          "The cost of the product",
          "Visual clues that indicate how an object should be used",
          "The color contrast ratio",
          "The speed of the application",
        ],
        correctIndex: 1,
        explanation: "Affordances are properties of an object that show users the actions they can take (e.g., a button looks pushable).",
      },
      {
        id: "q2",
        question: "Which of these is NOT one of Nielsen's 10 Usability Heuristics?",
        options: [
          "Visibility of system status",
          "Match between system and the real world",
          "Pixel perfect consistency",
          "Error prevention",
        ],
        correctIndex: 2,
        explanation: "While consistency is important, 'Pixel perfect consistency' is not one of the 10 heuristics. 'Consistency and standards' is the actual heuristic.",
      },
    ],
  },
  {
    id: "ui-design",
    title: "UI Design",
    description: "Challenge your eye for visual design and interface patterns.",
    questions: [
      {
        id: "q3",
        question: "What is the recommended minimum touch target size for mobile devices (according to Apple/Google)?",
        options: ["24x24 pt", "32x32 pt", "44x44 pt / 48x48 dp", "60x60 pt"],
        correctIndex: 2,
        explanation: "Apple recommends 44x44pt, and Google Material Design recommends 48x48dp to ensure touch targets are accessible.",
      },
    ],
  },
];
