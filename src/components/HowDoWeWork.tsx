import { Card, CardContent } from "./ui/card";
import { 
    ShieldCheck,
    Handshake,
    UserCheck
 } from "lucide-react";

 const HowDoWeWork = () => {

    return (

<section className="py-16 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center">Cómo trabajamos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Responsabilidad",
                  description: "Trabajamos con responsabilidad en cada servicio, priorizando la salud de los trabajadores."
                },
                {
                  icon: Handshake,
                  title: "Ética y cercanía",
                  description: "Mantenemos una relación ética y cercana con cada cliente y sus empleados."
                },
                {
                  icon: UserCheck,
                  title: "Enfoque personalizado",
                  description: "Acompañamos a cada empresa con un enfoque profesional y adaptado a sus necesidades."
                }
              ].map((feature, index) => (
                <Card key={index} className="shadow-professional hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    );
};

export default HowDoWeWork;