"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/#hautziele", label: "Hautziele" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/skin-start", label: "Skin Start" },
  { href: "/#studio", label: "Studio" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header beauty-site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Lumae Startseite">
          <span className="brand-word" aria-hidden="true">
            LUMA<span className="brand-slash">/</span>E
          </span>
          <span className="brand-sub">Skin Studio · Leipzig</span>
        </Link>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button-primary header-booking" href="/buchen">
            Termin buchen
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile Navigation">
            {links.map((link, index) => (
              <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <Link className="button button-primary" href="/buchen" onClick={() => setOpen(false)}>
              Ersttermin buchen
            </Link>
            <p>Persönliche Hautarbeit · Leipzig</p>
          </div>
        </div>
      )}
    </header>
  );
}
