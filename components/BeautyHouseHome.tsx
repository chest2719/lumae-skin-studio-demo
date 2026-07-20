"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Concern = {
  label: string;
  title: string;
  summary: string;
  direction: string;
  index: string;
};

const concerns: Concern[] = [
  {
    index: "01",
    label: "Empfindlichkeit",
    title: "Wenn deine Haut auf fast alles reagiert.",
    summary:
      "Wir betrachten Belastbarkeit, Wirkstoffdichte und Pflegeroutine, bevor wir beruhigende Behandlungsschritte auswählen.",
    direction: "Calm · Barrier Recovery",
  },
  {
    index: "02",
    label: "Unreinheiten",
    title: "Wenn Poren immer wieder verstopfen.",
    summary:
      "Nicht automatisch stärker peelen: Wir ordnen Reinigung, Talg, Texturen und mögliche Überpflege zuerst gemeinsam ein.",
    direction: "Clear · Clarifying Facial",
  },
  {
    index: "03",
    label: "Trockenheit",
    title: "Wenn reichhaltige Pflege trotzdem nicht reicht.",
    summary:
      "Wir unterscheiden Feuchtigkeitsmangel, fehlende Lipide und eine belastete Hautbarriere, statt nur mehr Produkt aufzutragen.",
    direction: "Hydrate · Deep Hydration",
  },
  {
    index: "04",
    label: "Textur & Teint",
    title: "Wenn deine Haut unruhiger wirkt, als sie sich anfühlt.",
    summary:
      "Oberfläche, Pigmentierung, Rötung und Spannkraft werden getrennt betrachtet, damit ein klarer Schwerpunkt entsteht.",
    direction: "Renew · Resurfacing",
  },
];

const treatmentPrinciples = [
  "Wir kennen deine Routine, bevor wir etwas hinzufügen.",
  "Nicht jeder mögliche Schritt wird automatisch eingesetzt.",
  "Preis, Dauer und mögliche Reaktionen sind vorher klar.",
  "Empfehlungen dürfen sich mit deiner Haut verändern.",
];

function useRevealOnScroll(root: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
        item.dataset.visible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    node.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [root]);
}

