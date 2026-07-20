import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer final-footer" id="kontakt">
      <div className="fm-shell final-footer-grid">
        <div>
          <div className="final-footer-logo">LUMAE</div>
          <p>Persönliche Hautanalyse und individuell abgestimmte Facials in Leipzig.</p>
        </div>
        <div>
          <h2>Entdecken</h2>
          <Link href="/#hautziele">Hautbedürfnisse</Link>
          <Link href="/#treatments">Treatments</Link>
          <Link href="/skin-start">Skin Start</Link>
        </div>
        <div>
          <h2>Kontakt</h2>
          <a href="mailto:hallo@lumae-demo.de">hallo@lumae-demo.de</a>
          <span>Leipzig · Termine nach Vereinbarung</span>
        </div>
        <div>
          <h2>Hinweis</h2>
          <span>Fiktives Studio-Konzept</span>
          <span>Designed by Paularyo</span>
        </div>
      </div>
      <div className="fm-shell final-footer-bottom">
        <span>© 2026 Lumae Skin Studio</span>
        <span>Concept website by Paularyo</span>
      </div>
    </footer>
  );
}
