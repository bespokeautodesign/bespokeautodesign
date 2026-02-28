/**
 * Google Ads conversion tracking helpers.
 * 
 * These fire gtag events for the conversion actions configured in
 * Google Ads account AW-11469882843.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track a form submission conversion (Website Form Submission).
 * Call this after a successful quote/contact form submit.
 */
export function trackFormSubmission(): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11469882843/r51ZCK-F2P0bENuLot0q',
    });
  }
}

/**
 * Track a phone call click conversion (Website Phone Calls).
 * Attach this as an onClick handler to tel: links.
 */
export function trackPhoneCall(): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11469882843/lwuSCObOz_8bENuLot0q',
      value: 1.0,
      currency: 'USD',
    });
  }
}
