import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Cookie, Settings, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

type SettingsProps = { open: boolean; onClose: () => void };
const InlineCookieSettings = ({ open, onClose }: SettingsProps) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  // Initialize from localStorage if present
  useEffect(() => {
    if (!open) return;
    try {
      const raw = localStorage.getItem("cms-consent");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed?.analytics === "boolean") {
          setAnalyticsEnabled(parsed.analytics);
        }
      }
    } catch (err) { if (import.meta.env.DEV) console.warn("[cookies] Failed to read consent from localStorage", err); }
  }, [open]);

  const applyConsent = (allow: boolean) => {
    // persist locally
    try {
      localStorage.setItem(
        "cms-consent",
        JSON.stringify({ analytics: allow, timestamp: new Date().toISOString() })
      );
    } catch (err) { if (import.meta.env.DEV) console.warn("[cookies] Failed to persist consent", err); }

    // Update Consent Mode if gtag is present
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void; loadGA?: () => void; __loadGA?: () => void; };
      if (typeof w.gtag === "function") {
        w.gtag("consent", "update", { analytics_storage: allow ? "granted" : "denied" });
      }
      // Attempt to load GA if now granted and a loader is available
      if (allow) {
        if (typeof (w.loadGA) === "function") w.loadGA();
        else if (typeof (w.__loadGA) === "function") w.__loadGA();
      }
    } catch (err) { if (import.meta.env.DEV) console.warn("[cookies] Failed to apply consent to gtag", err); }
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    applyConsent(true);
    onClose();
  };

  const handleReject = () => {
    setAnalyticsEnabled(false);
    applyConsent(false);
    onClose();
  };

  const handleSave = () => {
    applyConsent(analyticsEnabled);
    onClose();
  };

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl ring-1 ring-black/5 p-6">
        <h3 className="text-xl font-semibold mb-2">Preferencias de cookies</h3>
        <p className="text-sm text-muted-foreground mb-4">Puedes activar o desactivar las cookies de analítica (Google Analytics) en cualquier momento.</p>

        <div className="flex items-center justify-between rounded-xl border bg-neutral-50 dark:bg-neutral-800 px-4 py-3 mb-6">
          <div>
            <p className="font-medium">Analítica (Google Analytics)</p>
            <p className="text-sm text-muted-foreground">Nos ayuda a entender el uso del sitio de forma agregada y anónima.</p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              aria-label="Permitir cookies de analítica"
            />
            <span className="w-11 h-6 bg-neutral-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-checked:bg-primary relative transition-colors">
              <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${analyticsEnabled ? 'translate-x-5' : ''}`}></span>
            </span>
          </label>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <button onClick={handleReject} className="rounded-xl bg-neutral-100 dark:bg-neutral-800 px-4 py-2 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300">Rechazar</button>
          <button onClick={handleAcceptAll} className="rounded-xl bg-primary text-white px-4 py-2 font-medium shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">Aceptar todo</button>
          <button onClick={handleSave} className="rounded-xl border px-4 py-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300">Guardar</button>
        </div>
      </div>
    </div>
  );
};

const Cookies = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <>
      <SEO
        title="Política de Cookies | CMS Laboral"
        description="Información sobre el uso de cookies en nuestro sitio web. Conoce qué cookies utilizamos, por qué las necesitamos y cómo puedes gestionarlas."
        path="/cookies"
        type="website"
      />
      <Helmet>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="bg-gradient-medical py-16 text-white">
            <div className="container mx-auto px-4 text-center">
              <Shield className="w-16 h-16 mx-auto mb-4" aria-hidden="true" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Política de Cookies
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Información sobre cómo utilizamos las cookies en nuestro sitio web
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/95 text-primary px-5 py-2.5 font-medium shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80"
                >
                  Abrir preferencias de cookies
                </button>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                
                {/* What are cookies */}
                <Card className="shadow-professional">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cookie className="w-8 h-8 text-primary" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold">¿Qué son las cookies?</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. 
                      Nos ayudan a mejorar tu experiencia de navegación y a entender cómo interactúas con nuestro contenido.
                    </p>
                  </CardContent>
                </Card>

                {/* Types of cookies */}
                <Card className="shadow-professional">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Tipos de cookies que utilizamos</h2>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="text-lg font-semibold text-green-700 mb-2">
                          Cookies esenciales
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          Son necesarias para el funcionamiento básico del sitio web. Sin estas cookies, 
                          el sitio no puede funcionar correctamente.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Gestión de preferencias de cookies</li>
                          <li>Funcionalidad del sitio web</li>
                          <li>Seguridad y protección</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">
                          Cookies de analítica (Google Analytics)
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web 
                          recopilando información de forma agregada y anónima.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Número de visitantes y páginas vistas</li>
                          <li>Tiempo de permanencia en el sitio</li>
                          <li>Fuentes de tráfico</li>
                          <li>Dispositivos y navegadores utilizados</li>
                        </ul>
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Nota:</strong> Utilizamos Google Analytics con IP anonimizada y sin seguimiento 
                            de usuarios individuales. Puedes optar por no participar en cualquier momento.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={() => setIsSettingsOpen(true)}
                        className="rounded-xl bg-primary text-white px-4 py-2 font-medium shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                      >
                        Abrir preferencias de cookies
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Cookie management */}
                <Card className="shadow-professional">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Settings className="w-8 h-8 text-primary" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold">Gestión de cookies</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Puedes controlar y gestionar las cookies de las siguientes maneras:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h3 className="font-semibold mb-2">Banner de cookies</h3>
                          <p className="text-sm text-muted-foreground">
                            Al visitar nuestro sitio por primera vez, verás un banner donde puedes 
                            aceptar todas las cookies, rechazar las de analítica o configurar tus preferencias.
                          </p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <h3 className="font-semibold mb-2">Configuración del navegador</h3>
                          <p className="text-sm text-muted-foreground">
                            Todos los navegadores permiten limitar el comportamiento de las cookies. 
                            Consulta la ayuda de tu navegador para saber cómo hacerlo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Google Analytics details */}
                <Card className="shadow-professional">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart3 className="w-8 h-8 text-primary" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold">Detalles de Google Analytics</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Utilizamos Google Analytics 4 con las siguientes configuraciones de privacidad:
                      </p>
                      
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Anonimización de direcciones IP activada</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Sin compartir datos con Google para publicidad</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Sin señales de Google activadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Datos utilizados únicamente para análisis agregado</span>
                        </li>
                      </ul>
                      
                      <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          {/* <strong>ID de medición:</strong> G-9EQQX1N1Z0<br /> */}
                          <strong>Política de privacidad de Google:</strong>{" "}
                          <a 
                            href="https://policies.google.com/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            https://policies.google.com/privacy
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="shadow-professional">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
                    <p className="text-muted-foreground mb-4">
                      Si tienes preguntas sobre nuestra política de cookies o deseas ejercer tus derechos 
                      de privacidad, puedes contactarnos:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Email:</strong> info@cms.com.ar</p>
                      {/* <p><strong>Teléfono:</strong> +54-11-4000-0000</p> */}
                      <p><strong>Dirección:</strong> Av. Corrientes 531 piso 8, C1043AAF,Buenos Aires, Argentina</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Last updated */}
                <div className="text-center text-sm text-muted-foreground pt-8">
                  <p>Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
                </div>
                <InlineCookieSettings open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Cookies;