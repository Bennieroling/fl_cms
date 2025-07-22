import React, { useRef, useEffect } from 'react';
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import DemoRequestForm from "@/components/forms/Form"; 
import heroImage from "@/assets/medical-hero.jpg";

const AgendarConsulta: React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#contacto' && contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <Layout>
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden scroll-mt-4">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Servicios de salud ocupacional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 py-32 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold">Contacto</h1>            
        </div>      
      </section>
      <div id="top" className="max-w-2xl mx-auto scroll-mt-24">

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
        </div>
        <div ref={contactFormRef} id="contacto">
          <h3 className="text-2xl font-bold text-primary mb-8">Contáctanos</h3>
          <DemoRequestForm />
        </div>
      </div>
    </Layout>
  );
};

export default AgendarConsulta;