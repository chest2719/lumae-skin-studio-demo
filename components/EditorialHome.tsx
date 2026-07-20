"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, Clock3 } from "lucide-react";
import gsap from "gsap";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { siteImages } from "@/lib/images";

type Entry = {
  title: string;
  signal: string;
  observation: string;
  checks: string[];
  directions: string[];
};

const journalEntries: Entry[] = [
  {
    title: "Haut reagiert schnell",
    signal: "Rötung · Brennen · wechselnde Verträglichkeit",
    observation:
      "Wir würden zuerst klären, welche Reize gerade zusammenkommen – neue Produkte, aktive Wirkstoffe, äußere Belastung oder eine Routine, die der Haut keine Pause lässt.",
    checks: [
      "Welche Produkte wurden zuletzt ergänzt?",
      "Wann beginnt die Reaktion – sofort oder zeitversetzt?",
      "Welche Schritte können heute bewusst entfallen?",
    ],
    directions: ["Calm", "Skin Start"],
  },
  {
    title: "Poren verstopfen wieder",
    signal: "Talg · Reinigung · wiederkehrende Unreinheiten",
    observation:
      "Nicht jede verstopfte Pore braucht mehr Säure. Wir sehen uns an, wie gereinigt wird, welche Texturen verwendet werden und ob die Haut gleichzeitig überpflegt oder ausgetrocknet ist.",
    checks: [
      "Wo treten Verstopfungen immer wieder auf?",
      "Wie fühlt sich die Haut direkt nach der Reinigung an?",
      "Welche reichhaltigen Produkte bleiben lange auf der Haut?",
    ],
    directions: ["Clear", "Skin Start"],
  },
  {
    title: "Haut spannt trotz Pflege",
    signal: "Feuchtigkeit · Lipide · belastete Barriere",
    observation:
      "Wir würden nicht automatisch reichhaltiger pflegen. Zuerst unterscheiden wir, ob Feuchtigkeit fehlt, Lipide fehlen oder die Haut durch zu viele aktive Schritte kaum noch zur Ruhe kommt.",
    checks: [
      "Fehlt eher Wasser oder schützende Lipide?",
      "Spannung direkt nach Reinigung oder erst später?",
      "Welche aktiven Wirkstoffe laufen parallel?",
    ],
    directions: ["Calm", "Hydrate"],
  },
  {
    title: "Teint wirkt unruhig",
    signal: "Textur · Farbe · Pigmentierung",
    observation:
      "Ein unruhiger Teint kann viele Ebenen haben. Wir trennen deshalb raue Oberfläche, Pigmentierung, Rötung und einzelne Entzündungszeichen, bevor wir einen Schwerpunkt setzen.",
    checks: [
      "Ist die Oberfläche rau oder vor allem die Farbe ungleichmäßig?",
      "Wie reagiert die Haut auf Sonne und Peelings?",
      "Ist ein sanfter Aufbau sinnvoller als ein intensiver Start?",
    ],
    directions: ["Renew", "Hydrate"],
  },
  {
    title: "Haut verändert sich",
    signal: "Lebensphase · Gewohnheiten · neue Prioritäten",
    observation:
      "Eine Routine muss nicht für immer richtig bleiben. Wir schauen, was sich verändert hat und welches Ziel für die nächsten Wochen tatsächlich sinnvoll ist – nicht welches Treatment gerade im Trend liegt.",
    checks: [
      "Was hat sich in den letzten Monaten konkret verändert?",
      "Welche bisherigen Produkte fühlen sich nicht mehr passend an?",
      "Welches Ziel ist kurzfristig realistisch und wichtig?",
    ],
    directions: ["Skin Start", "Sculpt"],
  },
];

