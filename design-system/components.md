# UxTerms Component Library Specification

## Design Principles
- **Warm & Premium**: Editorial feel with ColorHunt palette
- **Glassmorphism**: Subtle transparency with backdrop blur
- **Consistent Spacing**: 8-based scale (4, 8, 12, 16, 24, 32, 48, 64, 80, 96)
- **Typography**: Space Grotesk (display) + Inter (body)
- **Accessibility**: WCAG AA contrast, semantic HTML, keyboard navigation

---

## 1. Buttons

### Primary Button
```tsx
<Button variant="primary">
```
**Specs:**
- Background: `#FF6D1F` (accent color)
- Text: `#FAF3E1` (cream white)
- Padding: `12px 32px` (h-12 px-8)
- Border radius: `9999px` (fully rounded)
- Font: Inter, 16px, 600 weight
- Shadow: `0 4px 12px -2px rgba(255, 109, 31, 0.25)`

**States:**
- Hover: `scale(1.02)`, `bg-opacity(90%)`
- Active: `scale(0.98)`
- Disabled: `opacity(50%)`, `cursor-not-allowed`
- Focus: `ring-2 ring-accent ring-offset-2`

### Secondary Button
```tsx
<Button variant="secondary">
```
**Specs:**
- Background: Transparent
- Border: `1px solid rgba(34/250, 34/243, 34/225, 0.2)`
- Text: `textPrimary`
- Padding: `12px 32px`
- Border radius: `9999px`
- Backdrop blur: `md`

**States:**
- Hover: `bg-surface`, `border-accent/30`
- Focus: Same as primary

### Ghost Button
```tsx
<Button variant="ghost">
```
**Specs:**
- Background: Transparent
- Text: `textSecondary`
- Padding: `8px 16px`
- No border

**States:**
- Hover: `bg-surface/50`, `text-textPrimary`

---

## 2. Cards

### Default Card
**Specs:**
- Background: `surface` color
- Border: `1px solid border`
- Border radius: `16px` (large)
- Padding: `24px`
- Shadow: `sm`

**States:**
- Hover: `border-accent/30`, `shadow-md`

### Glass Card
**Specs:**
- Background: `glassmorphism.background`
- Border: `glassmorphism.border`
- Backdrop blur: `12px` (light) / `16px` (dark)
- Border radius: `16px`
- Padding: `24px`
- Shadow: `sm`

**Usage:** Overlays, modals, featured content

### Elevated Card
**Specs:**
- Background: `surface`
- Border: `border`
- Border radius: `20px` (xlarge)
- Padding: `32px`
- Shadow: `lg`
- Elevation: `level-3`

**Usage:** Hero cards, premium content

---

## 3. Navigation Bar

### Desktop
**Specs:**
- Height: `72px`
- Background: `glassmorphism.elevated.background`
- Backdrop blur: `20px`
- Border bottom: `1px solid border`
- Padding: `0 24px`
- Max width: `1400px`
- Sticky: `top-0`, `z-50`

**Layout:**
- Logo (left): 40px height
- Nav links (center): 16px font, 600 weight, gap-32
- Theme toggle + CTA (right)

**States:**
- Link hover: `text-accent`
- Link active: `text-accent`, `font-bold`

### Mobile
**Specs:**
- Hamburger menu (right)
- Drawer: Full height, `90vw` width
- Background: `surface`
- Links: Stacked, 48px height each
- Close button: Top-right

---

## 4. Footer

### Layout
**Specs:**
- Background: `surface`
- Border top: `1px solid border`
- Padding: `64px 24px`
- Grid: 3 columns (desktop), 1 column (mobile)

**Columns:**
1. **Brand** - Logo + tagline
2. **Links** - Product, Resources, Legal
3. **Social** - Icons + newsletter

**Typography:**
- Headings: 14px, 700 weight, `textPrimary`
- Links: 14px, 400 weight, `textSecondary`

**States:**
- Link hover: `text-accent`

---

## 5. Glossary Card

**Specs:**
- Min height: `200px`
- Background: `glass.background`
- Border: `glass.border`
- Border radius: `16px`
- Padding: `20px`
- Backdrop blur: `12px`

**Layout:**
- Icon: 48px circle, `accent/10` background, top-left
- Term: 24px, `font-display`, `bold`
- Definition: 14px, `textSecondary`, `line-height-relaxed`
- Category tag: Bottom-right, `10px` font, `accent` color

**States:**
- Hover: `scale(1.01)`, `border-accent/30`, `shadow-md`

---

## 6. Quiz Category Card

**Specs:**
- Height: `280px` (fixed)
- Background: `glass.background`
- Border: `border`
- Border radius: `16px`
- Padding: `24px`
- Backdrop blur: `12px`

**Layout:**
- Icon: 56px, `accent/10` bg, centered top
- Title: 20px, `font-display`, centered
- Description: 14px, `textSecondary`
- Stats row: Questions count + difficulty
- CTA button: Bottom, full-width

**States:**
- Hover: `border-accent/50`, `translate-y(-4px)`

---

## 7. Quiz Question Card

