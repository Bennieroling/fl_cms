import { Button } from "@/components/ui/button";
import { 
  ArrowRight
} from "lucide-react";


const StatsBar = () => {

return (

<section className="py-12 sm:py-4 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { number: "30+", label: "Años de Experiencia" },
              { number: "500+", label: "Empresas Atendidas" },
              { number: "100%", label: "Cumplimiento Normativo" },
              { number: "24/48hs", label: "Entrega de Informes" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground px-2">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-8 pb-4">
          <Button variant="hero" size="lg" className="group w-full sm:w-auto min-h-[48px] text-base font-semibold">
            Contáctanos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
        </div>
      </section>
 );
};


export default StatsBar;