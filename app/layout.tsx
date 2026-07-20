import type { Metadata } from "next";
import "./globals.css";
import "./beauty-house.css";

export const metadata: Metadata = {
  title: {
    default: "Lumae Skin Studio | Hautanalyse & individuelle Facials",
    template: "%s | Lumae Skin Studio",
  },
  description: "Premium-Konzeptdemo für ein persönliches Skin Studio mit Hautanalyse, Signature Facials und direkter Terminbuchung.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
