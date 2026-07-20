import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="kontakt">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">LUMAE Skin Studio</div>
          <p>Konzeptstudio für persönliche Hautanalyse und individuell abgestimmte Facials.</p>
          <p>Leipzig, Deutschland</p>
        </div>
        <div>
          <h2>Entdecken</h2>
          <Link href="/#hautjournal">Hautjournal</Link>
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
          <h2>Rechtliches</h2>
          <Link href="#">Impressum</Link>
          <Link href="#">Datenschutz</Link>
          <Link href="#">Stornierung</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Lumae Skin Studio — Konzeptprojekt</span>
        <span>Skin, understood.</span>
      </div>
    </footer>
  );
}
