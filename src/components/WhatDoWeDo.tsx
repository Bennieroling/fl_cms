import { 
    UserCheck,
    CalendarCheck,
    Stethoscope,
    HeartHandshake,
    TrendingUp
 } from "lucide-react";
 import { Link  } from "react-router-dom";
 import { Card, CardContent } from "./ui/card";

const WhatDoWeDo = () => {
    return (

<section className="bg-secondary py-14 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center">Qué hacemos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:[&>*:nth-child(n+4)]:lg:transform lg:[&>*:nth-child(n+4)]:lg:translate-x-[calc(50%+12px)]">
              {[
                {
                  icon: UserCheck,
                  title: "Exámenes preocupacionales",
                  description: "Historia clínica y estudios médicos para determinar la aptitud laboral."
                },
                {
                  icon: CalendarCheck,
                  title: "Controles periódicos",
                  description: "Evaluaciones médicas anuales para cumplir normativa y cuidar la salud."
                },
                {
                  icon: Stethoscope,
                  title: "Evaluaciones médicas específicas",
                  description: "Estudios adaptados a los riesgos de cada puesto de trabajo."
                },
                {
                  icon: HeartHandshake,
                  title: "Asesoramiento en salud ocupacional",
                  description: "Consultoría para cumplir con la normativa y proteger a los empleados."
                },
                {
                  icon: TrendingUp,
                  title: "Programas de bienestar laboral",
                  description: "Iniciativas de prevención y seguimiento para mejorar el bienestar."
                }
              ].map((service, index) => (
                <Link key={index} to="/servicios" className="group">
                  <Card className="shadow-professional hover:shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
    );
};

export default WhatDoWeDo;