**Specs:**
- Background: `surface`
- Border: `border-strong`
- Border radius: `20px`
- Padding: `32px`
- Shadow: `lg`

**Layout:**
- Category tag: Top, orange pill
- Timer: Top-right, mono font
- Question: 24px, `font-display`, `bold`
- Options: 4 buttons, stacked, 16px gap

**Option Button:**
- Height: `56px`
- Border: `border`
- Border radius: `12px`
- Padding: `16px`
- Font: 16px

**States:**
- Selected: `border-accent`, `bg-accent/5`
- Correct: `border-green-500`, `bg-green-500/10`
- Incorrect: `border-red-500`, `bg-red-500/10`
- Disabled: `opacity-50`

---

## 8. Challenge Preview Card

**Specs:**
- Min height: `320px`
- Background: `surface`
- Border: `border`
- Border radius: `16px`
- Padding: `24px`

**Layout:**
- Difficulty badge: Top-left (Easy/Medium/Hard)
- Category tag: Top-right
- Title: 20px, `font-display`, `bold`
- Considerations: Bulleted list, 14px
- CTA: Bottom

**Difficulty Colors:**
- Easy: `green-500`
- Medium: `yellow-500`
- Hard: `red-500`

**States:**
- Hover: `border-accent/30`, `shadow-lg`

---

## 9. XP Progress Bar

**Specs:**
- Height: `12px`
- Background: `surface`
- Border: `1px solid border`
- Border radius: `full`
- Overflow: `hidden`

**Fill:**
- Background: `linear-gradient(90deg, #3C5AFF, #6B8AFF)` (blue for XP)
- Border radius: `full`
- Animation: `width` transition `500ms ease-out`

**Label:**
- Above bar: Current / Total XP
- Font: 14px, mono, `bold`

---

## 10. Hero Section

**Specs:**
- Padding: `96px 0` (desktop), `48px 0` (mobile)
- Background: Subtle radial gradient (`accent/4`)
- Max width: `1400px`

**Layout:**
- 2-column grid (desktop): 60/40 split
- Text column: Left-aligned
- Visual column: Right-aligned

**Typography:**
- Eyebrow: 10px, `uppercase`, `tracking-widest`, `accent`
- Heading: 48px (desktop), `font-display`, `black`
- Subheading: 18px, `textSecondary`, `line-height-relaxed`

**CTA Spacing:**
- Top margin: `32px`
- Button gap: `12px`

---

## 11. FAQ Accordion

**Specs:**
- Background: `surface`
- Border: `border`
- Border radius: `16px`
- Padding: `32px`

**Item:**
- Border bottom: `1px solid border`
- Padding: `20px 0`

**Button (Question):**
- Font: 16px, `font-display`, `bold`
- Chevron: Right-aligned, rotates on open
- Hover: `text-accent`

**Answer:**
- Font: 14px, `textSecondary`
- Padding top: `12px`
- Animation: `height` + `opacity`, `300ms ease`

---

## 12. Testimonial Card

**Specs:**
- Min width: `280px` (mobile scroll)
- Background: `glass.background`
- Border: `glass.border`
- Border radius: `16px`
- Padding: `24px`
- Backdrop blur: `12px`

**Layout:**
- Avatar: 48px circle, gradient background
- Name: 14px, `bold`
- Role: 12px, `textSecondary`
- Quote: 14px, italic, `textMuted`
- Stars: Bottom, `accent` color

**States:**
- Hover: `border-accent/30`

---

## 13. Metric/Stat Block

**Specs:**
- Background: `surface`
- Border: `border`
- Border radius: `12px`
- Padding: `20px`
- Text align: `center`

**Layout:**
- Icon: 40px, `accent/10` bg, top
- Number: 36px, `font-display`, `black`, `accent`
- Label: 12px, `textSecondary`, `uppercase`

**States:**
- Hover: `border-accent/30`

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape / Small desktop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large desktop |

---

## Accessibility Requirements

### Contrast
- Text on background: min 4.5:1
- Accent on background: min 3:1
- Disabled states: clearly distinguished

### Keyboard Navigation
- All interactive elements: `focus-visible:ring-2 ring-accent`
- Tab order: logical flow
- Skip to content link

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- `<button>` for actions
- `<a>` for navigation
- ARIA labels for icons

### Motion
- Respect `prefers-reduced-motion`
- Disable animations when requested
- Provide static alternatives

---

## Color Usage Rules

### PRIMARY USE CASES
- **Accent (#FF6D1F)**: CTAs, links, active states, highlights
- **XP Blue (#3C5AFF)**: XP bars, level badges, gamification ONLY
- **Surface**: Cards, elevated sections
- **Background**: Page background
- **Text Primary**: Headings, body text
- **Text Secondary**: Supporting text, metadata

### FORBIDDEN
- Any neon colors
- Any colors outside the defined palette
- Lime yellow
- Bright cyan

---

## Implementation Notes

1. **All components** use design tokens
2. **No hardcoded values** except for one-off adjustments
3. **Mobile-first** approach
4. **Dark mode** via CSS custom properties
5. **Animations** respect reduced motion
6. **Glass effects** use backdrop-filter
