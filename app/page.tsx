import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkinJournal } from "@/components/SkinJournal";
import { siteImages } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Skin, understood.</p>
            <h1>
              Bevor wir behandeln, <em>verstehen</em> wir deine Haut.
            </h1>
            <p className="hero-intro">
              Persönliche Hautanalyse. Gezielte Treatments. Empfehlungen, die sich mit deiner Haut entwickeln.
            </p>

            <div className="hero-facts" aria-label="Skin Start Informationen">
              <div><span>Skin Start</span><strong>Für Neukundinnen</strong></div>
              <div><span>Dauer</span><strong>90 Minuten</strong></div>
              <div><span>Preis</span><strong>139 €</strong></div>
            </div>

            <div className="hero-actions">
              <Link className="button button-primary" href="/buchen">Ersttermin buchen</Link>
              <Link className="text-link" href="#hautjournal">So arbeiten wir <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src={siteImages.heroTreatment}
              alt="Kosmetikerin während einer persönlichen Gesichtsbehandlung"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <article className="skin-note-card">
              <div className="skin-note-head"><span>Skin Note</span><time dateTime="2026-07-15">15.07.2026</time></div>
              <ul>
                <li>Wangen und Kinn wirken gereizt</li>
                <li>Spannungsgefühl berücksichtigen</li>
                <li>heute beruhigend behandeln</li>
                <li>intensive Exfoliation auslassen</li>
              </ul>
              <p>Heute Fokus auf Ruhe.</p>
              <span>Nada K.</span>
            </article>
          </div>
        </section>

        <SkinJournal />

        <section className="method-section shell" id="journal">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Die Lumae Method</p>
              <h2>Ein Plan, der sich mit deiner Haut verändern darf.</h2>
            </div>
            <p>Keine starre Treatment-Choreografie. Jeder Termin beginnt mit einer kurzen Neueinschätzung und endet mit einem klaren nächsten Schritt.</p>
          </div>

          <div className="method-steps" id="methode">
            <article><span>01</span><h3>Understand</h3><p>Hautzustand, Routine und das aktuell wichtigste Ziel einordnen.</p></article>
            <article><span>02</span><h3>Treat</h3><p>Behandlungsschritte bewusst auswählen – nicht alles einsetzen, nur weil es möglich ist.</p></article>
            <article><span>03</span><h3>Evolve</h3><p>Verlauf beobachten und Pflege sowie Treatments nachvollziehbar anpassen.</p></article>
          </div>
        </section>

        <section className="treatments-section" id="treatments">
          <div className="shell">
            <div className="section-heading treatments-heading">
              <div>
                <p className="eyebrow">Ausgewählte Treatments</p>
                <h2>Klare Richtungen. Individuelle Ausführung.</h2>
              </div>
              <Link href="/treatments/barrier-recovery-facial" className="text-link light-link">Treatment ansehen <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>

            <div className="treatment-feature">
              <div className="treatment-image">
                <Image src={siteImages.skinDetail} alt="Natürliches Hautdetail" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div className="treatment-copy">
                <p className="eyebrow">Calm</p>
                <h3>Barrier Recovery Facial</h3>
                <p>Ein bewusst reduziertes Facial für Haut, die schnell reagiert, spannt oder durch zu viele aktive Wirkstoffe belastet wirkt.</p>
                <div className="treatment-facts">
                  <span><Clock3 aria-hidden="true" /> 75 Minuten</span>
                  <span>139 €</span>
                  <span>Keine geplante Downtime</span>
                </div>
                <Link className="button button-light" href="/treatments/barrier-recovery-facial">Details & Ablauf</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="studio-section shell" id="studio">
          <div className="studio-image">
            <Image src={siteImages.studioTreatment} alt="Persönliche Behandlung im Lumae Skin Studio" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="studio-copy">
            <p className="eyebrow">Persönliche Hautarbeit</p>
            <h2>Du sollst nach deinem Termin mit mehr Klarheit nach Hause gehen.</h2>
            <p>Hinter Lumae steht eine sichtbare Behandlerin – keine anonyme Treatment-Marke. Beratung, Behandlung und Empfehlung bleiben bei einer Person und werden im Verlauf gemeinsam weiterentwickelt.</p>
            <div className="studio-note">
              <CalendarDays aria-hidden="true" />
              <span>Termine ausschließlich nach Vereinbarung · Leipzig</span>
            </div>
            <Link href="/skin-start" className="text-link">Skin Start kennenlernen <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner">
            <div>
              <p className="eyebrow">Der erste Schritt</p>
              <h2>Du musst noch nicht wissen, welches Treatment du brauchst.</h2>
            </div>
            <div>
              <p>Skin Start verbindet Hautanalyse, individuelles Facial und einen persönlichen Plan in einem Termin.</p>
              <Link href="/buchen" className="button button-light">Ersttermin buchen</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
