import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Calendrier de l'avent 2024 par Marine et Thibaut",
  description: "Ce calendrier de l'avent spécial film vous propose de redécouvrir un film chaque jour en attendant Noël. Découvrez notre sélection de films culte à regarder sous un plaid et avec un tasse de chocolat chaud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
