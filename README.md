# Lumae Skin Studio Demo

A production-ready vertical slice for a fictional premium skin studio. The concept deliberately avoids the typical beige skincare-shop formula and is built around a **personal skin journal**: observe, understand, treat, and adapt over time.

## Included

- Responsive editorial homepage
- Interactive skin journal with five needs-based entries
- Skin Start landing page
- Barrier Recovery Facial detail page
- Four-step booking prototype
- Booking confirmation state
- Mobile navigation and responsive layouts
- Accessible form labels, focus states, semantic structure, and reduced-motion support

## Tech

- Next.js 16 App Router
- React 19
- TypeScript
- CSS design-token system
- Lucide icons
- Local concept imagery

## Routes

- `/` – Homepage and interactive skin journal
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
- Skin-journal content provides orientation, not medical diagnosis.
- The local images are concept assets derived from the approved visual direction and should be replaced by original studio photography for a real client launch.

## Design direction

The implementation follows the Phase 7 system developed for the project:

- warm paper base instead of generic pure white
- aubergine as the distinctive commercial and editorial accent
- strong grotesk hierarchy with restrained serif emphasis
- minimal card usage
- transparent price and duration information
- journal entries as a real interaction rather than decorative “skin scanner” UI
- mobile content order designed independently from desktop

The approved visual reference is stored at `docs/design-reference.png`.
