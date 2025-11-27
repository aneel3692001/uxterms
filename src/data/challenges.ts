export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "UI" | "UX" | "Product";
}

export const challenges: Challenge[] = [
  {
    id: "c1",
    title: "Redesign a Login Screen",
    description: "Create a login screen that includes social auth, forgot password, and error states. Focus on clarity and trust.",
    difficulty: "Easy",
    category: "UI",
  },
  {
    id: "c2",
    title: "Optimize Checkout Flow",
    description: "Map out a checkout flow for an e-commerce app that minimizes friction. Reduce steps where possible.",
    difficulty: "Medium",
    category: "UX",
  },
  {
    id: "c3",
    title: "Accessibility Audit",
    description: "Take a popular website and identify 3 accessibility violations. Propose fixes for each.",
    difficulty: "Medium",
    category: "Product",
  },
  {
    id: "c4",
    title: "Design a Dashboard",
    description: "Design a data visualization dashboard for a fitness app. Show weekly progress and calorie intake.",
    difficulty: "Hard",
    category: "UI",
  },
];
