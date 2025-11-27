export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "UI" | "UX" | "Product Design";
  tags: string[];
  examplePrompts: string[];
  slug: string;
}

export const challenges: Challenge[] = [
  {
    id: "c1",
    title: "Redesign a Login Screen",
    description: "Create a login screen that includes social auth, forgot password, and error states. Focus on clarity and trust.",
    difficulty: "Easy",
    category: "UI",
    tags: ["Forms", "Authentication", "Visual Design"],
    examplePrompts: ["How would you handle error messages?", "Where should the 'Forgot Password' link go?"],
    slug: "redesign-login-screen",
  },
  {
    id: "c2",
    title: "Optimize Checkout Flow",
    description: "Map out a checkout flow for an e-commerce app that minimizes friction. Reduce steps where possible.",
    difficulty: "Medium",
    category: "UX",
    tags: ["E-commerce", "User Flow", "Conversion"],
    examplePrompts: ["Can you combine shipping and billing?", "When should users create an account?"],
    slug: "optimize-checkout-flow",
  },
  {
    id: "c3",
    title: "Accessibility Audit",
    description: "Take a popular website and identify 3 accessibility violations. Propose fixes for each.",
    difficulty: "Medium",
    category: "Product Design",
    tags: ["Accessibility", "Audit", "Inclusion"],
    examplePrompts: ["Check color contrast ratios.", "Are all images missing alt text?"],
    slug: "accessibility-audit",
  },
  {
    id: "c11",
    title: "Product Landing Page",
    description: "Create a high-converting landing page for a new productivity SaaS tool. Focus on the hero section.",
    difficulty: "Medium",
    category: "Product Design",
    tags: ["Landing Page", "SaaS", "Conversion"],
    examplePrompts: ["What is the value proposition?", "Where is the primary CTA?"],
    slug: "product-landing-page",
  },
  {
    id: "c15",
    title: "Subscription Pricing Table",
    description: "Design a pricing table comparing 3 tiers (Free, Pro, Enterprise) for a software product.",
    difficulty: "Medium",
    category: "Product Design",
    tags: ["Pricing", "Comparison", "SaaS"],
    examplePrompts: ["How do you highlight the recommended plan?", "How do you show feature differences?"],
    slug: "subscription-pricing-table",
  },
  {
    id: "c24",
    title: "Feature Comparison",
    description: "Design a section comparing your product's features against a competitor's. Focus on visual clarity.",
    difficulty: "Medium",
    category: "Product Design",
    tags: ["Marketing", "Comparison", "Strategy"],
    examplePrompts: ["How do you remain objective?", "How do you highlight your strengths?"],
    slug: "feature-comparison",
  },
  {
    id: "c28",
    title: "Cookie Consent Banner",
    description: "Design a cookie consent banner that is compliant but not annoying. Allow granular choices.",
    difficulty: "Easy",
    category: "Product Design",
    tags: ["Compliance", "Banner", "Privacy"],
    examplePrompts: ["How do you present options?", "Where is it positioned?"],
    slug: "cookie-consent-banner",
  },
  {
    id: "c33",
    title: "Split Bill Feature",
    description: "Design a feature within a banking app to split a bill with friends.",
    difficulty: "Hard",
    category: "Product Design",
    tags: ["Fintech", "Social", "Interaction"],
    examplePrompts: ["How do you select friends?", "How do you handle uneven splits?"],
    slug: "split-bill-feature",
  },
  {
    id: "c34",
    title: "Language Selector",
    description: "Design a language selection menu for a global website.",
    difficulty: "Easy",
    category: "UI",
    tags: ["Localization", "Navigation", "Menu"],
    examplePrompts: ["Do you use flags?", "How do you list languages?"],
    slug: "language-selector",
  },
];
