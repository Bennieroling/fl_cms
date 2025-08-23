import Layout from '@/components/Layout';
import SEO from "@/components/SEO";
import { Stethoscope, FileText, Clock, CheckCircle, Home, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Ausentismo = () => {
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Control de ausentismo' }
  ];

  const breadcrumbJsonLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://cms.com.ar/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://cms.com.ar/servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Control de ausentismo",
        "item": "https://cms.com.ar/servicios/ausentismo"
      }
    ]
  };

  const faqs = [
    {
      question: "¿En qué horarios realizan las visitas domiciliarias?",
      answer: "Realizamos visitas de lunes a sábado de 8:00 a 18:00 horas. Para urgencias, coordinamos horarios especiales según disponibilidad."
    },
    {
      question: "¿Qué información incluye el reporte para RR.HH.?",
      answer: "El reporte incluye diagnóstico médico, días de reposo recomendados, tratamiento indicado y fecha probable de alta, cumpliendo con la confidencialidad médica requerida."
    },
    {
      question: "¿Cómo se coordina una visita médica a domicilio?",
      answer: "La empresa nos contacta con los datos del empleado y motivo de ausencia. Coordinamos la visita en un plazo máximo de 24 horas y enviamos el reporte el mismo día."
    }
  ];

  const faqJsonLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Control de ausentismo laboral | C.M.S Laboral"
        description="Gestión médica profesional de ausencias laborales. Coordinamos visitas médicas, verificamos motivos de ausencia y generamos reportes detallados para RR.HH. con indicadores claros."
        path="/servicios/ausentismo"
      />
      <Layout>
        <div>
          <Breadcrumbs items={breadcrumbItems} jsonLD={breadcrumbJsonLD} />
          
          {/* Hero */}
          <section className="relative overflow-hidden h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="relative container mx-auto px-4 py-20 text-center text-white">
              <Stethoscope className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Control de Ausentismo</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Gestión médica profesional de ausencias laborales con reportes detallados para RR.HH.
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Servicios incluidos</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Visitas domiciliarias</h3>
                      <p className="text-muted-foreground text-sm">Médico se traslada al domicilio del empleado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Verificación médica</h3>
                      <p className="text-muted-foreground text-sm">Evaluación del estado de salud y justificación de la ausencia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Parte médico oficial</h3>
                      <p className="text-muted-foreground text-sm">Documentación legal con diagnóstico y período de reposo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Reporte a RR.HH.</h3>
                      <p className="text-muted-foreground text-sm">Informe detallado con indicadores y recomendaciones</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Proceso de control</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold">Notificación</h3>
                      <p className="text-muted-foreground text-sm">La empresa reporta la ausencia del empleado</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold">Coordinación</h3>
                      <p className="text-muted-foreground text-sm">Programamos la visita médica domiciliaria</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold">Evaluación</h3>
                      <p className="text-muted-foreground text-sm">Médico verifica el estado de salud del empleado</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold">Reporte</h3>
                      <p className="text-muted-foreground text-sm">Enviamos el informe a RR.HH. el mismo día</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 max-w-4xl mx-auto bg-muted/30">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground text-lg">
                Información importante sobre el control de ausentismo laboral
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg mb-4 px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* CTA */}
          <section className="text-center py-16 bg-blue-600 text-white">
            <h2 className="text-2xl font-semibold mb-4">¿Necesita control de ausentismo para su empresa?</h2>
            <p className="mb-6 text-blue-100">Gestione las ausencias laborales de forma profesional</p>
            <Link to="/agendar-consulta#top">
              <Button variant="secondary" size="lg" className="px-8">
                Solicitar Servicio
              </Button>
            </Link>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Ausentismo;