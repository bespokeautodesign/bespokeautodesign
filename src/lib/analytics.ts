/**
 * Centralized conversion-event tracking helpers.
 *
 * Every helper guards on `window.gtag` so callers don't need to check.
 * When Meta Pixel (fbq) is added later, drop the calls in here alongside gtag.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/* ── Google Ads conversion (unchanged ID) ─────────────────── */

export function trackAdsConversion(): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11469882843/r51ZCK-F2P0bENuLot0q',
    });
  }
}

/* ── Lead events ──────────────────────────────────────────── */

interface LeadParams {
  form: string;
  service?: string;
  vehicle?: string;
  package?: string;
  currency?: string;
  value?: number;
}

export function trackLead(params: LeadParams): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      currency: params.currency ?? 'USD',
      value: params.value ?? 0,
      form: params.form,
      service: params.service,
      vehicle: params.vehicle,
      package: params.package,
    });
  }
}

/* ── Phone click ──────────────────────────────────────────── */

export function trackPhoneClick(source: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', { source });
  }
}

/* ── Quote-button upper-funnel click ──────────────────────── */

export function trackQuoteButton(source: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'quote_button_click', { source });
  }
}
