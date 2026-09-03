import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charcut'SN — Volaille fraîche du Sénégal",
  description: "Marketplace de volaille fraîche et produits avicoles du Sénégal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
