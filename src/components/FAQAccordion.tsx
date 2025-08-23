import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  const faqs = [
    {
      question: "¿Qué incluye un examen preocupacional?",
      answer: "Incluye historia clínica, examen físico y estudios según el puesto (visión, audición, laboratorio si corresponde), con apto médico."
    },
    {
      question: "¿Cuánto tarda el proceso desde la cita hasta el informe?",
      answer: "Generalmente entregamos el informe en 24–48 horas según estudios requeridos."
    },
    {
      question: "¿Cómo gestionan el control de ausentismo?",
      answer: "Coordinamos la visita médica, verificamos el motivo de ausencia y reportamos a RR.HH. con parte médico e indicadores."
    },
    {
      question: "¿Realizan operativos en planta (in-company)?",
      answer: "Sí, disponemos de equipos móviles para operativos en planta y también atención en consultorio."
    },
    {
      question: "¿Entregan informes y certificados en formato digital?",
      answer: "Sí, enviamos informes digitales firmados y resguardados en nuestro sistema."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
        <p className="text-muted-foreground text-lg">
          Respuestas a las consultas más comunes sobre nuestros servicios de medicina ocupacional
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
  );
};

export default FAQAccordion;