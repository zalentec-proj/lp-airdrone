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

export const metadata: Metadata = {
  metadataBase: new URL("https://airdrone.com.br"),
  title: "Assistência Técnica DJI com Frete Grátis | AirDrone",
  description: "Reparo especializado de drones DJI com orçamento gratuito, frete de ida e volta incluso e 90 dias de garantia. Atendimento em todo o Brasil.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: { type: "website", locale: "pt_BR", siteName: "AirDrone Assistência Técnica", title: "Seu drone DJI voltou a voar com segurança | AirDrone", description: "Assistência técnica especializada, orçamento gratuito, frete de ida e volta incluso e 90 dias de garantia.", url: "/", images: [{ url: "/social/og-airdrone.png", width: 1731, height: 909, alt: "AirDrone — assistência técnica DJI" }] },
  twitter: { card: "summary_large_image", title: "Seu drone DJI voltou a voar com segurança | AirDrone", description: "Reparo especializado, orçamento gratuito e atendimento em todo o Brasil.", images: ["/social/og-airdrone.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied'});` }} />
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
