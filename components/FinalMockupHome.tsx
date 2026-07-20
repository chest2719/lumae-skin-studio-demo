"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Droplets,
  FlaskConical,
  HeartPulse,
  ScanFace,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UserRoundCheck,
  Waves,
} from "lucide-react";
import { useEffect, useRef } from "react";

const trustItems = [
  { icon: ScanFace, title: "Persönliche Analyse", text: "Hautzustand statt Vermutung" },
  { icon: FlaskConical, title: "Wirkstofforientiert", text: "Gezielt und nachvollziehbar" },
  { icon: UserRoundCheck, title: "Individuell", text: "Ein Plan für deine Haut" },
  { icon: ShieldCheck, title: "Vertrauensvoll", text: "Klare Beratung ohne Druck" },
];

const concerns = [
  { icon: Sparkles, title: "Fahler Teint", subtitle: "& unruhiger Ton" },
  { icon: SunMedium, title: "Unreinheiten", subtitle: "& verstopfte Poren" },
  { icon: Waves, title: "Feine Linien", subtitle: "& Spannkraft" },
  { icon: HeartPulse, title: "Rötungen", subtitle: "& Empfindlichkeit" },
  { icon: Sparkles, title: "Pigmentierung", subtitle: "& Flecken" },
  { icon: Droplets, title: "Trockenheit", subtitle: "& Spannungsgefühl" },
];

const treatments = [
  {
    eyebrow: "Lumae Radiance",
    title: "Glow Renewal Facial",
    meta: "60 Min · 149 €",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "Lumae Clarity",
    title: "Clarity & Balance Facial",
    meta: "75 Min · 159 €",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=85",
  },
  {
    eyebrow: "Lumae Sculpt",
    title: "Lift & Sculpt Facial",
    meta: "90 Min · 179 €",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=85",
  },
];

export function FinalMockupHome() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduced) {
      items.forEach((item) => item.setAttribute("data-visible", "true"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="fm-page" ref={rootRef}>
      <section className="fm-hero">
        <div className="fm-shell fm-hero-grid">
          <div className="fm-hero-copy" data-reveal>
            <p className="fm-kicker">Skin, understood.</p>
            <h1>
              Deine Haut.
              <span>Unsere Expertise.</span>
            </h1>
            <p className="fm-hero-script">Pflege, die sich mit dir entwickelt.</p>
            <p className="fm-hero-intro">
              Persönliche Treatments, präzise Hautanalyse und ein Plan, der deine Haut Schritt für Schritt begleitet.
            </p>
            <div className="fm-actions">
              <Link className="fm-button fm-button-primary" href="/buchen">
                Skin Start buchen
              </Link>
              <a className="fm-button fm-button-outline" href="#treatments">
                Treatments entdecken
              </a>
            </div>
          </div>

          <div className="fm-hero-media" data-reveal>
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85"
              alt="Persönliche Gesichtsbehandlung im Lumae Skin Studio"
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) 100vw, 62vw"
            />
            <div className="fm-hero-wash" aria-hidden="true" />
            <div className="fm-orbit fm-orbit-one" aria-hidden="true" />
            <div className="fm-orbit fm-orbit-two" aria-hidden="true" />
            <div className="fm-hero-badge" aria-label="Skin Start: 90 Minuten, 139 Euro">
              <span>Skin Start</span>
              <strong>Ersttermin</strong>
              <small>90 Min · 139 €</small>
            </div>
          </div>

          <div className="fm-trust-strip" data-reveal>
            {trustItems.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fm-concerns" id="hautziele">
        <div className="fm-shell fm-concerns-panel" data-reveal>
          <div className="fm-concerns-intro">
            <h2>Was beschäftigt deine Haut?</h2>
            <p>Wähle dein wichtigstes Hautthema und finde den passenden Einstieg.</p>
            <a href="#skin-start">Alle Hautthemen <ArrowRight size={14} aria-hidden="true" /></a>
          </div>
          <div className="fm-concerns-grid">
            {concerns.map(({ icon: Icon, title, subtitle }) => (
              <a href="#skin-start" key={title}>
                <span className="fm-concern-icon"><Icon aria-hidden="true" /></span>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="fm-skin-start" id="skin-start">
        <div className="fm-shell fm-skin-start-card" data-reveal>
          <div className="fm-skin-start-image">
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=85"
              alt="Entspannender erster Behandlungstermin bei Lumae"
              fill
              unoptimized
              loading="eager"
              sizes="(max-width: 760px) 100vw, 38vw"
            />
          </div>
          <div className="fm-skin-start-copy">
            <p className="fm-kicker">Dein Einstieg bei Lumae</p>
            <h2>Skin Start<br />First Visit Experience</h2>
            <p>
              Eine ausführliche Hautanalyse und ein individuell abgestimmtes Facial – in einem klaren, ruhigen Ersttermin.
            </p>
            <ul>
              <li><Check aria-hidden="true" /> Persönliche Hautanalyse</li>
              <li><Check aria-hidden="true" /> Individuell abgestimmtes Treatment</li>
              <li><Check aria-hidden="true" /> Pflege- und Treatment-Empfehlung</li>
              <li><Check aria-hidden="true" /> Zeit für deine Fragen</li>
            </ul>
          </div>
          <aside className="fm-skin-start-booking">
            <div><span>Dauer</span><strong>90 Minuten</strong></div>
            <div><span>Preis</span><strong>139 €</strong></div>
            <Link href="/buchen">Skin Start buchen</Link>
            <small>Nur für Neukundinnen</small>
          </aside>
        </div>
      </section>

      <section className="fm-treatments" id="treatments">
        <div className="fm-shell" data-reveal>
          <div className="fm-section-heading">
            <div>
              <p className="fm-kicker">Auf deine Haut abgestimmt</p>
              <h2>Unsere Signature Treatments</h2>
              <p>Gezielte Facials. Transparente Leistungen. Ein hochwertiges Erlebnis.</p>
            </div>
            <Link href="/treatments/barrier-recovery-facial">Alle Treatments <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="fm-treatment-grid">
            {treatments.map((treatment) => (
              <Link className="fm-treatment-card" href="/treatments/barrier-recovery-facial" key={treatment.title}>
                <div className="fm-treatment-image">
                  <Image src={treatment.image} alt={treatment.title} fill unoptimized loading="eager" sizes="(max-width: 760px) 100vw, 31vw" />
                </div>
                <div>
                  <span>{treatment.eyebrow}</span>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
