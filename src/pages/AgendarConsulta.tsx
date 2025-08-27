import React, { useRef, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import DemoRequestForm from "@/components/forms/Form"; 
import { Card, CardContent } from "@/components/ui/card";
import ContactInfo from "@/components/forms/contact-info";


const AgendarConsulta: React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#contacto' && contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Contacto - Agendar Consulta | CMS Laboral</title>
        <meta name="description" content="Contacte a CMS Laboral para medicina ocupacional. Agende su consulta personalizada y solicite información sobre nuestros servicios de salud laboral en Argentina." />
        <meta name="keywords" content="contacto, agendar consulta, medicina ocupacional, salud laboral, exámenes médicos, Argentina" />
        <link rel="canonical" href="https://cms.com.ar/agendar-consulta" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contacto - Agendar Consulta | CMS Laboral" />
        <meta property="og:description" content="Contacte a CMS Laboral para medicina ocupacional. Agende su consulta personalizada y solicite información sobre nuestros servicios de salud laboral." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cms.com.ar/agendar-consulta" />
        <meta property="og:image" content="https://cms.com.ar/og-image.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto - Agendar Consulta | CMS Laboral" />
        <meta name="twitter:description" content="Contacte a CMS Laboral para medicina ocupacional. Agende su consulta personalizada." />
        <meta name="twitter:image" content="https://cms.com.ar/og-image.png" />
        
        {/* Structured data for ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto - CMS Laboral",
            "description": "Página de contacto para agendar consultas de medicina ocupacional",
            "url": "https://cms.com.ar/agendar-consulta",
            "mainEntity": {
              "@type": "Organization",
              "name": "CMS Laboral",
              "url": "https://cms.com.ar",
              "logo": "https://cms.com.ar/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-11-1234-5678",
                "contactType": "customer service",
                "areaServed": "AR",
                "availableLanguage": "Spanish"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Layout>
        <Hero 
          title="Contacto"
          description="¿Querés conocer nuestros planes, solicitar un turno o simplemente hacernos una consulta? Completá el formulario y nuestro equipo te responderá a la brevedad."
          showLogo={true}
        />

      <div id="top" className="max-w-2xl mx-auto mt-8 sm:mt-14 mb-16 sm:mb-20 scroll-mt-24 px-4 sm:px-6">

        {/*Calendly widget - the one of Festina Lente!!
         <h3 className="text-2xl font-bold text-primary mb-6">Agendar Consulta</h3>
        <p className="text-muted-foreground mb-8">
          Por favor complete el siguiente formulario para solicitar una consulta personalizada. Nuestro equipo se pondrá en contacto a la brevedad.
        </p>
        <div className="rounded-lg overflow-hidden" style={{ minHeight: "650px" }}>
          <iframe
            src="https://calendly.com/festinalentedev2021/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            className="w-full h-[650px] border-none"
            title="Agendar Consulta Calendly"
          ></iframe>
        </div> */}

        {/* Email contact form */}

        <div ref={contactFormRef} id="contacto">
          <h3 className="text-2xl font-bold text-primary mb-8">Contáctanos</h3>
          <DemoRequestForm />
        </div>
        
        {/* Custom Location Card */}

        <div className="mt-12">
          <Card className="shadow-professional">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
              <ContactInfo />
            </CardContent>
          </Card>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default AgendarConsulta;