import React, { useRef, useEffect } from 'react';
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import DemoRequestForm from "@/components/forms/Form"; 

const AgendarConsulta: React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === '#contacto' && contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <Layout>
      <div id="top" className="max-w-2xl mx-auto scroll-mt-24">
        <h1 className="text-3xl font-bold text-primary mb-6">Contacto</h1>
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