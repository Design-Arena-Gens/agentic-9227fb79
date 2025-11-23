import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suivi Solaire Automatique - Mémoire d'Ingénieur",
  description: "Étude complète sur le système de pilotage de panneaux solaires avec suivi bi-axial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
