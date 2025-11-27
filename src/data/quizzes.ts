export interface QuizQuestion {
  id: string;
  category?: string; // Optional, can be useful for filtering if needed
  questionVariants: string[];
  correctAnswerVariants: string[];
  distractorVariants: string[][]; // Array of arrays of strings
  timer: number; // Seconds
  explanation?: string; // Keeping this for educational value
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
    title: "UX Foundations & Principles",
    description: "Master the core principles of User Experience Design.",
    questions: [
      {
        id: "ux-1",
        category: "UX Foundations & Principles",
        questionVariants: [
          "A user repeatedly taps an icon that is not interactive. What UX principle is violated?",
          "A user keeps trying to interact with a static symbol. Which principle is missing?",
          "Users assume a decorative icon is a button. Which concept did the design fail to communicate?"
        ],
        correctAnswerVariants: [
          "Poor affordance",
          "The element lacks clear affordance cues",
          "Affordance mismatch — the element looks tappable"
        ],
        distractorVariants: [
          ["Color contrast issue", "Clarity of copy", "Incorrect typography emphasis"],
          ["Usability heuristic misalignment", "Layout inconsistency", "Missing tooltip"],
          ["Navigation structure problem", "Feedback delay", "Reversed hierarchy"]
        ],
        timer: 30,
        explanation: "Affordance refers to the properties of an object that show users the actions they can take. If it looks clickable but isn't, it has false affordance."
      },
      {
        id: "ux-2",
        category: "Interaction Design",
        questionVariants: [
          "Users struggle to find 'Checkout'. What is the FIRST thing you examine?",
          "Users can't locate the checkout action. What should you inspect first?",
          "The checkout button is overlooked. What’s the first design element to check?"
        ],
        correctAnswerVariants: [
          "Visual hierarchy around primary actions",
          "Button prominence and visual priority",
          "Hierarchy and placement of the primary CTA"
        ],
        distractorVariants: [
          ["Color palette", "Icon size", "Scroll behavior"],
          ["Branding consistency", "Microcopy tone", "Alignment details"],
          ["Header structure", "Footer layout", "Field spacing"]
        ],
        timer: 30,
        explanation: "Visual hierarchy guides the user's eye. Primary actions like 'Checkout' must be the most prominent element on the screen."
      },
      {
        id: "ux-3",
        category: "Information Architecture",
        questionVariants: [
          "Your navigation has 12 items. What's the best UX-first step?",
          "A dense navigation overwhelms users. What’s your starting point?",
          "Users get lost in a large menu. What’s the correct IA step?"
        ],
        correctAnswerVariants: [
          "Card sorting with real users",
          "Run an open card sort",
          "User-driven grouping using card sorting"
        ],
        distractorVariants: [
          ["Add icons", "Use shorter labels", "Add animations"],
          ["Change brand color", "Make items bold", "Increase font size"],
          ["Reorder randomly", "Use alphabetical sorting", "Split into 3 columns"]
        ],
        timer: 30,
        explanation: "Card sorting helps you understand how users mentally categorize information, allowing you to structure navigation intuitively."
      },
      {
        id: "ux-4",
        category: "User Research",
        questionVariants: [
          "Users fail step 2 in onboarding. What’s the first research move?",
          "Mid-onboarding drop-off is high. What should you investigate first?",
          "Users stall at step 2. What’s the first UX research step?"
        ],
        correctAnswerVariants: [
          "Observe users completing the flow",
          "Conduct moderated usability testing",
          "Watch users perform the task live"
        ],
        distractorVariants: [
          ["Launch a survey", "Change button color", "Add tooltips"],
          ["Rewrite copy immediately", "Remove step count", "Add animations"],
          ["Increase padding", "Promote feature", "Add illustrations"]
        ],
        timer: 30,
        explanation: "Observing users (usability testing) provides the 'why' behind the drop-off, which quantitative data (analytics) cannot reveal."
      },
      {
        id: "ux-5",
        category: "Accessibility",
        questionVariants: [
          "Text on a button is hard to read. What is the minimum WCAG AA contrast ratio required?",
          "To ensure readability for visually impaired users, what contrast ratio must normal text meet?",
          "Your body text is grey on white. What is the minimum contrast standard?"
        ],
        correctAnswerVariants: [
          "4.5:1",
          "At least 4.5:1 ratio",
          "Minimum 4.5:1 contrast"
        ],
        distractorVariants: [
          ["3:1", "2:1", "5:1"],
          ["10:1", "7:1", "1:1"],
          ["3.5:1", "6:1", "8:1"]
        ],
        timer: 25,
        explanation: "WCAG Level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text."
      },
      {
        id: "ux-6",
        category: "Usability Heuristics",
        questionVariants: [
          "A user uploads a file but sees no success message. Which heuristic is violated?",
          "The screen doesn't change after clicking 'Save'. What is missing?",
          "Users are unsure if the system is processing their request. Which principle applies?"
        ],
        correctAnswerVariants: [
          "Visibility of system status",
          "System status visibility",
          "Feedback on system state"
        ],
        distractorVariants: [
          ["Match between system and real world", "User control and freedom", "Consistency and standards"],
          ["Error prevention", "Recognition rather than recall", "Flexibility and efficiency"],
          ["Aesthetic and minimalist design", "Help and documentation", "Error recovery"]
        ],
        timer: 25,
        explanation: "Users should always be informed about what is going on, through appropriate feedback within a reasonable time."
      },
      {
        id: "ux-7",
        category: "UX Laws",
        questionVariants: [
          "A button is too small and hard to click on mobile. Which law explains this difficulty?",
          "Users take longer to hit a small target that is far away. Which law applies?",
          "Which law relates movement time to target distance and size?"
        ],
        correctAnswerVariants: [
          "Fitts's Law",
          "Fitts's Law of movement",
          "Fitts's Law principle"
        ],
        distractorVariants: [
          ["Hick's Law", "Jakob's Law", "Miller's Law"],
          ["Gestalt Law", "Law of Proximity", "Occam's Razor"],
          ["Pareto Principle", "Weber's Law", "Tesler's Law"]
        ],
        timer: 25,
        explanation: "Fitts's Law states that the time to acquire a target is a function of the distance to and size of the target."
      },
      {
        id: "ux-8",
        category: "UX Laws",
        questionVariants: [
          "A menu has 50 items and users take forever to choose. Which law explains this?",
          "Reducing options leads to faster decisions. Which law supports this?",
          "Decision time increases with the number of choices. What is this called?"
        ],
        correctAnswerVariants: [
          "Hick's Law",
          "Hick's Law of choice",
          "Hick's Law principle"
        ],
        distractorVariants: [
          ["Fitts's Law", "Jakob's Law", "Miller's Law"],
          ["Parkinson's Law", "Murphy's Law", "Moore's Law"],
          ["Law of Common Region", "Law of Similarity", "Law of Continuity"]
        ],
        timer: 25,
        explanation: "Hick's Law describes the time it takes for a person to make a decision as a result of the possible choices: more choices = more time."
      },
      {
        id: "ux-9",
        category: "Psychology",
        questionVariants: [
          "Users expect the floppy disk icon to 'Save' because of past experience. What is this?",
          "Designing based on how users think a system should work is leveraging what?",
          "When a design matches a user's internal understanding, it aligns with their..."
        ],
        correctAnswerVariants: [
          "Mental Model",
          "User's Mental Model",
          "Existing Mental Model"
        ],
        distractorVariants: [
          ["Conceptual Model", "System Model", "Interaction Model"],
          ["Cognitive Map", "User Flow", "Persona"],
          ["Archetype", "Stereotype", "Prototype"]
        ],
        timer: 30,
        explanation: "A mental model is an explanation of someone's thought process about how something works in the real world."
      },
      {
        id: "ux-10",
        category: "Ethics",
        questionVariants: [
          "A subscription is easy to start but impossible to cancel. What is this called?",
          "Design patterns that trick users into doing things they didn't mean to. What are these?",
          "A 'roach motel' design where you check in but can't check out is an example of..."
        ],
        correctAnswerVariants: [
          "Dark Pattern",
          "Deceptive Design Pattern",
          "Dark UX"
        ],
        distractorVariants: [
          ["Bad UX", "Poor Usability", "Anti-pattern"],
          ["Gray Pattern", "Black Hat UX", "Evil Design"],
          ["User Friction", "Conversion Optimization", "Growth Hacking"]
        ],
        timer: 25,
        explanation: "Dark patterns are user interface design choices that benefit an online service by coercing, steering, or deceiving users into making unintended decisions."
      }
    ]
  },
  {
    id: "ui-design",
    title: "UI Design",
    description: "Challenge your eye for visual design and interface patterns.",
    questions: [
      {
        id: "ui-1",
        category: "Visual Hierarchy",
        questionVariants: [
          "Which alignment improves scanability for text-heavy UIs?",
          "Text-dense interfaces benefit most from which alignment?",
          "For readability in dashboards, which alignment works best?"
        ],
        correctAnswerVariants: [
          "Left-aligned text",
          "Left alignment for optimal scanning",
          "Left justification for predictable reading flow"
        ],
        distractorVariants: [
          ["Centered text", "Right alignment", "Fully justified text"],
          ["Equal spacing grid", "Icon-led layout", "Dense typography"],
          ["High color contrast", "Extra bold fonts", "Perimeter navigation"]
        ],
        timer: 20,
        explanation: "Left-aligned text is easier to read because the eye can easily find the start of the next line (in LTR languages)."
      },
      {
        id: "ui-2",
        category: "Color Systems & Contrast",
        questionVariants: [
          "Which pairing ensures accessible body text?",
          "Which color contrast meets WCAG AA for text?",
          "Which text/background combo improves readability?"
        ],
        correctAnswerVariants: [
          "Dark text on a light background with 4.5:1 contrast",
          "High-contrast text above 4.5:1 ratio",
          "Any pairing above 4.5:1 contrast ratio"
        ],
        distractorVariants: [
          ["Pastel on pastel", "Light grey on white", "Neon on white"],
          ["Low-contrast shades", "Saturated pairs", "Random palette"],
          ["White on yellow", "Teal on aqua", "Grey on lavender"]
        ],
        timer: 20,
        explanation: "High contrast between text and background is essential for readability. WCAG AA requires 4.5:1 for normal text."
      },
      {
        id: "ui-3",
        category: "Typography",
        questionVariants: [
          "Paragraph text feels cramped and hard to follow. What should you adjust?",
          "Lines of text are touching each other. Which property needs increasing?",
          "To improve vertical rhythm in a text block, what do you change?"
        ],
        correctAnswerVariants: [
          "Line height (Leading)",
          "Increase the leading",
          "Adjust line-height property"
        ],
        distractorVariants: [
          ["Kerning", "Tracking", "Font weight"],
          ["Font size", "Letter spacing", "Text transform"],
          ["Padding", "Margin", "Border width"]
        ],
        timer: 15,
        explanation: "Line height (or leading) controls the vertical space between lines of text. Adequate line height improves readability."
      },
      {
        id: "ui-4",
        category: "Layout",
        questionVariants: [
          "Elements on the screen look scattered and disorganized. What tool fixes this?",
          "To create structure and consistency in a layout, what should you use?",
          "Which system helps align elements horizontally and vertically?"
        ],
        correctAnswerVariants: [
          "Grid System",
          "Layout Grid",
          "12-Column Grid"
        ],
        distractorVariants: [
          ["Color Wheel", "Typography Scale", "Icon Set"],
          ["Gradient Mesh", "Drop Shadows", "Border Radius"],
          ["Golden Ratio", "Rule of Thirds", "Fibonacci Sequence"]
        ],
        timer: 20,
        explanation: "Grid systems provide a structure for placing elements, ensuring alignment, consistency, and visual order."
      },
      {
        id: "ui-5",
        category: "Mobile UI",
        questionVariants: [
          "Users keep missing the button on mobile. What is the likely cause?",
          "A button is hard to tap on a phone. What is the minimum recommended size?",
          "To prevent 'fat finger' errors, how large should a touch target be?"
        ],
        correctAnswerVariants: [
          "At least 44x44pt (iOS) or 48x48dp (Android)",
          "Minimum 44pt / 48dp",
          "Large enough touch target (44pt+)"
        ],
        distractorVariants: [
          ["24x24px", "10x10px", "32x32px"],
          ["100x100px", "Full width", "12px height"],
          ["Variable size", "Based on text length", "No minimum"]
        ],
        timer: 15,
        explanation: "Small touch targets lead to errors. Guidelines recommend a minimum of 44pt (iOS) or 48dp (Android) for interactive elements."
      },
      {
        id: "ui-6",
        category: "Design Systems",
        questionVariants: [
          "Your app has 5 different styles of 'Submit' buttons. What is the solution?",
          "Inconsistent UI components are causing confusion. What do you need?",
          "To ensure all buttons look and behave the same, what should you implement?"
        ],
        correctAnswerVariants: [
          "Standardized Component Library",
          "Design System Components",
          "Reusable Button Component"
        ],
        distractorVariants: [
          ["More CSS", "Different colors", "Unique IDs"],
          ["A/B Testing", "User Research", "Analytics"],
          ["New Framework", "Refactoring code", "Ignoring it"]
        ],
        timer: 20,
        explanation: "A component library within a design system ensures consistency by reusing the same coded and designed elements across the product."
      },
      {
        id: "ui-7",
        category: "Visual Design",
        questionVariants: [
          "A screen feels cluttered and overwhelming. What is missing?",
          "Elements are too close together, creating tension. What should you add?",
          "To give the eye a place to rest, what design element is crucial?"
        ],
        correctAnswerVariants: [
          "Whitespace (Negative Space)",
          "More padding and margins",
          "Breathing room"
        ],
        distractorVariants: [
          ["More colors", "Bold text", "Dividers"],
          ["Icons", "Images", "Background patterns"],
          ["Animations", "Modals", "Tooltips"]
        ],
        timer: 15,
        explanation: "Whitespace (negative space) is a fundamental design element that helps organize content, improve readability, and create focus."
      },
      {
        id: "ui-8",
        category: "Gestalt Principles",
        questionVariants: [
          "Related items are scattered across the page. Which principle should you apply?",
          "To show that elements belong together, you should place them close. Why?",
          "Grouping related items through spacing utilizes which Gestalt law?"
        ],
        correctAnswerVariants: [
          "Law of Proximity",
          "Proximity Principle",
          "Gestalt Proximity"
        ],
        distractorVariants: [
          ["Law of Closure", "Law of Similarity", "Law of Continuity"],
          ["Law of Common Region", "Law of Symmetry", "Law of Figure-Ground"],
          ["Fitts's Law", "Hick's Law", "Miller's Law"]
        ],
        timer: 20,
        explanation: "The Law of Proximity states that objects that are near or 'proximate' to each other tend to be grouped together."
      },
      {
        id: "ui-9",
        category: "Motion Design",
        questionVariants: [
          "An animation feels sluggish and makes the app seem slow. What is the issue?",
          "A transition takes 1 second to complete. How does this affect UX?",
          "For snappy UI feedback, what is the ideal animation duration range?"
        ],
        correctAnswerVariants: [
          "Duration is too long (aim for 200-300ms)",
          "It should be faster (200-300ms)",
          "Reduce duration to ~300ms"
        ],
        distractorVariants: [
          ["It needs more bounce", "Make it 2 seconds", "Remove it"],
          ["Add more frames", "Use linear easing", "Loop it"],
          ["Make it complex", "Add sound", "Change color"]
        ],
        timer: 15,
        explanation: "UI animations should be quick (typically 200-500ms). Too slow, and they become an obstruction; too fast, and they are unnoticeable."
      },
      {
        id: "ui-10",
        category: "Iconography",
        questionVariants: [
          "Users don't understand what a specific icon means. What is the best fix?",
          "An ambiguous icon is causing errors. How do you clarify it?",
          "To ensure an icon is universally understood, what should accompany it?"
        ],
        correctAnswerVariants: [
          "Add a text label",
          "Pair with a label",
          "Visible text description"
        ],
        distractorVariants: [
          ["Make it bigger", "Change the color", "Animate it"],
          ["Add a tooltip (hover only)", "Redesign the icon", "Remove it"],
          ["Put it in a circle", "Add a shadow", "Make it 3D"]
        ],
        timer: 15,
        explanation: "Icons can be ambiguous. The most effective way to ensure clarity is to pair the icon with a visible text label."
      }
    ]
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Test your strategic design thinking and product problem-solving skills.",
    questions: [
      {
        id: "pd-1",
        category: "Product Thinking",
        questionVariants: [
          "Users abandon onboarding at step 2. What should a designer examine first?",
          "Drop-off occurs at the second onboarding step. What’s your starting point?",
          "Users fail early in onboarding. What’s the first Product Design move?"
        ],
        correctAnswerVariants: [
          "Remove friction and unnecessary fields",
          "Reduce cognitive load in that step",
          "Simplify the step to reduce friction"
        ],
        distractorVariants: [
          ["Add confetti", "Rebrand the screen", "Make CTA larger"],
          ["Change typography", "Add new graphics", "Increase margin"],
          ["Move the step later", "Play a tutorial video", "Add more text"]
        ],
        timer: 30,
        explanation: "High drop-off suggests friction. The first step is to identify and remove barriers, such as unnecessary fields or complex decisions."
      },
      {
        id: "pd-2",
        category: "Problem Framing",
        questionVariants: [
          "Before redesigning a feature, what’s the FIRST Product Design step?",
          "A feature is underperforming. What should designers clarify first?",
          "Low engagement in a feature. What’s the initial step?"
        ],
        correctAnswerVariants: [
          "Frame the actual problem",
          "Understand the problem behind the symptom",
          "Clarify the design problem definition"
        ],
        distractorVariants: [
          ["Change UI colors", "Add icons", "Increase padding"],
          ["Launch marketing", "Add tutorial popups", "Increase notifications"],
          ["Introduce animations", "Add 3D visuals", "Rearrange screen"]
        ],
        timer: 30,
        explanation: "Design is problem-solving. You cannot solve a problem effectively if you haven't defined what the core problem actually is."
      },
      {
        id: "pd-3",
        category: "Metrics",
        questionVariants: [
          "Users sign up but never come back. Which metric is suffering?",
          "High churn rate indicates a problem with what?",
          "If your product fails to keep users long-term, what metric is low?"
        ],
        correctAnswerVariants: [
          "Retention Rate",
          "User Retention",
          "Retention"
        ],
        distractorVariants: [
          ["Acquisition", "Activation", "Referral"],
          ["Page Views", "Bounce Rate", "Session Duration"],
          ["CAC", "NPS", "CSAT"]
        ],
        timer: 25,
        explanation: "Retention measures the ability of a product to keep users over time. Low retention means the product isn't delivering sustained value."
      },
      {
        id: "pd-4",
        category: "Strategy",
        questionVariants: [
          "You have 100 feature ideas but can only build 3. What do you do?",
          "How do you decide what to build next when resources are limited?",
          "To create a roadmap, how do you handle a backlog of ideas?"
        ],
        correctAnswerVariants: [
          "Prioritize based on value vs effort",
          "Use an Impact/Effort matrix",
          "Prioritize high-impact, low-effort items"
        ],
        distractorVariants: [
          ["Build the easiest ones", "Pick the CEO's favorites", "Random selection"],
          ["Build the coolest ones", "Copy competitors", "Ask sales team"],
          ["Alphabetical order", "First in, first out", "Build all of them"]
        ],
        timer: 30,
        explanation: "Prioritization is key. Frameworks like Impact/Effort help identify features that deliver the most value for the least cost."
      },
      {
        id: "pd-5",
        category: "MVP",
        questionVariants: [
          "You want to test a new product idea with minimal risk. What do you build?",
          "To validate a concept quickly without wasting resources, what is the approach?",
          "The first version of a product focused on learning is called..."
        ],
        correctAnswerVariants: [
          "Minimum Viable Product (MVP)",
          "An MVP",
          "A learning-focused MVP"
        ],
        distractorVariants: [
          ["Maximum Viable Product", "Final Polish", "Beta Release"],
          ["Prototype only", "Mockup", "Wireframe"],
          ["Full Scale Launch", "Feature Complete", "Gold Master"]
        ],
        timer: 25,
        explanation: "An MVP is the smallest thing you can build that delivers customer value (and captures some of that value back) to validate your assumptions."
      },
      {
        id: "pd-6",
        category: "Hypothesis",
        questionVariants: [
          "Instead of saying 'Users want X', a product designer says...",
          "How do you frame a design idea to be tested?",
          "To avoid bias, design decisions should be framed as..."
        ],
        correctAnswerVariants: [
          "A Hypothesis",
          "An assumption to be tested",
          "We believe that [doing X] will result in [Y]"
        ],
        distractorVariants: [
          ["A Fact", "A Requirement", "A Rule"],
          ["A Guess", "A Hope", "A Dream"],
          ["A Mandate", "A Law", "A Certainty"]
        ],
        timer: 25,
        explanation: "Framing ideas as hypotheses ('We believe X will result in Y') acknowledges uncertainty and sets the stage for testing and validation."
      },
      {
        id: "pd-7",
        category: "Stakeholders",
        questionVariants: [
          "The CEO wants a feature that users hate. What is your role?",
          "Business goals conflict with user needs. How do you handle it?",
          "When stakeholders push for bad UX, what should you do?"
        ],
        correctAnswerVariants: [
          "Advocate for the user with data",
          "Use research to show the risk",
          "Balance business goals with user needs using evidence"
        ],
        distractorVariants: [
          ["Do what the CEO says", "Ignore the CEO", "Quit"],
          ["Complain", "Design it badly on purpose", "Hide the feature"],
          ["Ask users to email the CEO", "Write a blog post", "Argue without data"]
        ],
        timer: 30,
        explanation: "Designers are the voice of the user. Using data and research is the most effective way to align stakeholders and advocate for good UX."
      },
      {
        id: "pd-8",
        category: "Discovery",
        questionVariants: [
          "You are asked to 'design a bridge'. What is the first question?",
          "Before jumping into solutions for a new request, what must you ask?",
          "To understand the root cause of a request, you ask..."
        ],
        correctAnswerVariants: [
          "Why do we need a bridge? (The 'Why')",
          "What problem are we solving?",
          "What is the user's goal?"
        ],
        distractorVariants: [
          ["What color should it be?", "How long?", "Wood or steel?"],
          ["When is it due?", "What is the budget?", "Who is the PM?"],
          ["Can I use Figma?", "Is it mobile first?", "Dark mode?"]
        ],
        timer: 25,
        explanation: "Product design starts with 'Why'. Understanding the underlying need (maybe they just need to cross the river, a boat might work) is crucial."
      },
      {
        id: "pd-9",
        category: "Success Metrics",
        questionVariants: [
          "You launched a new feature. How do you know if it's successful?",
          "To measure the impact of a design change, you need...",
          "Success shouldn't be a feeling. It should be defined by..."
        ],
        correctAnswerVariants: [
          "Pre-defined Success Metrics / KPIs",
          "Measurable outcomes",
          "Data against a baseline"
        ],
        distractorVariants: [
          ["If the CEO likes it", "If it looks good", "If no one complains"],
          ["Number of lines of code", "Hours spent", "Pixel perfection"],
          ["Dribbble likes", "Awards", "Personal satisfaction"]
        ],
        timer: 25,
        explanation: "Success must be defined before launch. Whether it's conversion rate, time on task, or retention, you need a metric to judge performance."
      },
      {
        id: "pd-10",
        category: "Iteration",
        questionVariants: [
          "The product is launched. What is the designer's job now?",
          "Design doesn't end at launch. What comes next?",
          "To improve a product over time, you must..."
        ],
        correctAnswerVariants: [
          "Measure, Learn, and Iterate",
          "Analyze performance and improve",
          "Continuous Iteration"
        ],
        distractorVariants: [
          ["Move to the next project immediately", "Celebrate and forget", "Nothing"],
          ["Defend the design", "Blame users", "Write documentation"],
          ["Archive files", "Delete Figma", "Sleep"]
        ],
        timer: 25,
        explanation: "Great products are built through iteration. Launch is just the beginning of learning how users actually use the product."
      }
    ]
  }
];