export function EditorialHome() {
  const root = useRef<HTMLDivElement>(null);
  const detail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(2);
  const entry = useMemo(() => journalEntries[active], [active]);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !root.current) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-hero-meta]", { opacity: 0, y: 12, duration: 0.55 })
        .from("[data-hero-line]", { yPercent: 115, duration: 0.9, stagger: 0.09 }, "-=0.2")
        .from("[data-hero-response]", { opacity: 0, y: 28, duration: 0.75 }, "-=0.55")
        .from("[data-hero-image]", { clipPath: "inset(0 100% 0 0)", duration: 1.05 }, "-=0.62")
        .from("[data-hero-docket]", { opacity: 0, y: 22, duration: 0.65 }, "-=0.48");

      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const observer = new IntersectionObserver(
        (items) => {
          items.forEach((item) => {
            if (!item.isIntersecting) return;
            gsap.to(item.target, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
            observer.unobserve(item.target);
          });
        },
        { threshold: 0.16 },
      );

      revealItems.forEach((item) => {
        gsap.set(item, { opacity: 0, y: 34 });
        observer.observe(item);
      });

      return () => observer.disconnect();
    }, root);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    if (!detail.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      detail.current.children,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.48, stagger: 0.055, ease: "power3.out" },
    );
  }, [active]);

  return (
    <div ref={root}>
      <section className="editorial-hero shell">
        <div className="editorial-hero-meta" data-hero-meta>
          <span>Journal 01</span>
          <time dateTime="2026-07-20">20.07.2026</time>
          <span>Leipzig</span>
        </div>

        <div className="editorial-question">
          <p className="document-label">Beobachtung beim ersten Termin</p>
          <h1 aria-label="Meine Haut spannt, obwohl ich reichhaltig pflege.">
            <span className="hero-line-mask"><span data-hero-line>Meine Haut spannt,</span></span>
            <span className="hero-line-mask"><span data-hero-line>obwohl ich reichhaltig</span></span>
            <span className="hero-line-mask"><span data-hero-line>pflege.</span></span>
          </h1>
          <a className="hero-scroll-link" href="#hautjournal">
            Im Journal einordnen <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="editorial-response" data-hero-response>
          <div className="response-index">Notiz der Behandlerin · 01</div>
          <p>
            Wir würden nicht sofort mehr Pflege hinzufügen. Zuerst sehen wir uns an, ob deiner Haut
            Feuchtigkeit fehlt, ob ihre Barriere belastet ist oder ob deine Routine zu viele aktive
            Wirkstoffe kombiniert.
          </p>
          <div className="response-rule" />
          <span>Beobachten, bevor wir entscheiden.</span>
        </div>

        <figure className="editorial-evidence" data-hero-image>
          <Image
            src={siteImages.heroTreatment}
            alt="Ruhiger Behandlungsmoment im Kosmetikstudio"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 44vw"
          />
          <figcaption>Behandlung beginnt erst nach Gespräch und Beobachtung.</figcaption>
        </figure>

        <div className="service-docket" data-hero-docket>
          <div>
            <span>Empfohlener Einstieg</span>
            <strong>Skin Start</strong>
          </div>
          <dl>
            <div><dt>Dauer</dt><dd>90 Minuten</dd></div>
            <div><dt>Preis</dt><dd>139 €</dd></div>
            <div><dt>Enthalten</dt><dd>Analyse · Facial · Plan</dd></div>
          </dl>
          <Link className="docket-link" href="/buchen">
            Ersttermin wählen <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="journal-workspace" id="hautjournal">
        <div className="journal-workspace-header shell" data-reveal>
          <div>
            <p className="document-label">Dein Hautjournal</p>
            <h2>Wähle keine Behandlung. Beginne mit dem, was du wahrnimmst.</h2>
          </div>
          <p>
            Die Einträge geben Orientierung und zeigen, was wir uns gemeinsam ansehen würden. Sie
            ersetzen keine medizinische Diagnose.
          </p>
        </div>

        <div className="journal-workspace-grid shell">
          <nav className="journal-index" aria-label="Hautjournal Einträge" data-reveal>
            {journalEntries.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                aria-pressed={index === active}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.signal}</small>
                </span>
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            ))}
          </nav>

          <article className="journal-sheet" data-reveal>
            <div className="journal-sheet-topline">
              <span>Eintrag {String(active + 1).padStart(2, "0")}</span>
              <span>Stand heute</span>
            </div>
            <div className="journal-sheet-content" ref={detail} key={entry.title}>
              <p className="document-label">Was wir einordnen würden</p>
              <h3>{entry.title}</h3>
              <p className="journal-observation">{entry.observation}</p>

              <div className="journal-checks">
                <span>Im Termin prüfen</span>
                <ul>
                  {entry.checks.map((check) => (
                    <li key={check}><Check size={15} aria-hidden="true" /> {check}</li>
                  ))}
                </ul>
              </div>

              <div className="journal-sheet-footer">
                <div>
                  <span>Mögliche Richtungen</span>
                  <div className="journal-tags">
                    {entry.directions.map((direction) => <span key={direction}>{direction}</span>)}
                  </div>
                </div>
                <Link href="/buchen">Skin Start wählen <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="appointment-ledger shell" data-reveal>
        <div className="appointment-ledger-title">
          <p className="document-label">Ein Termin, kein Treatment-Menü</p>
          <h2>90 Minuten, in denen Entscheidungen erst nach dem Hinsehen fallen.</h2>
        </div>
        <ol>
          <li><time>00:00</time><div><strong>Ankommen</strong><span>Hautgeschichte, Routine und heutiges Ziel.</span></div></li>
          <li><time>00:15</time><div><strong>Beobachten</strong><span>Was wirkt ruhig, belastet, trocken oder reaktiv?</span></div></li>
          <li><time>00:30</time><div><strong>Behandeln</strong><span>Nur die Schritte, die heute tatsächlich sinnvoll sind.</span></div></li>
          <li><time>01:20</time><div><strong>Einordnen</strong><span>Pflegeplan und ein klarer nächster Schritt.</span></div></li>
        </ol>
      </section>

      <section className="single-treatment-section" data-reveal>
        <div className="shell single-treatment-grid">
          <div>
            <p className="document-label">Beispiel einer Treatment-Richtung</p>
            <h2>Barrier Recovery Facial</h2>
          </div>
          <div className="single-treatment-copy">
            <p>
              Für Haut, die schnell reagiert, spannt oder durch zu viele aktive Wirkstoffe belastet
              wirkt. Die konkrete Ausführung entsteht erst im Termin.
            </p>
            <div className="single-treatment-facts">
              <span><Clock3 size={16} aria-hidden="true" /> 75 Minuten</span>
              <span>139 €</span>
              <span>Keine geplante Downtime</span>
            </div>
            <Link href="/treatments/barrier-recovery-facial">
              Ablauf ansehen <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-final shell" data-reveal>
        <p className="document-label">Der erste Eintrag</p>
        <h2>Du musst noch nicht wissen, welches Treatment du brauchst.</h2>
        <div>
          <p>Skin Start verbindet Hautanalyse, individuelles Facial und einen persönlichen Plan in einem Termin.</p>
          <Link className="button button-primary" href="/buchen">Ersttermin buchen</Link>
        </div>
      </section>
    </div>
  );
}
