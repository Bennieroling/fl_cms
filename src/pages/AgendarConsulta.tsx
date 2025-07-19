import React from 'react';
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const AgendarConsulta: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Agendar Consulta</h1>
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
      </div>
    </Layout>
  );
};

export default AgendarConsulta;