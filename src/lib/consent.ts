// Google Analytics 4 Consent Management
// Measurement ID: G-9EQQX1N1Z0

export type ConsentState = {
  analytics: boolean;
  timestamp: string;
};

const STORAGE_KEY = 'cms-consent';
const GA_MEASUREMENT_ID = 'G-9EQQX1N1Z0';

// Module-level guard to prevent multiple GA loads
let gaLoaded = false;

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
 * Load Google Analytics 4 script dynamically
 */
export function loadGA(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'));
      return;
    }

    // Module-level guard - only load once
    if (gaLoaded) {
      resolve();
      return;
    }

    // Check if already loaded
    if (document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
      gaLoaded = true;
      resolve();
      return;
    }

    // Initialize dataLayer if not exists
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Define gtag function if not exists
    if (!window.gtag) {
      window.gtag = function(...args: unknown[]) {
        window.dataLayer.push(args);
      };
    }

    // Create and load the script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    script.onload = () => {
      // Initialize GA
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        cookie_domain: 'cms.com.ar',
        cookie_update: true,
        cookie_flags: 'SameSite=Lax;Secure',
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
      
      gaLoaded = true;
      console.log('✅ Google Analytics loaded with consent');
      resolve();
    };
    
    script.onerror = () => {
      console.error('❌ Failed to load Google Analytics');
      reject(new Error('Failed to load GA script'));
    };

    document.head.appendChild(script);
  });
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