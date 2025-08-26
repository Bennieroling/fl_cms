import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { 
    CheckCircle,
    Building2
} from "lucide-react";
import { Button } from "./ui/button";


const Benefits = () => {

return (

<section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                ¿Por qué eligen CMS Laboral?
              </h2>
              <div className="space-y-6">
                {[
                  "Más de 30 años de experiencia en medicina ocupacional",
                  "Cumplimiento total con Resolución SRT 37/2010 y normativas vigentes",
                  "Equipos móviles para operativos in-company en sus instalaciones",
                  "Informes médicos digitales entregados en 24-48 horas",
                  "Tres modalidades de control de ausentismo adaptables a sus necesidades"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-professional">
  <CardContent className="p-8">
    <div className="text-center mb-6">
      <Building2 className="w-16 h-16 text-primary mx-auto mb-4" aria-hidden="true" />
      <h3 className="text-xl font-semibold mb-2">Listo para Empresas</h3>
      <p className="text-muted-foreground">
        Diseñado para PyMEs y grandes empresas
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      <Link 
        to="/agendar-consulta#top"
        aria-label="Solicitar turno médico ocupacional"
        className="w-full sm:w-auto"
      >
        <Button variant="medical" size="lg" className="w-full sm:w-auto min-h-[48px]">
          Solicitar turno
        </Button>
      </Link>
      {/* <Link 
        to="/agendar-consulta#top"
        aria-label="Contactar por WhatsApp para consultas"
        className="w-full sm:w-auto"
      >
        <Button variant="medical" size="lg" className="w-full sm:w-auto min-h-[48px]">
          Contacto por WhatsApp
        </Button>
      </Link> */}
    </div>
  </CardContent>
</Card>
          </div>
        </div>
      </section>

      );
};

export default Benefits;