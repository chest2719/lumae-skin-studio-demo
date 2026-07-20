import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Skin Start – Hautanalyse & erstes Facial",
  description: "Der Ersttermin bei Lumae: Hautanalyse, individuell abgestimmtes Facial und persönlicher Pflegeplan in 90 Minuten.",
};

export default function SkinStartPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero shell page-hero-split">
          <div>
            <p className="eyebrow">Für Neukundinnen</p>
            <h1>Dein erster Termin beginnt nicht mit einer Treatment-Auswahl.</h1>
            <p>Wir betrachten zuerst deinen aktuellen Hautzustand und deine Routine. Danach stellen wir dein erstes Facial bewusst und individuell zusammen.</p>
            <div className="page-facts">
              <span><Clock3 aria-hidden="true" /> 90 Minuten</span>
              <span>139 €</span>
              <span>Analyse + Facial + Plan</span>
            </div>
            <Link className="button button-primary" href="/buchen">Skin Start buchen</Link>
          </div>
          <div className="page-hero-image">
            <Image src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=85" alt="Hautanalyse während des Skin-Start-Termins" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </section>

        <section className="content-section shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Der passende Einstieg</p><h2>Skin Start ist sinnvoll, wenn …</h2></div>
          </div>
          <div className="statement-grid">
            <p>du nicht weißt, welches Treatment zu deiner Haut passt.</p>
            <p>deine Haut inzwischen auf viele Produkte reagiert.</p>
            <p>du schon vieles ausprobiert hast, aber keinen klaren Plan besitzt.</p>
            <p>mehrere Hautthemen gleichzeitig auftreten.</p>
          </div>
        </section>

        <section className="process-section">
          <div className="shell">
            <p className="eyebrow">So läuft dein Termin ab</p>
            <div className="process-list">
              <article><span>01</span><div><h2>Ankommen und einordnen</h2><p>Wir sprechen über deine Hautgeschichte, deine aktuelle Routine, frühere Erfahrungen und das Ziel, das dir im Moment am wichtigsten ist.</p></div></article>
              <article><span>02</span><div><h2>Haut beobachten</h2><p>Wir betrachten sichtbare und fühlbare Hautmerkmale – ohne daraus eine medizinische Diagnose abzuleiten.</p></div></article>
              <article><span>03</span><div><h2>Facial zusammenstellen</h2><p>Erst jetzt entscheiden wir, welche Reinigung, Exfoliation, Wirkstoffe und beruhigenden Schritte heute sinnvoll sind.</p></div></article>
              <article><span>04</span><div><h2>Nächste Schritte festhalten</h2><p>Du erhältst eine nachvollziehbare Empfehlung für Pflege und mögliche Folgebehandlungen – ohne Paket- oder Produktzwang.</p></div></article>
            </div>
          </div>
        </section>

        <section className="value-section shell">
          <div>
            <p className="eyebrow">Enthalten</p>
            <h2>Ein vollständiger Ersttermin statt eines Verkaufsgesprächs.</h2>
          </div>
          <ul>
            {["Persönliches Gespräch und Hautanalyse","Check deiner aktuellen Routine","Individuell abgestimmtes erstes Facial","Priorisierung deines wichtigsten Hautziels","Pflege- und Treatment-Empfehlung","Keine Verpflichtung zu Paket oder Produktkauf"].map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}
          </ul>
        </section>

        <section className="editorial-quote">
          <div className="shell">
            <p className="eyebrow">Lumae Prinzip</p>
            <blockquote>Eine Empfehlung ist keine Verpflichtung.</blockquote>
            <p>Der Plan soll dir Orientierung geben – nicht noch mehr Druck erzeugen.</p>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner">
            <div><p className="eyebrow">Skin Start</p><h2>90 Minuten für Analyse, Behandlung und einen klaren nächsten Schritt.</h2></div>
            <div><p>139 € · ausschließlich für Neukundinnen · Leipzig</p><Link className="button button-light" href="/buchen">Termin auswählen <ArrowRight size={16} aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
