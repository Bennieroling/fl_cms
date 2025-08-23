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
      answer: "Según la Resolución SRT 37/2010, incluye: historia clínica ocupacional, examen físico completo, estudios complementarios según el puesto (laboratorio, radiografía de tórax, audiometría, examen visual, espirometría, etc.), evaluación psicológica si corresponde, y emisión de certificado de aptitud médica. Todo el proceso se realiza con protocolos específicos según los riesgos del puesto de trabajo."
    },
    {
      question: "¿Cuánto tarda el proceso desde la cita hasta el informe?",
      answer: "Generalmente entregamos el informe en 24–48 horas según estudios requeridos. Para exámenes básicos sin estudios complementarios, el certificado se entrega el mismo día. Los estudios más complejos pueden requerir hasta 72 horas para garantizar la precisión de los resultados."
    },
    {
      question: "¿Qué tipos de control de ausentismo ofrecen?",
      answer: "Ofrecemos tres modalidades: 1) Control básico domiciliario - médico se traslada al domicilio para verificar el estado del empleado y constatar la veracidad de la dolencia, 2) Control virtual - mediante videollamada para casos específicos que no requieren presencia física, y 3) Control en consultorio - citación al empleado para evaluación médica completa. En todos los casos, emitimos parte médico e indicadores para RRHH."
    },
    {
      question: "¿Realizan operativos en planta (in-company)?",
      answer: "Sí, disponemos de equipos móviles totalmente equipados para realizar operativos en las instalaciones de la empresa. Esto incluye consultorios móviles para exámenes preocupacionales, periódicos, y controles médicos. También ofrecemos atención en nuestro consultorio según la conveniencia del cliente."
    },
    {
      question: "¿Entregan informes y certificados en formato digital?",
      answer: "Sí, todos nuestros informes y certificados se entregan en formato digital firmados electrónicamente y son resguardados de forma segura en nuestro sistema. Los documentos cumplen con toda la normativa legal vigente y pueden ser enviados directamente a las áreas de RRHH o al empleado según se requiera."
    },
    {
      question: "¿Qué son los exámenes médicos periódicos?",
      answer: "Son evaluaciones médicas obligatorias que deben realizarse anualmente a todos los trabajadores expuestos a riesgos específicos según la legislación laboral argentina. Incluyen los mismos estudios que el preocupacional pero con seguimiento evolutivo, permitiendo detectar tempranamente cualquier afección relacionada con la actividad laboral y garantizar el mantenimiento de la aptitud para el puesto."
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