export function BeautyHouseHome() {
  const pageRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeConcern, setActiveConcern] = useState(0);
  const currentConcern = useMemo(() => concerns[activeConcern], [activeConcern]);

  useRevealOnScroll(pageRef);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handlePointer = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--fold-x", `${x * 26}px`);
      hero.style.setProperty("--fold-y", `${y * 20}px`);
      hero.style.setProperty("--image-x", `${x * -7}px`);
      hero.style.setProperty("--image-y", `${y * -5}px`);
    };

    const resetPointer = () => {
      hero.style.setProperty("--fold-x", "0px");
      hero.style.setProperty("--fold-y", "0px");
      hero.style.setProperty("--image-x", "0px");
      hero.style.setProperty("--image-y", "0px");
    };

    hero.addEventListener("pointermove", handlePointer);
    hero.addEventListener("pointerleave", resetPointer);
    return () => {
      hero.removeEventListener("pointermove", handlePointer);
      hero.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <main className="bh-page" ref={pageRef}>
      <section className="bh-hero" ref={heroRef}>
        <div className="bh-fold" aria-hidden="true">
          <div className="bh-fold-layer bh-fold-layer-one" />
          <div className="bh-fold-layer bh-fold-layer-two" />
          <div className="bh-fold-glow" />
        </div>

        <div className="bh-shell bh-hero-grid">
          <div className="bh-hero-copy">
            <p className="bh-kicker bh-hero-kicker">Lumae Skin Studio · Leipzig</p>
            <h1 className="bh-hero-title" aria-label="Hautpflege, die sich nach deiner Haut richtet.">
              <span className="bh-title-serif">Hautpflege,</span>
              <span className="bh-title-sans">die sich nach</span>
              <span className="bh-title-sans">deiner Haut richtet.</span>
            </h1>
            <p className="bh-hero-intro">
              Persönliche Hautanalyse und individuell komponierte Facials für Haut, die nicht noch
              einen Versuch, sondern einen klaren nächsten Schritt braucht.
            </p>
            <div className="bh-hero-actions">
              <Link className="bh-button bh-button-primary" href="/buchen">
                Ersttermin buchen <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a className="bh-text-link" href="#hautziele">
                Hautziele entdecken <ChevronRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="bh-hero-stage" aria-label="Persönliche Gesichtsbehandlung">
            <div className="bh-hero-image-wrap">
              <Image
                src="/images/hero-treatment.jpg"
                alt="Kosmetikerin bei einer ruhigen, persönlichen Gesichtsbehandlung"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 54vw"
              />
            </div>
            <div className="bh-hero-skin-crop" aria-hidden="true">
              <Image src="/images/skin-detail.jpg" alt="" fill sizes="220px" />
            </div>
            <div className="bh-hero-caption">
              <span>Skin Start</span>
              <strong>Analyse · Facial · persönlicher Plan</strong>
            </div>
          </div>

          <aside className="bh-booking-card" aria-label="Skin Start Informationen">
            <div>
              <p>Der erste Termin</p>
              <strong>Skin Start</strong>
            </div>
            <dl>
              <div>
                <dt>Dauer</dt>
                <dd>90 Minuten</dd>
              </div>
              <div>
                <dt>Preis</dt>
                <dd>139 €</dd>
              </div>
            </dl>
            <Link href="/skin-start">
              Was enthalten ist <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bh-principles" aria-label="Lumae Arbeitsprinzipien">
        <div className="bh-shell bh-principles-grid">
          {treatmentPrinciples.map((principle, index) => (
            <div key={principle} data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bh-concerns" id="hautziele">
        <div className="bh-shell">
          <div className="bh-section-heading" data-reveal>
            <p className="bh-kicker">Beginne bei deiner Wahrnehmung</p>
            <div>
              <h2>Was soll sich für deine Haut verändern?</h2>
              <p>
                Du musst keinen Gerätenamen kennen. Wähle das Thema, das deiner aktuellen Haut am
                nächsten kommt.
              </p>
            </div>
          </div>

          <div className="bh-concern-layout">
            <div className="bh-concern-list" data-reveal>
              {concerns.map((concern, index) => (
                <button
                  key={concern.label}
                  type="button"
                  className={index === activeConcern ? "is-active" : ""}
                  onClick={() => setActiveConcern(index)}
                  aria-pressed={index === activeConcern}
                >
                  <span>{concern.index}</span>
                  <strong>{concern.label}</strong>
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              ))}
            </div>

            <article className="bh-concern-feature" data-reveal key={currentConcern.title}>
              <div className="bh-concern-visual">
                <Image
                  src={activeConcern % 2 === 0 ? "/images/skin-detail.jpg" : "/images/hero-treatment.jpg"}
                  alt="Natürliches Hautdetail als visuelle Einordnung"
                  fill
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
                <div className="bh-concern-orbit" aria-hidden="true" />
                <span className="bh-concern-index">{currentConcern.index}</span>
              </div>
              <div className="bh-concern-copy">
                <p className="bh-kicker">Möglicher Schwerpunkt</p>
                <h3>{currentConcern.title}</h3>
                <p>{currentConcern.summary}</p>
                <div className="bh-concern-direction">
                  <span>Passende Richtung</span>
                  <strong>{currentConcern.direction}</strong>
                </div>
                <Link href="/skin-start" className="bh-text-link">
                  Mit Skin Start beginnen <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bh-treatments" id="treatments">
        <div className="bh-shell">
          <div className="bh-treatment-heading" data-reveal>
            <p className="bh-kicker">Signature Treatments</p>
            <h2>Klare Hautziele. Keine Behandlung nach Schema.</h2>
            <p>
              Jede Richtung besitzt einen klaren Fokus. Die konkrete Ausführung entsteht trotzdem
              erst nach dem Blick auf deine Haut an diesem Tag.
            </p>
          </div>

          <div className="bh-treatment-showcase">
            <article className="bh-treatment-main" data-reveal>
              <div className="bh-treatment-photo">
                <Image
                  src="/images/skin-detail.jpg"
                  alt="Natürliche Hautstruktur"
                  fill
                  sizes="(max-width: 900px) 100vw, 56vw"
                />
                <div className="bh-treatment-fold" aria-hidden="true" />
              </div>
              <div className="bh-treatment-main-copy">
                <span>Calm · 01</span>
                <h3>Barrier Recovery Facial</h3>
                <p>For skin that needs less noise.</p>
                <dl>
                  <div><dt>Dauer</dt><dd>75 Minuten</dd></div>
                  <div><dt>Preis</dt><dd>139 €</dd></div>
                  <div><dt>Downtime</dt><dd>Keine geplant</dd></div>
                </dl>
                <Link href="/treatments/barrier-recovery-facial" className="bh-button bh-button-light">
                  Treatment ansehen <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="bh-treatment-secondary" data-reveal>
              <div className="bh-treatment-secondary-copy">
                <span>Sculpt · 02</span>
                <h3>Sculpt &amp; Release</h3>
                <p>
                  Manuelle Hautarbeit für Gesichtsspannung, Kontur und einen erholteren Ausdruck.
                </p>
                <div>
                  <Clock3 size={16} aria-hidden="true" /> 70 Minuten · 149 €
                </div>
              </div>
              <div className="bh-treatment-secondary-image">
                <Image
                  src="/images/studio-treatment.jpg"
                  alt="Kosmetikerin während einer persönlichen Behandlung"
                  fill
                  sizes="(max-width: 900px) 100vw, 36vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bh-progress">
        <div className="bh-shell bh-progress-grid">
          <div className="bh-progress-copy" data-reveal>
            <p className="bh-kicker">Visible Progress · Concept Case</p>
            <h2>Ergebnisse werden nicht versprochen. Sie werden nachvollziehbar begleitet.</h2>
            <p>
              Für eine reale Studioseite wird dieser Bereich mit dokumentierten Kundinnenverläufen
              gefüllt. Die Demo zeigt bereits, wie Ausgangslage, Behandlungsrhythmus und Veränderung
              transparent erzählt werden können.
            </p>
            <div className="bh-progress-note">
              <Sparkles size={18} aria-hidden="true" />
              <span>Demo-Modul · keine reale Kundinnendarstellung</span>
            </div>
          </div>

          <div className="bh-progress-visual" data-reveal>
            <div className="bh-progress-image">
              <Image src="/images/skin-detail.jpg" alt="Natürliches Hautdetail" fill sizes="48vw" />
            </div>
            <div className="bh-progress-timeline">
              <div><span>Woche 0</span><strong>Barriere zuerst stabilisieren</strong></div>
              <div><span>Woche 3</span><strong>Routine reduzieren und beobachten</strong></div>
              <div><span>Woche 8</span><strong>Textur und Feuchtigkeit neu bewerten</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bh-studio" id="studio">
        <div className="bh-shell bh-studio-grid">
          <div className="bh-studio-image" data-reveal>
            <Image
              src="/images/studio-treatment.jpg"
              alt="Persönliche Behandlung durch die Kosmetikerin"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <div className="bh-studio-monogram" aria-hidden="true">L/</div>
          </div>
          <div className="bh-studio-copy" data-reveal>
            <p className="bh-kicker">The Lumae Experience</p>
            <h2>Ein ruhiger Termin. Eine sichtbare Behandlerin. Ein klarer Plan.</h2>
            <p>
              Beratung, Behandlung und Empfehlung bleiben bei derselben Person. Dadurch entsteht
              kein anonymer Treatment-Ablauf, sondern eine Hautbegleitung, die sich weiterentwickeln
              darf.
            </p>
            <ul>
              <li><Check size={16} aria-hidden="true" /> Persönliche Terminbetreuung</li>
              <li><Check size={16} aria-hidden="true" /> Transparente Preise und Abläufe</li>
              <li><Check size={16} aria-hidden="true" /> Empfehlungen ohne Paket- oder Produktzwang</li>
            </ul>
            <div className="bh-studio-meta">
              <CalendarDays size={17} aria-hidden="true" /> Termine nach Vereinbarung · Leipzig
            </div>
            <Link href="/skin-start" className="bh-text-link">
              Skin Start kennenlernen <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bh-testimonials">
        <div className="bh-shell">
          <div className="bh-testimonial-heading" data-reveal>
            <p className="bh-kicker">How it should feel</p>
            <h2>Mehr Sicherheit in deiner Routine. Weniger Entscheidungen aus Unsicherheit.</h2>
          </div>
          <div className="bh-quote-grid">
            <blockquote data-reveal>
              <p>„Ich wusste nach dem Termin zum ersten Mal, was ich weglassen kann.“</p>
              <footer>Beispielstimme · spätere echte Bewertung</footer>
            </blockquote>
            <blockquote data-reveal>
              <p>„Nicht mehr Produkte, sondern endlich eine verständliche Reihenfolge.“</p>
              <footer>Beispielstimme · spätere echte Bewertung</footer>
            </blockquote>
            <blockquote data-reveal>
              <p>„Die Behandlung fühlte sich genau auf diesen Tag abgestimmt an.“</p>
              <footer>Beispielstimme · spätere echte Bewertung</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bh-final-cta">
        <div className="bh-final-fold" aria-hidden="true" />
        <div className="bh-shell bh-final-grid">
          <div data-reveal>
            <p className="bh-kicker">Der richtige erste Termin</p>
            <h2>Du musst noch nicht wissen, welches Treatment du brauchst.</h2>
          </div>
          <div data-reveal>
            <p>
              Skin Start verbindet Hautanalyse, individuell zusammengestelltes Facial und einen
              persönlichen Plan in einem Termin.
            </p>
            <div className="bh-final-facts">
              <span>90 Minuten</span><span>139 €</span><span>Leipzig</span>
            </div>
            <Link href="/buchen" className="bh-button bh-button-light">
              Ersttermin auswählen <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
