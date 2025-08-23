import Layout from '@/components/Layout';
import SEO from "@/components/SEO";
import { CalendarCheck, FileText, Clock, CheckCircle, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Anuales = () => {
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Exámenes periódicos/anuales' }
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
        "name": "Exámenes periódicos/anuales",
        "item": "https://cms.com.ar/servicios/anuales"
      }
    ]
  };

  const faqs = [
    {
      question: "¿Qué empleados deben realizar exámenes periódicos?",
      answer: "Todos los empleados expuestos a riesgos laborales específicos según la normativa vigente: ruido, sustancias químicas, trabajo en altura, pantallas, entre otros factores de riesgo identificados en el relevamiento."
    },
    {
      question: "¿Con qué frecuencia se deben realizar estos exámenes?",
      answer: "Generalmente son anuales, aunque puede variar según el tipo de exposición: cada 6 meses para exposiciones de alto riesgo, anual para riesgos moderados, y cada 2-3 años para exposiciones menores."
    },
    {
      question: "¿Qué sucede si se detectan alteraciones en el examen?",
      answer: "Se informa inmediatamente a la empresa y al empleado. Se pueden recomendar cambios en el puesto, tratamiento médico, estudios complementarios o derivación a especialistas según el caso."
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
        title="Exámenes periódicos/anuales | CMS Laboral"
        description="Seguimiento obligatorio de salud para empleados expuestos a riesgos laborales. Exámenes médicos periódicos y anuales según normativa vigente para garantizar el cumplimiento y la salud ocupacional."
        path="/servicios/anuales"
      />
      <Layout>
        <div>
          <Breadcrumbs items={breadcrumbItems} jsonLD={breadcrumbJsonLD} />
          
          {/* Hero */}
          <section className="relative overflow-hidden h-[300px] bg-gradient-to-r from-green-600 to-green-800">
            <div className="relative container mx-auto px-4 py-20 text-center text-white">
              <CalendarCheck className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Exámenes Periódicos y Anuales</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Seguimiento obligatorio de salud para empleados expuestos a riesgos laborales
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">¿Por qué son necesarios?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Cumplimiento normativo</h3>
                      <p className="text-muted-foreground text-sm">Obligatorio por ley para empleados expuestos a riesgos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Detección temprana</h3>
                      <p className="text-muted-foreground text-sm">Identificación precoz de alteraciones relacionadas al trabajo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Protección del empleado</h3>
                      <p className="text-muted-foreground text-sm">Seguimiento continuo de la salud laboral</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Documentación legal</h3>
                      <p className="text-muted-foreground text-sm">Respaldo ante inspecciones y auditorías</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Tipos de evaluaciones</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold">Exposición a ruido</h3>
                    <p className="text-muted-foreground text-sm">Audiometrías anuales para detectar pérdida auditiva</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold">Sustancias químicas</h3>
                    <p className="text-muted-foreground text-sm">Análisis de sangre y orina según exposición específica</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold">Trabajo con pantallas</h3>
                    <p className="text-muted-foreground text-sm">Evaluación oftalmológica y ergonómica</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold">Trabajo en altura</h3>
                    <p className="text-muted-foreground text-sm">Examen cardiovascular y neurológico especializado</p>
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
                Todo lo que necesita saber sobre los exámenes periódicos
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
          <section className="text-center py-16 bg-green-600 text-white">
            <h2 className="text-2xl font-semibold mb-4">¿Necesita planificar exámenes periódicos?</h2>
            <p className="mb-6 text-green-100">Mantenga el cumplimiento normativo y cuide la salud de sus empleados</p>
            <Link to="/agendar-consulta#top">
              <Button variant="secondary" size="lg" className="px-8">
                Planificar Exámenes
              </Button>
            </Link>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Anuales;