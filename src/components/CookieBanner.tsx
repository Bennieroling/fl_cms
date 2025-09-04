import { useState, useEffect, useRef } from 'react';
import { X, Settings, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hasDecided, acceptAll, rejectAnalytics, getConsent, updateConsent } from '@/lib/consent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const bannerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show banner only if user hasn't decided yet
    if (!hasDecided()) {
      setIsVisible(true);
    }
    
    // Load current consent state for settings
    const currentConsent = getConsent();
    if (currentConsent) {
      setAnalyticsEnabled(currentConsent.analytics);
    }
  }, []);

  // Focus management for modal
  useEffect(() => {
    if (showSettings && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
        
        if (e.key === 'Escape') {
          setShowSettings(false);
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [showSettings]);

  const handleAcceptAll = () => {
    setIsLoading(true);
    try {
      acceptAll();
      setIsVisible(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = () => {
    rejectAnalytics();
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    setIsLoading(true);
    try {
      updateConsent(analyticsEnabled);
      setShowSettings(false);
      setIsVisible(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setShowSettings(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Cookie Banner */}
      <div
        ref={bannerRef}
        className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-40 pointer-events-none"
        data-nosnippet
      >
        <div className="bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl p-4 md:p-6 max-w-3xl mx-auto border border-neutral-200/60 dark:border-neutral-700/60 pointer-events-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <Shield className="w-8 h-8 text-[#0066cc]" aria-hidden="true" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                Tu privacidad nos importa
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                Usamos cookies para funciones esenciales y para analítica (Google Analytics) con datos agregados. 
                Puedes aceptar todas, rechazar la analítica o configurar tus preferencias.
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={handleAcceptAll}
                  disabled={isLoading}
                  className="bg-[#0066cc] text-white hover:opacity-90 rounded-xl px-4 py-2 text-sm"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Cargando...
                    </span>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" aria-hidden="true" />
                      Aceptar todo
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={handleReject}
                  disabled={isLoading}
                  variant="secondary"
                  className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl px-4 py-2 text-sm"
                >
                  Rechazar
                </Button>
                
                <Button
                  onClick={() => setShowSettings(true)}
                  disabled={isLoading}
                  variant="ghost"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-xl px-4 py-2 text-sm"
                >
                  <Settings className="w-4 h-4 mr-2" aria-hidden="true" />
                  Configurar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          data-nosnippet
        >
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto border border-neutral-200/60 dark:border-neutral-700/60">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 id="cookie-settings-title" className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Configurar cookies
                </h3>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                  aria-label="Cerrar configuración"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Cookie categories */}
              <div className="space-y-6 mb-6">
                {/* Essential cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-1">
                      Cookies esenciales
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Necesarias para el funcionamiento básico del sitio. Siempre activas.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Siempre activo
                    </span>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-1">
                      Cookies de analítica
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Google Analytics para entender cómo usas nuestro sitio. Datos agregados y IP anonimizada.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="sr-only peer"
                        aria-describedby="analytics-description"
                      />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0066cc]/25 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-[#0066cc]"></div>
                      <span className="sr-only">
                        Permitir cookies de analítica (Google Analytics)
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleSaveSettings}
                  disabled={isLoading}
                  className="bg-[#0066cc] text-white hover:opacity-90 rounded-xl px-6 py-2"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Guardando...
                    </span>
                  ) : (
                    'Guardar preferencias'
                  )}
                </Button>
                
                <Button
                  onClick={() => setShowSettings(false)}
                  disabled={isLoading}
                  variant="secondary"
                  className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl px-6 py-2"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;