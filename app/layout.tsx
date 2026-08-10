import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConsentBanner } from "@/components/ConsentBanner";

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    { path: "../public/fonts/manrope-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/manrope-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/manrope-700.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/manrope-800.ttf", weight: "800", style: "normal" },
  ],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://airdrone.com.br";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-GQ43PZ8JTR";
const openGraphTitle = "Reparo de drones e assistência técnica DJI | AirDrone";
const openGraphDescription =
  "Orçamento 100% gratuito, frete de ida e volta incluso e equipe especializada para colocar seu drone de volta ao voo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Reparo de drones e assistência técnica DJI | AirDrone",
  description: openGraphDescription,
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AirDrone Assistência Técnica",
    title: openGraphTitle,
    description: openGraphDescription,
    url: "/",
    images: [{ url: "/social/og-airdrone-home.png", width: 1200, height: 630, alt: "AirDrone — reparo de drones e assistência técnica DJI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: openGraphTitle,
    description: openGraphDescription,
    images: ["/social/og-airdrone-home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied'});gtag('config','${gaMeasurementId}');` }} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-TZC7M96L" />
      </head>
      <body className={manrope.variable}>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
