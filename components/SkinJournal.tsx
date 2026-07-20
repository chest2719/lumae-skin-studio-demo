"use client";

import { siteImages } from "@/lib/images";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type JournalEntry = {
  title: string;
  hint: string;
  questions: string[];
  directions: string[];
  note: string;
};

const entries: JournalEntry[] = [
  {
    title: "Haut reagiert schnell",
    hint: "Routine, Wirkstoffe und aktuelle Belastbarkeit betrachten",
    questions: [
      "Welche Produkte wurden zuletzt neu begonnen?",
      "Tritt das Gefühl direkt oder erst Stunden später auf?",
      "Ist die Hautbarriere durch Peelings oder aktive Wirkstoffe belastet?",
      "Welche Reize können heute bewusst ausgelassen werden?",
    ],
    directions: ["Calm", "Skin Start"],
    note: "Heute so wenig Reiz wie möglich. Erst Stabilität schaffen, danach weiter aufbauen.",
  },
  {
    title: "Poren verstopfen wieder",
    hint: "Talg, Reinigung und mögliche Überpflege einordnen",
    questions: [
      "Wo entstehen die Verstopfungen besonders häufig?",
      "Wie wird die Haut morgens und abends gereinigt?",
      "Welche reichhaltigen oder okklusiven Produkte werden verwendet?",
      "Braucht die Haut Klärung oder zunächst mehr Ruhe?",
    ],
    directions: ["Clear", "Skin Start"],
    note: "Klärung ohne Austrocknung. Die Haut soll sich nach dem Termin sauber, nicht gespannt anfühlen.",
  },
  {
    title: "Haut spannt trotz Pflege",
    hint: "Feuchtigkeit, Lipide und Barrierestatus unterscheiden",
    questions: [
      "Feuchtigkeit oder Lipidmangel?",
      "Ist die Barriere belastet oder geschädigt?",
      "Enthält die Routine zu viele aktive Wirkstoffe?",
      "Welche Rolle spielen Lebensstil, Umwelt, Stress und Schlaf?",
    ],
    directions: ["Calm", "Hydrate"],
    note: "Nicht automatisch reichhaltiger behandeln. Zuerst unterscheiden, was der Haut tatsächlich fehlt.",
  },
  {
    title: "Teint wirkt unruhig",
    hint: "Textur, Pigmentierung und Entzündungszeichen getrennt ansehen",
    questions: [
      "Wirkt die Oberfläche rau oder ist die Farbe ungleichmäßig?",
      "Sind einzelne Stellen empfindlicher als andere?",
      "Wie reagiert die Haut auf Sonne und aktive Wirkstoffe?",
      "Ist ein sanfter oder intensiverer Einstieg sinnvoll?",
    ],
    directions: ["Renew", "Hydrate"],
    note: "Ein ruhigerer Teint beginnt mit einer klaren Priorität — nicht mit mehreren intensiven Maßnahmen gleichzeitig.",
  },
  {
    title: "Haut verändert sich",
    hint: "Lebensphase, Routine und bisherige Ziele neu bewerten",
    questions: [
      "Was hat sich in den letzten Monaten konkret verändert?",
      "Passen frühere Produkte noch zum heutigen Hautzustand?",
      "Welche Veränderungen stören — und welche sind völlig normal?",
      "Welches Ziel ist für die nächsten Wochen realistisch?",
    ],
    directions: ["Skin Start", "Sculpt"],
    note: "Die Behandlung soll sich mit der Haut entwickeln. Frühere Routinen müssen nicht für immer richtig bleiben.",
  },
];

export function SkinJournal() {
  const [active, setActive] = useState(2);
  const entry = entries[active];

  return (
    <section className="journal-section" id="hautjournal">
      <div className="journal-list-column">
        <div className="journal-intro">
          <div>
            <p className="eyebrow">Dein Hautjournal</p>
            <h2>Was wir uns gemeinsam ansehen würden.</h2>
          </div>
          <p>Wähle, was dich aktuell am meisten beschäftigt. Wir ordnen ein, ohne eine digitale Diagnose vorzutäuschen.</p>
        </div>

        <div className="journal-list">
          {entries.map((item, index) => {
            const isActive = active === index;
            return (
              <div className={`journal-item ${isActive ? "is-active" : ""}`} key={item.title}>
                <button
                  type="button"
                  className="journal-trigger"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                >
                  <span className="journal-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="journal-title-wrap">
                    <span className="journal-title">{item.title}</span>
                    <span className="journal-hint">{item.hint}</span>
                  </span>
                  {isActive ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
                </button>

                {isActive && (
                  <div className="journal-inline-panel">
                    <div>
                      <h3>Was wir gemeinsam ansehen:</h3>
                      <ul>
                        {item.questions.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>Möglicher Einstieg</h3>
                      <p>Skin Start · 90 Minuten</p>
                      <h3>Passende Richtungen</h3>
                      <div className="tags">
                        {item.directions.map((direction) => (
                          <span key={direction}>{direction}</span>
                        ))}
                      </div>
                      <Link href="/buchen" className="text-link">
                        Ersttermin wählen <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <aside className="journal-editorial" aria-live="polite">
        <div className="journal-editorial-head">
          <span>Journal Entry</span>
          <span>{String(active + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}</span>
        </div>
        <Image
          src={siteImages.skinDetail}
          alt="Natürliches Hautdetail mit sichtbarer Textur"
          width={900}
          height={600}
          sizes="(max-width: 900px) 100vw, 36vw"
        />
        <div className="journal-editorial-copy">
          <p className="eyebrow">Verstehen. Planen. Begleiten.</p>
          <h3>{entry.title}</h3>
          <p>{entry.note}</p>
          <Link href="/skin-start" className="button button-outline-light">
            Unsere Arbeitsweise
          </Link>
        </div>
      </aside>
    </section>
  );
}
