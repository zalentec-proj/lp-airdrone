"use client";

import { useState, useSyncExternalStore } from "react";
import { Settings2 } from "lucide-react";
import { trackEvent, updateConsent } from "@/lib/analytics";

type Choice = { analytics: boolean; marketing: boolean };
const storageKey = "airdrone-consent-v1";

export function ConsentBanner() {
  const storedChoice = useSyncExternalStore(
    () => () => {},
    () => localStorage.getItem(storageKey),
    () => null,
  );
  const savedChoice = storedChoice ? JSON.parse(storedChoice) as Choice : null;
  const [choiceOverride, setChoiceOverride] = useState<Choice | null | undefined>(undefined);
  const [settings, setSettings] = useState(false);
  const choice = choiceOverride === undefined ? savedChoice : choiceOverride;
  const save = (next: Choice) => { localStorage.setItem(storageKey, JSON.stringify(next)); updateConsent(next.marketing, next.analytics); trackEvent("consent_update", next); setChoiceOverride(next); setSettings(false); };
  if (choice) return <button className="cookie-reopen" type="button" onClick={() => { setChoiceOverride(null); setSettings(true); }}><Settings2 size={16} /> Gerenciar cookies</button>;
  return <section className="consent" aria-label="Preferências de cookies">
    <div><p className="eyebrow">PRIVACIDADE</p><h2>Você decide sobre seus dados.</h2><p>Usamos cookies necessários para o site funcionar e, com a sua permissão, para medir resultados e melhorar campanhas.</p></div>
    {settings && <fieldset><legend>Preferências</legend><label><input type="checkbox" checked readOnly /> Necessários (sempre ativos)</label><label><input type="checkbox" defaultChecked /> Analíticos (GA4)</label><label><input type="checkbox" defaultChecked /> Marketing (Google Ads e Meta Pixel quando configurado)</label></fieldset>}
    <div className="consent-actions"><button type="button" className="text-button" onClick={() => setSettings(!settings)}>Configurar cookies</button><button type="button" className="button button-muted" onClick={() => save({ analytics: false, marketing: false })}>Rejeitar não necessários</button><button type="button" className="button" onClick={() => save({ analytics: true, marketing: true })}>Aceitar todos</button></div>
  </section>;
}
