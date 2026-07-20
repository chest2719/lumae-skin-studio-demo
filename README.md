# Lumae Skin Studio Demo

A responsive Next.js concept website for a fictional premium skin studio. The live homepage follows the approved high-fidelity mock-up: a light beauty-campaign aesthetic, transparent Skin Start offer, concern-led navigation and a compact Signature Treatment showcase.

## Included

- Responsive campaign homepage matching the approved desktop and mobile mock-up
- Skin Start first-visit landing page
- Barrier Recovery Facial detail page
- Four-step booking prototype and confirmation state
- Mobile navigation, reduced-motion support and accessible controls

## Tech

- Next.js 16 App Router
- React 19
- TypeScript
- Scoped CSS design system
- Lucide icons
- Local concept imagery

## Routes

- `/` – Lumae campaign homepage
- `/skin-start` – First-appointment landing page
- `/treatments/barrier-recovery-facial` – Treatment detail
- `/buchen` – Functional booking prototype
- `/buchen/bestaetigt` – Confirmation state

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run typecheck
npm run build
npm start
```

## Demo notes

- This is a fictional concept project.
- The booking flow stores its state only in `sessionStorage`; it does not reserve real appointments.
- Contact details and legal pages are placeholders.
- Content provides cosmetic orientation, not medical diagnosis.
- The concept imagery should be replaced by one coherent original studio shoot before a real client launch.
