"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function SectionTracker({ id, index }: { id: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const section = element.closest("section");
    section?.classList.add("reveal-ready");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section?.classList.add("is-visible");
        trackEvent("view_section", { section_id: id, section_index: index });
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [id, index]);
  return <span ref={ref} className="section-tracker" aria-hidden="true" />;
}
