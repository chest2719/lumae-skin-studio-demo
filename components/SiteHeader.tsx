"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/#treatments", label: "Treatments" },
  { href: "/skin-start", label: "Skin Start" },
  { href: "/#hautziele", label: "Hautbedürfnisse" },
  { href: "/#studio", label: "Über uns" },
  { href: "/#journal", label: "Journal" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header final-site-header">
      <div className="fm-shell final-header-inner">
        <Link href="/" className="final-brand" aria-label="Lumae Startseite">
          <span>LUMAE</span>
          <small>Skin Studio</small>
        </Link>
        <nav className="final-desktop-nav" aria-label="Hauptnavigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="final-header-button" href="/buchen">Skin Start buchen</Link>
        <button
          className="final-menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="final-mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div className="final-mobile-menu" id="final-mobile-menu">
          <nav>
            {links.map((link) => (
              <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
          </nav>
          <Link href="/buchen" onClick={() => setOpen(false)}>Skin Start buchen</Link>
        </div>
      )}
    </header>
  );
}
