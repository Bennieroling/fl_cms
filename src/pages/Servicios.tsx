import Layout from '@/components/Layout';
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/medical-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, UserCheck, FileText, CalendarCheck, Brain, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";



const Servicios = () => {
  return (
    <>
      <Helmet>
        <title>Servicios de Medicina Ocupacional | C.M.S Laboral Argentina</title>
        <meta name="description" content="Servicios integrales de medicina ocupacional: exámenes preocupacionales, periódicos y de egreso, control de ausentismo, evaluaciones psicotécnicas y asesoramiento médico laboral en Argentina." />
        <meta name="keywords" content="exámenes preocupacionales, exámenes periódicos, medicina ocupacional servicios, control ausentismo, evaluaciones psicotécnicas, medicina del trabajo, examen médico laboral, certificaciones médicas, asesoramiento medicina laboral" />
        <link rel="canonical" href="https://www.cms.com.ar/servicios" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Servicios de Medicina Ocupacional | C.M.S Laboral" />
        <meta property="og:description" content="Servicios integrales: exámenes preocupacionales, periódicos, control de ausentismo, evaluaciones psicotécnicas y asesoramiento médico laboral." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cms.com.ar/servicios" />
        <meta property="og:image" content="https://www.cms.com.ar/opengraph-servicios.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios de Medicina Ocupacional | C.M.S Laboral" />
        <meta name="twitter:description" content="Servicios integrales de medicina ocupacional en Argentina. Exámenes médicos laborales y más." />
        <meta name="twitter:image" content="https://www.cms.com.ar/opengraph-servicios.png" />
        
        {/* Structured data for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicios de Medicina Ocupacional",
            "description": "Servicios integrales de medicina ocupacional y salud laboral para empresas",
            "provider": {
              "@type": "Organization",
              "name": "C.M.S Laboral",
              "url": "https://www.cms.com.ar/"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Argentina"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Medicina Ocupacional",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Exámenes preocupacionales",
                    "description": "Evaluaciones médicas para ingreso laboral según normativa vigente"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Exámenes periódicos",
                    "description": "Seguimiento anual obligatorio para empleados expuestos a riesgos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Control de ausentismo", 
                    "description": "Médico a domicilio y gestión de reportes para RRHH"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Evaluaciones psicotécnicas",
                    "description": "Informes psicológicos para puestos críticos o de alta rotación"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Layout>
        <div>
        {/* Hero */}
      <section className="relative overflow-hidden h-[250px] md:h-[450px]">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Servicios de salud ocupacional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative container mx-auto px-4 py-32 text-center text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold">Nuestros Servicios</h1>
            <p className="text-lg max-w-2xl mx-auto">
          Soluciones integrales en salud ocupacional para empresas de todos los tamaños.
        </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                  title: "Exámenes preocupacionales",
                  desc: "Evaluaciones médicas para ingreso laboral según normativa vigente.",
                  icon: UserCheck
                },
                {
                  title: "Exámenes de egreso",
                  desc: "Certificaciones de salud al finalizar una relación laboral.",
                  icon: FileText
                },
                {
                  title: "Exámenes periódicos",
                  desc: "Seguimiento anual obligatorio para empleados expuestos a riesgos.",
                  icon: CalendarCheck
                },
                {
                  title: "Control de ausentismo",
                  desc: "Médico a domicilio y gestión de reportes para RRHH.",
                  icon: Stethoscope
                },
                {
                  title: "Evaluaciones psicotécnicas",
                  desc: "Informes psicológicos para puestos críticos o de alta rotación.",
                  icon: Brain
                },
                {
                  title: "Asesoramiento en medicina laboral",
                  desc: "Consultoría a medida sobre prevención y salud en el trabajo.",
                  icon: ShieldCheck
                },
            ].map((item, i) => (
                <Card key={i} className="shadow-professional hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
            ))}
            </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 bg-muted">
            <h2 className="text-xl font-semibold mb-4">¿Necesitás ayuda para definir qué servicios necesita tu empresa?</h2>
            <Link to="/agendar-consulta#top">
              <Button variant="medical" className="px-8" size="lg">
                Agendar Consulta
              </Button>
            </Link>
        </section>
        </div>
      </Layout>
    </>
  );
};

export default Servicios;