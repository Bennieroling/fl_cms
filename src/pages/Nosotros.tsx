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
import WhoAreWe from "@/components/WhoAreWe";
import WhatDoWeDo from "@/components/WhatDoWeDo";
import HowDoWeWork from "@/components/HowDoWeWork";

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

      {/* Main content */}

      <Layout>
        <Hero 
          title="Nosotros"
          description="Más de 30 años cuidando la salud en el ámbito laboral."
          showLogo={true}
        />

        {/* Who Are We */}

        <WhoAreWe />

        {/* What Do We Do */}

        <WhatDoWeDo />

        {/* How Do We Work */}

        <HowDoWeWork />


        {/* Custom location card, full page width */}
        <section className="bg-secondary py-8 px-4">
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