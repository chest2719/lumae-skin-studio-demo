import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="kontakt">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">LUMA/E Skin Studio</div>
          <p>Premium-Konzept für persönliche Hautanalyse und individuell komponierte Facials.</p>
          <p>Leipzig, Deutschland</p>
        </div>
        <div>
          <h2>Entdecken</h2>
          <Link href="/#hautziele">Hautziele</Link>
          <Link href="/#treatments">Treatments</Link>
          <Link href="/skin-start">Skin Start</Link>
        </div>
        <div>
          <h2>Kontakt</h2>
          <a href="tel:+493410000000">+49 341 000 00 00</a>
          <a href="mailto:hallo@lumae-demo.de">hallo@lumae-demo.de</a>
          <span>Termine nach Vereinbarung</span>
        </div>
        <div>
          <h2>Hinweis</h2>
          <span>Fiktives Studio-Konzept</span>
          <span>Keine medizinische Beratung</span>
          <span>Designed by Paularyo</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Lumae Skin Studio — Konzeptprojekt</span>
        <span>Skin, considered.</span>
      </div>
    </footer>
  );
}
