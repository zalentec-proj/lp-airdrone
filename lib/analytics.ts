export type AnalyticsEvent =
  | "click_whatsapp"
  | "view_section"
  | "faq_open"
  | "select_problem"
  | "select_model"
  | "click_nav"
  | "consent_update";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, string | number | boolean | undefined> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
}

export function trackLead(parameters: Record<string, string | number | boolean | undefined> = {}) {
  trackEvent("click_whatsapp", parameters);
  window.gtag?.("event", "generate_lead", { lead_channel: "whatsapp", ...parameters });
}

export function updateConsent(marketing: boolean, analytics: boolean) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  }]);
}
