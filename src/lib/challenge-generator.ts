export interface GeneratedChallenge {
  title: string;
  category: string;
  subcategory: string;
  difficulty: "Easy" | "Medium" | "Hard";
  scenario: string;
  constraints: string[];
  considerations: string[];
  expectedOutput: string;
  suggestedTimeLimit: string;
}

const industries = ["Fintech", "Healthcare", "E-commerce", "EdTech", "Travel", "Social Media", "IoT", "SaaS"];
const flows = ["onboarding", "checkout", "settings", "profile creation", "search", "dashboard", "messaging"];
const audiences = ["seniors", "children", "experts", "novices", "visually impaired users"];

const subcategories = {
  "UX Design": [
    "UX Writing & Content Design",
    "Usability & Heuristics",
    "Accessibility & Inclusive Design",
    "Flows & Navigation",
    "Prototyping & Validation",
    "Service Design & Journey Mapping"
  ],
  "UI Design": [
    "Visual Hierarchy",
    "Layout, Grids & Composition",
    "Typography & Type Systems",
    "Color Systems & Contrast",
    "Iconography & Shape Language",
    "Components & Variants",
    "Motion & Micro-interactions"
  ],
  "Product Design": [
    "Product Thinking",
    "Feature-Level UX",
    "Systems Thinking",
    "Design Systems",
    "Problem Framing",
    "Experimentation",
    "Collaboration & Handoff"
  ]
};

const scenarios = [
  "Users are dropping off at the {flow} stage in a {industry} app.",
  "Design a {flow} for a {industry} platform targeting {audience}.",
  "Redesign the {flow} of a popular {industry} app to improve accessibility.",
  "Create a new feature for a {industry} product that solves a retention problem.",
  "Users are confused by the navigation in a complex {industry} dashboard."
];

const constraints = [
  "Must use a monochromatic color scheme",
  "Cannot use modal windows",
  "Must be fully accessible (WCAG AAA)",
  "Mobile-only experience",
  "No text labels on icons (rely on affordance)",
  "Must use system fonts only",
  "Dark mode only"
];

const considerations = [
  "Low bandwidth connection",
  "Users with limited tech literacy",
  "High stress environment",
  "One-handed usage",
  "Color blindness (Protanopia)",
  "Screen reader compatibility"
];

const outputs = [
  "Low-fidelity wireframes + notes",
  "High-fidelity UI mockups",
  "Interactive prototype",
  "User flow diagram",
  "Before/After comparison"
];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSubset<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function fillTemplate(template: string): string {
  return template
    .replace("{industry}", getRandom(industries))
    .replace("{flow}", getRandom(flows))
    .replace("{audience}", getRandom(audiences));
}

export function generateChallenge(
  category: "UX Design" | "UI Design" | "Product Design",
  difficulty: "Easy" | "Medium" | "Hard"
): GeneratedChallenge {
  const subcategory = getRandom(subcategories[category]);
  const scenarioTemplate = getRandom(scenarios);
  const scenario = fillTemplate(scenarioTemplate);
  
  let constraintCount = 1;
  let timeLimit = "30 minutes";
  
  if (difficulty === "Medium") {
    constraintCount = 2;
    timeLimit = "45 minutes";
  } else if (difficulty === "Hard") {
    constraintCount = 3;
    timeLimit = "60 minutes";
  }

  return {
    title: `${category} Challenge: ${subcategory}`,
    category,
    subcategory,
    difficulty,
    scenario,
    constraints: getRandomSubset(constraints, constraintCount),
    considerations: getRandomSubset(considerations, 2),
    expectedOutput: getRandom(outputs),
    suggestedTimeLimit: timeLimit
  };
}
