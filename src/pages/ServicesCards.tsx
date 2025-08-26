// src/pages/ServicesCards.tsx

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UserCheck,
  FileCheck,
  CalendarCheck,
  UserX,
  Brain,
  Users,
} from "lucide-react";
import ServiceModal from "@/components/ServiceModal";

const ServicesCards: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceDetails = {
    preocupacionales: {
      title: "Exámenes Preocupacionales",
      content:
        "Evaluaciones médicas obligatorias para el ingreso laboral, realizadas según la Resolución SRT 37/2010 y adaptadas a los riesgos específicos de cada puesto de trabajo.",
      details: [
        "Examen físico general completo",
        "Laboratorio completo de ley (hemograma, eritrosedimentación, uremia, glucemia y orina completa)",
        "Radiografía de tórax",
        "Electrocardiograma",
        "Historia clínica con declaración jurada de historial y antecedentes médicos",
        "Aptitud médica laboral",
        "Según el puesto a ocupar puede sumarse prestaciones adicionales como pueden ser:",
        "    • Audiometría",
        "    • Radiografía columna cervical o lumbosacra frente y perfil",
        "    • Evaluaciones psicológicas o psiquiátricas",
        "    • Electroencefalogramas y/o equilibriometrías",
        "    • Y más.",
      ],
      process: [
        "Coordinación de la cita según disponibilidad",
        "Realización de la historia clínica ocupacional",
        "Examen físico completo por médico especialista",
        "Estudios complementarios según protocolo del puesto",
        "Evaluación de resultados y emisión de dictamen",
        "Entrega de certificado de aptitud médica",
      ],
      deliverables: [
        "Certificado de aptitud médica",
        "Informe médico detallado",
        "Resultados de todos los estudios realizados",
        "Recomendaciones específicas si corresponde",
      ],
    },
    anuales: {
      title: "Exámenes Periódicos Anuales",
      content:
        "Evaluaciones médicas anuales obligatorias para trabajadores expuestos a riesgos laborales específicos, con seguimiento evolutivo de la salud ocupacional.",
      details: [
        "Seguimiento evolutivo de la salud del trabajador",
        "Mismos estudios que el preocupacional adaptados",
        "Evaluación de exposición a riesgos laborales",
        "Control de patologías preexistentes",
        "Actualización de historia clínica ocupacional",
        "Detección precoz de enfermedades profesionales",
        "Recomendaciones preventivas personalizadas",
      ],
      process: [
        "Planificación anual según vencimientos",
        "Notificación a la empresa y trabajadores",
        "Realización de estudios actualizados",
        "Comparación con exámenes previos",
        "Evaluación evolutiva de la salud",
        "Emisión de certificado de aptitud actualizado",
      ],
      deliverables: [
        "Certificado de aptitud médica renovado",
        "Informe evolutivo comparativo",
        "Recomendaciones de seguimiento",
        "Alertas médicas si corresponde",
      ],
    },
    ausentismo: {
      title: "Control de Ausentismo",
      content:
        "Sistema integral de control médico para verificar las ausencias laborales por enfermedad, con tres modalidades de atención según las necesidades específicas.",
      details: [
        "Control básico domiciliario con médico a domicilio",
        "Control virtual mediante videollamada segura",
        "Control en consultorio con citación al empleado",
        "Verificación del estado de salud real",
        "Constatación de la veracidad de la dolencia",
        "Evaluación de la incapacidad temporal",
        "Seguimiento médico durante la licencia",
      ],
      process: [
        "Recepción de solicitud de control por parte de RRHH",
        "Coordinación de la modalidad de control más adecuada",
        "Realización del control médico correspondiente",
        "Verificación del estado del empleado",
        "Emisión de parte médico con diagnóstico",
        "Entrega de indicadores y reportes a RRHH",
      ],
      deliverables: [
        "Parte médico oficial",
        "Indicadores de seguimiento para RRHH",
        "Recomendaciones de tratamiento si corresponde",
        "Estimación de tiempo de recuperación",
      ],
    },
  };

  const openModal = (serviceKey: string) => {
    setSelectedService(serviceKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  const getServiceData = () => {
    if (!selectedService) return null;
    return serviceDetails[selectedService as keyof typeof serviceDetails];
  };

  const services = [
    {
      title: "Exámenes preocupacionales",
      desc: "Historia clínica ocupacional, examen físico completo y estudios complementarios según Resolución SRT 37/2010 con certificado de aptitud.",
      icon: UserCheck,
      modalKey: "preocupacionales",
    },
    {
      title: "Exámenes de egreso",
      desc: "Certificaciones médicas completas al finalizar la relación laboral con documentación digital firmada.",
      icon: FileCheck,
    },
    {
      title: "Exámenes periódicos",
      desc: "Evaluaciones médicas anuales obligatorias para trabajadores expuestos a riesgos con seguimiento evolutivo.",
      icon: CalendarCheck,
      modalKey: "anuales",
    },
    {
      title: "Control de ausentismo",
      desc: "Tres modalidades: domiciliario, virtual y en consultorio. Verificación médica con parte e indicadores para RRHH.",
      icon: UserX,
      modalKey: "ausentismo",
    },
    {
      title: "Evaluaciones psicotécnicas",
      desc: "Informes psicológicos especializados para puestos críticos, con evaluación integral según normativa laboral.",
      icon: Brain,
    },
    {
      title: "Asesoramiento en medicina laboral",
      desc: "Consultoría especializada en prevención de riesgos laborales y operativos médicos in-company con equipos móviles.",
      icon: Users,
    },
  ];

  return (
    <>
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <Card
              key={i}
              className="shadow-professional hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {item.modalKey && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openModal(item.modalKey!)}
                    >
                      Ver más
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={getServiceData()?.title || ""}
          content={getServiceData()?.content || ""}
          details={getServiceData()?.details || []}
          process={getServiceData()?.process || []}
          deliverables={getServiceData()?.deliverables || []}
        />
      )}
    </>
  );
};

export default ServicesCards;