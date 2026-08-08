"use client";

import type { ComponentProps, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  children: ReactNode;
  className?: string;
  location: string;
  label: string;
  problem?: string;
  model?: string;
} & Omit<ComponentProps<"a">, "href" | "children">;

export function WhatsAppLink({ children, className, location, label, problem, model, ...rest }: Props) {
  return (
    <a
      {...rest}
      className={className}
      href={buildWhatsAppUrl({ source: location, problem, model })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackEvent("click_whatsapp", { cta_location: location, cta_label: label, problem_type: problem, drone_family: model });
        if (problem) trackEvent("select_problem", { problem_type: problem });
        if (model) trackEvent("select_model", { drone_family: model });
      }}
    >
      {children}
    </a>
  );
}
