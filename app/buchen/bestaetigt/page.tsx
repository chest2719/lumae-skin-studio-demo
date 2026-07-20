"use client";

import Link from "next/link";
import { CalendarPlus, Check, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

type StoredBooking = {
  service?: { title?: string; duration?: string; price?: string };
  date?: string;
  time?: string;
  details?: { firstName?: string };
};

export default function BookingConfirmedPage() {
  const [booking, setBooking] = useState<StoredBooking | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("lumae-booking");
    if (stored) setBooking(JSON.parse(stored) as StoredBooking);
  }, []);

  return (
    <main className="confirmation-page">
      <section className="confirmation-card">
        <div className="confirmation-icon"><Check aria-hidden="true" /></div>
        <p className="eyebrow">Demo-Buchung bestätigt</p>
        <h1>{booking?.details?.firstName ? `${booking.details.firstName}, dein` : "Dein"} Termin ist vorgemerkt.</h1>
        <p>Es wurde kein echter Termin reserviert. Der Flow zeigt den vollständigen Bestätigungszustand der Demo.</p>
        <dl>
          <div><dt>Leistung</dt><dd>{booking?.service?.title ?? "Skin Start"}</dd></div>
          <div><dt>Termin</dt><dd>{booking?.date ?? "Di, 28. Juli"}, {booking?.time ?? "11:30"} Uhr</dd></div>
          <div><dt>Dauer</dt><dd>{booking?.service?.duration ?? "90 Minuten"}</dd></div>
          <div><dt>Preis</dt><dd>{booking?.service?.price ?? "139 €"}</dd></div>
        </dl>
        <div className="confirmation-actions">
          <button className="button button-primary" type="button"><CalendarPlus size={17} aria-hidden="true" /> Im Kalender speichern</button>
          <button className="button button-secondary" type="button"><MapPin size={17} aria-hidden="true" /> Route öffnen</button>
        </div>
        <Link href="/" className="text-link">Zurück zur Startseite →</Link>
      </section>
    </main>
  );
}
