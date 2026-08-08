"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function SectionTracker({ id, index }: { id: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { trackEvent("view_section", { section_id: id, section_index: index }); observer.disconnect(); } }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [id, index]);
  return <span ref={ref} className="section-tracker" aria-hidden="true" />;
}
