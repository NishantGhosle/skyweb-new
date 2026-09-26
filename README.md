# Forge — Software Development & AI Engineering (React)

A premium, dark-themed landing page for a software development & AI engineering
company, built as a plain React + Vite app.

## Stack

- React 18 + Vite
- Plain CSS with a design-token system (`src/index.css`) — no CSS framework
  dependency, so it drops into any project (Next.js, CRA, Vite) without extra
  config. If you'd rather use Tailwind, the tokens in `:root` map directly
  onto a `tailwind.config.js` theme extension.
- No component libraries — every section is a self-contained component.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static production
build in `dist/`.

## Structure

```
src/
  components/
    Navbar.jsx        Sticky nav, blurs on scroll, mobile full-screen menu
    Hero.jsx           Hero copy + custom product-dashboard visual (SVG/CSS)
    TechStack.jsx       "Built with modern technology" bar
    Services.jsx       6 service cards
    Solutions.jsx       5 business-problem rows
    WhyUs.jsx           5 feature blocks
    CaseStudies.jsx     3 large case-study rows w/ abstract product mockups
    Process.jsx         5-step scroll-animated timeline
    Technologies.jsx    Tech stack grouped by category
    About.jsx           Company story
    Principles.jsx      4 company principles
    Expectations.jsx     "What clients can expect" (no fake testimonials)
    FAQ.jsx             Accordion FAQ
    CTA.jsx             Final call-to-action band
    Contact.jsx          Contact form with validation + success/error states
    Footer.jsx
  hooks/
    useReveal.js        IntersectionObserver-based scroll-reveal hook
  App.jsx
  index.css             All design tokens, base styles, buttons, cards
  main.jsx
```

## Notes

- The contact form currently simulates a network request in `Contact.jsx`
  (see the `handleSubmit` function). Wire the `fetch` call there up to your
  real backend/email endpoint.
- Case-study visuals, the hero product mockup, and the avatar cluster in
  About are drawn with SVG/CSS rather than stock photography, per the brief.
- No client names, logos, or performance metrics are invented anywhere in
  the copy.
- Colors, spacing and radii live as CSS custom properties in `:root` inside
  `index.css` — change them there to re-theme the whole site.
"# skyweb-new" 
