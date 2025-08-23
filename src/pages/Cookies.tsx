import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Cookie, Settings, BarChart3 } from "lucide-react";

const Cookies = () => {
  return (
    <>
      <SEO
        title="Política de Cookies | C.M.S Laboral"
        description="Información sobre el uso de cookies en nuestro sitio web. Conoce qué cookies utilizamos, por qué las necesitamos y cómo puedes gestionarlas."
        path="/cookies"
        type="website"
      />
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
                          <li>• Gestión de preferencias de cookies</li>
                          <li>• Funcionalidad del sitio web</li>
                          <li>• Seguridad y protección</li>
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
                          <li>• Número de visitantes y páginas vistas</li>
                          <li>• Tiempo de permanencia en el sitio</li>
                          <li>• Fuentes de tráfico</li>
                          <li>• Dispositivos y navegadores utilizados</li>
                        </ul>
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Nota:</strong> Utilizamos Google Analytics con IP anonimizada y sin seguimiento 
                            de usuarios individuales. Puedes optar por no participar en cualquier momento.
                          </p>
                        </div>
                      </div>
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
                          <strong>ID de medición:</strong> G-9EQQX1N1Z0<br />
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
                      <p><strong>Teléfono:</strong> +54-11-4000-0000</p>
                      <p><strong>Dirección:</strong> Av. Corrientes 1000, Buenos Aires, Argentina</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Last updated */}
                <div className="text-center text-sm text-muted-foreground pt-8">
                  <p>Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Cookies;