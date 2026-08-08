"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "./WhatsAppLink";

const links = [
  ["Serviços", "#servicos"],
  ["Como funciona", "#como-funciona"],
  ["Sobre", "#sobre"],
  ["FAQ", "#faq"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="AirDrone — início"><img src="/assets/brand/logo-airdrone-white.svg" alt="AirDrone" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([name, href]) => <a key={href} href={href} onClick={() => trackEvent("click_nav", { nav_target: href, nav_location: "header" })}>{name}</a>)}
      </nav>
      <WhatsAppLink className="button button-small header-cta" location="header" label="Falar no WhatsApp">Falar no WhatsApp</WhatsAppLink>
      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}<span className="sr-only">Abrir menu</span></button>
      <div className={`mobile-menu ${open ? "open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        {links.map(([name, href]) => <a key={href} href={href} onClick={close}>{name}</a>)}
        <WhatsAppLink className="button" location="header" label="Falar no WhatsApp" onClick={close}>Falar no WhatsApp</WhatsAppLink>
      </div>
    </header>
  );
}
