import Layout from '@/components/Layout';
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, FileText, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Preocupacionales = () => {
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Exámenes preocupacionales' }
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
        "name": "Exámenes preocupacionales",
        "item": "https://cms.com.ar/servicios/preocupacionales"
      }
    ]
  };

  const faqs = [
    {
      question: "¿Qué documentos necesita el empleado para el examen?",
      answer: "El empleado debe presentar DNI, CV actualizado y completar el formulario médico que proporcionamos. En algunos casos puede requerirse documentación adicional según el puesto."
    },
    {
      question: "¿Cuánto tiempo demora el proceso completo?",
      answer: "El examen toma aproximadamente 45-60 minutos. Los resultados se entregan en 24-48 horas según los estudios requeridos para el puesto específico."
    },
    {
      question: "¿Qué pasa si el empleado no es apto?",
      answer: "Si hay observaciones, informamos tanto a la empresa como al empleado. Pueden solicitarse estudios complementarios o tratamientos antes de una re-evaluación."
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
        title="Exámenes preocupacionales para empresas | C.M.S Laboral"
        description="Aptos médicos y estudios específicos según el puesto. Entrega de informe en 24–48 h."
        path="/servicios/preocupacionales"
      />
      <Layout>
        <div>
          <Breadcrumbs items={breadcrumbItems} jsonLD={breadcrumbJsonLD} />
          
          {/* Hero */}
          <section className="relative overflow-hidden h-[300px] bg-gradient-to-r from-primary to-primary/80">
            <div className="relative container mx-auto px-4 py-20 text-center text-white">
              <UserCheck className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Exámenes Preocupacionales</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Evaluaciones médicas integrales para ingreso laboral según normativa vigente
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">¿Qué incluye?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Historia clínica completa</h3>
                      <p className="text-muted-foreground text-sm">Antecedentes médicos, laborales y familiares</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Examen físico general</h3>
                      <p className="text-muted-foreground text-sm">Evaluación de sistemas cardiovascular, respiratorio y neurológico</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Estudios específicos</h3>
                      <p className="text-muted-foreground text-sm">Visión, audición, laboratorio según puesto de trabajo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Certificado de aptitud</h3>
                      <p className="text-muted-foreground text-sm">Informe médico con conclusiones y recomendaciones</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Proceso</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold">Coordinación</h3>
                      <p className="text-muted-foreground text-sm">La empresa solicita el examen y coordina la cita</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold">Evaluación</h3>
                      <p className="text-muted-foreground text-sm">El empleado asiste con la documentación requerida</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold">Resultados</h3>
                      <p className="text-muted-foreground text-sm">Entrega del informe en 24-48 horas</p>
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
                Resolvemos las dudas más comunes sobre exámenes preocupacionales
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
          <section className="text-center py-16 bg-primary text-white">
            <h2 className="text-2xl font-semibold mb-4">¿Necesita programar exámenes preocupacionales?</h2>
            <p className="mb-6 text-primary-foreground/80">Contacte con nosotros para coordinar las evaluaciones</p>
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

export default Preocupacionales;