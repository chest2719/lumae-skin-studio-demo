# Lumae Skin Studio Demo

A production-ready vertical slice for a fictional premium skin studio. The current direction is **Modern Beauty House**: immediately recognisable as a high-end cosmetics experience, but differentiated through the Lumae Fold, asymmetric campaign composition, concern-led navigation and transparent treatment information.

## Included

- Responsive beauty campaign homepage
- Animated Lumae Fold visual system
- Interactive skin-concern navigator
- Signature treatment showcase
- Concept case / visible-progress module
- Studio and personal-treatment section
- Skin Start landing page
- Barrier Recovery Facial detail page
- Four-step booking prototype and confirmation state
- Mobile navigation, reduced-motion support and accessible controls

## Tech

- Next.js 16 App Router
- React 19
- TypeScript
- CSS design-token and motion system
- Web Animations / Intersection Observer interactions
- Lucide icons
- Local concept imagery

## Routes

- `/` – Modern Beauty House homepage
- `/skin-start` – First-appointment landing page
- `/treatments/barrier-recovery-facial` – Treatment detail
- `/buchen` – Functional booking prototype
- `/buchen/bestaetigt` – Confirmation state

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run typecheck
npm run build
npm start
```

## Important demo notes

- This is a clearly fictional concept project.
- The booking flow stores its state only in `sessionStorage`; it does not reserve real appointments.
- Contact details and legal pages are placeholders.
- Content provides cosmetic orientation, not medical diagnosis.
- Testimonials and the progress module are visibly labelled concept placeholders.
- The local images should be replaced by one coherent original studio shoot before a real client launch.
