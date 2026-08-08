"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { faqItems } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState("budget");
  return <div className="faq-list">{faqItems.map((item) => {
    const expanded = open === item.id;
    return <article className={`faq-item ${expanded ? "is-open" : ""}`} key={item.id}>
      <h3><button type="button" aria-expanded={expanded} aria-controls={`faq-${item.id}`} onClick={() => { setOpen(expanded ? "" : item.id); if (!expanded) trackEvent("faq_open", { question_id: item.id, question_text: item.question }); }}><span>{item.question}</span><ChevronDown aria-hidden="true" /></button></h3>
      <div id={`faq-${item.id}`} className="faq-answer" hidden={!expanded}><p>{item.answer}</p></div>
    </article>;
  })}</div>;
}
