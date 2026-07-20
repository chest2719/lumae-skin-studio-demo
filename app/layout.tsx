import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lumae Skin Studio | Hautanalyse & individuelle Facials",
    template: "%s | Lumae Skin Studio",
  },
  description: "Konzeptdemo für ein persönliches Skin Studio mit Hautjournal, Skin Start und individuell abgestimmten Facials.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
