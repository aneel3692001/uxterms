export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  example: string;
  related: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "accessibility",
    term: "Accessibility (a11y)",
    definition: "The practice of making websites usable by as many people as possible, including those with disabilities.",
    example: "Adding alt text to images so screen readers can describe them to visually impaired users.",
    related: ["Inclusive Design", "WCAG", "Contrast Ratio"],
  },
  {
    id: "affordance",
    term: "Affordance",
    definition: "A property of an object that indicates how it can be used.",
    example: "A button designed to look raised or 3D affords pushing.",
    related: ["Signifier", "UI Design", "Interaction Design"],
  },
  {
    id: "card-sorting",
    term: "Card Sorting",
    definition: "A UX research method where participants organize topics into categories that make sense to them.",
    example: "Asking users to group menu items to help design the site navigation.",
    related: ["Information Architecture", "User Research", "Tree Testing"],
  },
  {
    id: "dark-pattern",
    term: "Dark Pattern",
    definition: "A user interface that has been carefully crafted to trick users into doing things.",
    example: "Making the 'Unsubscribe' button very small and low contrast so users miss it.",
    related: ["Ethical Design", "UX Writing", "Deceptive Design"],
  },
  {
    id: "f-pattern",
    term: "F-Pattern",
    definition: "A scanning pattern where users read the top line, then a bit of the middle, then scan down the left side.",
    example: "Placing key headlines and the logo in the top left to match natural eye movement.",
    related: ["Z-Pattern", "Visual Hierarchy", "Eye Tracking"],
  },
  {
    id: "gestalt-principles",
    term: "Gestalt Principles",
    definition: "Laws of human perception that describe how humans group similar elements, recognize patterns and simplify complex images.",
    example: "Proximity: Elements close to each other are perceived as a group.",
    related: ["Visual Design", "Proximity", "Closure"],
  },
  {
    id: "heuristic-evaluation",
    term: "Heuristic Evaluation",
    definition: "A usability inspection method where evaluators examine the interface and judge its compliance with recognized usability principles.",
    example: "Checking if a system provides clear error messages (Nielsen's Heuristics).",
    related: ["Usability Testing", "Nielsen's Heuristics", "Expert Review"],
  },
  {
    id: "information-architecture",
    term: "Information Architecture (IA)",
    definition: "The structural design of shared information environments; the art and science of organizing and labeling websites.",
    example: "Creating a sitemap to organize pages into logical categories.",
    related: ["Sitemap", "Navigation", "Card Sorting"],
  },
  {
    id: "kerning",
    term: "Kerning",
    definition: "The process of adjusting the spacing between characters in a proportional font.",
    example: "Adjusting the space between 'A' and 'V' so they look visually balanced.",
    related: ["Typography", "Tracking", "Leading"],
  },
  {
    id: "mental-model",
    term: "Mental Model",
    definition: "An explanation of someone's thought process about how something works in the real world.",
    example: "Users expect a trash can icon to delete items because that's how it works in physical offices.",
    related: ["User Psychology", "Cognitive Load", "UX Research"],
  },
];
