import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  UserCheck, 
  Users, 
  CalendarCheck, 
  UserX,
  Brain,
  FileCheck
} from "lucide-react";


const Features = () => {

return (

 <section className="py-16 sm:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Servicios de Medicina Ocupacional
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Más de 30 años de experiencia cumpliendo con la normativa laboral Argentina y cuidando la salud de los trabajadores
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: UserCheck,
                title: "Exámenes Preocupacionales",
                description: "Evaluaciones médicas completas según Resolución SRT 37/2010 para ingreso laboral con certificado de aptitud."
              },
              {
                icon: CalendarCheck,
                title: "Exámenes Periódicos",
                description: "Controles médicos anuales obligatorios con seguimiento evolutivo para trabajadores expuestos a riesgos."
              },
              {
                icon: UserX,
                title: "Control de Ausentismo",
                description: "Tres modalidades de control: domiciliario, virtual y en consultorio con reportes para RRHH."
              },
              {
                icon: Brain,
                title: "Evaluaciones Psicotécnicas",
                description: "Informes psicológicos especializados para puestos críticos según normativa laboral vigente."
              },
              {
                icon: Users,
                title: "Asesoramiento Médico",
                description: "Consultoría en prevención de riesgos laborales con operativos in-company y equipos móviles."
              },
              {
                icon: FileCheck,
                title: "Exámenes de Egreso",
                description: "Certificaciones médicas digitales al finalizar la relación laboral con documentación firmada."
              }
            ].map((feature, index) => (
              <Link key={index} to="/servicios" className="group">
                <Card className="shadow-professional hover:shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-200">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
 );
};


export default Features;