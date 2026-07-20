import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Barrier Recovery Facial",
  description: "Beruhigendes Facial für sensible, gerötete oder überpflegte Haut – 75 Minuten, 139 €.",
};

export default function BarrierRecoveryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="treatment-hero shell">
          <div className="treatment-hero-copy">
            <p className="eyebrow">Calm</p>
            <h1>Barrier Recovery Facial</h1>
            <p>Ein bewusst reduziertes Facial für sensible, gerötete oder überpflegte Haut.</p>
            <div className="page-facts treatment-hero-facts">
              <span><Clock3 aria-hidden="true" /> 75 Minuten</span>
              <span>139 €</span>
              <span>Keine geplante Downtime</span>
            </div>
            <Link className="button button-primary" href="/buchen">Treatment buchen</Link>
            <Link className="text-link" href="/skin-start">Unsicher? Mit Skin Start beginnen <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="treatment-hero-image">
            <Image src={siteImages.skinDetail} alt="Natürliche Hautstruktur" fill priority sizes="(max-width: 900px) 100vw, 56vw" />
          </div>
        </section>

        <section className="facts-band">
          <div className="shell">
            <div><span>Hautziel</span><strong>Beruhigen & stabilisieren</strong></div>
            <div><span>Intensität</span><strong>Sanft</strong></div>
            <div><span>Geeignet</span><strong>Sensible, gereizte Haut</strong></div>
            <div><span>Rhythmus</span><strong>Individuell</strong></div>
          </div>
        </section>

        <section className="content-section shell two-column-content">
          <div><p className="eyebrow">Kann passen, wenn …</p><h2>Deine Haut gerade weniger Reize und mehr Stabilität benötigt.</h2></div>
          <ul className="check-list">
            {[
              "die Haut nach Produkten schnell brennt oder spannt",
              "Rötungen und Trockenheit gleichzeitig auftreten",
              "die Routine viele aktive Wirkstoffe enthält",
              "du eine sanfte Behandlung ohne intensive Exfoliation suchst",
            ].map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}
          </ul>
        </section>

        <section className="process-section treatment-process">
          <div className="shell">
            <p className="eyebrow">Möglicher Ablauf</p>
            <div className="process-list compact-process">
              <article><span>01</span><div><h2>Kurze Neueinschätzung</h2><p>Wir prüfen, wie belastbar die Haut an diesem Tag wirkt und welche Schritte ausgelassen werden sollten.</p></div></article>
              <article><span>02</span><div><h2>Sanfte Reinigung</h2><p>Reinigung und Vorbereitung erfolgen ohne unnötige Reibung oder aggressive Wirkstoffkombinationen.</p></div></article>
              <article><span>03</span><div><h2>Barriereschonende Behandlung</h2><p>Beruhigende Wirkstoffe, Maske und manuelle Behandlung werden passend zur aktuellen Reaktion ausgewählt.</p></div></article>
              <article><span>04</span><div><h2>Nachpflege</h2><p>Du erhältst konkrete Hinweise für die nächsten Tage und erfährst, welche aktiven Schritte vorerst pausieren sollten.</p></div></article>
            </div>
          </div>
        </section>

        <section className="individual-note shell">
          <div><p className="eyebrow">Wichtig</p><h2>Nicht jeder mögliche Behandlungsschritt wird bei jedem Termin eingesetzt.</h2></div>
          <p>Die genaue Auswahl richtet sich nach dem aktuellen Hautzustand. Dieses Facial ist kosmetische Pflege und ersetzt keine dermatologische Diagnose oder Behandlung.</p>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner">
            <div><p className="eyebrow">Barrier Recovery Facial</p><h2>Beruhigende Hautarbeit mit einer klaren, nachvollziehbaren Auswahl.</h2></div>
            <div><p>75 Minuten · 139 € · Leipzig</p><Link className="button button-light" href="/buchen">Treatment buchen</Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
