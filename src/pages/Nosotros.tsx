import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Handshake, 
  Activity,
  Target,
  UserCheck,
  CalendarCheck,
  Stethoscope,
  HeartHandshake,
  TrendingUp
} from "lucide-react";
import ContactInfo from "@/components/forms/contact-info";

const Nosotros = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - Quiénes Somos | CMS Laboral Argentina</title>
        <meta name="description" content="Conoce CMS Laboral: más de 30 años de experiencia en medicina ocupacional. Equipo multidisciplinario brindando soluciones integrales a empresas en Argentina desde Av. Corrientes 531." />
        <meta name="keywords" content="nosotros cms laboral, empresa medicina ocupacional, experiencia medicina del trabajo, equipo médico ocupacional, trayectoria salud laboral, profesionales medicina laboral Argentina" />
        <link rel="canonical" href="https://cms.com.ar/nosotros" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Nosotros - Quiénes Somos | CMS Laboral" />
        <meta property="og:description" content="Más de 30 años de experiencia en medicina ocupacional. Equipo multidisciplinario especializado en medicina del trabajo desde Buenos Aires." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cms.com.ar/nosotros" />
        <meta property="og:image" content="https://cms.com.ar/og-image.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nosotros - Quiénes Somos | CMS Laboral" />
        <meta name="twitter:description" content="30+ años de experiencia en medicina ocupacional. Conoce nuestro equipo y misión." />
        <meta name="twitter:image" content="https://cms.com.ar/og-image.png" />
        
        {/* Structured data for AboutPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Nosotros - CMS Laboral",
            "description": "Información sobre CMS Laboral, empresa especializada en medicina ocupacional",
            "url": "https://cms.com.ar/nosotros",
            "mainEntity": {
              "@type": "Organization",
              "name": "CMS Laboral",
              "foundingDate": "1994",
              "description": "Empresa especializada en medicina ocupacional con más de 30 años de experiencia",
              "numberOfEmployees": "50-100",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR",
                "addressLocality": "Buenos Aires"
              }
            }
          })}
        </script>
      </Helmet>
      <Layout>
        <Hero 
          title="Nosotros"
          description="Más de 30 años cuidando la salud en el ámbito laboral."
          showLogo={true}
        />

        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Quiénes somos</h2>
            <p className="text-center max-w-3xl mx-auto">
              En CMS Laboral, contamos con más de 30 años de experiencia dedicados al cuidado de la salud en el ámbito laboral. Somos un equipo de profesionales especializados en medicina del trabajo, comprometidos con la prevención, el diagnóstico y el seguimiento de la salud de los trabajadores. Desde nuestras oficinas ubicadas en Av. Corrientes 531, 8vo piso, brindamos soluciones integrales a empresas de todos los rubros, ayudándolas a cumplir con la normativa vigente y, al mismo tiempo, cuidando el recurso más valioso de sus organizaciones: sus empleados. Ofrecemos una amplia gama de servicios, que incluyen exámenes preocupacionales, controles periódicos, evaluaciones médicas específicas, asesoramiento en salud ocupacional y programas de bienestar laboral. En CMS Laboral trabajamos con responsabilidad, ética y cercanía, acompañando a cada cliente con un enfoque personalizado y profesional.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-14 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center">Qué hacemos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:[&>*:nth-child(n+4)]:lg:transform lg:[&>*:nth-child(n+4)]:lg:translate-x-[calc(50%+12px)]">
              {[
                {
                  icon: UserCheck,
                  title: "Exámenes preocupacionales",
                  description: "Historia clínica y estudios médicos para determinar la aptitud laboral."
                },
                {
                  icon: CalendarCheck,
                  title: "Controles periódicos",
                  description: "Evaluaciones médicas anuales para cumplir normativa y cuidar la salud."
                },
                {
                  icon: Stethoscope,
                  title: "Evaluaciones médicas específicas",
                  description: "Estudios adaptados a los riesgos de cada puesto de trabajo."
                },
                {
                  icon: HeartHandshake,
                  title: "Asesoramiento en salud ocupacional",
                  description: "Consultoría para cumplir con la normativa y proteger a los empleados."
                },
                {
                  icon: TrendingUp,
                  title: "Programas de bienestar laboral",
                  description: "Iniciativas de prevención y seguimiento para mejorar el bienestar."
                }
              ].map((service, index) => (
                <Link key={index} to="/servicios" className="group">
                  <Card className="shadow-professional hover:shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center">Cómo trabajamos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Responsabilidad",
                  description: "Trabajamos con responsabilidad en cada servicio, priorizando la salud de los trabajadores."
                },
                {
                  icon: Handshake,
                  title: "Ética y cercanía",
                  description: "Mantenemos una relación ética y cercana con cada cliente y sus empleados."
                },
                {
                  icon: UserCheck,
                  title: "Enfoque personalizado",
                  description: "Acompañamos a cada empresa con un enfoque profesional y adaptado a sus necesidades."
                }
              ].map((feature, index) => (
                <Card key={index} className="shadow-professional hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Dónde estamos</h2>
            <ContactInfo />
          </div>
        </section>

        
      </Layout>
    </>
  );
};

export default Nosotros;