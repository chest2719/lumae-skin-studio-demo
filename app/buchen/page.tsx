import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BookingFlow } from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Termin buchen",
  description: "Funktionaler Demo-Buchungsflow für Lumae Skin Studio.",
};

export default function BookingPage() {
  return (
    <main className="booking-page">
      <header className="booking-header shell">
        <Link href="/" className="brand"><span className="brand-word">LUMAE</span><span className="brand-sub">Skin Studio · Leipzig</span></Link>
        <Link href="/" className="text-link"><ArrowLeft size={16} aria-hidden="true" /> Zur Website</Link>
      </header>
      <div className="shell booking-page-intro">
        <p className="eyebrow">Termin buchen</p>
        <h1>Wähle den Einstieg, der zu dir passt.</h1>
      </div>
      <div className="shell"><BookingFlow /></div>
    </main>
  );
}
