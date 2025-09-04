// Google Tag Manager Consent Management
// GTM Container ID: GTM-KVH9L3GT
// GA4 Measurement ID: G-9EQQX1N1Z0

export type ConsentState = {
  analytics: boolean;
  timestamp: string;
};

const STORAGE_KEY = 'cms-consent';
const GA_MEASUREMENT_ID = 'G-9EQQX1N1Z0';
const GTM_CONTAINER_ID = 'GTM-KVH9L3GT';

// Declare gtag function types
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Get stored consent state
 */
export function getConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

/**
 * Save consent state to localStorage
 */
export function setConsent(state: ConsentState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Handle localStorage errors silently
  }
}

/**
 * Check if user has made a consent decision
 */
export function hasDecided(): boolean {
  return getConsent() !== null;
}

/**
 * Apply consent state to Google Analytics via gtag
 */
export function applyConsentToGtag(state: ConsentState): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'default', {
      analytics_storage: state.analytics ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    });
  }
}

/**
 * Update consent (for when user changes preferences after initial decision)
 */
export function updateConsentToGtag(state: ConsentState): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: state.analytics ? 'granted' : 'denied'
    });
  }
}

/**
 * Send custom event to GTM dataLayer
 */
export function pushToDataLayer(eventData: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
}

/**
 * Check if GTM is loaded and ready
 */
export function isGTMLoaded(): boolean {
  return typeof window !== 'undefined' && 
         window.dataLayer !== undefined && 
         document.querySelector(`script[src*="${GTM_CONTAINER_ID}"]`) !== null;
}

/**
 * Clear GA cookies when consent is revoked
 */
export function clearGACookies(): void {
  const gaCookies = ['_ga', '_ga_' + GA_MEASUREMENT_ID.replace('G-', ''), '_gid', '_gat'];
  
  gaCookies.forEach(cookieName => {
    // Clear for current domain
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    // Clear for subdomain
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.cms.com.ar`;
  });
}

/**
 * Accept all cookies (analytics enabled)
 */
export function acceptAll(): ConsentState {
  const state: ConsentState = {
    analytics: true,
    timestamp: new Date().toISOString()
  };
  
  setConsent(state);
  applyConsentToGtag(state);
  
  // Send consent event to GTM
  pushToDataLayer({
    event: 'consent_update',
    consent_type: 'accept_all',
    analytics_consent: true
  });
  
  return state;
}

/**
 * Reject analytics cookies (only essential)
 */
export function rejectAnalytics(): ConsentState {
  const state: ConsentState = {
    analytics: false,
    timestamp: new Date().toISOString()
  };
  
  setConsent(state);
  applyConsentToGtag(state);
  clearGACookies();
  
  // Send consent event to GTM
  pushToDataLayer({
    event: 'consent_update',
    consent_type: 'reject_analytics',
    analytics_consent: false
  });
  
  return state;
}

/**
 * Update existing consent
 */
export function updateConsent(analytics: boolean): ConsentState {
  const state: ConsentState = {
    analytics,
    timestamp: new Date().toISOString()
  };
  
  const previousConsent = getConsent();
  setConsent(state);
  
  if (previousConsent) {
    updateConsentToGtag(state);
  } else {
    applyConsentToGtag(state);
  }
  
  if (!analytics) {
    clearGACookies();
  }
  
  return state;
}